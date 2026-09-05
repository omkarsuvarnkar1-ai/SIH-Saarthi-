"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./assessment-result.css";

/* =========================================================
   ICONS
========================================================= */

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function BackArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m9 12 2 2 4-4" />
      <path d="M9 17h6" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 4h8v4.5c0 3-1.8 5.5-4 5.5S8 11.5 8 8.5V4Z" />
      <path d="M8 6H4v1c0 2.8 1.7 4.5 4.5 4.9M16 6h4v1c0 2.8-1.7 4.5-4.5 4.9" />
      <path d="M12 14v4M8 21h8M9 18h6" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

function SkillIcon({ name }) {
  const value = String(name || "").toLowerCase();

  if (value.includes("python")) {
    return (
      <span className="skill-brand python-brand">
        <span className="python-top">●</span>
        <span className="python-bottom">●</span>
      </span>
    );
  }

  if (value.includes("javascript") || value === "js") {
    return (
      <span className="skill-brand javascript-brand">
        JS
      </span>
    );
  }

  if (
    value.includes("html") ||
    value.includes("css")
  ) {
    return (
      <span className="skill-brand html-brand">
        <span>5</span>
        <small>3</small>
      </span>
    );
  }

  if (value.includes("sql") || value.includes("database")) {
    return (
      <span className="skill-brand sql-brand">
        <span />
        <span />
        <span />
      </span>
    );
  }

  if (
    value.includes("git") ||
    value.includes("github")
  ) {
    return (
      <span className="skill-brand git-brand">
        ◆
      </span>
    );
  }

  if (value.includes("linux")) {
    return (
      <span className="skill-brand linux-brand">
        ●
      </span>
    );
  }

  if (
    value.includes("data structure") ||
    value.includes("algorithm") ||
    value.includes("dsa")
  ) {
    return (
      <span className="skill-brand dsa-brand">
        <span />
        <span />
        <span />
        <span />
      </span>
    );
  }

  if (value.includes("react")) {
    return (
      <span className="skill-brand react-brand">
        ◉
      </span>
    );
  }

  if (value.includes("java")) {
    return (
      <span className="skill-brand java-brand">
        ☕
      </span>
    );
  }

  if (
    value.includes("communication") ||
    value.includes("english")
  ) {
    return (
      <span className="skill-brand communication-brand">
        Aa
      </span>
    );
  }

  if (
    value.includes("design") ||
    value.includes("ui") ||
    value.includes("ux")
  ) {
    return (
      <span className="skill-brand design-brand">
        ✦
      </span>
    );
  }

  return (
    <span className="skill-brand default-brand">
      <TargetIcon />
    </span>
  );
}

/* =========================================================
   LEVEL HELPERS
========================================================= */

function getLevelClass(level) {
  const value = String(level || "").toLowerCase();

  if (value.includes("advanced")) {
    return "advanced";
  }

  if (value.includes("intermediate")) {
    return "intermediate";
  }

  if (value.includes("beginner")) {
    return "beginner";
  }

  if (value.includes("not familiar")) {
    return "not-familiar";
  }

  return "default";
}

