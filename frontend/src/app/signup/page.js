"use client";

import { useState } from "react";

export default function SignupPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const form = event.target;

    const data = {
      full_name: form.full_name.value,
      email: form.email.value,
      password: form.password.value,
      college: form.college.value,
      course: form.course.value,
      year_of_study: form.year_of_study.value,
    };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Account created successfully!");
        form.reset();
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        {/* Left side */}
        <div className="hidden bg-blue-600 p-12 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">SkillNet</h1>

            <h2 className="mt-16 text-4xl font-bold leading-tight">
              Start building
              <br />
              your career today.
            </h2>

            <p className="mt-6 leading-7 text-blue-100">
              Create your profile and let SkillNet connect your skills with
              learning opportunities, internships, and industry requirements.
            </p>
          </div>

          <p className="text-sm text-blue-100">
            AI-powered skill development platform
          </p>
        </div>

        {/* Right side */}
        <div className="p-8 sm:p-12">
          <div className="mx-auto max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className="mt-2 text-slate-500">
              Join SkillNet and start your skill development journey.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  name="full_name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  required
                  minLength="8"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* College */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  College / Institution
                </label>

                <input
                  name="college"
                  type="text"
                  placeholder="Enter your college name"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Course */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Course
                </label>

                <input
                  name="course"
                  type="text"
                  placeholder="e.g. AI & Data Science"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Year */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Year of Study
                </label>

                <select
                  name="year_of_study"
                  defaultValue=""
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="" disabled>
                    Select your year
                  </option>

                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-slate-600"
                >
                  I agree to the SkillNet terms and conditions.
                </label>
              </div>

              {/* Message */}
              {message && (
                <div className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
                  {message}
                </div>
              )}

              {/* Create Account */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign in
              </a>
            </p>

            <div className="mt-6 text-center">
              <a
                href="/"
                className="text-sm font-medium text-slate-500 hover:text-blue-600"
              >
                ← Back to SkillNet
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}