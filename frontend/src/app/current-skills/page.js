"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CurrentSkillsPage() {
  const router = useRouter();

  const [career, setCareer] = useState(null);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // =====================================================
  // LOAD CAREER SKILLS
  // =====================================================

  useEffect(() => {
    async function loadSkills() {
      try {
        const response = await fetch("/api/current-skills");
        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage(data.message || "Unable to load your skills.");
          return;
        }

        setCareer(data.career);
        setSkills(data.skills || []);

        // Load previously saved skills
        const previousSkills = {};

        (data.studentSkills || []).forEach((skill) => {
          previousSkills[skill.skill_name] = skill.self_level;
        });

        setSelectedSkills(previousSkills);
      } catch (error) {
        console.error("Current skills loading error:", error);
        setMessage("Unable to load your skills.");
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  // =====================================================
  // HANDLE LEVEL CHANGE
  // =====================================================

  function handleLevelChange(skillName, level) {
    setSelectedSkills((previous) => ({
      ...previous,
      [skillName]: level,
    }));

    setMessage("");
  }

  // =====================================================
  // SAVE AND CONTINUE
  // =====================================================

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      /*
        IMPORTANT:

        If the student has not selected anything for a skill,
        we automatically consider that skill as "Not familiar".

        Example:

        Python        -> Intermediate
        SQL           -> Beginner
        Linux         -> Not familiar (blank)
        Networking    -> Advanced
      */

      const selected = skills.map((skill) => ({
        skill_name: skill.skill_name,
        self_level:
          selectedSkills[skill.skill_name] || "Not familiar",
      }));

      const response = await fetch("/api/current-skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skills: selected,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(
          data.message || "Unable to save your skills."
        );
        return;
      }

      setMessage("Your skills have been saved successfully!");

      setTimeout(() => {
        router.push("/skill-assessment");
      }, 1000);
    } catch (error) {
      console.error("Skill saving error:", error);
      setMessage("Unable to save your skills.");
    } finally {
      setSaving(false);
    }
  }

  // =====================================================
  // LOADING SCREEN
  // =====================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading your career skills...
        </p>
      </main>
    );
  }

  // =====================================================
  // MAIN PAGE
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-50">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <button
            onClick={() => router.push("/dashboard")}
            className="text-2xl font-bold text-blue-600"
          >
            SkillNet
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            Dashboard
          </button>

        </div>
      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <section className="mx-auto max-w-5xl px-6 py-10">

        {/* =================================================
            PAGE HEADING
        ================================================= */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            STEP 3 OF YOUR SKILL JOURNEY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            What skills do you currently have?
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Tell us what you already know. Your answers will help
            SkillNet understand your current skill level and identify
            areas where you can improve.
          </p>

          <p className="mt-3 text-sm text-slate-500">
            You can leave a skill unselected if you are not familiar
            with it. It will automatically be treated as
            <strong> Not familiar</strong>.
          </p>

        </div>

        {/* =================================================
            CAREER CARD
        ================================================= */}

        {career && !career.career_uncertain && (
          <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">

            <p className="text-sm font-semibold text-blue-600">
              YOUR SELECTED CAREER
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              {career.role_name}
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              {career.industry_name}
            </p>

          </div>
        )}

        {/* =================================================
            CAREER UNCERTAIN
        ================================================= */}

        {career?.career_uncertain && (
          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Let's discover your career direction
            </h2>

            <p className="mt-3 text-slate-600">
              Since you haven't selected a specific career yet,
              SkillNet will help you explore suitable career paths
              based on your education, interests and existing skills.
            </p>

            <button
              onClick={() => router.push("/career-discovery")}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Discover Career Paths
            </button>

          </div>
        )}

        {/* =================================================
            SKILLS
        ================================================= */}

        {!career?.career_uncertain && (
          <form onSubmit={handleSubmit}>

            <div className="rounded-2xl border bg-white shadow-sm">

              {/* Skills Header */}
              <div className="border-b px-6 py-5">

                <h2 className="text-xl font-bold text-slate-900">
                  Skills for {career?.role_name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select your current level for each skill.
                </p>

              </div>

              {/* =================================================
                  SKILLS LIST
              ================================================= */}

              <div className="divide-y">

                {skills.length === 0 ? (
                  <div className="px-6 py-10 text-center">
                    <p className="text-slate-500">
                      No skills are currently available for this
                      career role.
                    </p>
                  </div>
                ) : (
                  skills.map((skill) => {

                    /*
                      undefined means the student has not selected
                      anything yet.

                      Therefore all radio buttons are initially
                      unchecked.
                    */

                    const currentLevel =
                      selectedSkills[skill.skill_name];

                    return (
                      <div
                        key={skill.career_role_skill_id}
                        className="px-6 py-6"
                      >

                        {/* Skill Name */}
                        <div className="mb-4">

                          <h3 className="font-semibold text-slate-900">
                            {skill.skill_name}
                          </h3>

                        </div>

                        {/* =================================================
                            LEVEL OPTIONS
                        ================================================= */}

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                          {/* NOT FAMILIAR */}
                          <label
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              currentLevel === "Not familiar"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >

                            <input
                              type="radio"
                              name={`skill-${skill.career_role_skill_id}`}
                              value="Not familiar"
                              checked={
                                currentLevel === "Not familiar"
                              }
                              onChange={() =>
                                handleLevelChange(
                                  skill.skill_name,
                                  "Not familiar"
                                )
                              }
                              className="mr-2"
                            />

                            <span className="font-medium text-slate-800">
                              Not familiar
                            </span>

                            <p className="mt-1 text-xs text-slate-500">
                              I don't know this skill yet
                            </p>

                          </label>

                          {/* BEGINNER */}
                          <label
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              currentLevel === "Beginner"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >

                            <input
                              type="radio"
                              name={`skill-${skill.career_role_skill_id}`}
                              value="Beginner"
                              checked={
                                currentLevel === "Beginner"
                              }
                              onChange={() =>
                                handleLevelChange(
                                  skill.skill_name,
                                  "Beginner"
                                )
                              }
                              className="mr-2"
                            />

                            <span className="font-medium text-slate-800">
                              Beginner
                            </span>

                            <p className="mt-1 text-xs text-slate-500">
                              I know the basics
                            </p>

                          </label>

                          {/* INTERMEDIATE */}
                          <label
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              currentLevel === "Intermediate"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >

                            <input
                              type="radio"
                              name={`skill-${skill.career_role_skill_id}`}
                              value="Intermediate"
                              checked={
                                currentLevel === "Intermediate"
                              }
                              onChange={() =>
                                handleLevelChange(
                                  skill.skill_name,
                                  "Intermediate"
                                )
                              }
                              className="mr-2"
                            />

                            <span className="font-medium text-slate-800">
                              Intermediate
                            </span>

                            <p className="mt-1 text-xs text-slate-500">
                              I can work with it
                            </p>

                          </label>

                          {/* ADVANCED */}
                          <label
                            className={`cursor-pointer rounded-xl border p-4 transition ${
                              currentLevel === "Advanced"
                                ? "border-blue-600 bg-blue-50"
                                : "border-slate-200 hover:border-blue-300"
                            }`}
                          >

                            <input
                              type="radio"
                              name={`skill-${skill.career_role_skill_id}`}
                              value="Advanced"
                              checked={
                                currentLevel === "Advanced"
                              }
                              onChange={() =>
                                handleLevelChange(
                                  skill.skill_name,
                                  "Advanced"
                                )
                              }
                              className="mr-2"
                            />

                            <span className="font-medium text-slate-800">
                              Advanced
                            </span>

                            <p className="mt-1 text-xs text-slate-500">
                              I am highly confident
                            </p>

                          </label>

                        </div>

                      </div>
                    );
                  })
                )}

              </div>

            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            {message && (
              <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-700">
                {message}
              </div>
            )}

            {/* =================================================
                CONTINUE
            ================================================= */}

            {skills.length > 0 && (
              <div className="mt-8 flex justify-end">

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : "Continue to Skill Assessment →"}
                </button>

              </div>
            )}

          </form>
        )}

      </section>

    </main>
  );
}