"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================================
  // LOGOUT
  // =====================================================

  async function handleLogout() {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  // =====================================================
  // GET STUDENT
  // =====================================================

  useEffect(() => {
    async function getStudent() {
      try {
        const response = await fetch("/api/me");
        const result = await response.json();

        if (!result.success) {
          router.push("/login");
          return;
        }

        setStudent(result.student);
      } catch (error) {
        console.error("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    }

    getStudent();
  }, [router]);

  // =====================================================
  // CHECK CAREER SELECTION
  // =====================================================

  useEffect(() => {
    async function checkCareerSelection() {
      try {
        const response = await fetch("/api/profile");
        const result = await response.json();

        if (!response.ok || !result.success) {
          return;
        }

        const profile = result.profile;

        // -------------------------------------------------
        // Profile exists but career selection is incomplete
        // -------------------------------------------------

        const careerNotSelected =
          !profile.industry_id &&
          !profile.role_id &&
          profile.career_uncertain !== true;

        if (careerNotSelected) {
          router.push("/career-selection");
        }

        // -------------------------------------------------
        // If student selected "Not Sure Yet", we also want
        // them to complete the career discovery step.
        // -------------------------------------------------

        if (profile.career_uncertain === true) {
          router.push("/career-selection");
        }
      } catch (error) {
        console.error("Career selection check error:", error);
      }
    }

    checkCareerSelection();
  }, [router]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading your dashboard...
        </p>
      </main>
    );
  }

  // =====================================================
  // STUDENT NOT FOUND
  // =====================================================

  if (!student) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-red-600">
          Please log in to access your dashboard.
        </p>
      </main>
    );
  }

  // =====================================================
  // DASHBOARD
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-50 p-8">

      <div className="mx-auto max-w-6xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              Welcome, {student.full_name}! 👋
            </h1>

            <p className="mt-2 text-slate-500">
              Here's your SkillNet dashboard.
            </p>

          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Logout
          </button>

        </div>

        {/* =================================================
            STUDENT INFORMATION
        ================================================= */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {/* College */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="font-semibold text-slate-900">
              College
            </h2>

            <p className="mt-2 text-slate-600">
              {student.college || "Not provided"}
            </p>

          </div>

          {/* Course */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="font-semibold text-slate-900">
              Course
            </h2>

            <p className="mt-2 text-slate-600">
              {student.course || "Not provided"}
            </p>

          </div>

          {/* Year */}

          <div className="rounded-2xl bg-white p-6 shadow">

            <h2 className="font-semibold text-slate-900">
              Year
            </h2>

            <p className="mt-2 text-slate-600">
              {student.year_of_study
                ? `Year ${student.year_of_study}`
                : "Not provided"}
            </p>

          </div>

        </div>

        {/* =================================================
            CAREER SETUP
        ================================================= */}

        <div className="mt-8 rounded-2xl bg-white p-8 shadow">

          <h2 className="text-xl font-bold text-slate-900">
            Continue Your SkillNet Journey
          </h2>

          <p className="mt-2 text-slate-600">
            Tell us about the career path you want to pursue.
            SkillNet will use this information to personalize
            your skill assessment and learning roadmap.
          </p>

          <button
            type="button"
            onClick={() => router.push("/career-selection")}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Choose Career Path
          </button>

        </div>

      </div>

    </main>
  );
}