"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./career.css";

/* =========================================================
   ICONS
========================================================= */

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5l1.8 6.7L20.5 11l-6.7 1.8L12 19.5l-1.8-6.7L3.5 11l6.7-1.8L12 2.5z" />
      <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 9h3a1 1 0 0 1 1 1v11" />
      <path d="M2 21h20" />
      <path d="M8 7h4M8 11h4M8 15h4M8 19h4" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m15.7 8.3-2.2 5.2-5.2 2.2 2.2-5.2 5.2-2.2z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h4M9 13h6M9 17h6" />
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
      <path d="m11 18-6-6 6-6" />
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21c.8-4 3.2-6 7-6s6.2 2 7 6" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.2V16c2.8 2.5 7.2 2.5 10 0v-4.8" />
      <path d="M21 10v5" />
    </svg>
  );
}

/* =========================================================
   ANIMATED BACKGROUND PARTICLES
========================================================= */

const particles = Array.from({ length: 65 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: `${index % 4 === 0 ? 3 : index % 3 === 0 ? 2 : 1}px`,
  delay: `${(index % 9) * 0.7}s`,
  duration: `${5 + (index % 7)}s`,
}));

/* =========================================================
   PAGE
========================================================= */

export default function CareerPage() {
  const router = useRouter();

  const [industries, setIndustries] = useState([]);
  const [roles, setRoles] = useState([]);

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [notSure, setNotSure] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  /* =====================================================
     LOAD CAREER DATA
  ===================================================== */

  useEffect(() => {
    async function loadCareerData() {
      try {
        const response = await fetch("/api/career-data");
        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage("Unable to load career information.");
          return;
        }

        setIndustries(data.industries || []);
        setRoles(data.roles || []);
      } catch (error) {
        console.error("Career data error:", error);

        setMessage(
          "Something went wrong while loading career information."
        );
      } finally {
        setLoading(false);
      }
    }

    loadCareerData();
  }, []);

  /* =====================================================
     DYNAMIC ROLES
  ===================================================== */

  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) =>
        String(role.industry_id) === String(selectedIndustry)
    );
  }, [roles, selectedIndustry]);

  const selectedIndustryObject = useMemo(() => {
    return industries.find(
      (industry) =>
        String(industry.industry_id) === String(selectedIndustry)
    );
  }, [industries, selectedIndustry]);

  const selectedRoleObject = useMemo(() => {
    return filteredRoles.find(
      (role) =>
        String(role.role_id) === String(selectedRole)
    );
  }, [filteredRoles, selectedRole]);

  /* =====================================================
     INDUSTRY CHANGE
  ===================================================== */

  function handleIndustryChange(event) {
    const value = event.target.value;

    setSelectedIndustry(value);

    // Reset role whenever industry changes
    setSelectedRole("");

    // User is no longer in "not sure" mode
    setNotSure(false);

    setMessage("");
  }

  /* =====================================================
     ROLE CHANGE
  ===================================================== */

  function handleRoleChange(event) {
    setSelectedRole(event.target.value);

    setNotSure(false);
    setMessage("");
  }

  /* =====================================================
     NOT SURE
  ===================================================== */

  function handleNotSure() {
    const nextValue = !notSure;

    setNotSure(nextValue);

    if (nextValue) {
      setSelectedIndustry("");
      setSelectedRole("");
    }

    setMessage("");
  }

  /* =====================================================
     SUBMIT
  ===================================================== */

  async function handleSubmit(event) {
    event.preventDefault();

    if (!notSure && !selectedIndustry) {
      setMessage(
        "Please select an industry or choose the 'I'm not sure' option."
      );
      return;
    }

    if (!notSure && !selectedRole) {
      setMessage("Please select a career role.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/profile/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          industry_id: notSure
            ? null
            : Number(selectedIndustry),

          role_id: notSure
            ? null
            : Number(selectedRole),

          career_uncertain: notSure,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(
          data.message ||
            "Unable to save career information."
        );
        return;
      }

      setMessage(
        "Career preferences saved successfully!"
      );

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Career save error:", error);

      setMessage(
        "Something went wrong while saving your preferences."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {
    return (
      <main className="career-page career-loading">
        <div className="loading-orbit">
          <div className="loading-ring" />

          <div className="loading-core">
            <SparkleIcon />
          </div>
        </div>

        <p>Preparing your career journey...</p>
      </main>
    );
  }

  /* =====================================================
     MAIN
  ===================================================== */

  return (
    <main className="career-page">

      {/* =================================================
          ANIMATED BACKGROUND
      ================================================= */}

      <div className="space-background">
        <div className="space-grid" />

        <div className="background-glow glow-blue" />
        <div className="background-glow glow-purple" />
        <div className="background-glow glow-cyan" />

        <div className="orbit orbit-left" />
        <div className="orbit orbit-right" />

        <div className="planet planet-left" />
        <div className="planet planet-right" />

        <div className="floating-target">
          <div className="target-ring ring-1" />
          <div className="target-ring ring-2" />
          <div className="target-ring ring-3" />
          <div className="target-center" />
        </div>

        <div className="particle-layer">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="space-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        <div className="wave wave-one" />
        <div className="wave wave-two" />
        <div className="wave wave-three" />
      </div>

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="career-header">
        <div className="career-header-inner">

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="skillnet-logo"
          >
            <span>Skill</span>
            <strong>Net</strong>
          </button>

          <button
            type="button"
            className="dashboard-button"
            onClick={() => router.push("/dashboard")}
          >
            <BackIcon />
            <span>Back to Dashboard</span>
          </button>

        </div>
      </header>

      {/* =================================================
          JOURNEY
      ================================================= */}

      <div className="journey-wrapper">

        <div className="journey-title">
          YOUR SKILL JOURNEY
        </div>

        <div className="journey-track">

          <div className="journey-line" />

          <div className="journey-progress" />

          <div className="journey-step completed">
            <div className="journey-circle">
              <CheckIcon />
            </div>

            <span>Profile</span>
          </div>

          <div className="journey-step completed">
            <div className="journey-circle">
              <CheckIcon />
            </div>

            <span>Education</span>
          </div>

          <div className="journey-step active">
            <div className="journey-circle">
              <BriefcaseIcon />
            </div>

            <span>Career</span>
          </div>

          <div className="journey-step">
            <div className="journey-circle">
              <GraduationIcon />
            </div>

            <span>Skills</span>
          </div>

        </div>
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <section className="career-content">

        {/* =================================================
            INTRO
        ================================================= */}

        <div className="career-intro">

          <div className="intro-eyebrow">
            <SparkleIcon />
            CAREER DIRECTION
          </div>

          <h1>
            Where do you
            <br />
            want to <span>go?</span>
          </h1>

          <p>
            Tell SkillNet about the industry and career
            you are interested in. We will use this
            information to understand the skills and
            competencies required for your target career.
          </p>

          <div className="intro-decoration">
            <span />
            <span />
            <span />
            <span />
          </div>

        </div>

        {/* =================================================
            WHITE FORM CARD
        ================================================= */}

        <div className="career-card">

          <form onSubmit={handleSubmit}>

            {/* =============================================
                INDUSTRY
            ============================================= */}

            <section className="form-section">

              <div className="section-heading">

                <div className="section-icon blue-icon">
                  <BuildingIcon />
                </div>

                <div>
                  <div className="section-number">
                    01
                  </div>

                  <h2>
                    Preferred Industry
                  </h2>

                  <p>
                    Choose the industry that interests
                    you the most.
                  </p>
                </div>

              </div>

              <div className="select-wrapper">

                <select
                  value={selectedIndustry}
                  onChange={handleIndustryChange}
                  disabled={notSure}
                  className="career-select"
                >
                  <option value="">
                    Select an industry
                  </option>

                  {industries.map((industry) => (
                    <option
                      key={industry.industry_id}
                      value={industry.industry_id}
                    >
                      {industry.industry_name}
                    </option>
                  ))}
                </select>

                <ChevronIcon />

              </div>

            </section>

            <div className="section-divider" />

            {/* =============================================
                ROLE
            ============================================= */}

            <section className="form-section">

              <div className="section-heading">

                <div className="section-icon purple-icon">
                  <BriefcaseIcon />
                </div>

                <div>
                  <div className="section-number purple-number">
                    02
                  </div>

                  <h2>
                    Desired Career / Job Role
                  </h2>

                  <p>
                    Select the career role you want
                    to pursue.
                  </p>
                </div>

              </div>

              <div
                className={`select-wrapper ${
                  !selectedIndustry || notSure
                    ? "select-disabled"
                    : ""
                }`}
              >

                <select
                  value={selectedRole}
                  onChange={handleRoleChange}
                  disabled={
                    !selectedIndustry ||
                    filteredRoles.length === 0 ||
                    notSure
                  }
                  className="career-select"
                >

                  <option value="">
                    {!selectedIndustry
                      ? "Select an industry first"
                      : filteredRoles.length > 0
                      ? "Select a career role"
                      : "No roles available yet"}
                  </option>

                  {filteredRoles.map((role) => (
                    <option
                      key={role.role_id}
                      value={role.role_id}
                    >
                      {role.role_name}
                    </option>
                  ))}

                </select>

                <ChevronIcon />

              </div>

              {/* ROLE DESCRIPTION */}

              {selectedRoleObject ? (

                <div className="role-description active-description">

                  <div className="role-description-icon">
                    <DocumentIcon />
                  </div>

                  <div>
                    <span>
                      ABOUT THIS ROLE
                    </span>

                    <h3>
                      {selectedRoleObject.role_name}
                    </h3>

                    <p>
                      {selectedRoleObject.description ||
                        "This career path will help you build the skills and competencies required for your selected role."}
                    </p>
                  </div>

                </div>

              ) : (

                <div className="role-description">

                  <div className="role-description-icon">
                    <DocumentIcon />
                  </div>

                  <div>
                    <span>
                      ABOUT THIS ROLE
                    </span>

                    <p>
                      Select a career role to see a
                      brief description about it.
                    </p>
                  </div>

                </div>

              )}

            </section>

            <div className="section-divider" />

            {/* =============================================
                NOT SURE
            ============================================= */}

            <button
              type="button"
              onClick={handleNotSure}
              className={`discovery-card ${
                notSure ? "discovery-selected" : ""
              }`}
            >

              <div className="discovery-icon">
                <CompassIcon />
              </div>

              <div className="discovery-content">

                <div className="discovery-title">

                  <h2>
                    Not sure what career to choose?
                  </h2>

                  <span>
                    RECOMMENDED
                  </span>

                </div>

                <p>
                  That&apos;s completely fine. SkillNet
                  can later analyze your education,
                  interests and skills to help you
                  explore suitable career paths.
                </p>

              </div>

              <div
                className={`discovery-toggle ${
                  notSure ? "toggle-on" : ""
                }`}
              >
                <div />
              </div>

            </button>

            {/* =============================================
                MESSAGE
            ============================================= */}

            {message && (
              <div
                className={`career-message ${
                  message.includes("successfully")
                    ? "message-success"
                    : "message-error"
                }`}
              >

                <div className="message-icon">

                  {message.includes("successfully") ? (
                    <CheckIcon />
                  ) : (
                    <XIcon />
                  )}

                </div>

                <span>
                  {message}
                </span>

              </div>
            )}

            {/* =============================================
                ACTIONS
            ============================================= */}

            <div className="form-actions">

              <button
                type="button"
                onClick={() => router.push("/profile")}
                className="previous-button"
              >
                <BackIcon />
                Previous
              </button>

              <button
                type="submit"
                disabled={saving}
                className="continue-button"
              >

                <span>
                  {saving
                    ? "Saving..."
                    : "Continue"}
                </span>

                {!saving && <ArrowIcon />}

              </button>

            </div>

          </form>

        </div>

      </section>

      {/* =================================================
          BOTTOM JOURNEY
      ================================================= */}

      <div className="bottom-journey">

        <div className="bottom-step done">
          <div>
            <UserIcon />
          </div>

          <span>Profile</span>
        </div>

        <span className="bottom-line" />

        <div className="bottom-step done">
          <div>
            <GraduationIcon />
          </div>

          <span>Education</span>
        </div>

        <span className="bottom-line" />

        <div className="bottom-step current">
          <div>
            <BriefcaseIcon />
          </div>

          <span>Career</span>
        </div>

        <span className="bottom-line" />

        <div className="bottom-step">
          <div>
            <SparkleIcon />
          </div>

          <span>Skills</span>
        </div>

      </div>

    </main>
  );
}
