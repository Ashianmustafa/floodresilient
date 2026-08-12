"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import { BarChart3, TrendingUp, Droplets, ShieldCheck } from "lucide-react";

// Direct Shear Test Data: Shear Stress (kPa) vs Normal Stress (kPa)
const shearData = [
  { normalStress: 25, UT: 18, H: 14, E: 38, EH: 35 },
  { normalStress: 50, UT: 36, H: 27, E: 74, EH: 69 },
  { normalStress: 100, UT: 71, H: 52, E: 142, EH: 135 },
  { normalStress: 200, UT: 140, H: 102, E: 270, EH: 258 },
];

// Bearing Capacity Retention (%) vs Flood–Dry Cycles (0, 5, 10)
const durabilityData = [
  { cycles: "0 Cycles (Initial)", UT: 100, H: 90, E: 100, EH: 100 },
  { cycles: "5 Flood Cycles", UT: 62, H: 78, E: 74, EH: 91 },
  { cycles: "10 Flood Cycles", UT: 41, H: 69, E: 58, EH: 84 },
];

// Infiltration Reduction (%) & Contact Angle (deg)
const hydraulicData = [
  { group: "Untreated (UT)", infiltrationReduction: 0, contactAngle: 0 },
  { group: "Hydrophobic Only (H)", infiltrationReduction: 85, contactAngle: 128 },
  { group: "EICP Only (E)", infiltrationReduction: 25, contactAngle: 25 },
  { group: "EICP + Hydrophobic (E+H)", infiltrationReduction: 88, contactAngle: 132 },
];

export default function InteractiveDataCharts() {
  const [activeTab, setActiveTab] = useState<"shear" | "durability" | "hydraulic">("durability");

  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-blue-700 mb-4 tracking-wide uppercase">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            Interactive Experimental Analytics
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Hydro-Mechanical Performance Visualizer
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            Compare load-bearing capacity, shear envelope, and flood-durability retention metrics across all four treatment groups.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "durability", label: "Flood–Dry Durability (BCR %)", icon: ShieldCheck, color: "blue" },
            { id: "shear", label: "Direct Shear Envelope (kPa)", icon: TrendingUp, color: "teal" },
            { id: "hydraulic", label: "Infiltration Reduction & Contact Angle", icon: Droplets, color: "purple" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-teal-400" : "text-slate-500"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Chart Container Card */}
        <div className="card-base p-6 sm:p-10 bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Active Chart 1: Durability */}
          {activeTab === "durability" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-teal-400" />
                    Bearing Capacity Retention (%) Over Flood–Dry Cycles
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    EICP + Hydrophobic (E+H) retains 84% bearing capacity after 10 flood cycles vs only 41% in untreated sand.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-full text-xs font-semibold">
                    ⭐ E+H Retention: 84%
                  </span>
                </div>
              </div>

              <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={durabilityData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="cycles" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <YAxis stroke="#94a3b8" domain={[0, 110]} tick={{ fill: "#94a3b8", fontSize: 12 }} unit="%" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff" }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px" }} />
                    <Bar dataKey="UT" name="Untreated (UT)" fill="#64748b" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="H" name="Hydrophobic Only (H)" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="E" name="EICP Only (E)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="EH" name="EICP + Hydrophobic (E+H)" fill="#a855f7" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Active Chart 2: Shear Envelope */}
          {activeTab === "shear" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Direct Shear Envelope (Shear Stress vs Normal Stress)
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    EICP biocementation increases peak shear strength dramatically across all normal stress levels.
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-semibold">
                  EICP Cohesion c' ≈ 18-22 kPa
                </span>
              </div>

              <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={shearData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="normalStress" stroke="#94a3b8" unit=" kPa" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <YAxis stroke="#94a3b8" unit=" kPa" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff" }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px" }} />
                    <Line type="monotone" dataKey="UT" name="Untreated (UT)" stroke="#94a3b8" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="H" name="Hydrophobic Only (H)" stroke="#14b8a6" strokeWidth={2.5} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="E" name="EICP Only (E)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="EH" name="EICP + Hydrophobic (E+H)" stroke="#a855f7" strokeWidth={3} dot={{ r: 5 }} strokeDasharray="4 4" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Active Chart 3: Hydraulic Performance */}
          {activeTab === "hydraulic" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-white flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-teal-400" />
                    Hydraulic Protection & Surface Contact Angle (°)
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    Hydrophobic post-treatment creates strong surface water repellency (&gt;128° ACA) and 88% reduction in flood infiltration.
                  </p>
                </div>
                <span className="px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full text-xs font-semibold">
                  ACA &gt; 90° = Hydrophobic
                </span>
              </div>

              <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={hydraulicData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="group" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <YAxis stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff" }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px" }} />
                    <Area type="monotone" dataKey="infiltrationReduction" name="Infiltration Reduction (%)" fill="#14b8a6" stroke="#14b8a6" fillOpacity={0.4} />
                    <Area type="monotone" dataKey="contactAngle" name="Apparent Contact Angle (°)" fill="#3b82f6" stroke="#3b82f6" fillOpacity={0.4} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Metric Pill Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800 text-center">
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-xs text-slate-400">Target Replicate CV</p>
              <p className="text-base font-bold text-teal-300 mt-0.5">&lt; 15%</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-xs text-slate-400">Peak Friction Angle (φ')</p>
              <p className="text-base font-bold text-blue-300 mt-0.5">34° – 38°</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-xs text-slate-400">CaCO₃ Content</p>
              <p className="text-base font-bold text-purple-300 mt-0.5">3.5% – 5.2%</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <p className="text-xs text-slate-400">DMDCS Pilot Dosage</p>
              <p className="text-base font-bold text-amber-300 mt-0.5">0.05% mass</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
