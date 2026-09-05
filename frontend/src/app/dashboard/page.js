"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./dashboard.css";

const groups = [
  ["", [["dashboard", "home", "Dashboard"]]],
  [
    "My development",
    [
      ["skills", "skills", "My Skills", "/current-skills"],
      ["assessment", "assessment", "Skill Assessment", "/skill-assessment"],
      ["gaps", "gap", "Skill Gap Analysis", "/assessment/result"],
      ["roadmap", "roadmap", "Learning Roadmap", "/career-selection"],
      ["programs", "book", "Learning Programs"],
    ],
  ],
  [
    "Opportunities",
    [
      ["opportunities", "briefcase", "Internships & Projects"],
      ["portfolio", "folder", "My Portfolio", "/profile"],
    ],
  ],
  ["Progress", [["progress", "chart", "My Progress", "/assessment/result"]]],
  [
    "Account",
    [
      ["profile", "user", "My Profile", "/profile"],
      ["notifications", "bell", "Notifications"],
      ["settings", "settings", "Settings"],
    ],
  ],
];

const copy = {
  gaps: [
    "Skill Gap Analysis",
    "Complete a skill assessment to see your strengths, priority gaps, and industry-required skills.",
  ],
  programs: [
    "Learning Programs",
    "Curated courses and practical activities will appear here based on your selected career path.",
  ],
  opportunities: [
    "Internships & Projects",
    "Once your skill profile is ready, discover opportunities that match your strengths and learning goals.",
  ],
  portfolio: [
    "My Portfolio",
    "Showcase projects, certifications, achievements, and your resume in one industry-ready profile.",
  ],
  progress: [
    "My Progress",
    "Track your assessments, completed learning, and progress toward industry readiness.",
  ],
  notifications: [
    "Notifications",
    "You are all caught up. New assessments, program recommendations, and opportunity updates will appear here.",
  ],
  settings: [
    "Settings",
    "Manage your account, password, and notification preferences from your student workspace.",
  ],
};

