"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, FlaskConical, Droplets, ChevronRight, Sparkles } from "lucide-react";

// Fixed particle data — deterministic so SSR and client match
const PARTICLE_SEEDS = [
  { width: 6, left: 8, dur: 18, delay: 2 },
  { width: 10, left: 15, dur: 14, delay: 6 },
  { width: 5, left: 23, dur: 22, delay: 0 },
  { width: 8, left: 31, dur: 16, delay: 4 },
  { width: 11, left: 42, dur: 20, delay: 8 },
  { width: 4, left: 50, dur: 13, delay: 1 },
  { width: 7, left: 58, dur: 17, delay: 5 },
  { width: 9, left: 65, dur: 21, delay: 9 },
  { width: 6, left: 72, dur: 15, delay: 3 },
  { width: 12, left: 80, dur: 19, delay: 7 },
  { width: 5, left: 88, dur: 12, delay: 2 },
  { width: 8, left: 93, dur: 24, delay: 0 },
  { width: 10, left: 4, dur: 11, delay: 6 },
  { width: 4, left: 19, dur: 23, delay: 4 },
  { width: 7, left: 36, dur: 18, delay: 1 },
  { width: 9, left: 47, dur: 14, delay: 8 },
  { width: 6, left: 55, dur: 20, delay: 3 },
  { width: 11, left: 69, dur: 16, delay: 5 },
  { width: 5, left: 77, dur: 22, delay: 9 },
  { width: 8, left: 96, dur: 13, delay: 7 },
];

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-cyan-400/25 particle"
      style={style}
    />
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && PARTICLE_SEEDS.map((p, i) => (
          <Particle
            key={i}
            style={{
              width: p.width,
              height: p.width,
              left: `${p.left}%`,
              bottom: "-20px",
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
        {/* Background gradient blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                🧪 Final Year Project — Geotechnical Engineering
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="font-jakarta font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-4">
                Flood-Resilient
                <br />
                <span className="gradient-text">Foundation</span>
                <br />
                Engineering
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-inter leading-relaxed max-w-xl">
                Investigating combined{" "}
                <span className="font-bold text-blue-700">EICP biocementation</span>{" "}
                and{" "}
                <span className="font-bold text-cyan-700">hydrophobic treatment</span>{" "}
                to protect shallow foundation soils against repeated flood–dry cycles.
              </p>
            </motion.div>

            {/* Research question callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="callout-blue"
            >
              <p className="text-sm font-inter text-slate-700 italic">
                <span className="font-bold text-blue-900 not-italic">Research Question: </span>
                Can EICP compensate for mechanical weakening from hydrophobic coating, while the hydrophobic layer
                protects the cemented foundation soil from flood-induced deterioration?
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 shadow-md hover:shadow-xl transition-all duration-200 text-sm"
                >
                  Explore Research
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/feasibility"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 text-sm shadow-sm"
                >
                  View Feasibility Report
                </Link>
              </motion.div>
            </motion.div>

            {/* Treatment tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["EICP Biocementation", "Hydrophobic Coating", "CaCO₃ Bonds", "Toyoura Sand", "Flood–Dry Cycles"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold hover:bg-slate-200 transition-colors cursor-default border border-slate-200"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right — Floating Layer Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Animated Card Container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 space-y-3"
              >
                <div className="text-center mb-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Treatment System Layering</p>
                  <h3 className="font-jakarta font-bold text-lg text-slate-900 mt-1">EICP + Hydrophobic Layers</h3>
                </div>

                {/* Layer visualization */}
                <div className="space-y-2.5">
                  {/* Flood water */}
                  <div className="relative bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-blue-900">Flood Water Layer</p>
                      <p className="text-xs text-blue-700">Surface inundation during seasonal flooding</p>
                    </div>
                    <span className="ml-auto text-blue-500 font-bold">↓</span>
                  </div>

                  {/* Hydrophobic Layer */}
                  <div className="relative bg-cyan-50 border-2 border-cyan-300 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-cyan-600 shrink-0 flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">H</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-cyan-950">Hydrophobic Barrier Layer</p>
                      <p className="text-xs text-cyan-800">DMDCS water-repellent coating (upper 20–30mm)</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-cyan-900 bg-cyan-100 border border-cyan-300 px-2 py-0.5 rounded-full">Upper Zone</span>
                  </div>

                  {/* EICP Layer */}
                  <div className="relative bg-blue-50 border-2 border-blue-300 rounded-xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-700 shrink-0 flex items-center justify-center">
                      <FlaskConical className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-blue-950">EICP Cemented Zone</p>
                      <p className="text-xs text-blue-800">CaCO₃ bonds — load-bearing structural skeleton</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-blue-900 bg-blue-100 border border-blue-300 px-2 py-0.5 rounded-full">Lower Zone</span>
                  </div>

                  {/* Sand Foundation */}
                  <div className="relative bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-600 shrink-0 flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">S</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-950">Toyoura Sand Foundation</p>
                      <p className="text-xs text-amber-800">Controlled relative density (50–60%) substrate</p>
                    </div>
                  </div>
                </div>

                {/* Result indicator */}
                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-xl px-4 py-3 text-center">
                  <p className="text-xs font-bold text-emerald-900">✅ Feasibility Verdict: PROCEED</p>
                  <p className="text-xs text-slate-500 mt-0.5">NUST Geotechnical Department Approved FYP</p>
                </div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border border-blue-100" />
              <div className="absolute -z-20 -top-8 -right-8 w-full h-full rounded-3xl border border-cyan-50" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-semibold tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-blue-600" />
      </div>
    </section>
  );
}
