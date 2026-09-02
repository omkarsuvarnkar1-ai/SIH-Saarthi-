import pool from "../../../lib/database";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// =====================================================
// GET LOGGED-IN STUDENT ID FROM JWT
// =====================================================

async function getStudentId() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.studentId;
  } catch (error) {
    console.error("JWT verification error:", error);
    return null;
  }
}

// =====================================================
// GET PROFILE
// =====================================================

export async function GET() {
  try {
    const studentId = await getStudentId();

    if (!studentId) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    const result = await pool.query(
      `
      SELECT
        s.student_id,
        s.full_name,
        s.email,
        s.college,
        s.course,
        s.year_of_study,

        sp.profile_id,
        sp.date_of_birth,
        sp.gender,
        sp.specialization,
        sp.bio,

        -- Career selection
        sp.industry_id,
        sp.role_id,
        sp.career_uncertain

      FROM students s

      LEFT JOIN student_profiles sp
        ON s.student_id = sp.student_id

      WHERE s.student_id = $1
      `,
      [studentId]
    );

    if (result.rows.length === 0) {
      return Response.json(
        {
          success: false,
          message: "Student not found.",
        },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      profile: result.rows[0],
    });

  } catch (error) {
    console.error("Get profile error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to fetch profile.",
      },
      { status: 500 }
    );
  }
}

// =====================================================
// CREATE / UPDATE PROFILE
// =====================================================

export async function POST(request) {
  try {
    const studentId = await getStudentId();

    if (!studentId) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      date_of_birth,
      gender,
      college,
      course,
      specialization,
      year_of_study,
      bio,
    } = body;

    const result = await pool.query(
      `
      INSERT INTO student_profiles (
        student_id,
        date_of_birth,
        gender,
        college,
        course,
        specialization,
        year_of_study,
        bio
      )

      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)

      ON CONFLICT (student_id)

      DO UPDATE SET
        date_of_birth = EXCLUDED.date_of_birth,
        gender = EXCLUDED.gender,
        college = EXCLUDED.college,
        course = EXCLUDED.course,
        specialization = EXCLUDED.specialization,
        year_of_study = EXCLUDED.year_of_study,
        bio = EXCLUDED.bio,
        updated_at = CURRENT_TIMESTAMP

      RETURNING *;
      `,
      [
        studentId,
        date_of_birth || null,
        gender || null,
        college || null,
        course || null,
        specialization || null,
        year_of_study || null,
        bio || null,
      ]
    );

    return Response.json({
      success: true,
      message: "Profile saved successfully.",
      profile: result.rows[0],
    });

  } catch (error) {
    console.error("Save profile error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to save profile.",
      },
      { status: 500 }
    );
  }
}