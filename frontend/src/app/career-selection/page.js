"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./career-selection.css";

/* =========================================================
   ICONS
========================================================= */

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
      <path d="M7 12.2V16c2.8 2.4 7.2 2.4 10 0v-3.8" />
      <path d="M21 10v5" />
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
      <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
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
      <path d="m11 6-6 6 6 6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19H2" />
      <path d="m4 7 5-3 5 4 6-5" />
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 20 4.2-1 10.6-10.6a2.1 2.1 0 0 0-3-3L5.2 16 4 20Z" />
      <path d="m14 7 3 3" />
      <path d="M4 20h5" />
    </svg>
  );
}

function DevOpsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 8c0-2.5 3-3 5-1l6 4c2 1.3 5 .5 5-2 0-2.5-3-3-5-1l-6 4c-2 1.3-5 .5-5-2Z" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3Z" />
      <path d="m8.5 12 2.3 2.3 4.8-5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 8.8c0 5-8.8 10.2-8.8 10.2S3.2 13.8 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 9h18" />
      <path d="M5 9v9M9 9v9M15 9v9M19 9v9" />
      <path d="M3 18h18M12 3l9 5H3l9-5Z" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16v14H4z" />
      <path d="M8 5v14M12 9h5M12 13h5" />
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4 11 14-5v12L4 14v-3Z" />
      <path d="M18 9.5c2 .5 3 1.7 3 3.5s-1 3-3 3.5" />
      <path d="m7 15 1.5 5" />
    </svg>
  );
}

function MediaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m10 9 5 3-5 3V9Z" />
    </svg>
  );
}

function ConsultingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-4 2.3-6 6-6s6 2 6 6" />
      <path d="M15 15c3.2.2 5 1.8 5 5" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}

/* =========================================================
   ICON MAPPING
========================================================= */

const industryIconMap = {
  technology: CodeIcon,
  finance: FinanceIcon,
  healthcare: HeartIcon,
  education: EducationIcon,
  engineering: DesignIcon,
  marketing: MarketingIcon,
  media: MediaIcon,
  design: DesignIcon,
  consulting: ConsultingIcon,
};

const roleIconMap = {
  software: CodeIcon,
  developer: CodeIcon,
  data: DataIcon,
  scientist: DataIcon,
  product: ProductIcon,
  design: DesignIcon,
  devops: DevOpsIcon,
  cyber: SecurityIcon,
  security: SecurityIcon,
};

function getIndustryIcon(name = "") {
  const value = name.toLowerCase();

  const key = Object.keys(industryIconMap).find((item) =>
    value.includes(item)
  );

  return industryIconMap[key] || MoreIcon;
}

function getRoleIcon(name = "") {
  const value = name.toLowerCase();

  const key = Object.keys(roleIconMap).find((item) =>
    value.includes(item)
  );

  return roleIconMap[key] || BriefcaseIcon;
}

/* =========================================================
   PAGE
========================================================= */

