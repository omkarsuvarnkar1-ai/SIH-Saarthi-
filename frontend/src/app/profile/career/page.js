"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CareerPage() {
  const router = useRouter();

  const [industries, setIndustries] = useState([]);
  const [roles, setRoles] = useState([]);

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [notSure, setNotSure] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Load industries and roles
  useEffect(() => {
    async function loadCareerData() {
      try {
        const response = await fetch("/api/career-data");
        const data = await response.json();

        if (!response.ok || !data.success) {
          setMessage("Unable to load career information.");
          return;
        }

        setIndustries(data.industries);
        setRoles(data.roles);
      } catch (error) {
        console.error("Career data error:", error);
        setMessage("Something went wrong while loading career information.");
      } finally {
        setLoading(false);
      }
    }

    loadCareerData();
  }, []);

  // Get roles for selected industry
  const filteredRoles = roles.filter(
    (role) => String(role.industry_id) === String(selectedIndustry)
  );

  function handleIndustryChange(event) {
    setSelectedIndustry(event.target.value);

    // Reset role whenever industry changes
    setSelectedRole("");

    // If user chooses an industry, they are no longer in "not sure" mode
    setNotSure(false);

    setMessage("");
  }

  function handleNotSure() {
    setNotSure(true);
    setSelectedIndustry("");
    setSelectedRole("");
    setMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!notSure && !selectedIndustry) {
      setMessage("Please select an industry or choose the 'I'm not sure' option.");
      return;
    }

    if (!notSure && !selectedRole) {
      setMessage("Please select a career role.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/profile/career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          industry_id: notSure ? null : Number(selectedIndustry),
          role_id: notSure ? null : Number(selectedRole),
          career_uncertain: notSure,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || "Unable to save career information.");
        return;
      }

      setMessage("Career preferences saved successfully!");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Career save error:", error);
      setMessage("Something went wrong while saving your preferences.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <p className="text-slate-600">
          Loading career information...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">

          <button
            onClick={() => router.push("/dashboard")}
            className="text-2xl font-bold text-blue-600"
          >
            SkillNet
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="text-sm font-medium text-slate-500 hover:text-blue-600"
          >
            Back to Dashboard
          </button>

        </div>
      </header>

      {/* Main */}
      <section className="mx-auto max-w-3xl px-6 py-12">

        {/* Heading */}
        <div className="mb-8">

          <p className="text-sm font-semibold text-blue-600">
            CAREER DIRECTION
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Where do you want to go?
          </h1>

          <p className="mt-3 leading-7 text-slate-600">
            Tell SkillNet about the industry and career you are interested
            in. We will use this information to understand the skills and
            competencies required for your target career.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Industry */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Preferred Industry
            </label>

            <select
              value={selectedIndustry}
              onChange={handleIndustryChange}
              disabled={notSure}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
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

          </div>

          {/* Career Role */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Desired Career / Job Role
            </label>

            <select
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value)}
              disabled={
                !selectedIndustry ||
                filteredRoles.length === 0 ||
                notSure
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-100"
            >

              <option value="">
                {selectedIndustry
                  ? filteredRoles.length > 0
                    ? "Select a career role"
                    : "No roles available yet"
                  : "Select an industry first"}
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

            {/* Description */}
            {selectedRole && (
              <div className="mt-4 rounded-lg bg-slate-50 p-4">

                <p className="text-sm font-semibold text-slate-700">
                  About this role
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {
                    filteredRoles.find(
                      (role) =>
                        String(role.role_id) === String(selectedRole)
                    )?.description
                  }
                </p>

              </div>
            )}

          </div>

          {/* Not Sure */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

            <h2 className="font-bold text-slate-900">
              Not sure what career to choose?
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              That's completely fine. SkillNet can later analyze your
              education, interests and skills to help you explore suitable
              career paths.
            </p>

            <button
              type="button"
              onClick={handleNotSure}
              className={`mt-4 rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                notSure
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-blue-300 bg-white text-blue-700 hover:bg-blue-100"
              }`}
            >
              {notSure
                ? "✓ Career exploration selected"
                : "I'm not sure yet"}
            </button>

          </div>

          {/* Message */}
          {message && (
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-700">
              {message}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between">

            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
            >
              ← Previous
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Continue →"}
            </button>

          </div>

        </form>

      </section>

    </main>
  );
}