"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AssessmentPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [roleName, setRoleName] = useState("");

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

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
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading assessment...
        </p>
      </main>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-lg rounded-2xl border bg-white p-8 text-center shadow-sm">

          <h1 className="text-xl font-bold text-slate-900">
            Unable to start assessment
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            {error}
          </p>

          <button
            onClick={() =>
              router.push("/skills")
            }
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
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
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">

        <div className="w-full max-w-lg rounded-2xl border bg-white p-8 text-center shadow-sm">

          <h1 className="text-xl font-bold text-slate-900">
            No assessment questions available
          </h1>

          <p className="mt-3 text-sm text-slate-600">
            There are currently no questions
            available for your selected skills.
          </p>

          <button
            onClick={() =>
              router.push("/skills")
            }
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
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
    <main className="min-h-screen bg-slate-50">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b bg-white">

        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard")
            }
            className="text-2xl font-bold text-blue-600"
          >
            SkillNet
          </button>

          <span className="text-sm text-slate-500">
            Skill Assessment
          </span>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="mx-auto max-w-3xl px-6 py-10">

        {/* ROLE */}

        <div className="mb-6">

          <p className="text-sm font-semibold text-blue-600">
            ASSESSMENT
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            {roleName} Skill Assessment
          </h1>

          <p className="mt-2 text-slate-600">
            Answer each question based on what
            you currently know.
          </p>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="mb-6">

          <div className="mb-2 flex items-center justify-between text-sm">

            <span className="font-medium text-slate-700">
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>

            <span className="text-slate-500">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* =================================================
            QUESTION CARD
        ================================================= */}

        <section className="rounded-2xl border bg-white p-6 shadow-sm">

          {/* Skill + Difficulty */}

          <div className="mb-5 flex flex-wrap gap-2">

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {question.skill_name}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {question.difficulty}
            </span>

          </div>

          {/* Question */}

          <h2 className="text-lg font-semibold leading-7 text-slate-900">
            {question.question_text}
          </h2>

          {/* Concepts */}

          {question.concepts_tested &&
            question.concepts_tested.length > 0 && (
              <p className="mt-3 text-xs text-slate-500">
                Concepts tested:{" "}
                {question.concepts_tested.join(
                  ", "
                )}
              </p>
            )}

          {/* =================================================
              OPTIONS
          ================================================= */}

          <div className="mt-7 space-y-3">

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
                  className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {letter}
                  </span>

                  <span className="pt-1 text-sm leading-6 text-slate-700">
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

        <div className="mt-6 flex items-center justify-between">

          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {currentQuestion <
          questions.length - 1 ? (

            <button
              type="button"
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>

          ) : (

            <button
              type="button"
              onClick={handleFinish}
              disabled={!selectedAnswer}
              className="rounded-xl bg-green-600 px-7 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Finish Assessment
            </button>

          )}

        </div>

      </section>

    </main>
  );
}