export default function CareerSelectionPage() {
  const router = useRouter();

  const [industries, setIndustries] = useState([]);
  const [roles, setRoles] = useState([]);

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [notSure, setNotSure] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  /* =======================================================
     LOAD DATA
  ======================================================= */

  useEffect(() => {
    async function loadCareerData() {
      try {
        const response = await fetch("/api/career-options");
        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage(
            data.message || "Unable to load career options."
          );
          return;
        }

        setIndustries(data.industries || []);
        setRoles(data.roles || []);

        const profileResponse = await fetch("/api/profile");
        const profileData = await profileResponse.json();

        if (profileResponse.ok && profileData.success) {
          const profile = profileData.profile;

          if (profile.industry_id) {
            setSelectedIndustry(String(profile.industry_id));
          }

          if (profile.role_id) {
            setSelectedRole(String(profile.role_id));
          }

          if (profile.career_uncertain === true) {
            setNotSure(true);
          }
        }
      } catch (error) {
        console.error("Career data loading error:", error);
        setMessage("Unable to load career options.");
      } finally {
        setLoading(false);
      }
    }

    loadCareerData();
  }, []);

  /* =======================================================
     HANDLERS
  ======================================================= */

  function handleIndustryChange(value) {
    setSelectedIndustry(String(value));
    setSelectedRole("");
    setNotSure(false);
    setMessage("");
  }

  function handleRoleChange(value) {
    setSelectedRole(String(value));
    setNotSure(false);
    setMessage("");
  }

  function handleNotSureChange() {
    const checked = !notSure;

    setNotSure(checked);

    if (checked) {
      setSelectedIndustry("");
      setSelectedRole("");
    }

    setMessage("");
  }

  /* =======================================================
     FILTER ROLES
  ======================================================= */

  const filteredRoles = useMemo(() => {
    return roles.filter(
      (role) =>
        String(role.industry_id) === String(selectedIndustry)
    );
  }, [roles, selectedIndustry]);

  const selectedIndustryObject = industries.find(
    (industry) =>
      String(industry.industry_id) === String(selectedIndustry)
  );

  /* =======================================================
     SUBMIT
  ======================================================= */

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    if (!notSure && !selectedIndustry) {
      setMessage(
        "Please select an industry or choose 'Not sure yet'."
      );
      return;
    }

    if (!notSure && !selectedRole) {
      setMessage("Please select a career role.");
      return;
    }

    setSaving(true);

    try {
      const response = await fetch("/api/career-selection", {
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
            "Unable to save career preference."
        );
        return;
      }

      setMessage(
        "Career preference saved successfully!"
      );

      setTimeout(() => {
        router.push("/skills");
      }, 800);
    } catch (error) {
      console.error(
        "Career selection save error:",
        error
      );

      setMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="sn-page sn-loading">
        <div className="sn-loader">
          <div className="sn-loader-ring" />
          <p>Preparing your career journey...</p>
        </div>
      </main>
    );
  }

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="sn-page">
      {/* BACKGROUND */}

      <div className="sn-stars" />
      <div className="sn-glow sn-glow-left" />
      <div className="sn-glow sn-glow-right" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sn-header">
        <div className="sn-header-inner">

          <button
            type="button"
            className="sn-logo"
            onClick={() =>
              router.push("/dashboard")
            }
          >
            <span>Skill</span>
            <strong>Net</strong>
          </button>

          <div className="sn-progress-wrapper">
            <span className="sn-progress-title">
              YOUR SKILL JOURNEY
            </span>

            <div className="sn-progress-row">
              <div className="sn-progress">
                <div className="sn-progress-line">
                  <div className="sn-progress-fill" />
                </div>

                <span className="sn-progress-node active">
                  <i />
                </span>

                <span className="sn-progress-node">
                  <i />
                </span>
              </div>

              <strong className="sn-progress-number">
                2 of 4
              </strong>
            </div>
          </div>

          <div className="sn-career-status">
            <span className="sn-status-light" />
            Career Setup
          </div>
        </div>

        {/* HERO DECORATIONS */}

        <div className="sn-orbit sn-orbit-one" />
        <div className="sn-orbit sn-orbit-two" />

        <span className="sn-floating-star star-a">
          ✦
        </span>

        <span className="sn-floating-star star-b">
          •
        </span>

        <span className="sn-floating-star star-c">
          ✦
        </span>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <section className="sn-main">

        {/* ===================================================
            LEFT HERO
        =================================================== */}

        <aside className="sn-left">

          <div className="sn-step-pill">
            <span>
              <SparkleIcon />
            </span>

            STEP 2 OF YOUR SKILL JOURNEY
          </div>

          <h1>
            Choose your
            <br />
            <span>career direction.</span>
          </h1>

          <p className="sn-hero-description">
            Tell us where you see yourself. We&apos;ll
            connect your interests to the skills,
            learning paths and opportunities that move
            you closer to becoming industry-ready.
          </p>

          {/* =================================================
              ANIMATED GRADUATION ILLUSTRATION
          ================================================= */}

          <div className="sn-cap-scene">

            <div className="sn-cap-orbit orbit-a" />
            <div className="sn-cap-orbit orbit-b" />
            <div className="sn-cap-orbit orbit-c" />

            <div className="sn-cap-stars">
              <span>✦</span>
              <span>•</span>
              <span>✦</span>
            </div>

            <div className="sn-floating-icons">
              <span className="float-icon icon-briefcase">
                <BriefcaseIcon />
              </span>

              <span className="float-icon icon-chart">
                <DataIcon />
              </span>

              <span className="float-icon icon-user">
                <ConsultingIcon />
              </span>

              <span className="float-icon icon-target">
                <CompassIcon />
              </span>
            </div>

            <div className="sn-cap-platform">

              <div className="sn-platform-ring ring-one" />
              <div className="sn-platform-ring ring-two" />
              <div className="sn-platform-ring ring-three" />

              <div className="sn-platform-glow" />

              <div className="sn-graduation-cap">

                <div className="cap-top">
                  <span className="cap-shine" />
                </div>

                <div className="cap-base" />

                <div className="cap-tassel">
                  <span />
                  <i />
                </div>

              </div>

              <div className="sn-cap-light" />

            </div>
          </div>

          {/* =================================================
              JOURNEY STEPS
          ================================================= */}

          <div className="sn-journey-steps">

            <div className="sn-journey-line" />

            <div className="journey-step completed">
              <span className="journey-circle">
                ✓
              </span>
              <small>Profile</small>
            </div>

            <div className="journey-step current">
              <span className="journey-circle">
                ▪
              </span>
              <small>Career</small>
            </div>

            <div className="journey-step">
              <span className="journey-circle">
                ♧
              </span>
              <small>Skills</small>
            </div>

            <div className="journey-step">
              <span className="journey-circle">
                ⚑
              </span>
              <small>Roadmap</small>
            </div>

          </div>
        </aside>

        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="sn-right">

          <form
            onSubmit={handleSubmit}
            className="sn-form"
          >

            {/* =================================================
                INDUSTRY
            ================================================= */}

            <section className="sn-white-card industry-card">

              <div className="sn-card-heading">

                <div className="sn-big-icon blue">
                  <GraduationIcon />
                </div>

                <div>
                  <div className="sn-card-title-row">
                    <span className="sn-number">
                      01
                    </span>

                    <h2>
                      What field interests you?
                    </h2>
                  </div>

                  <p>
                    Select the industry you&apos;d like
                    to explore.
                  </p>
                </div>

              </div>

              <div className="sn-industry-grid">

                {industries.map((industry) => {
                  const selected =
                    String(
                      industry.industry_id
                    ) ===
                    String(selectedIndustry);

                  const IndustryIcon =
                    getIndustryIcon(
                      industry.industry_name
                    );

                  return (
                    <button
                      type="button"
                      key={
                        industry.industry_id
                      }
                      className={`sn-industry ${
                        selected
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        handleIndustryChange(
                          industry.industry_id
                        )
                      }
                      disabled={notSure}
                    >

                      <span
                        className={`industry-icon-box ${
                          selected
                            ? "active-icon"
                            : ""
                        }`}
                      >
                        <IndustryIcon />
                      </span>

                      <span className="industry-name">
                        {
                          industry.industry_name
                        }
                      </span>

                      {selected && (
                        <span className="industry-check">
                          <CheckIcon />
                        </span>
                      )}

                    </button>
                  );
                })}

              </div>

            </section>

            {/* =================================================
                ROLE
            ================================================= */}

            <section
              className={`sn-white-card role-card ${
                !selectedIndustry ||
                notSure
                  ? "muted-card"
                  : ""
              }`}
            >

              <div className="sn-card-heading">

                <div className="sn-big-icon blue">
                  <BriefcaseIcon />
                </div>

                <div>
                  <div className="sn-card-title-row">
                    <span className="sn-number">
                      02
                    </span>

                    <h2>
                      What role are you aiming for?
                    </h2>
                  </div>

                  <p>
                    {selectedIndustryObject
                      ? `Choose a role within ${selectedIndustryObject.industry_name}.`
                      : "Choose an industry first to see relevant roles."}
                  </p>
                </div>

              </div>

              {selectedIndustry &&
              !notSure &&
              filteredRoles.length > 0 ? (
                <div className="sn-role-grid">

                  {filteredRoles.map((role) => {
                    const selected =
                      String(role.role_id) ===
                      String(selectedRole);

                    const RoleIcon =
                      getRoleIcon(
                        role.role_name
                      );

                    return (
                      <button
                        type="button"
                        key={role.role_id}
                        className={`sn-role ${
                          selected
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleRoleChange(
                            role.role_id
                          )
                        }
                      >

                        <span className="sn-role-icon">
                          <RoleIcon />
                        </span>

                        <span className="sn-role-info">
                          <strong>
                            {role.role_name}
                          </strong>

                          <small>
                            {selected
                              ? "Selected role"
                              : "Career path"}
                          </small>
                        </span>

                        <span className="sn-role-arrow">
                          <ArrowIcon />
                        </span>

                        {selected && (
                          <span className="sn-role-check">
                            <CheckIcon />
                          </span>
                        )}

                      </button>
                    );
                  })}

                </div>
              ) : (
                <div className="sn-role-empty">

                  <span>
                    <CompassIcon />
                  </span>

                  <div>
                    <strong>
                      Your role options will appear here
                    </strong>

                    <p>
                      Choose an industry above
                      to continue.
                    </p>
                  </div>

                </div>
              )}

            </section>

            {/* =================================================
                NOT SURE
            ================================================= */}

            <button
              type="button"
              className={`sn-discovery ${
                notSure
                  ? "selected"
                  : ""
              }`}
              onClick={
                handleNotSureChange
              }
            >

              <span className="sn-discovery-icon">
                <CompassIcon />
              </span>

              <span className="sn-discovery-copy">

                <span className="sn-discovery-title">
                  I&apos;m not sure yet

                  <span className="recommended">
                    RECOMMENDED
                  </span>
                </span>

                <span className="sn-discovery-description">
                  No problem. Let SkillNet help you
                  discover career paths that fit your
                  interests and strengths.
                </span>

              </span>

              <span
                className={`sn-toggle ${
                  notSure
                    ? "on"
                    : ""
                }`}
              >
                <span />
              </span>

            </button>

            {/* =================================================
                MESSAGE
            ================================================= */}

            {message && (
              <div
                className={`sn-message ${
                  message.includes(
                    "successfully"
                  )
                    ? "success"
                    : "error"
                }`}
              >

                <span>
                  {message.includes(
                    "successfully"
                  )
                    ? "✓"
                    : "!"}
                </span>

                {message}

              </div>
            )}

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="sn-bottom">

              <button
                type="button"
                className="sn-back"
                onClick={() =>
                  router.push(
                    "/dashboard"
                  )
                }
              >
                <BackArrowIcon />
                Back
              </button>

              <div className="sn-personalized">
                <span>✦</span>
                Personalized for you
              </div>

              <button
                type="submit"
                className="sn-continue"
                disabled={saving}
              >

                <span>
                  {saving
                    ? "Saving..."
                    : "Continue"}
                </span>

                {!saving && (
                  <ArrowIcon />
                )}

              </button>

            </div>

          </form>

        </div>
      </section>

    </main>
  );
}
