import pool from "../../../../lib/database";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET
);

// =====================================================
// GET LOGGED-IN STUDENT ID
// =====================================================

async function getStudentId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(
      token,
      secret
    );

    return payload.studentId;
  } catch (error) {
    console.error(
      "JWT verification error:",
      error
    );

    return null;
  }
}

// =====================================================
// SUBMIT ASSESSMENT
// =====================================================

export async function POST(request) {
  try {
    // -------------------------------------------------
    // Get logged-in student
    // -------------------------------------------------

    const studentId = await getStudentId();

    if (!studentId) {
      return Response.json(
        {
          success: false,
          message: "You are not logged in.",
        },
        { status: 401 }
      );
    }

    // -------------------------------------------------
    // Read request body
    // -------------------------------------------------

    const body = await request.json();

    const answers = body.answers;

    if (
      !answers ||
      typeof answers !== "object"
    ) {
      return Response.json(
        {
          success: false,
          message:
            "Assessment answers are required.",
        },
        { status: 400 }
      );
    }

    // -------------------------------------------------
    // Get question IDs
    // -------------------------------------------------

    const questionIds = Object.keys(answers)
      .map(Number)
      .filter((id) => Number.isInteger(id));

    if (questionIds.length === 0) {
      return Response.json(
        {
          success: false,
          message:
            "No answers were submitted.",
        },
        { status: 400 }
      );
    }

    // -------------------------------------------------
    // Get correct answers from database
    //
    // IMPORTANT:
    // Database column is correct_answer
    // NOT correct_option
    // -------------------------------------------------

    const questionsResult = await pool.query(
      `
      SELECT
        question_id,
        skill_name,
        difficulty,
        correct_answer
      FROM assessment_questions
      WHERE question_id = ANY($1::int[])
      `,
      [questionIds]
    );

    // -------------------------------------------------
    // Make sure all questions were found
    // -------------------------------------------------

    if (
      questionsResult.rows.length === 0
    ) {
      return Response.json(
        {
          success: false,
          message:
            "The submitted questions could not be found.",
        },
        { status: 400 }
      );
    }

    // -------------------------------------------------
    // Calculate results
    // -------------------------------------------------

    let totalQuestions =
      questionsResult.rows.length;

    let correctAnswers = 0;

    const skillResults = {};

    for (
      const question of questionsResult.rows
    ) {
      const studentAnswer =
        answers[question.question_id];

      const correctAnswer =
        question.correct_answer;

      const isCorrect =
        studentAnswer === correctAnswer;

      // -------------------------------------------------
      // Overall score
      // -------------------------------------------------

      if (isCorrect) {
        correctAnswers++;
      }

      // -------------------------------------------------
      // Skill result
      // -------------------------------------------------

      if (
        !skillResults[
          question.skill_name
        ]
      ) {
        skillResults[
          question.skill_name
        ] = {
          skill_name:
            question.skill_name,
          total: 0,
          correct: 0,
        };
      }

      skillResults[
        question.skill_name
      ].total++;

      if (isCorrect) {
        skillResults[
          question.skill_name
        ].correct++;
      }
    }

    // -------------------------------------------------
    // Overall percentage
    // -------------------------------------------------

    const percentage =
      totalQuestions > 0
        ? Math.round(
            (correctAnswers /
              totalQuestions) *
              100
          )
        : 0;

    // -------------------------------------------------
    // Determine overall level
    // -------------------------------------------------

    let overallLevel;

    if (percentage < 40) {
      overallLevel = "Beginner";
    } else if (percentage < 70) {
      overallLevel = "Intermediate";
    } else {
      overallLevel = "Advanced";
    }

    // -------------------------------------------------
    // Convert skill results
    // -------------------------------------------------

    const skills =
      Object.values(skillResults).map(
        (skill) => {
          const skillPercentage =
            skill.total > 0
              ? Math.round(
                  (skill.correct /
                    skill.total) *
                    100
                )
              : 0;

          let level;

          if (skillPercentage < 40) {
            level = "Beginner";
          } else if (
            skillPercentage < 70
          ) {
            level = "Intermediate";
          } else {
            level = "Advanced";
          }

          return {
            skill_name:
              skill.skill_name,

            total_questions:
              skill.total,

            correct_answers:
              skill.correct,

            incorrect_answers:
              skill.total -
              skill.correct,

            percentage:
              skillPercentage,

            level,
          };
        }
      );

    // -------------------------------------------------
    // Return assessment result
    // -------------------------------------------------

    return Response.json({
      success: true,

      result: {
        student_id: studentId,

        total_questions:
          totalQuestions,

        correct_answers:
          correctAnswers,

        incorrect_answers:
          totalQuestions -
          correctAnswers,

        percentage,

        overall_level:
          overallLevel,

        skills,
      },
    });
  } catch (error) {
    // -------------------------------------------------
    // Error handling
    // -------------------------------------------------

    console.error(
      "Assessment submission error:",
      error
    );

    return Response.json(
      {
        success: false,
        message:
          "Unable to submit assessment.",
        error:
          error?.message ||
          "Unknown database error.",
      },
      { status: 500 }
    );
  }
}