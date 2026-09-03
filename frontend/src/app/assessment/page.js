"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./assessment.css";

export default function AssessmentPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [roleName, setRoleName] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // LOAD QUESTIONS
  // =====================================================

  useEffect(() => {
    async function loadQuestions() {
      try {
        const response = await fetch(
          "/api/assessment/questions"
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          setError(
            data.message ||
              "Unable to load assessment."
          );
          return;
        }

        setQuestions(data.questions || []);
        setRoleName(data.role || "");
      } catch (error) {
        console.error(
          "Assessment loading error:",
          error
        );

        setError(
          "Unable to load the assessment."
        );
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  // =====================================================
  // SELECT ANSWER
  // =====================================================

  function handleAnswer(option) {
    const question =
      questions[currentQuestion];

    setAnswers((previous) => ({
      ...previous,
      [question.question_id]: option,
    }));
  }

  // =====================================================
  // NEXT QUESTION
  // =====================================================

  function handleNext() {
    const question =
      questions[currentQuestion];

    if (!answers[question.question_id]) {
      return;
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    }
  }

  // =====================================================
  // PREVIOUS QUESTION
  // =====================================================

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  }

  // =====================================================
  // FINISH
  // =====================================================

  function handleFinish() {
    const question =
      questions[currentQuestion];

    if (!answers[question.question_id]) {
      return;
    }

    console.log(
      "Assessment answers:",
      answers
    );

    // Submission API will be connected
    // in the next step.

    alert(
      "Assessment answers captured. Submission will be connected next."
    );
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="assessment-loading">
        <div className="loading-content">
          <div className="loading-spinner"></div>

          <p className="loading-text">
            Loading assessment...
          </p>
        </div>
      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <main className="assessment-loading">
        <div className="assessment-state">

          <div className="state-icon">
            !
          </div>

          <h1 className="state-title">
            Unable to start assessment
          </h1>

          <p className="state-message">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/skills")
            }
            className="state-button"
          >
            Back to Skills
          </button>

        </div>
      </main>
    );
  }

  // =====================================================
  // NO QUESTIONS
  // =====================================================

  if (questions.length === 0) {
    return (
      <main className="assessment-loading">

        <div className="assessment-state">

          <div className="state-icon">
            ?
          </div>

          <h1 className="state-title">
            No assessment questions available
          </h1>

          <p className="state-message">
            There are currently no questions
            available for your selected skills.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/skills")
            }
            className="state-button"
          >
            Back to Skills
          </button>

        </div>

      </main>
    );
  }

  // =====================================================
  // CURRENT QUESTION
  // =====================================================

  const question =
    questions[currentQuestion];

  const selectedAnswer =
    answers[question.question_id];

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <main className="assessment-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="assessment-header">

        <div className="assessment-header-inner">

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard")
            }
            className="assessment-logo"
          >
            SkillNet
          </button>

          <span className="assessment-header-label">
            Skill Assessment
          </span>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="assessment-container">

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="assessment-intro">

          <p className="assessment-eyebrow">
            ASSESSMENT
          </p>

          <h1 className="assessment-title">
            {roleName} Skill Assessment
          </h1>

          <p className="assessment-description">
            Answer each question based on what
            you currently know.
          </p>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="assessment-progress">

          <div className="progress-info">

            <span className="progress-question">
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>

            <span className="progress-percent">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="progress-track">

            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* =================================================
            QUESTION CARD
        ================================================= */}

        <section
          className="question-card"
          key={question.question_id}
        >

          {/* Skill + Difficulty */}

          <div className="question-badges">

            <span className="skill-badge">
              {question.skill_name}
            </span>

            <span className="difficulty-badge">
              {question.difficulty}
            </span>

          </div>

          {/* Question */}

          <h2 className="question-text">
            {question.question_text}
          </h2>

          {/* Concepts */}

          {question.concepts_tested &&
            question.concepts_tested.length > 0 && (
              <p className="concepts-text">
                Concepts tested:{" "}
                {question.concepts_tested.join(
                  ", "
                )}
              </p>
            )}

          {/* =================================================
              OPTIONS
          ================================================= */}

          <div className="options-container">

            {[
              ["A", question.option_a],
              ["B", question.option_b],
              ["C", question.option_c],
              ["D", question.option_d],
            ].map(([letter, text]) => {

              const isSelected =
                selectedAnswer === letter;

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() =>
                    handleAnswer(letter)
                  }
                  className={`answer-option ${
                    isSelected
                      ? "selected"
                      : ""
                  }`}
                >

                  <span className="option-letter">
                    {letter}
                  </span>

                  <span className="option-text">
                    {text}
                  </span>

                </button>
              );
            })}

          </div>

        </section>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div className="assessment-navigation">

          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="previous-button"
          >
            Previous
          </button>

          {currentQuestion <
          questions.length - 1 ? (

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="next-button"
            >
              Next
            </button>

          ) : (

            <button
              type="button"
              onClick={handleFinish}
              disabled={!selectedAnswer}
              className="finish-button"
            >
              Finish Assessment
            </button>

          )}

        </div>

      </section>

    </main>
  );
}
