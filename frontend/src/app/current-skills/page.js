"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./current-skills.css";

/* =========================================================
   ICONS
========================================================= */

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" />
      <path d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m8.5 11 2 2 5-5" />
      <path d="M8.5 16h7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4.2 4.2L19 6.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7.5" ry="3" />
      <path d="M4.5 5v7c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5" />
      <path d="M4.5 12v7c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
    </svg>
  );
}

function GitIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 3.5 20.5 10.5 13 18l-7-7 7.5-7.5Z" />
      <path d="M9 8.5 12 11.5" />
      <path d="M12 11.5v5" />
      <circle cx="12" cy="17.5" r="1.5" />
      <circle cx="9" cy="8.5" r="1.5" />
      <circle cx="16" cy="8.5" r="1.5" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="17" r="2.5" />
      <circle cx="19" cy="17" r="2.5" />
      <path d="M10.5 7 6.5 15" />
      <path d="M13.5 7 17.5 15" />
      <path d="M7.5 17h9" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.4A3.5 3.5 0 0 0 4 11.7a3.5 3.5 0 0 0 2 3.2V16a3.5 3.5 0 0 0 5 3.1V6.5a3.5 3.5 0 0 0-1.5-2Z" />
      <path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.4a3.5 3.5 0 0 1 2 3.3 3.5 3.5 0 0 1-2 3.2V16a3.5 3.5 0 0 1-5 3.1V6.5a3.5 3.5 0 0 1 1.5-2Z" />
      <path d="M7.5 9.5h2M7 13h2.5M14.5 9.5h2M14.5 13H17" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1-1.9 1.9-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1.1 1.7V20.5h-2.7v-.3a1.8 1.8 0 0 0-1.1-1.7 1.8 1.8 0 0 0-2 .4l-.1.1L7 17.1l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.7-1.1H5.5v-2.7h.3a1.8 1.8 0 0 0 1.7-1.1 1.8 1.8 0 0 0-.4-2L7 8l1.9-1.9.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1.1-1.7v-.3h2.7v.3a1.8 1.8 0 0 0 1.1 1.7 1.8 1.8 0 0 0 2-.4l.1-.1L20 8l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.7 1.1h.3v2.7h-.3a1.8 1.8 0 0 0-1.8 1.1Z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19V9" />
      <path d="M12 19V5" />
      <path d="M19 19v-7" />
      <path d="M3 19h18" />
    </svg>
  );
}

function GenericSkillIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

/* =========================================================
   SKILL ICON SELECTOR
========================================================= */

function getSkillIcon(skillName) {
  const name = String(skillName || "").toLowerCase();

  if (
    name.includes("python") ||
    name.includes("javascript") ||
    name.includes("typescript") ||
    name.includes("programming") ||
    name.includes("coding")
  ) {
    return <CodeIcon />;
  }

  if (
    name.includes("sql") ||
    name.includes("database") ||
    name.includes("mongodb") ||
    name.includes("mysql")
  ) {
    return <DatabaseIcon />;
  }

  if (
    name.includes("html") ||
    name.includes("css") ||
    name.includes("web") ||
    name.includes("frontend")
  ) {
    return <GlobeIcon />;
  }

  if (
    name.includes("git") ||
    name.includes("github") ||
    name.includes("version control")
  ) {
    return <GitIcon />;
  }

  if (
    name.includes("linux") ||
    name.includes("unix") ||
    name.includes("shell") ||
    name.includes("terminal")
  ) {
    return <TerminalIcon />;
  }

  if (
    name.includes("network") ||
    name.includes("cloud") ||
    name.includes("cyber")
  ) {
    return <NetworkIcon />;
  }

  if (
    name.includes("ai") ||
    name.includes("machine learning") ||
    name.includes("deep learning") ||
    name.includes("artificial intelligence")
  ) {
    return <BrainIcon />;
  }

  if (
    name.includes("engineering") ||
    name.includes("devops") ||
    name.includes("system")
  ) {
    return <GearIcon />;
  }

  if (
    name.includes("data") ||
    name.includes("analytics") ||
    name.includes("statistics")
  ) {
    return <ChartIcon />;
  }

  return <GenericSkillIcon />;
}

