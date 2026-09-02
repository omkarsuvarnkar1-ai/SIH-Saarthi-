"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SkillsPage() {
  const router = useRouter();

  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});
  const [roleName, setRoleName] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // =====================================================
  // LOAD CURRENT SKILLS
  // =====================================================

  useEffect(() => {
    async function loadSkills() {
      try {
        // -------------------------------------------------
        // Get student's profile and selected role
        // -------------------------------------------------

        const profileResponse = await fetch("/api/profile");
        const profileData = await profileResponse.json();

        if (!profileResponse.ok || !profileData.success) {
          router.push("/login");
          return;
        }

        const profile = profileData.profile;

        if (!profile.role_id) {
          router.push("/career-selection");
          return;
        }

        // -------------------------------------------------
        // Get role skills
        // -------------------------------------------------

        const response = await fetch("/api/current-skills");

        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage(
            data.message || "Unable to load your skills."
          );
          return;
        }

        setSkills(data.skills || []);

        // -------------------------------------------------
        // Set role name
        // -------------------------------------------------

        if (data.role_name) {
          setRoleName(data.role_name);
        }

        // -------------------------------------------------
        // Load previously saved skills
        // -------------------------------------------------

        const previousSelections = {};

        if (Array.isArray(data.currentSkills)) {
          data.currentSkills.forEach((skill) => {
            previousSelections[skill.skill_name] =
              skill.self_level;
          });
        }

        setSelectedSkills(previousSelections);
      } catch (error) {
        console.error("Skills loading error:", error);
        setMessage("Unable to load your skills.");
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, [router]);

  // =====================================================
  // SELECT / DESELECT SKILL LEVEL
  // =====================================================

  function handleLevelClick(skillName, level) {
    setSelectedSkills((previous) => {
      const updated = { ...previous };

      // If the same option is clicked again,
      // remove the selection.
      if (updated[skillName] === level) {
        delete updated[skillName];
      } else {
        updated[skillName] = level;
      }

      return updated;
    });

    setMessage("");
  }

  // =====================================================
  // SAVE SKILLS
  // =====================================================

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      // -------------------------------------------------
      // Every unanswered skill becomes "Not familiar"
      // -------------------------------------------------

      const skillsToSave = skills.map((skill) => ({
        skill_name: skill.skill_name,
        self_level:
          selectedSkills[skill.skill_name] || "Not familiar",
      }));

      // -------------------------------------------------
      // Save to database
      // -------------------------------------------------

      const response = await fetch("/api/current-skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          skills: skillsToSave,
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

      // -------------------------------------------------
      // Continue to assessment
      // -------------------------------------------------

      setTimeout(() => {
        router.push("/skill-assessment");
      }, 800);
    } catch (error) {
      console.error("Skills save error:", error);

      setMessage(
        "Something went wrong while saving your skills."
      );
    } finally {
      setSaving(false);
    }
  }

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading your skills...
        </p>
      </main>
    );
  }

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
            onClick={() => router.push("/dashboard")}
            className="text-2xl font-bold text-blue-600"
          >
            SkillNet
          </button>

          <span className="text-sm text-slate-500">
            Skill Journey
          </span>

        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="mx-auto max-w-4xl px-6 py-12">

        {/* =================================================
            HEADING
        ================================================= */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            STEP 3 OF YOUR SKILL JOURNEY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            What skills do you currently have?
          </h1>

          <p className="mt-3 text-slate-600">
            Tell us what you already know. Your answers will
            help SkillNet understand your current skill level
            and identify areas where you can improve.
          </p>

          {roleName && (
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Skills for:{" "}
              <span className="text-blue-600">
                {roleName}
              </span>
            </p>
          )}

          <p className="mt-2 text-sm text-slate-500">
            You can leave a skill unselected if you are not
            familiar with it. It will automatically be treated
            as Not familiar.
          </p>

        </div>

        {/* =================================================
            NO SKILLS
        ================================================= */}

        {skills.length === 0 ? (
          <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">

            <h2 className="text-lg font-semibold text-slate-900">
              No skills are currently available
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              No skills are currently available for this
              career role.
            </p>

          </div>
        ) : (

          /* =================================================
             FORM
          ================================================= */

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* =================================================
                SKILLS
            ================================================= */}

            {skills.map((skill, index) => {

              const selectedLevel =
                selectedSkills[skill.skill_name];

              return (
                <section
                  key={skill.skill_name}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >

                  {/* Skill name */}

                  <div className="flex items-start gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-600">
                      {index + 1}
                    </div>

                    <div className="flex-1">

                      <h2 className="font-semibold text-slate-900">
                        {skill.skill_name}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Select your current level.
                      </p>

                    </div>

                  </div>

                  {/* Level buttons */}

                  <div className="mt-5 grid gap-3 sm:grid-cols-4">

                    {[
                      "Not familiar",
                      "Beginner",
                      "Intermediate",
                      "Advanced",
                    ].map((level) => {

                      const isSelected =
                        selectedLevel === level;

                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() =>
                            handleLevelClick(
                              skill.skill_name,
                              level
                            )
                          }
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                            isSelected
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50"
                          }`}
                        >
                          {level}
                        </button>
                      );
                    })}

                  </div>

                  {/* Selection status */}

                  <p className="mt-3 text-xs text-slate-400">
                    {selectedLevel
                      ? `Selected: ${selectedLevel}`
                      : "No option selected — will be treated as Not familiar."}
                  </p>

                </section>
              );
            })}

            {/* =================================================
                MESSAGE
            ================================================= */}

            {message && (
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-700">
                {message}
              </div>
            )}

            {/* =================================================
                CONTINUE
            ================================================= */}

            <div className="flex justify-end">

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : "Save & Continue"}
              </button>

            </div>

          </form>
        )}

      </section>

    </main>
  );
}