"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AssessmentResultPage() {
  const router = useRouter();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedResult =
        sessionStorage.getItem("assessment_result");

      if (storedResult) {
        setResult(JSON.parse(storedResult));
      }
    } catch (error) {
      console.error(
        "Unable to load assessment result:",
        error
      );
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading your assessment result...
        </p>
      </main>
    );
  }

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-lg rounded-2xl border bg-white p-8 text-center shadow-sm">

          <h1 className="text-2xl font-bold text-slate-900">
            Assessment Result Not Found
          </h1>

          <p className="mt-3 text-slate-600">
            We could not find your assessment result.
            Please complete the assessment again.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/skill-assessment")
            }
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Back to Assessment
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HEADER */}

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
            Assessment Result
          </span>

        </div>
      </header>

      {/* MAIN */}

      <section className="mx-auto max-w-4xl px-6 py-10">

        {/* TITLE */}

        <div className="text-center">

          <p className="text-sm font-semibold text-blue-600">
            ASSESSMENT COMPLETED
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Your Skill Assessment Result
          </h1>

          <p className="mt-2 text-slate-600">
            Here is a summary of your current understanding.
          </p>

        </div>

        {/* OVERALL RESULT */}

        <div className="mt-8 rounded-2xl border bg-white p-8 text-center shadow-sm">

          <p className="text-sm font-medium text-slate-500">
            Overall Score
          </p>

          <p className="mt-2 text-5xl font-bold text-blue-600">
            {result.percentage}%
          </p>

          <div className="mt-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            {result.overall_level}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-2xl font-bold text-slate-900">
                {result.total_questions}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Questions
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-2xl font-bold text-green-600">
                {result.correct_answers}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Correct
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-2xl font-bold text-red-500">
                {result.incorrect_answers}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Incorrect
              </p>
            </div>

          </div>

        </div>

        {/* SKILL RESULTS */}

        <div className="mt-8">

          <h2 className="text-xl font-bold text-slate-900">
            Skill-wise Performance
          </h2>

          <div className="mt-4 space-y-4">

            {result.skills &&
              result.skills.map((skill) => (

                <div
                  key={skill.skill_name}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {skill.skill_name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {skill.correct_answers} of{" "}
                        {skill.total_questions} correct
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="text-2xl font-bold text-blue-600">
                        {skill.percentage}%
                      </p>

                      <p className="text-xs font-semibold text-slate-500">
                        {skill.level}
                      </p>

                    </div>

                  </div>

                  {/* PROGRESS BAR */}

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

          </div>

        </div>

        {/* ACTIONS */}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

          <button
            type="button"
            onClick={() =>
              router.push("/skills")
            }
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Review Skills
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard")
            }
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Go to Dashboard
          </button>

        </div>

      </section>

    </main>
  );
}