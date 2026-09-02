"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  // =====================================================
  // LOAD EXISTING PROFILE
  // =====================================================

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

  // =====================================================
  // HANDLE INPUT CHANGES
  // =====================================================

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  // =====================================================
  // SAVE PROFILE
  // =====================================================

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

      // =================================================
      // GO TO CAREER SELECTION
      // =================================================

      setTimeout(() => {
        router.push("/career-selection");
      }, 1000);
    } catch (error) {
      console.error("Profile save error:", error);
      setMessage("Unable to save your profile.");
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
          Loading your profile...
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

          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            Back to Dashboard
          </button>

        </div>
      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <section className="mx-auto max-w-4xl px-6 py-10">

        {/* Heading */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            PROFILE SETUP
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Tell us about yourself
          </h1>

          <p className="mt-2 text-slate-600">
            This information will help SkillNet understand your
            background and personalize your skill development journey.
          </p>

        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >

          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <section className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Basic information about you.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* Date of Birth */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date of Birth
                </label>

                <input
                  name="date_of_birth"
                  type="date"
                  value={form.date_of_birth}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Gender */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gender
                </label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
              </div>

              {/* About You */}

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  About You
                </label>

                <textarea
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us briefly about yourself, your interests, or what you want to learn..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>
          </section>

          {/* =================================================
              EDUCATION
          ================================================= */}

          <section className="rounded-2xl border bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Education
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Tell us about your current education.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              {/* College */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  College / Institution
                </label>

                <input
                  name="college"
                  type="text"
                  value={form.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Course */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Course / Degree
                </label>

                <input
                  name="course"
                  type="text"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech, B.Pharm, B.Arch"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Specialization */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Specialization
                </label>

                <input
                  name="specialization"
                  type="text"
                  value={form.specialization}
                  onChange={handleChange}
                  placeholder="e.g. AI & Data Science"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Year of Study */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Year of Study
                </label>

                <select
                  name="year_of_study"
                  value={form.year_of_study}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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

              </div>

            </div>
          </section>

          {/* =================================================
              MESSAGE
          ================================================= */}

          {message && (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-700">
              {message}
            </div>
          )}

          {/* =================================================
              SAVE BUTTON
          ================================================= */}

          <div className="flex justify-end">

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Profile"}
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}