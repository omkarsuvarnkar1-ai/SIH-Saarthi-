import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Icon = ({ name, size = 26, stroke = 2, color = "currentColor" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    arrow: (
      <svg {...common} viewBox="0 0 28 16" fill="none">
        <path
          d="M1 8h23M18.5 2.5 24 8l-5.5 5.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    star: (
      <svg {...common} fill={color} strokeWidth="0">
        <path d="m12 2 2.3 6.1L21 10.4l-5.2 3.7 1.9 6.2-5.7-3.7-5.7 3.7 1.9-6.2L3 10.4l6.7-2.3L12 2Z" />
      </svg>
    ),
    graduation: (
      <svg {...common} viewBox="0 0 24 24" fill={color} stroke="none">
        <path d="M2.2 8.45 12 3l9.8 5.45L12 13.9 2.2 8.45Z" />
        <path d="M5.45 11.05V16c0 1.95 3.15 3.55 6.55 3.55s6.55-1.6 6.55-3.55v-4.95L12 14.65l-6.55-3.6Z" />
        <path d="M21 9.25v6.25c0 .55-.45 1-1 1s-1-.45-1-1V10.35l2-1.1Z" />
        <path fill="#fff" d="M8.2 9.14 12 7.03l3.8 2.11L12 11.25 8.2 9.14Z" opacity=".9" />
      </svg>
    ),
    academy: (
      <svg {...common} viewBox="0 0 24 24" fill={color} stroke="none">
        <path d="m2 9 10-5 10 5v1.8H2V9Z" />
        <path d="M4.2 12.2h3v6.25h-3v-6.25ZM10.5 12.2h3v6.25h-3v-6.25ZM16.8 12.2h3v6.25h-3v-6.25Z" />
        <path d="M2 20h20v2H2z" />
        <path fill="#fff" d="M10.75 6.6h2.5v2.2h-2.5z" opacity=".92" />
      </svg>
    ),
    educator: (
      <svg {...common} viewBox="0 0 24 24" fill={color} stroke="none">
        <circle cx="9.25" cy="7.2" r="3.45" />
        <path d="M2.5 19.8c.2-4.25 2.68-6.65 6.75-6.65S15.8 15.55 16 19.8H2.5Z" />
        <path d="M17.25 10.1h1.25v2.35h2.35v1.25H18.5v2.35h-1.25V13.7H14.9v-1.25h2.35V10.1Z" />
        <path fill="#fff" d="M8 16.1h2.5v3.7H8z" opacity=".82" />
      </svg>
    ),
    briefcase: (
      <svg {...common} viewBox="0 0 24 24" fill={color} stroke="none">
        <path d="M8 4.1c0-1.15.95-2.1 2.1-2.1h3.8C15.05 2 16 2.95 16 4.1V6h3.35C20.8 6 22 7.2 22 8.65v10.7c0 1.45-1.2 2.65-2.65 2.65H4.65C3.2 22 2 20.8 2 19.35V8.65C2 7.2 3.2 6 4.65 6H8V4.1Zm2.1.4v1.45h3.8V4.5h-3.8Z" />
        <path fill="#fff" d="M2 11.1h20v3.15H2z" opacity=".96" />
        <path d="M9.15 10.55h5.7v3.9h-5.7z" fill={color} />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    book: (
      <svg {...common}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M12 2v15" />
      </svg>
    ),
    chart: (
      <svg {...common}>
        <path d="M3 3v18h18" />
        <path d="m7 15 4-4 3 3 6-7" />
        <path d="M16 7h4v4" />
      </svg>
    ),
    rocket: (
      <svg {...common}>
        <path d="M4.5 16.5c-1.2 1-1.7 3-1.5 4.5 1.5.2 3.5-.3 4.5-1.5" />
        <path d="m9 15-4-4c2.7-5.8 7.5-8.6 15-8 0 7.5-2.2 12.3-8 15l-3-3Z" />
        <circle cx="14.5" cy="8.5" r="1.7" />
        <path d="m9 15-2 2M5 11l2-2" />
      </svg>
    ),
    building: (
      <svg {...common}>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M2 21h20M8 8h1M15 8h1M8 12h1M15 12h1M8 16h1M15 16h1" />
      </svg>
    ),
    presentation: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4M9 9l3 2 3-2M12 11v3" />
      </svg>
    ),
    folder: (
      <svg {...common}>
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
        <path d="M8 13h8M12 9v8" />
      </svg>
    ),
    award: (
      <svg {...common}>
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
        <path d="m10 8 1.3 1.3L14.5 6" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  };

  return icons[name] || null;
};

const CircleIcon = ({ name, color, softColor }) => (
  <div className="circle-icon" style={{ color, background: softColor }}>
    <Icon name={name} size={29} stroke={2.25} />
  </div>
);

const HeroVisualIcon = ({ type }) => {
  const svgProps = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  if (type === "graduation") {
    return (
      <svg {...svgProps}>
        <path d="M2.2 8.4 12 3l9.8 5.4L12 13.8 2.2 8.4Z" fill="#FFFFFF" />
        <path d="M5.5 11.1v4.8c0 2.1 2.9 3.7 6.5 3.7s6.5-1.6 6.5-3.7v-4.8L12 14.7l-6.5-3.6Z" fill="#FFFFFF" />
        <path d="M20.4 9.2v6.2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "academy") {
    return (
      <svg {...svgProps}>
        <path d="m2 9 10-5 10 5v2H2V9Z" fill="#FFFFFF" />
        <path d="M4.2 12h3v6h-3v-6ZM10.5 12h3v6h-3v-6ZM16.8 12h3v6h-3v-6Z" fill="#FFFFFF" />
        <path d="M2 20h20v2H2z" fill="#FFFFFF" />
        <circle cx="12" cy="7.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "educator") {
    return (
      <svg {...svgProps}>
        <circle cx="9" cy="7" r="3.4" fill="#FFFFFF" />
        <path d="M2.4 19.8c.25-4.3 2.65-6.7 6.6-6.7 4 0 6.45 2.4 6.65 6.7H2.4Z" fill="#FFFFFF" />
        <path d="M18.1 9.2v2.8h2.8v1.8h-2.8v2.8h-1.8v-2.8h-2.8V12h2.8V9.2h1.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  return (
    <svg {...svgProps}>
      <path d="M8.3 5.7V4.5c0-1.35 1.1-2.45 2.45-2.45h2.5c1.35 0 2.45 1.1 2.45 2.45v1.2h3.5A2.8 2.8 0 0 1 22 8.5v10.7A2.8 2.8 0 0 1 19.2 22H4.8A2.8 2.8 0 0 1 2 19.2V8.5a2.8 2.8 0 0 1 2.8-2.8h3.5Zm2.25 0h2.9V4.6c0-.35-.25-.6-.6-.6h-1.7c-.35 0-.6.25-.6.6v1.1Z" fill="#FFFFFF" />
      <path d="M2 11.1h20v3.2H2z" fill="currentColor" />
      <path d="M9.2 10.7h5.6v4h-5.6z" fill="#FFFFFF" />
    </svg>
  );
};

const HeroCard = ({ icon, title, text, softColor, className }) => (
  <article className={`hero-card ${className || ""}`}>
    <div className="hero-icon" style={{ background: softColor }}>
      <HeroVisualIcon type={icon} />
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </article>
);

const StepArrow = () => (
  <svg
    className="step-arrow-svg"
    width="58"
    height="18"
    viewBox="0 0 58 18"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line
      x1="2"
      y1="9"
      x2="49"
      y2="9"
      stroke="#2364F7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M43 3 L49 9 L43 15"
      fill="none"
      stroke="#2364F7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EcosystemCard = ({ icon, title, text, color, softColor }) => (
  <article className="ecosystem-card">
    <CircleIcon name={icon} color={color} softColor={softColor} />
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span style={{ background: color }} />
    </div>
  </article>
);

const PlatformCard = ({ icon, title, text, color, softColor }) => (
  <article className="platform-card">
    <CircleIcon name={icon} color={color} softColor={softColor} />
    <h3>{title}</h3>
    <p>{text}</p>
  </article>
);

export default function Home() {
  const steps = [
    {
      icon: "educator",
      color: "#3946f4",
      softColor: "#e5e9ff",
      title: "1. Join",
      text: "Students, educators, and institutions create their SkillNet profile.",
    },
    {
      icon: "book",
      color: "#1267ff",
      softColor: "#e5f0ff",
      title: "2. Learn & Engage",
      text: "Access industry-aligned resources, courses, and mentorship.",
    },
    {
      icon: "chart",
      color: "#08aaa6",
      softColor: "#e1f8f5",
      title: "3. Collaborate",
      text: "Work on projects, share knowledge, and solve real-world problems.",
    },
    {
      icon: "rocket",
      color: "#ed256e",
      softColor: "#ffebf2",
      title: "4. Grow & Succeed",
      text: "Build skills, get recognized, and unlock career opportunities.",
    },
  ];

  const ecosystem = [
    {
      icon: "users",
      title: "Students",
      text: "Gain practical skills and real-world exposure to become industry-ready.",
      color: "#6a26ff",
      softColor: "#f0eaff",
    },
    {
      icon: "academy",
      title: "Academia",
      text: "Design curriculum that meets industry needs and future demands.",
      color: "#1567ff",
      softColor: "#e8f2ff",
    },
    {
      icon: "presentation",
      title: "Educators",
      text: "Empower learners with knowledge, mentorship, and guidance.",
      color: "#ff7c16",
      softColor: "#fff2e4",
    },
    {
      icon: "briefcase",
      title: "Industry",
      text: "Collaborate, mentor, and build the next generation of professionals.",
      color: "#11b879",
      softColor: "#e5f9f0",
    },
  ];

  const platform = [
    {
      icon: "graduation",
      title: "Courses",
      text: "Industry-aligned courses to build job-ready skills.",
      color: "#6928ff",
      softColor: "#f0ebff",
    },
    {
      icon: "educator",
      title: "Mentorship",
      text: "Learn from experienced and industry professionals.",
      color: "#126cff",
      softColor: "#eaf4ff",
    },
    {
      icon: "folder",
      title: "Projects",
      text: "Work on real-world projects and build your portfolio.",
      color: "#ff8a13",
      softColor: "#fff2e4",
    },
    {
      icon: "award",
      title: "Certifications",
      text: "Earn recognized certifications to boost your career.",
      color: "#00a6bc",
      softColor: "#e3f8fa",
    },
    {
      icon: "briefcase",
      title: "Opportunities",
      text: "Access internships, jobs, and exciting opportunities.",
      color: "#ee256c",
      softColor: "#ffebf2",
    },
    {
      icon: "users",
      title: "Community",
      text: "Connect, collaborate, and grow with the SkillNet community.",
      color: "#7c24ee",
      softColor: "#f2eaff",
    },
  ];

  return (
    <main className={plusJakarta.className}>
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <nav className="navbar container">
          <a className="logo" href="#">
            Skill<span>Net</span>
          </a>

          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#platform">Platform</a>
          </div>

          <div className="nav-actions">
            <a href="/login" className="login-btn">
              Login
            </a>
            <button className="get-started-btn">Get Started</button>
          </div>
        </nav>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow dark-eyebrow">
              <Icon name="star" size={12} color="#179cff" />
              Connecting education with industry
            </div>

            <h1>
              Build Skills.
              <br />
              <span>Bridge the Gap.</span>
              <br />
              <span className="industry-ready">Become Industry-Ready.</span>
            </h1>

            <p>
              SkillNet is a collaborative platform that connects students,
              academic institutions, educators, and industry to create a
              stronger pathway from learning to real-world skills.
            </p>

            <div className="hero-buttons">
              <a href="/signup" className="primary-btn">
                Start Your Journey <Icon name="arrow" size={18} />
              </a>
              <a href="#how-it-works" className="secondary-btn">
                Explore SkillNet
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-large" />
            <div className="orbit orbit-small" />
            <div className="orbit-dot orange-dot" />
            <div className="orbit-dot purple-dot" />
            <div className="orbit-dot blue-dot" />
            <div className="orbit-dot green-dot" />

            <div className="core-ring">
              <div className="core">
                <strong>SkillNet</strong>
                <span>Connected Skills</span>
                <span>Ecosystem</span>
              </div>
            </div>

            <HeroCard
              className="hero-students"
              icon="graduation"
              title="Students"
              text="Build relevant skills"
              softColor="linear-gradient(135deg, #7035ff, #8b46f8)"
            />
            <HeroCard
              className="hero-academia"
              icon="academy"
              title="Academia"
              text="Create industry-aligned learning"
              softColor="linear-gradient(135deg, #11bf86, #54d986)"
            />
            <HeroCard
              className="hero-educators"
              icon="educator"
              title="Educators"
              text="Teach, Mentor, Empower."
              softColor="linear-gradient(135deg, #ffb129, #ff7f18)"
            />
            <HeroCard
              className="hero-industry"
              icon="briefcase"
              title="Industry"
              text="Share knowledge, Create opportunities."
              softColor="linear-gradient(135deg, #208aff, #1152f4)"
            />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="steps-section">
        <div className="section-orb section-orb-left" />
        <div className="section-orb section-orb-right" />

        <div className="container">
          <div className="section-heading">
            <span>HOW IT WORKS</span>
            <h2>Simple Steps. Powerful Impact.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div className="step-wrap" key={step.title}>
                <article className="step-card">
                  <CircleIcon
                    name={step.icon}
                    color={step.color}
                    softColor={step.softColor}
                  />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <StepArrow />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="ecosystem-section">
        <div className="container">
          <div className="section-heading">
            <span>OUR ECOSYSTEM</span>
            <h2>Stronger Together</h2>
            <p>
              Uniting learners, educators, institutions, and industry for a
              better future.
            </p>
          </div>

          <div className="ecosystem-grid">
            {ecosystem.map((item) => (
              <EcosystemCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="platform-section">
        <div className="container">
          <div className="section-heading">
            <span>THE SKILLNET PLATFORM</span>
            <h2>Everything You Need in One Place</h2>
            <div className="heading-line" />
          </div>

          <div className="platform-grid">
            {platform.map((item) => (
              <PlatformCard key={item.title} {...item} />
            ))}
          </div>

          <div className="cta-banner">
            <div className="cta-orb" />
            <div className="cta-icon">
              <Icon name="rocket" size={37} color="#145df8" stroke={2.4} />
            </div>
            <div className="cta-copy">
              <h2>Ready to Start Your Journey?</h2>
              <p>
                Join SkillNet today and take the first step toward building
                skills, creating connections, and achieving your goals.
              </p>
            </div>
            <a href="/signup" className="cta-button">
              Get Started Now <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="logo" href="#">
              Skill<span>Net</span>
            </a>
            <p>
              Building skills. Bridging gaps.
              <br />
              Creating futures.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Twitter">♥</a>
              <a href="#" aria-label="Instagram">◎</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Platform</h4>
              <a href="#">Courses</a>
              <a href="#">Mentorship</a>
              <a href="#">Projects</a>
              <a href="#">Certifications</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Contact Us</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">FAQs</a>
            </div>
          </div>

          <div className="newsletter">
            <h4>Newsletter</h4>
            <p>Stay updated with the latest news and opportunities.</p>
            <div className="email-box">
              <input placeholder="Enter your email" />
              <button aria-label="Subscribe">
                <Icon name="arrow" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="copyright">© 2025 SkillNet. All rights reserved.</div>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: #07134e;
          background: #f8fbff;
        }

        h1,
        h2,
        h3,
        h4,
        button,
        .logo {
          font-family: "Plus Jakarta Sans", Arial, sans-serif;
        }

        .hero-copy h1,
        .section-heading h2,
        .cta-copy h2 {
          font-weight: 800;
          letter-spacing: -1.25px;
        }

        .hero-card h3,
        .ecosystem-card h3,
        .platform-card h3,
        .step-card h3 {
          font-weight: 800;
          letter-spacing: -0.35px;
        }

        .hero-copy > p,
        .step-card p,
        .ecosystem-card p,
        .platform-card p,
        .cta-copy p {
          font-weight: 500;
        }

        button,
        input {
          font-family: inherit;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        button {
          border: 0;
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1110px, calc(100% - 48px));
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          position: relative;
          min-height: 570px;
          overflow: hidden;
          color: #fff;
          background:
            radial-gradient(circle at 56% 77%, rgba(0, 105, 255, 0.42), transparent 25%),
            radial-gradient(circle at 90% 27%, rgba(18, 66, 255, 0.4), transparent 30%),
            linear-gradient(117deg, #020829 0%, #06124d 42%, #011657 100%);
        }

        .hero::after {
          position: absolute;
          inset: 65px 0 0;
          pointer-events: none;
          content: "";
          opacity: 0.78;
          background-image:
            linear-gradient(115deg, transparent 0 47%, rgba(51, 116, 255, 0.32) 47.1%, transparent 47.35%),
            linear-gradient(135deg, transparent 0 63%, rgba(50, 116, 255, 0.23) 63.15%, transparent 63.45%);
        }

        .hero-grid {
          position: absolute;
          inset: 65px 0 0;
          opacity: 0.3;
          background-image: radial-gradient(#1e70d3 0.8px, transparent 0.8px);
          background-size: 21px 21px;
          mask-image: linear-gradient(to right, #000, transparent 85%);
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(15px);
          opacity: 0.65;
        }

        .hero-glow-one {
          width: 390px;
          height: 390px;
          right: 135px;
          top: 185px;
          background: #0447f8;
        }

        .hero-glow-two {
          width: 200px;
          height: 200px;
          left: -70px;
          bottom: -90px;
          background: #006cff;
        }

        .navbar {
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(115, 152, 255, 0.15);
        }

        .logo {
          color: #fff;
          font-size: 31px;
          font-weight: 800;
          letter-spacing: -1.7px;
        }

        .logo span {
          color: #069bff;
        }

        .nav-links {
          display: flex;
          gap: 57px;
          margin-left: 98px;
        }

        .nav-links a {
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          opacity: 0.92;
        }

        .nav-actions {
          display: flex;
          gap: 15px;
        }

        .login-btn,
        .get-started-btn {
          min-width: 82px;
          height: 33px;
          padding: 0 18px;
          border-radius: 13px;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .login-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 82px;
          height: 40px;
          padding: 0 18px;
          border: 1px solid rgba(255, 255, 255, 0.75);
          background: transparent;
          line-height: 1;
          text-align: center;
        }

        .get-started-btn {
          background: linear-gradient(110deg, #029cff, #5368ff);
          box-shadow: 0 5px 16px rgba(0, 113, 255, 0.35);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 48% 52%;
          min-height: 500px;
          align-items: center;
        }

        .hero-copy {
          min-width: 0;
          padding: 28px 0 40px;
          z-index: 3;
        }

        .hero-copy h1 .industry-ready {
          display: block;
          color: #ffffff;
          white-space: nowrap;
        }

        .eyebrow {
          width: max-content;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
        }

        .dark-eyebrow {
          color: #fff;
          border: 1px solid rgba(125, 170, 255, 0.6);
          background: rgba(0, 10, 54, 0.32);
        }

        .hero-copy h1 {
          margin: 22px 0 13px;
          color: #fff;
          font-size: clamp(39px, 4vw, 46px);
          line-height: 1.12;
          letter-spacing: -1.5px;
        }

        .hero-copy h1 span {
          color: #1477ff;
        }

        .hero-copy > p {
          width: 410px;
          max-width: 100%;
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 16px;
          line-height: 1.65;
        }

        .hero-buttons {
          display: flex;
          gap: 13px;
          margin-top: 24px;
        }

        .primary-btn,
        .secondary-btn {
          height: 43px;
          padding: 0 21px;
          border-radius: 24px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(105deg, #3975ff, #009dff);
          box-shadow: 0 9px 21px rgba(4, 105, 255, 0.36);
        }

        .secondary-btn {
          border: 1px solid rgba(176, 204, 255, 0.76);
          background: rgba(8, 20, 89, 0.42);
        }

        .hero-visual {
          position: relative;
          height: 430px;
          min-width: 0;
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 53%;
          border: 1.4px solid rgba(109, 179, 255, 0.83);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-large {
          width: 382px;
          height: 329px;
          transform: translate(-50%, -50%) rotate(-24deg);
        }

        .orbit-small {
          width: 214px;
          height: 214px;
          border-color: rgba(58, 110, 255, 0.48);
        }

        .core-ring {
          position: absolute;
          left: 50%;
          top: 53%;
          width: 184px;
          height: 184px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: conic-gradient(
            from 215deg,
            #8c49ff,
            #0e9fff,
            #31cdff,
            #5a45fc,
            #c56cff,
            #8c49ff
          );
          box-shadow:
            0 0 0 9px rgba(36, 81, 255, 0.22),
            0 0 35px 5px rgba(0, 125, 255, 0.67);
          transform: translate(-50%, -50%);
        }

        .core {
          width: 166px;
          height: 166px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          background: radial-gradient(circle at 40% 35%, #0e2b92, #050729 66%);
          box-shadow: inset 0 0 25px rgba(0, 99, 255, 0.5);
        }

        .core strong {
          margin-bottom: 7px;
          font-size: 28px;
          letter-spacing: -1px;
        }

        .core span {
          font-size: 11px;
          font-weight: 600;
          line-height: 1.65;
        }

        .hero-card {
          position: absolute;
          width: 103px;
          min-height: 140px;
          padding: 19px 11px 12px;
          text-align: center;
          border: 1px solid rgba(218, 228, 255, 0.92);
          border-radius: 13px;
          color: #07134e;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 9px 21px rgba(0, 8, 61, 0.35);
        }

        .hero-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          margin: 0 auto 12px;
          border-radius: 8px;
          color: rgba(255, 255, 255, 0.34);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.35),
            0 6px 12px rgba(15, 30, 112, 0.2);
        }

        .hero-icon svg {
          display: block;
          width: 28px;
          height: 28px;
        }

        .hero-card h3 {
          margin: 0 0 8px;
          font-size: 14px;
        }

        .hero-card p {
          margin: 0;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.6;
        }

        .hero-students {
          left: 4px;
          top: 37px;
        }

        .hero-academia {
          right: 12px;
          top: 37px;
        }

        .hero-educators {
          left: -7px;
          bottom: 30px;
        }

        .hero-industry {
          right: -3px;
          bottom: 30px;
        }

        .orbit-dot {
          position: absolute;
          z-index: 3;
          width: 10px;
          height: 10px;
          border: 2px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 12px currentColor;
        }

        .orange-dot {
          top: 50px;
          left: 52%;
          color: #ff8c10;
          background: #ff8500;
        }

        .purple-dot {
          top: 211px;
          left: 18%;
          color: #8f43ff;
          background: #8038ff;
        }

        .blue-dot {
          top: 211px;
          right: 13%;
          color: #00b2ff;
          background: #08a9ff;
        }

        .green-dot {
          bottom: 46px;
          left: 52%;
          color: #1fd682;
          background: #15ce78;
        }

        .steps-section {
          position: relative;
          overflow: hidden;
          padding: 23px 0 39px;
          background: #fbfdff;
        }

        .section-orb {
          position: absolute;
          bottom: -90px;
          width: 210px;
          height: 210px;
          opacity: 0.55;
          border-radius: 50%;
          background-image: radial-gradient(#65a7ff 1.2px, transparent 1.2px);
          background-size: 7px 7px;
        }

        .section-orb-left {
          left: -86px;
        }

        .section-orb-right {
          right: -76px;
        }

        .section-heading {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 4px;
        }

        .section-heading > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 25px;
          padding: 0 13px;
          border: 1px solid rgba(31, 105, 255, 0.18);
          border-radius: 50px;
          color: #126bff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          background: rgba(238, 246, 255, 0.86);
          box-shadow: 0 5px 15px rgba(34, 105, 220, 0.08);
        }

        .section-heading h2 {
          position: relative;
          width: max-content;
          max-width: 100%;
          margin: 10px auto 0;
          padding-bottom: 12px;
          color: transparent;
          font-size: clamp(25px, 2.4vw, 31px);
          font-weight: 800;
          letter-spacing: -1.1px;
          background: linear-gradient(100deg, #07134e 10%, #114fd2 55%, #087cff);
          -webkit-background-clip: text;
          background-clip: text;
        }

        .section-heading h2::after {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 54px;
          height: 3px;
          border-radius: 20px;
          content: "";
          transform: translateX(-50%);
          background: linear-gradient(90deg, #7448ff, #118fff);
          box-shadow: 0 2px 9px rgba(37, 110, 255, 0.42);
        }

        .section-heading p {
          margin-top: 4px;
          color: #33477d;
          font-size: 13px;
          font-weight: 500;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
          margin-top: 20px;
        }

        .step-wrap {
          position: relative;
        }

        .step-card {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .circle-icon {
          width: 67px;
          height: 67px;
          display: grid;
          place-items: center;
          margin: 0 auto;
          border-radius: 50%;
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.95),
            0 7px 16px rgba(35, 102, 210, 0.1);
        }

        .circle-icon svg {
          filter: drop-shadow(0 3px 3px rgba(25, 70, 190, 0.18));
        }

        .hero-icon svg {
          filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.16));
        }

        .step-card h3 {
          margin: 11px 0 8px;
          color: #081650;
          font-size: 14px;
        }

        .step-card p {
          width: 180px;
          max-width: 100%;
          margin: auto;
          color: #0a1a55;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.65;
        }

        .step-arrow {
          position: absolute;
          top: 27px;
          right: -34px;
          z-index: 10;
          width: 58px;
          height: 18px;
          display: block;
          pointer-events: none;
        }

        .step-arrow-svg {
          display: block;
          width: 58px;
          height: 18px;
        }

        .ecosystem-section {
          padding: 20px 0;
          background:
            radial-gradient(circle at 12% 5%, rgba(153, 203, 255, 0.35), transparent 23%),
            radial-gradient(circle at 91% 84%, rgba(153, 203, 255, 0.28), transparent 27%),
            #eaf4ff;
        }

        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 18px;
        }

        .ecosystem-card {
          min-height: 135px;
          display: flex;
          gap: 12px;
          padding: 20px 14px 13px;
          border: 1px solid rgba(255, 255, 255, 0.94);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.86);
          box-shadow: 0 7px 18px rgba(41, 103, 190, 0.08);
        }

        .ecosystem-card .circle-icon {
          flex: 0 0 auto;
          width: 57px;
          height: 57px;
          margin: 0;
          border-radius: 11px;
        }

        .ecosystem-card h3 {
          margin: 2px 0 8px;
          font-size: 14px;
        }

        .ecosystem-card p {
          min-height: 50px;
          margin: 0;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.6;
        }

        .ecosystem-card span {
          display: block;
          width: 31px;
          height: 2px;
          margin-top: 7px;
        }

        .platform-section {
          padding: 18px 0 4px;
          background: #fbfdff;
        }

        .heading-line {
          display: none;
        }

        .section-heading h2 {
          padding-bottom: 0;
        }

        .section-heading h2::after {
          display: none;
        }

        .heading-line {
          display: none;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 10px;
          margin: 16px 0 15px;
        }

        .platform-card {
          min-height: 153px;
          padding: 15px 10px;
          text-align: center;
          border: 1px solid #deebfa;
          border-radius: 13px;
          background: #fff;
          box-shadow: 0 4px 15px rgba(26, 86, 171, 0.05);
        }

        .platform-card .circle-icon {
          width: 52px;
          height: 52px;
        }

        .platform-card h3 {
          margin: 9px 0 6px;
          font-size: 13px;
        }

        .platform-card p {
          margin: 0;
          color: #14245d;
          font-size: 11px;
          font-weight: 500;
          line-height: 1.55;
        }

        .cta-banner {
          position: relative;
          min-height: 94px;
          display: flex;
          align-items: center;
          gap: 17px;
          overflow: hidden;
          padding: 14px 57px 14px 48px;
          border-radius: 13px;
          color: #fff;
          background:
            radial-gradient(circle at 6% 50%, rgba(55, 130, 255, 0.86), transparent 16%),
            repeating-radial-gradient(ellipse at 88% 50%, transparent 0 12px, rgba(57, 127, 255, 0.32) 13px 14px),
            linear-gradient(107deg, #080d8e, #0823b0 48%, #0668ff);
          box-shadow: 0 8px 20px rgba(0, 57, 188, 0.18);
        }

        .cta-orb {
          position: absolute;
          left: -50px;
          top: -65px;
          width: 200px;
          height: 200px;
          border: 1px solid rgba(100, 165, 255, 0.52);
          border-radius: 50%;
        }

        .cta-icon {
          position: relative;
          z-index: 1;
          width: 55px;
          height: 55px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 4px 16px rgba(5, 29, 181, 0.48);
        }

        .cta-copy {
          position: relative;
          z-index: 1;
        }

        .cta-copy h2 {
          margin: 0 0 5px;
          font-size: 21px;
        }

        .cta-copy p {
          max-width: 540px;
          margin: 0;
          font-size: 13px;
          line-height: 1.45;
        }

        .cta-button {
          position: relative;
          z-index: 1;
          min-width: 177px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-left: auto;
          border: 1px solid rgba(171, 217, 255, 0.54);
          border-radius: 11px;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          background: linear-gradient(105deg, #694cf8, #009eff);
        }

        footer {
          margin-top: 5px;
          padding: 13px 0 7px;
          color: #fff;
          background: linear-gradient(105deg, #020623, #061143);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 2.15fr 1.55fr;
          gap: 38px;
        }

        footer .logo {
          font-size: 23px;
        }

        .footer-brand p,
        .newsletter p {
          margin: 9px 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 10px;
          line-height: 1.55;
        }

        .socials {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .socials a {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        footer h4 {
          margin: 4px 0 9px;
          color: #fff;
          font-size: 12px;
        }

        .footer-links a {
          display: block;
          margin: 0 0 6px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 11px;
        }

        .newsletter {
          max-width: 230px;
        }

        .footer-brand p,
        .newsletter p {
          font-size: 11px;
        }

        .email-box {
          height: 34px;
          display: flex;
          overflow: hidden;
          border: 1px solid rgba(107, 154, 255, 0.34);
          border-radius: 6px;
          background: rgba(0, 4, 37, 0.5);
        }

        .email-box input {
          width: 100%;
          min-width: 0;
          padding: 0 10px;
          outline: 0;
          border: 0;
          color: #fff;
          font-size: 10px;
          background: transparent;
        }

        .email-box input::placeholder {
          color: rgba(255, 255, 255, 0.57);
        }

        .email-box button {
          width: 36px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, #326bff, #008fff);
        }

        .copyright {
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.65);
          text-align: center;
          font-size: 10px;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes floatOne {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translateY(-5px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes orbitRotate {
          from {
            transform: translate(-50%, -50%) rotate(-24deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(336deg);
          }
        }

        @keyframes pulseRing {
          0%,
          100% {
            box-shadow:
              0 0 0 7px rgba(42, 104, 255, 0.14),
              0 0 22px 4px rgba(0, 128, 255, 0.42);
          }

          50% {
            box-shadow:
              0 0 0 10px rgba(42, 104, 255, 0.1),
              0 0 30px 6px rgba(0, 128, 255, 0.58);
          }
        }

        @keyframes blueGlow {
          0%,
          100% {
            box-shadow:
              0 8px 18px rgba(0, 108, 255, 0.35),
              0 0 0 rgba(0, 153, 255, 0);
          }
          50% {
            box-shadow:
              0 10px 28px rgba(0, 108, 255, 0.65),
              0 0 25px rgba(0, 163, 255, 0.75);
          }
        }

        @keyframes bannerGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: translateX(-8%);
          }
          50% {
            opacity: 0.9;
            transform: translateX(8%);
          }
        }

        @keyframes dotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.55);
            opacity: 0.7;
          }
        }

        /* ===== HERO MOTION ===== */
        .hero-glow-one {
          animation: floatOne 6s ease-in-out infinite;
        }

        .hero-glow-two {
          animation: floatTwo 7s ease-in-out infinite;
        }

        .orbit-large {
          animation: orbitRotate 22s linear infinite;
        }

        .orbit-small {
          animation: orbitRotate 15s linear infinite reverse;
        }

        .core-ring {
          animation: pulseRing 2.8s ease-in-out infinite;
        }

        .hero-students,
        .hero-industry {
          animation: floatOne 4.5s ease-in-out infinite;
        }

        .hero-academia,
        .hero-educators {
          animation: floatTwo 5s ease-in-out infinite;
        }

        .hero-academia {
          animation-delay: 0.7s;
        }

        .hero-educators {
          animation-delay: 1.2s;
        }

        .hero-industry {
          animation-delay: 0.5s;
        }

        .orbit-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }

        .purple-dot {
          animation-delay: 0.3s;
        }

        .blue-dot {
          animation-delay: 0.7s;
        }

        .green-dot {
          animation-delay: 1.1s;
        }

        /* ===== GLOWING BUTTONS ===== */
        .get-started-btn,
        .primary-btn,
        .cta-button {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          animation: blueGlow 2.8s ease-in-out infinite;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .get-started-btn::before,
        .primary-btn::before,
        .cta-button::before {
          position: absolute;
          z-index: -1;
          top: -100%;
          left: -35%;
          width: 45%;
          height: 300%;
          content: "";
          transform: rotate(24deg);
          background: rgba(255, 255, 255, 0.32);
          transition: left 0.55s ease;
        }

        .get-started-btn:hover::before,
        .primary-btn:hover::before,
        .cta-button:hover::before {
          left: 120%;
        }

        .get-started-btn:hover,
        .primary-btn:hover,
        .cta-button:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow:
            0 13px 32px rgba(0, 115, 255, 0.8),
            0 0 35px rgba(0, 164, 255, 0.9);
        }

        .secondary-btn,
        .login-btn {
          transition: all 0.25s ease;
        }

        .secondary-btn:hover,
        .login-btn:hover {
          transform: translateY(-2px);
          border-color: #4badff;
          box-shadow: 0 0 20px rgba(27, 137, 255, 0.48);
        }

        /* ===== CARD HOVER GLOW ===== */
        .hero-card,
        .ecosystem-card,
        .platform-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-card:hover {
          transform: translateY(-7px) scale(1.035);
          box-shadow:
            0 16px 30px rgba(0, 8, 61, 0.45),
            0 0 25px rgba(70, 143, 255, 0.45);
        }

        .ecosystem-card:hover,
        .platform-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(35, 112, 225, 0.18);
        }

        /* ===== CTA LIGHT EFFECT ===== */
        .cta-banner::after {
          position: absolute;
          top: -100%;
          right: 6%;
          width: 220px;
          height: 300%;
          content: "";
          transform: rotate(25deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(109, 208, 255, 0.25),
            transparent
          );
          animation: bannerGlow 4s ease-in-out infinite;
        }

        @media (min-width: 621px) {
          .hero-copy h1 {
            font-size: clamp(38px, 3.7vw, 46px);
          }
        }

        @media (min-width: 900px) {
          .hero-copy {
            transform: translateX(-18px);
            width: 545px;
          }

          .hero-content {
            grid-template-columns: 52% 48%;
          }
        }

        @media (max-width: 900px) {
          .nav-links {
            gap: 22px;
            margin-left: 0;
          }

          .hero-content {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            padding-top: 45px;
            text-align: center;
          }

          .eyebrow {
            margin: auto;
          }

          .hero-copy > p {
            margin: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-visual {
            width: min(520px, 100%);
            margin: -12px auto 0;
          }

          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .platform-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-grid {
            grid-template-columns: 1fr 1.7fr;
          }

          .newsletter {
            max-width: none;
          }
        }

        @media (max-width: 620px) {
          .step-card p,
          .ecosystem-card p,
          .platform-card p {
            font-size: 12px;
          }

          .platform-card {
            min-height: 165px;
          }

          .hero-copy h1 .industry-ready {
            white-space: normal;
          }

          .container {
            width: min(100% - 30px, 1110px);
          }

          .navbar {
            height: auto;
            min-height: 70px;
          }

          .nav-links {
            display: none;
          }

          .login-btn {
            display: none;
          }

          .hero {
            min-height: auto;
          }

          .hero-copy h1 {
            font-size: 36px;
          }

          .hero-visual {
            height: 390px;
            transform: scale(0.82);
            transform-origin: top center;
            margin-bottom: -55px;
          }

          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px 16px;
          }

          .step-arrow {
            display: none;
          }

          .ecosystem-grid {
            grid-template-columns: 1fr;
          }

          .platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .cta-banner {
            flex-direction: column;
            padding: 22px;
            text-align: center;
          }

          .cta-button {
            margin: 4px 0 0;
          }

          .footer-grid,
          .footer-links {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        /* Keep hero glow focused only on the SkillNet centre circle */
        .hero-glow-one {
          display: none;
        }

        .hero-glow-two {
          opacity: 0.28;
          filter: blur(24px);
        }

        .core-ring {
          box-shadow:
            0 0 0 7px rgba(42, 104, 255, 0.14),
            0 0 22px 4px rgba(0, 128, 255, 0.45);
        }

        .core-aura {
          inset: -10px;
          opacity: 0.72;
          box-shadow:
            0 0 24px rgba(25, 138, 255, 0.55),
            inset 0 0 15px rgba(116, 80, 255, 0.2);
        }

        /* Keep hero glow focused only on the SkillNet centre circle */
        .hero-glow-one {
          display: none;
        }

        .hero-glow-two {
          opacity: 0.28;
          filter: blur(24px);
        }

        .core-ring {
          box-shadow:
            0 0 0 7px rgba(42, 104, 255, 0.14),
            0 0 22px 4px rgba(0, 128, 255, 0.45);
        }

        .core-aura {
          inset: -10px;
          opacity: 0.72;
          box-shadow:
            0 0 24px rgba(25, 138, 255, 0.55),
            inset 0 0 15px rgba(116, 80, 255, 0.2);
        }

        /* Times New Roman only for information text inside cards */
        .hero-card p,
        .step-card p,
        .ecosystem-card p,
        .platform-card p,
        .cta-copy p {
          font-family: "Times New Roman", Times, serif;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.55;
        }

        /* Larger Times New Roman information text with balanced spacing */
        .hero-card {
          min-height: 148px;
          padding: 18px 12px 15px;
        }

        .hero-card h3 {
          margin: 0 0 9px;
        }

        .hero-card p {
          font-size: 11.5px;
          line-height: 1.5;
        }

        .step-card h3 {
          margin: 13px 0 10px;
        }

        .step-card p {
          width: 190px;
          font-size: 13px;
          line-height: 1.58;
        }

        .ecosystem-card {
          min-height: 148px;
          gap: 14px;
          padding: 20px 16px 16px;
        }

        .ecosystem-card h3 {
          margin: 3px 0 10px;
        }

        .ecosystem-card p {
          min-height: 55px;
          font-size: 12.8px;
          line-height: 1.55;
        }

        .ecosystem-card span {
          margin-top: 10px;
        }

        .platform-card {
          min-height: 175px;
          padding: 17px 11px;
        }

        .platform-card h3 {
          margin: 11px 0 9px;
        }

        .platform-card p {
          font-size: 12.3px;
          line-height: 1.55;
        }

        .platform-grid {
          gap: 12px;
        }

        .ecosystem-grid {
          gap: 13px;
        }

        /* Slightly larger text inside the four hero cards */
        .hero-card {
          width: 112px;
          min-height: 154px;
          padding: 18px 10px 14px;
        }

        .hero-card .hero-icon {
          width: 42px;
          height: 42px;
          margin-bottom: 13px;
        }

        .hero-card .hero-icon svg {
          width: 31px;
          height: 31px;
        }

        .hero-card h3 {
          margin-bottom: 10px;
          font-size: 15px;
        }

        .hero-card p {
          font-size: 12px;
          line-height: 1.5;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