/* =========================================================
   LEVEL DATA
========================================================= */

const LEVELS = [
  {
    value: "Not familiar",
    short: "Not familiar",
    description: "I don't know this skill yet",
  },
  {
    value: "Beginner",
    short: "Beginner",
    description: "I know the basics",
  },
  {
    value: "Intermediate",
    short: "Intermediate",
    description: "I can work with it",
  },
  {
    value: "Advanced",
    short: "Advanced",
    description: "I am highly confident",
  },
];

/* =========================================================
   MAIN PAGE
========================================================= */

export default function CurrentSkillsPage() {
  const router = useRouter();

  const [career, setCareer] = useState(null);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState({});

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  /* =======================================================
     LOAD CAREER + SKILLS
  ======================================================= */

  useEffect(() => {
    async function loadSkills() {
      try {
        const response = await fetch("/api/current-skills");
        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage(
            data.message || "Unable to load your skills."
          );
          return;
        }

        setCareer(data.career);
        setSkills(data.skills || []);

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

  /* =======================================================
     HANDLE LEVEL CHANGE
  ======================================================= */

  function handleLevelChange(skillName, level) {
    setSelectedSkills((previous) => ({
      ...previous,
      [skillName]: level,
    }));

    setMessage("");
  }

  /* =======================================================
     COMPLETION COUNT
  ======================================================= */

  const selectedCount = useMemo(() => {
    return skills.filter(
      (skill) => selectedSkills[skill.skill_name]
    ).length;
  }, [skills, selectedSkills]);

  const completionPercentage =
    skills.length > 0
      ? Math.round((selectedCount / skills.length) * 100)
      : 0;

  /* =======================================================
     SAVE
  ======================================================= */

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      /*
        BACKEND LOGIC KEPT EXACTLY AS BEFORE.

        If the student hasn't selected a level,
        it becomes "Not familiar".
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

      setMessage(
        "Your skills have been saved successfully!"
      );

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

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="sn-skills-page sn-loading-page">
        <div className="sn-loading-orb">
          <div className="sn-loading-ring" />
          <div className="sn-loading-ring ring-two" />
        </div>

        <p>Preparing your skill journey...</p>
      </main>
    );
  }

  /* =======================================================
     CAREER UNCERTAIN
  ======================================================= */

  if (career?.career_uncertain) {
    return (
      <main className="sn-skills-page">
        <Background />

        <header className="sn-top-header">
          <div className="sn-header-inner">
            <button
              type="button"
              className="sn-logo"
              onClick={() => router.push("/dashboard")}
            >
              <span>Skill</span>
              <strong>Net</strong>
            </button>

            <div className="sn-header-progress">
              <span>YOUR SKILL JOURNEY</span>

              <div className="sn-progress-line">
                <i />
              </div>

              <b>3 of 4</b>
            </div>

            <div className="sn-header-status">
              <span />
              Skills Assessment
            </div>
          </div>
        </header>

        <section className="sn-uncertain-wrap">
          <div className="sn-uncertain-card">
            <div className="sn-uncertain-icon">
              <SparkleIcon />
            </div>

            <div>
              <span className="sn-small-label">
                CAREER DISCOVERY
              </span>

              <h1>
                Let&apos;s discover your career direction
              </h1>

              <p>
                Since you haven&apos;t selected a specific career
                yet, SkillNet will help you explore suitable
                career paths based on your education, interests
                and existing skills.
              </p>

              <button
                type="button"
                onClick={() =>
                  router.push("/career-discovery")
                }
                className="sn-primary-button"
              >
                Discover Career Paths
                <ArrowIcon />
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  /* =======================================================
     MAIN PAGE
  ======================================================= */

  return (
    <main className="sn-skills-page">
      <Background />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="sn-top-header">
        <div className="sn-header-inner">
          <button
            type="button"
            className="sn-logo"
            onClick={() => router.push("/dashboard")}
            aria-label="Go to dashboard"
          >
            <span>Skill</span>
            <strong>Net</strong>
          </button>

          <div className="sn-header-progress">
            <span>YOUR SKILL JOURNEY</span>

            <div className="sn-progress-line">
              <i />
              <em />
            </div>

            <b>3 of 4</b>
          </div>

          <div className="sn-header-status">
            <span />
            Skills Assessment
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="sn-skills-layout">
        {/* =================================================
            LEFT HERO
        ================================================= */}

        <aside className="sn-left-panel">
          <div className="sn-eyebrow">
            <span>
              <SparkleIcon />
            </span>
            STEP 3 OF YOUR SKILL JOURNEY
          </div>

          <h1>
            Let&apos;s assess your
            <br />
            <span>current skills.</span>
          </h1>

          <p>
            Help us understand your current level in these
            skills. This will help us create a personalized
            learning roadmap just for you.
          </p>

          {/* Animated illustration */}
          <div className="sn-skill-illustration">
            <div className="sn-illustration-orbit orbit-a" />
            <div className="sn-illustration-orbit orbit-b" />
            <div className="sn-illustration-orbit orbit-c" />

            <div className="sn-floating-symbol symbol-brain">
              <BrainIcon />
            </div>

            <div className="sn-floating-symbol symbol-code">
              <CodeIcon />
            </div>

            <div className="sn-floating-symbol symbol-gear">
              <GearIcon />
            </div>

            <div className="sn-floating-symbol symbol-chart">
              <ChartIcon />
            </div>

            <div className="sn-glow-platform">
              <div className="sn-platform-ring ring-one" />
              <div className="sn-platform-ring ring-two" />
              <div className="sn-platform-ring ring-three" />

              <div className="sn-skill-cube">
                <div className="cube-top">
                  <span>✓</span>
                </div>

                <div className="cube-left">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="cube-right">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="sn-platform-light" />
            </div>

            <span className="sn-orbit-dot dot-one" />
            <span className="sn-orbit-dot dot-two" />
            <span className="sn-orbit-dot dot-three" />
            <span className="sn-orbit-dot dot-four" />
          </div>

          {/* Journey navigation */}
          <div className="sn-journey">
            <div className="sn-journey-line">
              <span className="completed" />
              <i />
              <span className="completed" />
              <i />
              <span className="active" />
              <i />
              <span />
            </div>

            <div className="sn-journey-items">
              <div>
                <span className="done">✓</span>
                <small>Profile</small>
              </div>

              <div>
                <span className="done">✓</span>
                <small>Career</small>
              </div>

              <div className="active-step">
                <span>▮</span>
                <small>Skills</small>
              </div>

              <div>
                <span>⚑</span>
                <small>Roadmap</small>
              </div>
            </div>
          </div>
        </aside>

        {/* =================================================
            RIGHT ASSESSMENT CARD
        ================================================= */}

        <section className="sn-assessment-area">
          <form
            className="sn-assessment-card"
            onSubmit={handleSubmit}
          >
            {/* Card heading */}
            <div className="sn-assessment-heading">
              <div className="sn-assessment-icon">
                <ClipboardIcon />
              </div>

              <div>
                <h2>Rate your current skill level</h2>

                <p>
                  Based on your selected career path
                </p>
              </div>
            </div>

            {/* Career path */}
            <div className="sn-career-path">
              <span>Career Path:</span>

              <strong>
                {career?.role_name || "Your selected role"}
              </strong>
            </div>

            {/* Skill title */}
            <div className="sn-skill-header-label">
              SKILL
            </div>

            {/* =================================================
                SKILL LIST
            ================================================= */}

            <div className="sn-skills-list">
              {skills.length === 0 ? (
                <div className="sn-no-skills">
                  <div>
                    <GenericSkillIcon />
                  </div>

                  <h3>No skills available</h3>

                  <p>
                    No skills are currently available for
                    this career role.
                  </p>
                </div>
              ) : (
                skills.map((skill, index) => {
                  const currentLevel =
                    selectedSkills[skill.skill_name];

                  return (
                    <div
                      key={
                        skill.career_role_skill_id ||
                        `${skill.skill_name}-${index}`
                      }
                      className="sn-skill-row"
                    >
                      {/* Skill */}
                      <div className="sn-skill-name">
                        <div className="sn-skill-logo">
                          {getSkillIcon(skill.skill_name)}
                        </div>

                        <div>
                          <strong>
                            {skill.skill_name}
                          </strong>

                          <span>
                            Skill {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Levels */}
                      <div className="sn-level-options">
                        {LEVELS.map((level) => {
                          const selected =
                            currentLevel === level.value;

                          return (
                            <label
                              key={level.value}
                              className={`sn-level-option ${
                                selected ? "selected" : ""
                              }`}
                            >
                              <input
                                type="radio"
                                name={`skill-${skill.career_role_skill_id || index}`}
                                value={level.value}
                                checked={selected}
                                onChange={() =>
                                  handleLevelChange(
                                    skill.skill_name,
                                    level.value
                                  )
                                }
                              />

                              <span className="sn-level-text">
                                {level.short}
                              </span>

                              {selected && (
                                <span className="sn-selected-check">
                                  <CheckIcon />
                                </span>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Completion */}
            {skills.length > 0 && (
              <div className="sn-completion">
                <div className="sn-completion-info">
                  <span>
                    {selectedCount} of {skills.length} skills
                    rated
                  </span>

                  <strong>
                    {completionPercentage}%
                  </strong>
                </div>

                <div className="sn-completion-bar">
                  <span
                    style={{
                      width: `${completionPercentage}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {/* =================================================
                MESSAGE
            ================================================= */}

            {message && (
              <div
                className={`sn-message ${
                  message.includes("successfully")
                    ? "success"
                    : "error"
                }`}
                role="alert"
              >
                <span>
                  {message.includes("successfully") ? (
                    <CheckIcon />
                  ) : (
                    "!"
                  )}
                </span>

                {message}
              </div>
            )}

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="sn-card-footer">
              <button
                type="button"
                className="sn-back-button"
                onClick={() => router.push("/career-selection")}
              >
                <BackIcon />
                <span>Back</span>
              </button>

              <div className="sn-footer-center">
                <SparkleIcon />
                <span>
                  This helps us build your personalized roadmap
                </span>
              </div>

              <button
                type="submit"
                className="sn-continue-button"
                disabled={saving || skills.length === 0}
              >
                <span>
                  {saving
                    ? "Saving..."
                    : "Continue to Assessment"}
                </span>

                {!saving && <ArrowIcon />}
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}

/* =========================================================
   ANIMATED BACKGROUND
========================================================= */

function Background() {
  const particles = Array.from({ length: 55 });

  return (
    <div
      className="sn-background"
      aria-hidden="true"
    >
      <div className="sn-background-gradient" />

      <div className="sn-grid" />

      <div className="sn-large-glow glow-left" />
      <div className="sn-large-glow glow-right" />

      <div className="sn-bg-orbit bg-orbit-one" />
      <div className="sn-bg-orbit bg-orbit-two" />
      <div className="sn-bg-orbit bg-orbit-three" />

      {particles.map((_, index) => (
        <span
          key={index}
          className="sn-particle"
          style={{
            "--x": `${(index * 37) % 100}%`,
            "--y": `${(index * 61) % 100}%`,
            "--delay": `${(index % 9) * 0.45}s`,
            "--size": `${index % 5 === 0 ? 3 : 1.5}px`,
          }}
        />
      ))}

      <span className="sn-bg-star star-a">✦</span>
      <span className="sn-bg-star star-b">✦</span>
      <span className="sn-bg-star star-c">•</span>
      <span className="sn-bg-star star-d">✦</span>
      <span className="sn-bg-star star-e">•</span>
    </div>
  );
}
