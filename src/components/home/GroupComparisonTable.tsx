import { CheckCircle2, XCircle, AlertTriangle, Star, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const comparisonMatrix = [
  {
    parameter: "CaCO₃ Pre-precipitation Bonds",
    ut: "0%",
    h: "0%",
    e: "3.5% – 5.2%",
    eh: "3.5% – 5.2%",
    importance: "High (Mechanical Backbone)",
  },
  {
    parameter: "Apparent Contact Angle (ACA)",
    ut: "< 20° (Hydrophilic)",
    h: "128° (Hydrophobic)",
    e: "< 25° (Hydrophilic)",
    eh: "132° (Hydrophobic)",
    importance: "High (Water Repellency)",
  },
  {
    parameter: "Peak Shear Cohesion (c')",
    ut: "0 kPa",
    h: "0 kPa",
    e: "18 – 25 kPa",
    eh: "16 – 22 kPa",
    importance: "High (Shear Strength)",
  },
  {
    parameter: "Friction Angle (φ')",
    ut: "33°",
    h: "30° (Reduced)",
    e: "37° (Improved)",
    eh: "35° (Balanced)",
    importance: "Medium (Internal Friction)",
  },
  {
    parameter: "Flood Infiltration Reduction",
    ut: "0% (Fast Infiltration)",
    h: "85% (High Barrier)",
    e: "25% (Pore Filling)",
    eh: "88% (Optimal Barrier)",
    importance: "Critical (Hydraulic Protection)",
  },
  {
    parameter: "Strength Retention (10 Flood Cycles)",
    ut: "41% (Severe Loss)",
    h: "69% (Moderate)",
    e: "58% (Water Erosion)",
    eh: "84% (High Retention ⭐)",
    importance: "Critical (Durability)",
  },
  {
    parameter: "Treatment Uniformity (COV)",
    ut: "N/A",
    h: "Good (< 15%)",
    e: "Good (< 18%)",
    eh: "High Uniformity (< 15%)",
    importance: "Medium (Reliability)",
  },
  {
    parameter: "Feasibility Rating",
    ut: "Baseline Reference",
    h: "Hydraulic Only ⚠️",
    e: "Mechanical Only ⚠️",
    eh: "✅ Highly Recommended",
    importance: "Final Verdict",
  },
];

export default function GroupComparisonTable() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-xs font-bold text-teal-700 mb-4 tracking-wide uppercase">
            <Shield className="w-4 h-4 text-teal-600" />
            Comprehensive Matrix Comparison
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Side-by-Side Treatment Group Evaluation
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            Detailed performance breakdown across physical, hydraulic, mechanical, and flood-durability benchmarks.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-jakarta uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold w-1/4">Evaluation Parameter</th>
                  <th className="py-4 px-4 font-bold text-center bg-slate-800">Untreated (UT)</th>
                  <th className="py-4 px-4 font-bold text-center bg-teal-950/70 text-teal-300">Hydrophobic (H)</th>
                  <th className="py-4 px-4 font-bold text-center bg-blue-950/70 text-blue-300">EICP Only (E)</th>
                  <th className="py-4 px-6 font-bold text-center bg-purple-950 text-purple-300 ring-2 ring-purple-500/50">
                    ⭐ EICP + Hydrophobic (E+H)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-inter">
                {comparisonMatrix.map((row, index) => (
                  <tr
                    key={row.parameter}
                    className={`transition-colors hover:bg-slate-50/80 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    } ${index === comparisonMatrix.length - 1 ? "bg-purple-50/50 font-bold" : ""}`}
                  >
                    {/* Parameter Name */}
                    <td className="py-4 px-6 font-semibold text-slate-900">
                      <div>{row.parameter}</div>
                      <span className="text-[10px] text-gray-400 font-normal">{row.importance}</span>
                    </td>

                    {/* UT */}
                    <td className="py-4 px-4 text-center text-gray-600 bg-slate-50/50">{row.ut}</td>

                    {/* H */}
                    <td className="py-4 px-4 text-center text-teal-800 font-medium bg-teal-50/30">{row.h}</td>

                    {/* E */}
                    <td className="py-4 px-4 text-center text-blue-800 font-medium bg-blue-50/30">{row.e}</td>

                    {/* E+H (Highlighted Column) */}
                    <td className="py-4 px-6 text-center font-semibold text-purple-900 bg-purple-50/70 border-x border-purple-200">
                      {row.eh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Callout inside Card */}
          <div className="bg-slate-900 px-6 py-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center font-bold text-sm shrink-0">
                ⭐
              </span>
              <p className="text-xs text-slate-300">
                <strong className="text-white">Verdict: </strong>
                EICP + Hydrophobic (E+H) sequence achieves the highest overall durability score (84% SRR) with zero mechanical compromise.
              </p>
            </div>
            <Link
              href="/feasibility"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-semibold transition-colors shrink-0"
            >
              Read Verdict Report <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
