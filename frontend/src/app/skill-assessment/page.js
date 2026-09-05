"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./assessment.css";

/* =========================================================
   ICONS
========================================================= */

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m8 12 2 2 5-5" />
      <path d="M8 17h7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 20 6v5c0 5.2-3.2 8.4-8 10-4.8-1.6-8-4.8-8-10V6l8-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    </svg>
  );
}

/* =========================================================
   SKILL JOURNEY
========================================================= */

function JourneyStep({
  label,
  number,
  completed,
  active,
}) {
  return (
    <div
      className={`journey-step ${
        completed ? "completed" : ""
      } ${active ? "active" : ""}`}
    >
      <div className="journey-circle">
        {completed ? (
          <CheckIcon />
        ) : (
          <span>{number}</span>
        )}
      </div>

      <span className="journey-label">{label}</span>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AssessmentPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [roleName, setRoleName] = useState("");

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState({});

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  /* =====================================================
     LOAD QUESTIONS
  ===================================================== */

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

        setRoleName(
          data.role ||
            data.role_name ||
            "Selected Role"
        );
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

  /* =====================================================
     SELECT ANSWER
  ===================================================== */

  function handleAnswer(option) {
    const question =
      questions[currentQuestion];

    if (!question) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [question.question_id]: option,
    }));
  }

  /* =====================================================
     NEXT QUESTION
  ===================================================== */

  function handleNext() {
    const question =
      questions[currentQuestion];

    if (!question) {
      return;
    }

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

  /* =====================================================
     PREVIOUS QUESTION
  ===================================================== */

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion(
        currentQuestion - 1
      );
    }
  }

  /* =====================================================
     FINISH ASSESSMENT
  ===================================================== */

  async function handleFinish() {
    const question =
      questions[currentQuestion];

    if (!question) {
      return;
    }

    if (!answers[question.question_id]) {
      return;
    }

    if (
      Object.keys(answers).length !==
      questions.length
    ) {
      alert(
        "Please answer all questions before finishing the assessment."
      );

      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch(
        "/api/assessment/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            answers: answers,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "Assessment submission response:",
        data
      );

      if (!response.ok || !data.success) {
        setError(
          data.message ||
            "Unable to submit assessment."
        );

        return;
      }

      if (!data.result) {
        console.error(
          "Assessment API did not return a result:",
          data
        );

        setError(
          "Assessment was submitted, but no result was returned."
        );

        return;
      }

      sessionStorage.setItem(
        "assessment_result",
        JSON.stringify(data.result)
      );

      console.log(
        "Assessment result saved:",
        data.result
      );

      router.push("/assessment/result");
    } catch (error) {
      console.error(
        "Assessment submission error:",
        error
      );

      setError(
        "Unable to submit assessment."
      );
    } finally {
      setSubmitting(false);
    }
  }

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <main className="assessment-page loading-screen">
        <div className="loading-content">
          <div className="loading-orb">
            <div />
          </div>

          <p>
            Preparing your skill assessment...
          </p>
        </div>
      </main>
    );
  }

  /* =====================================================
     ERROR
  ===================================================== */

  if (error && questions.length === 0) {
    return (
      <main className="assessment-page">
        <Background />

        <div className="error-screen">
          <div className="error-card">
            <div className="error-icon">!</div>

            <h1>
              Unable to start assessment
            </h1>

            <p>{error}</p>

            <button
              type="button"
              onClick={() =>
                router.push("/skills")
              }
            >
              Back to Skills
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* =====================================================
     NO QUESTIONS
  ===================================================== */

  if (questions.length === 0) {
    return (
      <main className="assessment-page">
        <Background />

        <div className="error-screen">
          <div className="error-card">
            <div className="error-icon">?</div>

            <h1>
              No assessment questions available
            </h1>

            <p>
              There are currently no questions
              available for your selected skills.
            </p>

            <button
              type="button"
              onClick={() =>
                router.push("/skills")
              }
            >
              Back to Skills
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* =====================================================
     CURRENT QUESTION
  ===================================================== */

  const question =
    questions[currentQuestion];

  const selectedAnswer =
    answers[question.question_id];

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  const isLastQuestion =
    currentQuestion ===
    questions.length - 1;

  const options = [
    ["A", question.option_a],
    ["B", question.option_b],
    ["C", question.option_c],
    ["D", question.option_d],
  ];

  /* =====================================================
     PAGE
  ===================================================== */

  return (
    <main className="assessment-page">
      <Background />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="assessment-header">
        <button
          type="button"
          className="assessment-logo"
          onClick={() =>
            router.push("/dashboard")
          }
        >
          <span>Skill</span>
          <strong>Net</strong>
        </button>

        <div className="journey-wrapper">
          <div className="journey-title">
            YOUR SKILL JOURNEY
          </div>

          <div className="journey-track">
            <div className="journey-line">
              <span className="journey-progress" />
            </div>

            <JourneyStep
              number="1"
              label="Profile"
              completed
            />

            <JourneyStep
              number="2"
              label="Career"
              completed
            />

            <JourneyStep
              number="3"
              label="Skills"
              completed
            />

            <JourneyStep
              number="4"
              label="Assessment"
              active
            />
          </div>
        </div>

        <div className="header-status">
          <span className="status-dot" />
          Skills Assessment
        </div>
      </header>

      {/* =================================================
          MAIN CENTER
      ================================================= */}

      <section className="assessment-wrapper">
        <div className="assessment-card">
          {/* =================================================
              CARD TOP
          ================================================= */}

          <div className="assessment-top">
            <div className="assessment-role">
              <div className="assessment-icon">
                <ClipboardIcon />
              </div>

              <div>
                <span>
                  Assessment for:
                </span>

                <strong>
                  {roleName}
                </strong>
              </div>
            </div>

            <div className="timer">
              <ClockIcon />
              <span>09:45</span>
            </div>
          </div>

          {/* =================================================
              QUESTION PROGRESS
          ================================================= */}

          <div className="question-progress">
            <div className="progress-heading">
              <span>
                Question {currentQuestion + 1} of{" "}
                {questions.length}
              </span>

              <strong>
                {Math.round(progress)}%
              </strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-value"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* =================================================
              QUESTION
          ================================================= */}

          <div
            className="question-content"
            key={question.question_id}
          >
            <div className="question-meta">
              <span className="skill-badge">
                {question.skill_name}
              </span>

              <span className="difficulty-badge">
                {question.difficulty}
              </span>
            </div>

            <h1>
              {question.question_text}
            </h1>

            <p className="question-helper">
              Select the option that best
              describes you.
            </p>

            {question.concepts_tested &&
              question.concepts_tested.length >
                0 && (
                <p className="concepts">
                  Concepts tested:{" "}
                  {question.concepts_tested.join(
                    ", "
                  )}
                </p>
              )}

            {/* =================================================
                OPTIONS
            ================================================= */}

            <div className="answer-list">
              {options.map(
                ([letter, text], index) => {
                  const isSelected =
                    selectedAnswer === letter;

                  return (
                    <button
                      key={letter}
                      type="button"
                      className={`answer-option ${
                        isSelected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleAnswer(letter)
                      }
                      style={{
                        "--option-index":
                          index,
                      }}
                    >
                      <span className="answer-letter">
                        {letter}
                      </span>

                      <span className="answer-text">
                        {text}
                      </span>

                      <span className="answer-radio">
                        {isSelected && (
                          <span className="radio-dot" />
                        )}
                      </span>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="inline-error">
              <span>!</span>
              {error}
            </div>
          )}

          {/* =================================================
              CARD FOOTER
          ================================================= */}

          <div className="assessment-footer">
            <button
              type="button"
              className="previous-button"
              onClick={handlePrevious}
              disabled={
                currentQuestion === 0 ||
                submitting
              }
            >
              <ArrowLeftIcon />
              <span>Previous</span>
            </button>

            <div className="saved-message">
              <ShieldIcon />

              <span>
                Responses saved
                <br className="mobile-break" />
                automatically
              </span>
            </div>

            {isLastQuestion ? (
              <button
                type="button"
                className="next-button finish-button"
                onClick={handleFinish}
                disabled={
                  !selectedAnswer ||
                  submitting
                }
              >
                <span>
                  {submitting
                    ? "Submitting..."
                    : "Finish Assessment"}
                </span>

                {!submitting && (
                  <ArrowRightIcon />
                )}
              </button>
            ) : (
              <button
                type="button"
                className="next-button"
                onClick={handleNext}
                disabled={
                  !selectedAnswer ||
                  submitting
                }
              >
                <span>Next Question</span>
                <ArrowRightIcon />
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            BOTTOM HINT
        ================================================= */}

        <div className="assessment-hint">
          <SparkleIcon />

          <span>
            Take your time. There&apos;s no rush!
          </span>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   BACKGROUND
========================================================= */

function Background() {
  return (
    <>
      <div className="background-grid" />

      <div className="background-glow glow-left" />
      <div className="background-glow glow-right" />
      <div className="background-glow glow-top" />

      <div className="orbit orbit-left orbit-a" />
      <div className="orbit orbit-left orbit-b" />
      <div className="orbit orbit-left orbit-c" />

      <div className="orbit orbit-right orbit-d" />
      <div className="orbit orbit-right orbit-e" />
      <div className="orbit orbit-right orbit-f" />

      <div className="planet planet-left">
        <span />
      </div>

      <div className="planet planet-right">
        <span />
      </div>

      <div className="particle p1" />
      <div className="particle p2" />
      <div className="particle p3" />
      <div className="particle p4" />
      <div className="particle p5" />
      <div className="particle p6" />
      <div className="particle p7" />
      <div className="particle p8" />

      <div className="star s1">✦</div>
      <div className="star s2">✦</div>
      <div className="star s3">•</div>
      <div className="star s4">•</div>
      <div className="star s5">✦</div>
      <div className="star s6">✦</div>
    </>
  );
}
