"use client";

import "./login.css";

import {
  GraduationCap,
  BriefcaseBusiness,
  UsersRound,
  Building2,
  Check,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const roles = [
  {
    id: "student",
    name: "Student",
    description: "Build skills & discover opportunities",
    icon: GraduationCap,
    accent: "blue",
  },
  {
    id: "industry",
    name: "Industry",
    description: "Find skilled & verified talent",
    icon: BriefcaseBusiness,
    accent: "purple",
  },
  {
    id: "academician",
    name: "Academician",
    description: "Connect learning with industry",
    icon: UsersRound,
    accent: "teal",
  },
  {
    id: "institution",
    name: "Institution",
    description: "Manage skills, placements & insights",
    icon: Building2,
    accent: "orange",
  },
];

export default function LoginPage() {
  const router = useRouter();

  const [selectedRole, setSelectedRole] = useState("student");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const form = event.currentTarget;

    const data = {
      email: form.email.value,
      password: form.password.value,
      role: selectedRole,
      rememberMe,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/dashboard");
        router.refresh();
      } else {
        setMessage(result.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-background-grid" />
      <div className="login-glow login-glow-one" />
      <div className="login-glow login-glow-two" />

      <header className="login-navbar">
        <a href="/" className="skillnet-logo" aria-label="SkillNet home">
          <span>Skill</span><strong>Net</strong>
        </a>

        <a href="/" className="back-home">
          <ArrowLeft size={17} />
          <span>Back to Home</span>
        </a>
      </header>

      <section className="login-shell">
        {/* LEFT BRAND PANEL */}
        <aside className="login-visual">
          <div className="visual-content">
            <div className="welcome-pill">
              <span className="welcome-star">✦</span>
              Welcome to SkillNet
            </div>

            <h1>
              Your skills.
              <br />
              <span>Your journey.</span>
              <br />
              Your future.
            </h1>

            <p className="visual-description">
              Sign in to continue your journey and unlock a world of
              opportunities.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon blue">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <h3>Personalized Learning Paths</h3>
                  <p>AI-powered roadmap just for you</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon purple">
                  <BriefcaseBusiness size={19} />
                </div>
                <div>
                  <h3>Industry Connections</h3>
                  <p>Connect with relevant opportunities</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon teal">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <h3>Skill Verification</h3>
                  <p>Showcase your real-world skills</p>
                </div>
              </div>
            </div>
          </div>

          <div className="orbit-system" aria-hidden="true">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="orbit orbit-c" />
            <span className="orbit-dot dot-blue" />
            <span className="orbit-dot dot-purple" />
            <span className="orbit-dot dot-orange" />
            <div className="orbit-core">
              <div className="orbit-core-inner">
                <span>Skill</span><strong>Net</strong>
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT LOGIN PANEL */}
        <section className="login-card">
          <div className="login-card-header">
            <div className="card-eyebrow">WELCOME BACK</div>
            <h2>Sign in to SkillNet</h2>
            <p>Choose your role to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="role-heading">
              <span>Select your role</span>
              <span className="required-label">Required</span>
            </div>

            <div className="role-grid">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;

                return (
                  <button
                    key={role.id}
                    type="button"
                    className={`role-card ${isSelected ? "selected" : ""} role-${role.accent}`}
                    onClick={() => {
                      setSelectedRole(role.id);
                      setMessage("");
                    }}
                    aria-pressed={isSelected}
                  >
                    <div className="role-icon">
                      <Icon size={21} strokeWidth={2.2} />
                    </div>

                    <div className="role-copy">
                      <span className="role-name">{role.name}</span>
                      <span className="role-description">
                        {role.description}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="role-check">
                        <Check size={14} strokeWidth={3} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="field-group">
              <label htmlFor="email">Email address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={19} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <LockKeyhole className="input-icon" size={19} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                />
                <span className="custom-checkbox">
                  {rememberMe && <Check size={12} strokeWidth={3} />}
                </span>
                <span>Remember me</span>
              </label>

              <a href="/forgot-password">Forgot password?</a>
            </div>

            {message && (
              <div className="login-error" role="alert">
                {message}
              </div>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              <span>{loading ? "Signing In..." : "Sign In"}</span>
              {!loading && <ArrowRight size={20} />}
            </button>

            <div className="signup-row">
              <span>Don&apos;t have an account?</span>
              <a href="/signup">Create one</a>
            </div>
          </form>

          <div className="secure-note">
            <ShieldCheck size={15} />
            <span>Your account and data are securely protected</span>
          </div>
        </section>
      </section>

      <footer className="login-footer">
        <span>© {new Date().getFullYear()} SkillNet</span>
        <span className="footer-dot">•</span>
        <span>Connecting Skills, Academia &amp; Industry</span>
      </footer>
    </main>
  );
}
