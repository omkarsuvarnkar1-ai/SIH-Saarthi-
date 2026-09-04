"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  GraduationCap,
  LockKeyhole,
  Save,
  ShieldCheck,
  Sparkles,
  User,
  Users,
} from "lucide-react";

import "./profile.css";

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    date_of_birth: "",
    gender: "",
    college: "",
    course: "",
    specialization: "",
    year_of_study: "",
    bio: "",
  });

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch("/api/profile");
        const data = await response.json();

        if (!response.ok || !data.success) {
          router.push("/login");
          return;
        }

        const profile = data.profile;

        setForm({
          date_of_birth: profile.date_of_birth
            ? profile.date_of_birth.substring(0, 10)
            : "",
          gender: profile.gender || "",
          college: profile.college || "",
          course: profile.course || "",
          specialization: profile.specialization || "",
          year_of_study: profile.year_of_study || "",
          bio: profile.bio || "",
        });
      } catch (error) {
        console.error("Profile loading error:", error);
        setMessage("Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [router]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          year_of_study: form.year_of_study
            ? Number(form.year_of_study)
            : null,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Failed to save profile.");
        setSaving(false);
        return;
      }

      setMessage("Profile saved successfully!");

      setTimeout(() => {
        router.push("/career-selection");
      }, 1000);
    } catch (error) {
      console.error("Profile save error:", error);
      setMessage("Unable to save your profile.");
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="profile-loading">
        <div className="loading-orbit">
          <div className="loading-core">
            <span>Skill</span>
            <strong>Net</strong>
          </div>
        </div>

        <p>Loading your profile...</p>
      </main>
    );
  }

  return (
    <main className="profile-page">
      {/* Background decoration */}
      <div className="space-stars" />
      <div className="space-glow glow-one" />
      <div className="space-glow glow-two" />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="profile-header">
        <div className="profile-header-inner">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="skillnet-logo"
          >
            Skill<span>Net</span>
          </button>

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="dashboard-button"
          >
            <ArrowLeft size={17} />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <section className="profile-content">

        {/* Heading */}

        <div className="profile-heading">

          <div className="profile-badge">
            <User size={15} />
            <span>PROFILE</span>
            <strong>SETUP</strong>
          </div>

          <h1>
            Tell us about{" "}
            <span>yourself</span>
          </h1>

          <p>
            This information will help SkillNet understand your background
            <br className="desktop-break" />
            and personalize your skill development journey.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="profile-form"
        >

          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <section className="profile-card personal-card">

            <div className="card-heading">

              <div className="card-icon blue-icon">
                <User size={25} />
              </div>

              <div>
                <h2>Personal Information</h2>

                <p>
                  Basic information about you.
                </p>
              </div>

            </div>

            <div className="profile-grid">

              {/* Date */}

              <div className="profile-field">

                <label htmlFor="date_of_birth">
                  Date of Birth
                </label>

                <div className="input-wrapper">

                  <CalendarDays size={18} />

                  <input
                    id="date_of_birth"
                    name="date_of_birth"
                    type="date"
                    value={form.date_of_birth}
                    onChange={handleChange}
                  />

                </div>

              </div>

              {/* Gender */}

              <div className="profile-field">

                <label htmlFor="gender">
                  Gender
                </label>

                <div className="input-wrapper select-wrapper">

                  <User size={18} />

                  <select
                    id="gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                  >
                    <option value="">
                      Prefer not to say
                    </option>

                    <option value="Female">
                      Female
                    </option>

                    <option value="Male">
                      Male
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <ChevronDown size={17} />
                </div>

              </div>

              {/* About */}

              <div className="profile-field full-width">

                <label htmlFor="bio">
                  About You
                </label>

                <textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us briefly about yourself, your interests, or what you want to learn..."
                />

              </div>

            </div>

          </section>


          {/* =================================================
              EDUCATION
          ================================================= */}

          <section className="profile-card education-card">

            <div className="card-heading">

              <div className="card-icon green-icon">
                <GraduationCap size={25} />
              </div>

              <div>
                <h2>Education</h2>

                <p>
                  Tell us about your current education.
                </p>
              </div>

            </div>

            <div className="profile-grid">

              {/* College */}

              <div className="profile-field">

                <label htmlFor="college">
                  College / Institution
                </label>

                <div className="input-wrapper">

                  <Building2 size={18} />

                  <input
                    id="college"
                    name="college"
                    type="text"
                    value={form.college}
                    onChange={handleChange}
                    placeholder="Enter your college name"
                  />

                </div>

              </div>

              {/* Course */}

              <div className="profile-field">

                <label htmlFor="course">
                  Course / Degree
                </label>

                <div className="input-wrapper">

                  <GraduationCap size={18} />

                  <input
                    id="course"
                    name="course"
                    type="text"
                    value={form.course}
                    onChange={handleChange}
                    placeholder="e.g. B.Tech, B.Pharm, B.Arch"
                  />

                </div>

              </div>

              {/* Specialization */}

              <div className="profile-field">

                <label htmlFor="specialization">
                  Specialization
                </label>

                <div className="input-wrapper">

                  <Sparkles size={18} />

                  <input
                    id="specialization"
                    name="specialization"
                    type="text"
                    value={form.specialization}
                    onChange={handleChange}
                    placeholder="e.g. AI & Data Science"
                  />

                </div>

              </div>

              {/* Year */}

              <div className="profile-field">

                <label htmlFor="year_of_study">
                  Year of Study
                </label>

                <div className="input-wrapper select-wrapper">

                  <GraduationCap size={18} />

                  <select
                    id="year_of_study"
                    name="year_of_study"
                    value={form.year_of_study}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select year
                    </option>

                    <option value="1">
                      1st Year
                    </option>

                    <option value="2">
                      2nd Year
                    </option>

                    <option value="3">
                      3rd Year
                    </option>

                    <option value="4">
                      4th Year
                    </option>

                    <option value="5">
                      5th Year
                    </option>

                    <option value="6">
                      6th Year
                    </option>
                  </select>

                  <ChevronDown size={17} />

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              MESSAGE
          ================================================= */}

          {message && (
            <div
              className={
                message.includes("successfully")
                  ? "profile-message success-message"
                  : "profile-message error-message"
              }
            >
              <Check size={19} />
              <span>{message}</span>
            </div>
          )}


          {/* =================================================
              ACTION
          ================================================= */}

          <div className="profile-actions">

            <div className="security-note">

              <ShieldCheck size={19} />

              <span>
                Your information is secure and confidential
              </span>

            </div>

            <button
              type="submit"
              disabled={saving}
              className="profile-save-button"
            >

              <span className="save-icon">
                {saving ? (
                  <span className="save-spinner" />
                ) : (
                  <Save size={18} />
                )}
              </span>

              <span>
                {saving ? "Saving..." : "Save Profile"}
              </span>

              {!saving && (
                <ArrowRight size={20} />
              )}

              <span className="button-shine" />

            </button>

          </div>

        </form>

      </section>
    </main>
  );
}
