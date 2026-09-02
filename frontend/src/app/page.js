import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17221b]">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-[#17221b]/10 bg-[#f7f5ef]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            Skill<span className="text-[#d95f39]">Net</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-[#17221b]/70 transition hover:text-[#d95f39]"
            >
              How it works
            </a>

            <a
              href="#ecosystem"
              className="text-sm font-medium text-[#17221b]/70 transition hover:text-[#d95f39]"
            >
              Ecosystem
            </a>

            <a
              href="#features"
              className="text-sm font-medium text-[#17221b]/70 transition hover:text-[#d95f39]"
            >
              Platform
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full px-5 py-2.5 text-sm font-semibold transition hover:bg-[#17221b]/5 sm:block"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-full bg-[#17221b] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#26352b]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#e8a04d]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-72 h-72 w-72 rounded-full bg-[#7ca982]/20 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
          {/* Hero text */}
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#17221b]/10 bg-white/60 px-4 py-2 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#d95f39]" />
              Connecting education with industry
            </div>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Build Skills.
              <br />
              <span className="text-[#d95f39]">
                Bridge the Gap.
              </span>
              <br />
              Become Industry-Ready.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#17221b]/65">
              SkillNet is a collaborative platform that connects
              students, academic institutions, educators, and
              industry to create a stronger pathway from learning
              to real-world skills.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-[#d95f39] px-7 py-4 text-center font-semibold text-white shadow-lg shadow-[#d95f39]/20 transition hover:-translate-y-1 hover:bg-[#c9512e]"
              >
                Start Your Journey →
              </Link>

              <a
                href="#how-it-works"
                className="rounded-full border border-[#17221b]/15 bg-white/60 px-7 py-4 text-center font-semibold transition hover:-translate-y-1 hover:bg-white"
              >
                Explore SkillNet
              </a>
            </div>
          </div>

          {/* Visual ecosystem */}
          <div className="relative mx-auto h-[480px] w-full max-w-xl">
            {/* Main circle */}
            <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#17221b] text-center text-white shadow-2xl">
              <div>
                <div className="text-3xl font-bold">SkillNet</div>
                <div className="mt-1 text-xs text-white/60">
                  Connected Skills Ecosystem
                </div>
              </div>
            </div>

            {/* Connecting ring */}
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#17221b]/10" />

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#17221b]/10" />

            {/* Student */}
            <div className="absolute left-0 top-20 rounded-2xl border border-[#17221b]/10 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5dfd4] text-xl">
                🎓
              </div>

              <p className="font-bold">Students</p>
              <p className="mt-1 text-xs text-[#17221b]/55">
                Build relevant skills
              </p>
            </div>

            {/* Academia */}
            <div className="absolute right-0 top-8 rounded-2xl border border-[#17221b]/10 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#dce9df] text-xl">
                🏫
              </div>

              <p className="font-bold">Academia</p>
              <p className="mt-1 text-xs text-[#17221b]/55">
                Align learning
              </p>
            </div>

            {/* Industry */}
            <div className="absolute bottom-16 right-4 rounded-2xl border border-[#17221b]/10 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1e2c7] text-xl">
                🏢
              </div>

              <p className="font-bold">Industry</p>
              <p className="mt-1 text-xs text-[#17221b]/55">
                Define real needs
              </p>
            </div>

            {/* Institution */}
            <div className="absolute bottom-4 left-6 rounded-2xl border border-[#17221b]/10 bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1e4ef] text-xl">
                🌐
              </div>

              <p className="font-bold">Institutions</p>
              <p className="mt-1 text-xs text-[#17221b]/55">
                Enable collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO STRIP ================= */}
      <section className="border-y border-[#17221b]/10 bg-[#17221b] px-6 py-10 text-white lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-xl leading-8 text-white/80">
            One platform. Multiple stakeholders.{" "}
            <span className="font-semibold text-white">
              One connected skill ecosystem.
            </span>
          </p>

          <a
            href="#ecosystem"
            className="w-fit rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Discover the ecosystem ↓
          </a>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        id="how-it-works"
        className="px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d95f39]">
              How SkillNet works
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              From learning to industry,
              <br />
              <span className="text-[#17221b]/45">
                everything connects.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="group rounded-3xl border border-[#17221b]/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-[#17221b]/10">
                  01
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5dfd4] text-xl">
                  ◉
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Understand Skills
              </h3>

              <p className="mt-4 leading-7 text-[#17221b]/60">
                Understand the skills associated with different
                roles and identify where learning needs to begin.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group rounded-3xl border border-[#17221b]/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-[#17221b]/10">
                  02
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#dce9df] text-xl">
                  ↗
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Identify the Gap
              </h3>

              <p className="mt-4 leading-7 text-[#17221b]/60">
                Compare existing capabilities with relevant
                competency requirements and discover areas for
                development.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group rounded-3xl border border-[#17221b]/10 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-[#17221b]/10">
                  03
                </span>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e2c7] text-xl">
                  ✦
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold">
                Build & Connect
              </h3>

              <p className="mt-4 leading-7 text-[#17221b]/60">
                Develop relevant competencies and connect learning
                with practical opportunities and industry needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ECOSYSTEM ================= */}
      <section
        id="ecosystem"
        className="bg-[#ebe8df] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d95f39]">
              One ecosystem
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built for everyone involved
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#17221b]/60">
              SkillNet is designed as a shared platform where
              different stakeholders contribute to and benefit from
              a connected skill ecosystem.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">🎓</div>
              <h3 className="mt-6 text-xl font-bold">
                Students
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#17221b]/55">
                Understand skills, assess competencies, develop
                capabilities, and prepare for real-world
                opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">👩‍🏫</div>
              <h3 className="mt-6 text-xl font-bold">
                Academicians
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#17221b]/55">
                Gain insight into skill requirements and support
                learners through relevant academic development.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">🏫</div>
              <h3 className="mt-6 text-xl font-bold">
                Institutions
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#17221b]/55">
                Strengthen academia-industry collaboration and
                understand evolving competency requirements.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-3xl">🏢</div>
              <h3 className="mt-6 text-xl font-bold">
                Industry
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#17221b]/55">
                Communicate skill expectations and connect with
                developing talent through practical opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d95f39]">
                The platform
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                A complete skill development ecosystem.
              </h2>

              <p className="mt-6 leading-8 text-[#17221b]/60">
                SkillNet brings skill discovery, assessment,
                development, collaboration, and industry connection
                into one platform.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#f5dfd4]">
                <span className="text-2xl">◎</span>
                <h3 className="mt-5 font-bold">
                  Skill Assessment
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Understand current competency levels through
                  structured assessment.
                </p>
              </div>

              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#dce9df]">
                <span className="text-2xl">⌁</span>
                <h3 className="mt-5 font-bold">
                  Skill Gap Analysis
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Identify the difference between existing and
                  required competencies.
                </p>
              </div>

              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#f1e2c7]">
                <span className="text-2xl">↗</span>
                <h3 className="mt-5 font-bold">
                  Learning Roadmaps
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Follow a development path based on individual
                  skill requirements.
                </p>
              </div>

              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#e1e4ef]">
                <span className="text-2xl">◇</span>
                <h3 className="mt-5 font-bold">
                  Industry Connection
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Connect learning with industry expectations,
                  projects, internships, and opportunities.
                </p>
              </div>

              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#dce9df]">
                <span className="text-2xl">▱</span>
                <h3 className="mt-5 font-bold">
                  Portfolio Building
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Build a meaningful representation of skills,
                  projects, and learning progress.
                </p>
              </div>

              <div className="rounded-2xl border border-[#17221b]/10 p-6 transition hover:bg-[#f5dfd4]">
                <span className="text-2xl">✦</span>
                <h3 className="mt-5 font-bold">
                  AI-Powered Insights
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#17221b]/55">
                  Use intelligent recommendations to make skill
                  development more relevant and personalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d95f39] px-8 py-16 text-white sm:px-14">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Start with SkillNet
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Turn skills into meaningful opportunities.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Whether you are learning, teaching, building talent,
              or defining industry requirements, SkillNet brings
              the ecosystem together.
            </p>

            <div className="mt-8">
              <Link
                href="/signup"
                className="inline-block rounded-full bg-white px-7 py-4 font-semibold text-[#17221b] transition hover:-translate-y-1 hover:bg-[#f7f5ef]"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#17221b]/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#17221b]/55 md:flex-row">
          <div>
            <span className="font-bold text-[#17221b]">
              Skill<span className="text-[#d95f39]">Net</span>
            </span>
            <span className="ml-2">
              — Connecting skills with opportunity.
            </span>
          </div>

          <p>© 2026 SkillNet. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}