export default function DashboardPage() {
  const router = useRouter();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [drawer, setDrawer] = useState(false);
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/me");
        const result = await response.json();

        if (!result.success) {
          return router.push("/login");
        }

        setStudent(result.student);
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [router]);

  useEffect(() => {
    async function checkCareer() {
      try {
        const response = await fetch("/api/profile");
        const result = await response.json();

        if (
          response.ok &&
          result.success &&
          ((!result.profile.industry_id && !result.profile.role_id) ||
            result.profile.career_uncertain)
        ) {
          router.push("/career-selection");
        }
      } catch (error) {
        console.error("Career selection check error:", error);
      }
    }

    checkCareer();
  }, [router]);

  async function logout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  function choose(item) {
    setDrawer(false);

    if (item[3]) {
      return router.push(item[3]);
    }

    setActive(item[0]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (loading) {
    return (
      <main className="dashboard-loading">
        Loading your workspace...
      </main>
    );
  }

  if (!student) {
    return (
      <main className="dashboard-loading">
        Please log in to access your dashboard.
      </main>
    );
  }

  const firstName = student.full_name?.split(" ")[0] || "Student";

  return (
    <main className="dashboard-page">
      <header className="dashboard-header">

        {/* LEFT SIDE */}
        <div className="header-left">
          <button
            className="menu-button"
            type="button"
            onClick={() => setDrawer(true)}
            aria-label="Open navigation menu"
          >
            <Icon name="menu" />
          </button>

          <button
            className="brand-button"
            type="button"
            onClick={() => setActive("dashboard")}
          >
            Skill<span>Net</span>
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="header-actions">

          <button
            className="notification-button"
            type="button"
            onClick={() => setActive("notifications")}
            aria-label="Open notifications"
          >
            <Icon name="bell" />
            <i />
          </button>

          <button
            className="avatar-button"
            type="button"
            onClick={() => router.push("/profile")}
            aria-label="Open profile"
          >
            {firstName[0]}
          </button>

        </div>
      </header>

      {/* SIDE DRAWER */}
      <aside className={`dashboard-drawer ${drawer ? "open" : ""}`}>

        <div className="drawer-head">
          <button
            className="brand-button"
            type="button"
            onClick={() => choose(["dashboard"])}
          >
            Skill<span>Net</span>
          </button>

          <button
            className="drawer-close"
            type="button"
            onClick={() => setDrawer(false)}
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        <p className="drawer-caption">
          STUDENT WORKSPACE
        </p>

        <nav>
          {groups.map(([label, items]) => (
            <section
              className="nav-group"
              key={label || "home"}
            >
              {label && <p>{label}</p>}

              {items.map((item) => (
                <button
                  type="button"
                  key={item[0]}
                  className={
                    active === item[0]
                      ? "nav-item active"
                      : "nav-item"
                  }
                  onClick={() => choose(item)}
                >
                  <span>
                    <Icon name={item[1]} />
                  </span>

                  {item[2]}
                </button>
              ))}
            </section>
          ))}
        </nav>

        <button
          className="logout-button"
          type="button"
          onClick={logout}
        >
          <span>
            <Icon name="logout" />
          </span>

          Logout
        </button>
      </aside>

      {drawer && (
        <button
          className="drawer-backdrop"
          type="button"
          onClick={() => setDrawer(false)}
          aria-label="Close navigation menu"
        />
      )}

      <section className="dashboard-content">
        {copy[active] ? (
          <Placeholder
            title={copy[active][0]}
            description={copy[active][1]}
            onClick={() => setActive("dashboard")}
          />
        ) : (
          <Home
            student={student}
            firstName={firstName}
            router={router}
          />
        )}
      </section>
    </main>
  );
}

function Home({ student, firstName, router }) {
  return (
    <>
      <section className="welcome-row">
        <div>
          <p className="eyebrow">
            YOUR SKILL JOURNEY
          </p>

          <h1>
            Good to see you, {firstName}
            <span>!</span>
          </h1>

          <p className="welcome-copy">
            Build the skills that turn your ambition
            into industry readiness.
          </p>
        </div>

        <button
          className="outline-action"
          type="button"
          onClick={() => router.push("/profile")}
        >
          <Icon name="user" />
          My Profile
        </button>
      </section>

      {/* READINESS CARD - KEEPING ORIGINAL BLUE THEME */}
      <section className="readiness-card">
        <div className="readiness-copy">
          <p className="eyebrow">
            INDUSTRY READINESS
          </p>

          <h2>
            Your journey starts here.
          </h2>

          <p>
            Set your career direction, add your
            current skills, and take an assessment
            to unlock your personal learning roadmap.
          </p>

          <button
            className="primary-action"
            type="button"
            onClick={() => router.push("/career-selection")}
          >
            Continue your journey
            <Icon name="arrow" />
          </button>
        </div>

        <div className="readiness-orbit">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />

          <div className="readiness-score">
            <strong>01</strong>
            <span>
              START
              <br />
              HERE
            </span>
          </div>

          <i className="orbit-dot dot-a" />
          <i className="orbit-dot dot-b" />
          <i className="orbit-dot dot-c" />
        </div>
      </section>

      {/* METRICS */}
      <section className="metric-grid">
        <Metric
          icon="skills"
          title="Skill readiness"
          value="Getting started"
          detail="Add your current skills"
        />

        <Metric
          icon="assessment"
          title="Assessments"
          value="Pending"
          detail="Discover your skill level"
        />

        <Metric
          icon="chart"
          title="Learning progress"
          value="0%"
          detail="Your roadmap is waiting"
        />
      </section>

      {/* LOWER CONTENT */}
      <section className="dashboard-grid">

        <article className="journey-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                YOUR PATH
              </p>

              <h2>
                Skill development flow
              </h2>
            </div>

            <span className="status-pill">
              IN PROGRESS
            </span>
          </div>

          <div className="journey-steps">

            <Step
              number="1"
              complete
              title="Complete your profile"
              text={`${student.college || "Add your college"} · ${
                student.course || "Add your course"
              }`}
              action="Edit profile"
              click={() => router.push("/profile")}
            />

            <Step
              number="2"
              title="Choose your career direction"
              text="Tell us what role you want to work toward."
              action="Choose career"
              click={() => router.push("/career-selection")}
            />

            <Step
              number="3"
              title="Add your current skills"
              text="Share what you already know."
              action="My skills"
              click={() => router.push("/skills")}
            />

            <Step
              number="4"
              title="Take your skill assessment"
              text="Identify strengths and gaps."
              action="Start assessment"
              click={() => router.push("/skill-assessment")}
            />

          </div>
        </article>

        <article className="activity-card">
          <p className="eyebrow">
            RECENT ACTIVITY
          </p>

          <h2>
            Keep your momentum going
          </h2>

          <div className="empty-activity">
            <span>
              <Icon name="spark" />
            </span>

            <p>
              Your completed actions and assessment
              results will appear here.
            </p>
          </div>

          <button
            className="text-action"
            type="button"
            onClick={() => router.push("/skills")}
          >
            Explore my skills
            <Icon name="arrow" />
          </button>
        </article>

      </section>
    </>
  );
}

function Metric({ icon, title, value, detail }) {
  return (
    <article className="metric-card">
      <span className="metric-icon">
        <Icon name={icon} />
      </span>

      <p>{title}</p>

      <strong>{value}</strong>

      <small>{detail}</small>
    </article>
  );
}

function Step({
  number,
  complete,
  title,
  text,
  action,
  click,
}) {
  return (
    <div className="journey-step">
      <div
        className={
          complete
            ? "step-number complete"
            : "step-number"
        }
      >
        {complete ? (
          <Icon name="check" />
        ) : (
          number
        )}
      </div>

      <div>
        <h3>{title}</h3>

        <p>{text}</p>

        <button
          type="button"
          onClick={click}
        >
          {action}
          <Icon name="arrow" />
        </button>
      </div>
    </div>
  );
}

function Placeholder({
  title,
  description,
  onClick,
}) {
  return (
    <section className="placeholder-section">
      <p className="eyebrow">
        STUDENT WORKSPACE
      </p>

      <h1>{title}</h1>

      <p className="placeholder-description">
        {description}
      </p>

      <div className="placeholder-card">
        <span>
          <Icon name="spark" />
        </span>

        <h2>
          Personalized for your journey
        </h2>

        <p>
          Finish your profile, career selection,
          skills, and assessment to unlock
          recommendations built around you.
        </p>

        <button
          className="primary-action"
          type="button"
          onClick={onClick}
        >
          Back to dashboard
          <Icon name="arrow" />
        </button>
      </div>
    </section>
  );
}

function Icon({ name }) {
  const paths = {
    home: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
        <path d="M9 21v-7h6v7" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),

    skills: (
      <>
        <path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),

    assessment: (
      <>
        <path d="M7 3h10l2 2v16H5V5l2-2Z" />
        <path d="M9 10h6M9 14h6M9 18h3" />
      </>
    ),

    gap: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),

    roadmap: (
      <>
        <path d="M4 19c5-1 3-10 8-10s3 9 8 8" />
        <path d="m17 14 3 3-3 3" />
      </>
    ),

    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
        <path d="M4 5.5v16M8 7h8" />
      </>
    ),

    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),

    folder: (
      <path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    ),

    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 9 6-5 6 4 5-6" />
      </>
    ),

    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 22h4" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 2-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.8v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-2-2 .1-.1A1.7 1.7 0 0 0 7.4 15a1.7 1.7 0 0 0-1.5-1H5.7v-2.8h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L7 8.2l2-2 .1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.8v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 2 2-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" />
      </>
    ),

    logout: (
      <>
        <path d="M10 17l5-5-5-5M15 12H3" />
        <path d="M13 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </>
    ),

    check: (
      <path d="m5 12 4 4L19 6" />
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),

    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),

    spark: (
      <path d="m12 2 1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9Z" />
    ),
  };

  return (
    <svg
      className="ui-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