function getScoreMessage(percentage) {
  const score = Number(percentage) || 0;

  if (score >= 85) {
    return {
      title: "Excellent performance!",
      text: "You have demonstrated a strong understanding of your assessed skills.",
    };
  }

  if (score >= 70) {
    return {
      title: "Great progress!",
      text: "You have a solid foundation and are ready to strengthen your skills further.",
    };
  }

  if (score >= 50) {
    return {
      title: "Good starting point!",
      text: "Your results show areas of strength as well as opportunities to improve.",
    };
  }

  return {
    title: "Your learning journey starts here.",
    text: "We'll use your results to build a personalized path around the skills you need.",
  };
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AssessmentResultPage() {
  const router = useRouter();

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
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
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  /* =========================================================
     NORMALIZE DYNAMIC DATA
  ========================================================= */

  const skills = useMemo(() => {
    if (!result || !Array.isArray(result.skills)) {
      return [];
    }

    return result.skills;
  }, [result]);

  const scoreMessage = useMemo(() => {
    return getScoreMessage(result?.percentage);
  }, [result]);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="ar-page ar-loading-page">
        <div className="ar-background-grid" />
        <div className="ar-glow ar-glow-one" />
        <div className="ar-glow ar-glow-two" />
        <div className="ar-glow ar-glow-three" />

        <div className="ar-loader">
          <div className="ar-loader-ring" />
          <p>Preparing your assessment result...</p>
        </div>
      </main>
    );
  }

  /* =========================================================
     RESULT NOT FOUND
  ========================================================= */

  if (!result) {
    return (
      <main className="ar-page ar-error-page">
        <div className="ar-background-grid" />
        <div className="ar-glow ar-glow-one" />
        <div className="ar-glow ar-glow-two" />

        <div className="ar-not-found-card">
          <div className="ar-not-found-icon">
            <ClipboardIcon />
          </div>

          <span className="ar-small-label">
            ASSESSMENT RESULT
          </span>

          <h1>Assessment Result Not Found</h1>

          <p>
            We could not find your assessment result.
            Please complete the assessment again.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push("/skill-assessment")
            }
            className="ar-primary-button"
          >
            <span>Back to Assessment</span>
            <ArrowIcon />
          </button>
        </div>
      </main>
    );
  }

  /* =========================================================
     MAIN UI
  ========================================================= */

  return (
    <main className="ar-page">
      {/* BACKGROUND */}

      <div
        className="ar-background-grid"
        aria-hidden="true"
      />

      <div
        className="ar-stars"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div
        className="ar-orbit orbit-a"
        aria-hidden="true"
      />

      <div
        className="ar-orbit orbit-b"
        aria-hidden="true"
      />

      <div
        className="ar-glow ar-glow-one"
        aria-hidden="true"
      />

      <div
        className="ar-glow ar-glow-two"
        aria-hidden="true"
      />

      <div
        className="ar-glow ar-glow-three"
        aria-hidden="true"
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="ar-header">
        <div className="ar-header-inner">
          <button
            type="button"
            className="ar-logo"
            onClick={() =>
              router.push("/dashboard")
            }
            aria-label="Go to SkillNet dashboard"
          >
            <span>Skill</span>
            <strong>Net</strong>
          </button>

          <div className="ar-header-progress">
            <span className="ar-progress-label">
              YOUR SKILL JOURNEY
            </span>

            <div className="ar-progress-track">
              <div className="ar-progress-fill" />
              <span className="ar-progress-node node-one" />
              <span className="ar-progress-node node-two" />
              <span className="ar-progress-node node-three" />
              <span className="ar-progress-node node-four" />
            </div>

            <strong>4 of 4</strong>
          </div>

          <div className="ar-header-badge">
            <span className="ar-live-dot" />
            Assessment Result
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="ar-content">

        {/* TOP TITLE */}

        <div className="ar-title-section">
          <div className="ar-eyebrow">
            <span className="ar-eyebrow-icon">
              <SparkleIcon />
            </span>

            ASSESSMENT COMPLETED
          </div>

          <h1>
            Your skill assessment{" "}
            <span>result.</span>
          </h1>

          <p>
            Here&apos;s a clear picture of your current
            understanding. We&apos;ll use these results to
            shape your personalized learning roadmap.
          </p>
        </div>

        {/* =================================================
            OVERALL SCORE CARD
        ================================================= */}

        <section className="ar-score-card">

          <div className="ar-score-top">

            <div className="ar-score-heading">

              <div className="ar-score-icon">
                <TrophyIcon />
              </div>

              <div>
                <span className="ar-card-label">
                  OVERALL PERFORMANCE
                </span>

                <h2>
                  {scoreMessage.title}
                </h2>

                <p>
                  {scoreMessage.text}
                </p>
              </div>

            </div>

            <div className="ar-score-circle">

              <div className="ar-score-circle-inner">
                <strong>
                  {result.percentage}%
                </strong>

                <span>
                  SCORE
                </span>
              </div>

            </div>

          </div>

          <div className="ar-score-divider" />

          <div className="ar-score-bottom">

            <div className="ar-level-block">
              <span>OVERALL LEVEL</span>

              <div
                className={`ar-level-pill ${getLevelClass(
                  result.overall_level
                )}`}
              >
                {result.overall_level}
              </div>
            </div>

            <div className="ar-stat">
              <strong>
                {result.total_questions}
              </strong>

              <span>Questions</span>
            </div>

            <div className="ar-stat stat-success">
              <strong>
                {result.correct_answers}
              </strong>

              <span>Correct</span>
            </div>

            <div className="ar-stat stat-error">
              <strong>
                {result.incorrect_answers}
              </strong>

              <span>Incorrect</span>
            </div>

          </div>

        </section>

        {/* =================================================
            SKILL PERFORMANCE
        ================================================= */}

        <section className="ar-skills-section">

          <div className="ar-section-heading">

            <div>
              <span className="ar-card-label">
                PERFORMANCE BREAKDOWN
              </span>

              <h2>
                Skill-wise performance
              </h2>

              <p>
                Your results across the skills assessed
                for your selected career path.
              </p>
            </div>

            <div className="ar-skill-count">
              <strong>{skills.length}</strong>
              <span>Skills assessed</span>
            </div>

          </div>

          {skills.length > 0 ? (
            <div className="ar-skills-grid">

              {skills.map((skill, index) => {

                const percentage =
                  Math.max(
                    0,
                    Math.min(
                      100,
                      Number(skill.percentage) || 0
                    )
                  );

                return (
                  <article
                    className="ar-skill-card"
                    key={
                      skill.skill_name ||
                      `skill-${index}`
                    }
                    style={{
                      "--skill-delay": `${index * 70}ms`,
                    }}
                  >

                    <div className="ar-skill-card-top">

                      <div className="ar-skill-info">

                        <div className="ar-skill-icon">
                          <SkillIcon
                            name={
                              skill.skill_name
                            }
                          />
                        </div>

                        <div>
                          <h3>
                            {skill.skill_name}
                          </h3>

                          <p>
                            {skill.correct_answers}{" "}
                            of{" "}
                            {skill.total_questions}{" "}
                            correct
                          </p>
                        </div>

                      </div>

                      <div className="ar-skill-score">
                        <strong>
                          {skill.percentage}%
                        </strong>

                        <span
                          className={`ar-mini-level ${getLevelClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>

                    </div>

                    <div className="ar-skill-progress">

                      <div className="ar-skill-progress-track">

                        <div
                          className={`ar-skill-progress-fill ${getLevelClass(
                            skill.level
                          )}`}
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                      <span>
                        {percentage}%
                      </span>

                    </div>

                  </article>
                );
              })}

            </div>
          ) : (
            <div className="ar-empty-skills">
              <TargetIcon />

              <h3>
                No skill breakdown available
              </h3>

              <p>
                Your assessment was completed, but
                individual skill results are not
                available.
              </p>
            </div>
          )}

        </section>

        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        <div className="ar-success-card">

          <div className="ar-success-icon">
            <CheckIcon />
          </div>

          <div>
            <strong>
              Your assessment has been completed
              successfully!
            </strong>

            <p>
              These results will help SkillNet
              personalize your learning journey.
            </p>
          </div>

        </div>

        {/* =================================================
            FOOTER ACTIONS
        ================================================= */}

        <div className="ar-actions">

          <button
            type="button"
            className="ar-back-button"
            onClick={() =>
              router.push("/skills")
            }
          >
            <BackArrowIcon />

            <span>
              Review Skills
            </span>
          </button>

          <div className="ar-personalized-note">
            <SparkleIcon />

            <span>
              Your roadmap is personalized from
              these results
            </span>
          </div>

          <button
            type="button"
            className="ar-continue-button"
            onClick={() =>
              router.push("/dashboard")
            }
          >
            <span>
              Go to Dashboard
            </span>

            <ArrowIcon />
          </button>

        </div>

      </section>

      {/* =====================================================
          BOTTOM DECORATION
      ===================================================== */}

      <div
        className="ar-bottom-decoration"
        aria-hidden="true"
      >
        <span>PROFILE</span>
        <i />
        <span>CAREER</span>
        <i />
        <span>SKILLS</span>
        <i />
        <span className="active">RESULT</span>
      </div>

    </main>
  );
}
