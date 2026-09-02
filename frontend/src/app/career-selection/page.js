"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  // =====================================================
  // LOAD INDUSTRIES AND ROLES
  // =====================================================

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

        // Load existing career selection
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

  // =====================================================
  // INDUSTRY CHANGE
  // =====================================================

  function handleIndustryChange(event) {
    const value = event.target.value;

    setSelectedIndustry(value);
    setSelectedRole("");
    setNotSure(false);
    setMessage("");
  }

  // =====================================================
  // NOT SURE YET
  // =====================================================

  function handleNotSureChange(event) {
    const checked = event.target.checked;

    setNotSure(checked);

    if (checked) {
      setSelectedIndustry("");
      setSelectedRole("");
    }

    setMessage("");
  }

  // =====================================================
  // GET ROLES FOR SELECTED INDUSTRY
  // =====================================================

  const filteredRoles = roles.filter(
    (role) =>
      String(role.industry_id) === String(selectedIndustry)
  );

  // =====================================================
  // SAVE CAREER PREFERENCE
  // =====================================================

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    // -------------------------------------------------
    // Validation
    // -------------------------------------------------

    if (!notSure && !selectedIndustry) {
      setMessage("Please select an industry or choose 'Not sure yet'.");
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
          data.message || "Unable to save career preference."
        );
        return;
      }

      setMessage("Career preference saved successfully!");

      // -------------------------------------------------
      // Continue to Current Skills
      // -------------------------------------------------

      setTimeout(() => {
        router.push("/skills");
      }, 800);
    } catch (error) {
      console.error("Career selection save error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
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
          Loading career options...
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

          <span className="text-sm text-slate-500">
            Career Setup
          </span>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <section className="mx-auto max-w-3xl px-6 py-12">

        {/* Heading */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            STEP 2 OF YOUR SKILL JOURNEY
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Choose your career direction
          </h1>

          <p className="mt-3 text-slate-600">
            Tell us what field or career you are interested in.
            SkillNet will use this information to understand the
            skills you need and create your personalized journey.
          </p>

        </div>

        {/* =================================================
            FORM
        ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* =================================================
              INDUSTRY
          ================================================= */}

          <section className="rounded-2xl border bg-white p-6 shadow-sm">

            <label className="block text-sm font-semibold text-slate-700">
              Preferred Industry
            </label>

            <p className="mt-1 text-sm text-slate-500">
              Select the field you want to explore.
            </p>

            <select
              value={selectedIndustry}
              onChange={handleIndustryChange}
              disabled={notSure}
              className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
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

          </section>

          {/* =================================================
              ROLE
          ================================================= */}

          <section className="rounded-2xl border bg-white p-6 shadow-sm">

            <label className="block text-sm font-semibold text-slate-700">
              Preferred Career Role
            </label>

            <p className="mt-1 text-sm text-slate-500">
              Choose the role you want to work toward.
            </p>

            <select
              value={selectedRole}
              onChange={(event) =>
                setSelectedRole(event.target.value)
              }
              disabled={
                notSure ||
                !selectedIndustry ||
                filteredRoles.length === 0
              }
              className="mt-4 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
            >

              <option value="">
                {!selectedIndustry
                  ? "Select an industry first"
                  : filteredRoles.length === 0
                  ? "No roles available"
                  : "Select a career role"}
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

          </section>

          {/* =================================================
              NOT SURE
          ================================================= */}

          <section className="rounded-2xl border bg-white p-6 shadow-sm">

            <label className="flex cursor-pointer items-start gap-4">

              <input
                type="checkbox"
                checked={notSure}
                onChange={handleNotSureChange}
                className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600"
              />

              <div>

                <p className="font-semibold text-slate-900">
                  I'm not sure yet
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  I don't know which career path is right for me.
                  Help me discover suitable career options.
                </p>

              </div>

            </label>

          </section>

          {/* =================================================
              MESSAGE
          ================================================= */}

          {message && (
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-700">
              {message}
            </div>
          )}

          {/* =================================================
              CONTINUE
          ================================================= */}

          <div className="flex justify-end">

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : "Continue"}
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}