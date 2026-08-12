"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown, FlaskConical, Droplets, ChevronRight } from "lucide-react";

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

// Particle component for animated background
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full bg-blue-400/20 particle"
      style={style}
    />
  );
}

export default function HeroSection() {
  // Mount state prevents SSR/client mismatch for particles
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Animated particles — client-only to avoid SSR/hydration mismatch */}
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
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow tag */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                🧪 Final Year Project — Geotechnical Engineering
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-jakarta font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-4">
                Flood-Resilient
                <br />
                <span className="gradient-text">Foundation</span>
                <br />
                Engineering
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-inter leading-relaxed max-w-xl">
                Investigating combined{" "}
                <span className="font-semibold text-blue-700">EICP biocementation</span>{" "}
                and{" "}
                <span className="font-semibold text-teal-600">hydrophobic treatment</span>{" "}
                to protect shallow foundation soils against repeated flood–dry cycles.
              </p>
            </div>

            {/* Research question callout */}
            <div className="callout-blue">
              <p className="text-sm font-inter text-slate-700 italic">
                <span className="font-semibold text-blue-800 not-italic">Research Question: </span>
                Can EICP compensate for mechanical weakening from hydrophobic coating, while the hydrophobic layer
                protects the cemented foundation soil from flood-induced deterioration?
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 text-sm"
              >
                Explore Research
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/feasibility"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-sm"
              >
                View Feasibility Report
              </Link>
            </div>

            {/* Treatment tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["EICP Biocementation", "Hydrophobic Coating", "CaCO₃ Bonds", "Toyoura Sand", "Flood–Dry Cycles"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — Diagram */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Diagram card */}
              <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-6 space-y-3">
                <div className="text-center mb-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Treatment System</p>
                  <h3 className="font-jakarta font-bold text-lg text-slate-800 mt-1">EICP + Hydrophobic Layers</h3>
                </div>

                {/* Layer visualization */}
                <div className="space-y-2">
                  {/* Flood water */}
                  <div className="relative bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-blue-500 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-blue-800">Flood Water</p>
                      <p className="text-xs text-blue-600">Surface inundation during flood event</p>
                    </div>
                    <span className="ml-auto text-blue-400">↓</span>
                  </div>

                  {/* Hydrophobic Layer */}
                  <div className="relative bg-teal-50 border-2 border-teal-200 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-500 shrink-0 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">H</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-teal-800">Hydrophobic Layer</p>
                      <p className="text-xs text-teal-600">Water repellent barrier — DMDCS coating</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">Post-treatment</span>
                  </div>

                  {/* EICP Layer */}
                  <div className="relative bg-blue-50 border-2 border-blue-200 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-600 shrink-0 flex items-center justify-center">
                      <FlaskConical className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-800">EICP Cemented Zone</p>
                      <p className="text-xs text-blue-600">CaCO₃ bonds — mechanical strength skeleton</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Primary</span>
                  </div>

                  {/* Sand Foundation */}
                  <div className="relative bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-600 shrink-0 flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">S</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-800">Toyoura Sand Foundation</p>
                      <p className="text-xs text-amber-600">Controlled relative density substrate</p>
                    </div>
                  </div>
                </div>

                {/* Result indicator */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-xl px-4 py-3 text-center">
                  <p className="text-xs font-semibold text-green-700">✅ Feasibility Verdict: PROCEED</p>
                  <p className="text-xs text-gray-500 mt-0.5">Expert assessment — geotechnical FYP suitable</p>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border border-blue-100" />
              <div className="absolute -z-20 -top-8 -right-8 w-full h-full rounded-3xl border border-teal-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
