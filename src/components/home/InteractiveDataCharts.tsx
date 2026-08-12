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
  { normalStress: "25 kPa", UT: 18, H: 14, E: 38, EH: 35 },
  { normalStress: "50 kPa", UT: 36, H: 27, E: 74, EH: 69 },
  { normalStress: "100 kPa", UT: 71, H: 52, E: 142, EH: 135 },
  { normalStress: "200 kPa", UT: 140, H: 102, E: 270, EH: 258 },
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
  { group: "Hydrophobic (H)", infiltrationReduction: 85, contactAngle: 128 },
  { group: "EICP Only (E)", infiltrationReduction: 25, contactAngle: 25 },
  { group: "EICP + Hydrophobic (E+H)", infiltrationReduction: 88, contactAngle: 132 },
];

export default function InteractiveDataCharts() {
  const [activeTab, setActiveTab] = useState<"durability" | "shear" | "hydraulic">("durability");

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-blue-800 mb-4 tracking-wide uppercase">
            <BarChart3 className="w-4 h-4 text-blue-700" />
            Interactive Analytical Visualizer
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Hydro-Mechanical Performance Charts
          </h2>
          <p className="text-slate-600 font-inter leading-relaxed">
            High-contrast comparison of shear strength, bearing capacity retention, and hydraulic water repellency.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: "durability", label: "Flood–Dry Durability (BCR %)", icon: ShieldCheck },
            { id: "shear", label: "Direct Shear Envelope (kPa)", icon: TrendingUp },
            { id: "hydraulic", label: "Infiltration Reduction & Contact Angle", icon: Droplets },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                  isActive
                    ? "bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* High-Contrast Light Card */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Active Chart 1: Durability */}
          {activeTab === "durability" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-blue-700" />
                    Bearing Capacity Retention (%) Over Flood–Dry Cycles
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    EICP + Hydrophobic (E+H) retains <strong className="text-purple-700">84% bearing capacity</strong> after 10 flood cycles vs 41% in untreated sand.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 bg-purple-100 text-purple-800 border border-purple-200 rounded-full text-xs font-bold shrink-0">
                  ⭐ Best System: E+H (84% Retention)
                </span>
              </div>

              <div className="h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={durabilityData} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="cycles" stroke="#334155" tick={{ fill: "#1e293b", fontSize: 13, fontWeight: 600 }} />
                    <YAxis stroke="#334155" domain={[0, 110]} tick={{ fill: "#1e293b", fontSize: 13, fontWeight: 600 }} unit="%" />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff", fontWeight: 600 }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px", fontWeight: 700, fontSize: "14px" }} />
                    <Bar dataKey="UT" name="Untreated (UT)" fill="#64748b" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="H" name="Hydrophobic Only (H)" fill="#0d9488" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="E" name="EICP Only (E)" fill="#2563eb" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="EH" name="EICP + Hydrophobic (E+H)" fill="#9333ea" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Active Chart 2: Shear Envelope */}
          {activeTab === "shear" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-700" />
                    Direct Shear Envelope (Shear Stress vs Normal Stress)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    CaCO₃ mineral precipitation provides substantial cohesion (<strong className="text-blue-700">c' ≈ 18–22 kPa</strong>) across all normal stress levels.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 border border-blue-200 rounded-full text-xs font-bold shrink-0">
                  EICP Cohesion: c' ≈ 18–22 kPa
                </span>
              </div>

              <div className="h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={shearData} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="normalStress" stroke="#334155" tick={{ fill: "#1e293b", fontSize: 13, fontWeight: 600 }} />
                    <YAxis stroke="#334155" unit=" kPa" tick={{ fill: "#1e293b", fontSize: 13, fontWeight: 600 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff", fontWeight: 600 }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px", fontWeight: 700, fontSize: "14px" }} />
                    <Line type="monotone" dataKey="UT" name="Untreated (UT)" stroke="#64748b" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="H" name="Hydrophobic Only (H)" stroke="#0d9488" strokeWidth={3} dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="E" name="EICP Only (E)" stroke="#2563eb" strokeWidth={4} dot={{ r: 6 }} />
                    <Line type="monotone" dataKey="EH" name="EICP + Hydrophobic (E+H)" stroke="#9333ea" strokeWidth={4} dot={{ r: 6 }} strokeDasharray="4 4" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Active Chart 3: Hydraulic Performance */}
          {activeTab === "hydraulic" && (
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-jakarta font-bold text-xl text-slate-900 flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-teal-600" />
                    Infiltration Reduction (%) & Contact Angle (°)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    Hydrophobic post-treatment creates <strong className="text-teal-700">132° contact angle</strong> and <strong className="text-purple-700">88% infiltration reduction</strong>.
                  </p>
                </div>
                <span className="px-3.5 py-1.5 bg-teal-100 text-teal-800 border border-teal-200 rounded-full text-xs font-bold shrink-0">
                  ACA &gt; 90° = Hydrophobic Barrier
                </span>
              </div>

              <div className="h-[380px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={hydraulicData} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="group" stroke="#334155" tick={{ fill: "#1e293b", fontSize: 12, fontWeight: 600 }} />
                    <YAxis stroke="#334155" tick={{ fill: "#1e293b", fontSize: 13, fontWeight: 600 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "12px", color: "#fff", fontWeight: 600 }}
                    />
                    <Legend wrapperStyle={{ paddingTop: "15px", fontWeight: 700, fontSize: "14px" }} />
                    <Area type="monotone" dataKey="infiltrationReduction" name="Infiltration Reduction (%)" fill="#0d9488" stroke="#0d9488" fillOpacity={0.3} strokeWidth={3} />
                    <Area type="monotone" dataKey="contactAngle" name="Apparent Contact Angle (°)" fill="#2563eb" stroke="#2563eb" fillOpacity={0.3} strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Metric Cards Row — High Contrast & Ultra Clear */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Replicate CV</p>
              <p className="text-xl sm:text-2xl font-jakarta font-extrabold text-slate-900 mt-1">&lt; 15%</p>
              <span className="text-[11px] text-teal-700 font-semibold">High Repeatability</span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center shadow-sm">
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">Friction Angle (φ')</p>
              <p className="text-xl sm:text-2xl font-jakarta font-extrabold text-blue-900 mt-1">34° – 38°</p>
              <span className="text-[11px] text-blue-700 font-semibold">Shear Capacity</span>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center shadow-sm">
              <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">CaCO₃ Content</p>
              <p className="text-xl sm:text-2xl font-jakarta font-extrabold text-purple-900 mt-1">3.5% – 5.2%</p>
              <span className="text-[11px] text-purple-700 font-semibold">Mineral Bonding</span>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center shadow-sm">
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">DMDCS Pilot Dosage</p>
              <p className="text-xl sm:text-2xl font-jakarta font-extrabold text-amber-900 mt-1">0.05% mass</p>
              <span className="text-[11px] text-amber-700 font-semibold">Low-Dose Coating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
