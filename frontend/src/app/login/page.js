"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");
    setLoading(true);

    const form = event.target;

    const data = {
      email: form.email.value,
      password: form.password.value,
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
        // Redirect to dashboard after successful login
        router.push("/dashboard");
        router.refresh();
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

        {/* Left Side */}
        <div className="hidden bg-blue-600 p-12 text-white md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">SkillNet</h1>

            <h2 className="mt-16 text-4xl font-bold leading-tight">
              Build skills.
              <br />
              Find opportunities.
              <br />
              Shape your future.
            </h2>

            <p className="mt-6 leading-7 text-blue-100">
              Connect your academic journey with the skills and opportunities
              demanded by industry.
            </p>
          </div>

          <p className="text-sm text-blue-100">
            AI-powered skill development platform
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12">
          <div className="mx-auto max-w-md">

            <h2 className="text-3xl font-bold text-slate-900">
              Welcome back
            </h2>

            <p className="mt-2 text-slate-500">
              Sign in to continue to your SkillNet account.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
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
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Error Message */}
              {message && (
                <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
                  {message}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create one
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