"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart2, ArrowDown, Droplets, Grid3x3, Scale } from "lucide-react";

const kpis = [
  {
    id: "srr",
    name: "Strength Retention Ratio",
    abbreviation: "SRR",
    formula: "SRR = (τ_post / τ_initial) × 100",
    unit: "%",
    icon: TrendingUp,
    color: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    cardBorder: "border-t-blue-400",
    target: "Target > 80%",
    targetColor: "text-blue-800 bg-blue-50",
    description: "Measures shear strength retained after repeated flood–dry cycles vs. initial strength.",
  },
  {
    id: "bcr",
    name: "Bearing Capacity Retention",
    abbreviation: "BCR",
    formula: "BCR = (q_u,post / q_u,initial) × 100",
    unit: "%",
    icon: BarChart2,
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    cardBorder: "border-t-emerald-400",
    target: "Target > 75%",
    targetColor: "text-emerald-800 bg-emerald-50",
    description: "Ratio of ultimate bearing pressure after flood cycling to the initial value. Primary foundation KPI.",
  },
  {
    id: "delta-s",
    name: "Settlement Increase",
    abbreviation: "ΔS",
    formula: "ΔS = S_post − S_initial",
    unit: "mm",
    icon: ArrowDown,
    color: "red",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    cardBorder: "border-t-red-400",
    target: "Minimize",
    targetColor: "text-red-800 bg-red-50",
    description: "Absolute settlement increase at a fixed applied pressure after flood–dry cycling.",
  },
  {
    id: "ir",
    name: "Infiltration Reduction",
    abbreviation: "IR",
    formula: "IR = (1 − q_t / q_ut) × 100",
    unit: "%",
    icon: Droplets,
    color: "teal",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    cardBorder: "border-t-teal-400",
    target: "Target > 60%",
    targetColor: "text-teal-800 bg-teal-50",
    description: "Percentage reduction in infiltration rate — quantifies the hydraulic protection benefit.",
  },
  {
    id: "uniformity",
    name: "Treatment Uniformity",
    abbreviation: "TU",
    formula: "CV(CaCO₃) across specimen",
    unit: "% CV",
    icon: Grid3x3,
    color: "cyan",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-800",
    cardBorder: "border-t-cyan-400",
    target: "CV < 20%",
    targetColor: "text-cyan-900 bg-cyan-50 font-bold",
    description: "Coefficient of variation of CaCO₃ content across the specimen cross-section.",
  },
  {
    id: "mass-loss",
    name: "Mass Loss (Durability)",
    abbreviation: "ML",
    formula: "ML = (M_i − M_post) / M_i × 100",
    unit: "%",
    icon: Scale,
    color: "orange",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    cardBorder: "border-t-orange-400",
    target: "Target < 5%",
    targetColor: "text-orange-800 bg-orange-50",
    description: "Cumulative mass loss after 0, 5 and 10 flood–dry cycles — indicates erosion resistance.",
  },
];

export default function KPISection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-200 border border-slate-300 rounded-full text-xs font-bold text-slate-700 mb-4 uppercase tracking-wide">
            Performance Indicators
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Six Key Performance Indicators
          </h2>
          <p className="text-slate-600 font-inter leading-relaxed">
            Quantitative metrics to evaluate and compare all treatment groups under flood conditions.
          </p>
        </motion.div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={kpi.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`card-base p-6 border-t-4 ${kpi.cardBorder} bg-white shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${kpi.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 ${kpi.iconColor}`} />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${kpi.targetColor}`}>
                    {kpi.target}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono font-bold text-lg text-slate-900">{kpi.abbreviation}</span>
                  <span className="text-xs text-slate-400 font-medium">({kpi.unit})</span>
                </div>
                <h3 className="font-jakarta font-bold text-sm text-slate-800 mb-3">{kpi.name}</h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">{kpi.description}</p>

                {/* Formula */}
                <div className="formula text-xs bg-slate-50 border border-slate-200 text-slate-700 font-mono">{kpi.formula}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
