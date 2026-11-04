import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/ats-checker")({
  head: () => ({
    meta: [
      { title: "ATS Resume Checker — Coming Soon | CVify.AI" },
      {
        name: "description",
        content:
          "We're building a smarter ATS experience to help you understand resume compatibility, identify missing skills, and stand out to recruiters.",
      },
      { property: "og:title", content: "ATS Resume Checker — Coming Soon | CVify.AI" },
      {
        property: "og:description",
        content:
          "Something powerful is coming. Intelligent ATS scanning, job description matching, and actionable keyword analysis.",
      },
    ],
  }),
  component: ATSCheckerPage,
});

function ATSCheckerPage() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12 sm:px-6 lg:py-16 overflow-hidden">
      {/* Background grid and ambient glow */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-neon/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass relative overflow-hidden rounded-3xl border border-border/80 p-8 sm:p-12 text-center shadow-soft"
        >
          {/* Subtle top golden light line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

          {/* 3D Minimal Scanner Illustration */}
          <div className="relative mx-auto mb-6 flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center">
            <motion.div
              animate={{ y: [-5, 6, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Soft ambient back glow */}
              <div className="absolute inset-4 rounded-3xl bg-neon/15 blur-2xl" />

              {/* 3D Isometric SVG Scanner Graphic */}
              <svg
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full relative z-10 drop-shadow-xl"
              >
                <defs>
                  <linearGradient
                    id="sheetGrad"
                    x1="40"
                    y1="30"
                    x2="190"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="var(--card)" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="var(--background)" stopOpacity="0.9" />
                  </linearGradient>

                  <linearGradient id="scanBeam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--neon)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--neon)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="var(--neon)" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient
                    id="laserGrad"
                    x1="30"
                    y1="120"
                    x2="210"
                    y2="120"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="var(--neon)" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="var(--neon)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--neon)" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                {/* Base isometric platform shadow */}
                <ellipse cx="120" cy="205" rx="75" ry="16" fill="var(--neon)" fillOpacity="0.12" />

                {/* Secondary backdrop sheet */}
                <path
                  d="M75 45 L175 45 C181 45 186 50 186 56 L186 175 C186 181 181 186 175 186 L75 186 C69 186 64 181 64 175 L64 56 C64 50 69 45 75 45 Z"
                  fill="var(--card)"
                  fillOpacity="0.4"
                  stroke="var(--border)"
                  strokeWidth="1.5"
                  transform="rotate(6 125 115)"
                />

                {/* Primary 3D resume sheet */}
                <g filter="drop-shadow(0 12px 24px rgba(0,0,0,0.25))">
                  <rect
                    x="56"
                    y="42"
                    width="128"
                    height="156"
                    rx="14"
                    fill="url(#sheetGrad)"
                    stroke="var(--border)"
                    strokeWidth="1.5"
                  />

                  {/* Document header decoration */}
                  <rect
                    x="74"
                    y="60"
                    width="46"
                    height="8"
                    rx="4"
                    fill="var(--foreground)"
                    fillOpacity="0.9"
                  />
                  <rect x="74" y="74" width="70" height="4" rx="2" fill="var(--neon)" />
                  <rect
                    x="74"
                    y="83"
                    width="92"
                    height="3"
                    rx="1.5"
                    fill="var(--muted-foreground)"
                    fillOpacity="0.4"
                  />

                  {/* Document body skeleton lines */}
                  <rect
                    x="74"
                    y="98"
                    width="88"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />
                  <rect
                    x="74"
                    y="108"
                    width="65"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />
                  <rect
                    x="74"
                    y="118"
                    width="82"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />

                  <rect
                    x="74"
                    y="134"
                    width="92"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />
                  <rect
                    x="74"
                    y="144"
                    width="75"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />
                  <rect
                    x="74"
                    y="154"
                    width="85"
                    height="4"
                    rx="2"
                    fill="var(--foreground)"
                    fillOpacity="0.25"
                  />

                  {/* Glowing Laser Scan Bar */}
                  <motion.g
                    animate={{ y: [48, 148, 48] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <rect x="54" y="38" width="132" height="18" fill="url(#scanBeam)" />
                    <line
                      x1="50"
                      y1="47"
                      x2="190"
                      y2="47"
                      stroke="url(#laserGrad)"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="120"
                      cy="47"
                      r="3.5"
                      fill="var(--neon)"
                      filter="drop-shadow(0 0 6px var(--neon))"
                    />
                  </motion.g>
                </g>

                {/* Floating 3D Check Pill (Top Right) */}
                <motion.g
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                >
                  <rect
                    x="154"
                    y="36"
                    width="44"
                    height="26"
                    rx="13"
                    fill="var(--card)"
                    stroke="var(--neon)"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
                  />
                  <path
                    d="M168 49 L173 54 L184 43"
                    stroke="var(--neon)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* Floating AI Match Badge (Bottom Left) */}
                <motion.g
                  animate={{ y: [3, -4, 3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                >
                  <rect
                    x="38"
                    y="150"
                    width="48"
                    height="24"
                    rx="12"
                    fill="var(--card)"
                    stroke="var(--border)"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))"
                  />
                  <text
                    x="62"
                    y="166"
                    textAnchor="middle"
                    fill="var(--neon)"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                  >
                    98%
                  </text>
                </motion.g>
              </svg>
            </motion.div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-3.5 py-1 text-[11px] font-bold tracking-wider uppercase text-neon">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            IN DEVELOPMENT
          </div>

          {/* Main Heading */}
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Something Powerful <span className="text-neon">Is Coming.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mx-auto mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground text-balance">
            We're building a smarter ATS experience to help you understand your resume
            compatibility, identify missing skills, and stand out to recruiters.
          </p>

          {/* Prominent Status Label & Animated Progress */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-foreground mb-2.5">
              <span className="flex items-center gap-2 font-display text-sm font-bold">
                <Sparkles className="h-4 w-4 text-neon" />
                ATS Checker – Work in Progress
              </span>
              <span className="font-mono text-xs font-bold text-neon">Phase 1</span>
            </div>

            {/* Subtle animated loading-style progress indicator */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted relative">
              <motion.div
                className="h-full rounded-full bg-neon shadow-[0_0_12px_var(--neon)]"
                animate={{
                  width: ["35%", "72%", "54%", "88%", "68%", "35%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* Call to action for Resume Builder */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-bold text-neon-foreground shadow-glow hover:opacity-90 hover:shadow-[0_0_80px_-5px_var(--neon)] transition-all"
            >
              Build Your Resume in the Meantime <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Small Footer Text */}
          <p className="mt-6 text-xs text-muted-foreground font-medium">
            We're working on making your resume more career-ready. Stay tuned!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
