"use client";

import { motion } from "framer-motion";
import { Circle, Droplet, Zap, Star, HelpCircle } from "lucide-react";
import Link from "next/link";

const groups = [
  {
    id: "UT",
    label: "Untreated Sand",
    icon: Circle,
    bgColor: "bg-gray-50",
    border: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
    badge: "bg-gray-100 text-gray-700",
    accent: "text-gray-700",
    purpose: "Baseline Reference",
    description: "Unmodified Toyoura sand at controlled relative density. Establishes the benchmark for all hydraulic and mechanical comparisons.",
    tests: ["Grain Size", "Direct Shear", "Load-Settlement", "Flood Cycles"],
    isPrimary: false,
    isOptional: false,
  },
  {
    id: "H",
    label: "Hydrophobic Only",
    icon: Droplet,
    bgColor: "bg-emerald-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-800",
    accent: "text-emerald-700",
    purpose: "Hydraulic Performance",
    description: "DMDCS-coated sand. Tests the hydraulic protection benefit against the mechanical risk of reduced friction angle and suppressed dilatancy.",
    tests: ["WDPT", "Contact Angle", "Direct Shear", "Infiltration"],
    isPrimary: false,
    isOptional: false,
  },
  {
    id: "E",
    label: "EICP Only",
    icon: Zap,
    bgColor: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badge: "bg-blue-100 text-blue-800",
    accent: "text-blue-700",
    purpose: "Mechanical Improvement",
    description: "Enzyme-induced carbonate precipitation applied to hydrophilic sand. Pure biocementation benchmark — CaCO₃ bonds without hydrophobic protection.",
    tests: ["CaCO₃ Content", "UCS", "Direct Shear", "Bearing Capacity"],
    isPrimary: false,
    isOptional: false,
  },
  {
    id: "E+H",
    label: "EICP + Hydrophobic",
    icon: Star,
    bgColor: "bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50",
    border: "border-cyan-300 ring-2 ring-cyan-400/30",
    iconBg: "bg-gradient-to-br from-cyan-100 to-blue-100",
    iconColor: "text-cyan-800",
    badge: "bg-cyan-100 text-cyan-900 font-bold",
    accent: "text-cyan-800 font-bold",
    purpose: "Primary Configuration",
    description: "EICP applied first to hydrophilic sand → cured → hydrophobic post-treatment applied. The primary research configuration to be tested extensively.",
    tests: ["All Tests", "Flood Cycles", "CaCO₃ + Coating", "Full Matrix"],
    isPrimary: true,
    isOptional: false,
  },
  {
    id: "H+E",
    label: "Hydrophobic + EICP",
    icon: HelpCircle,
    bgColor: "bg-orange-50",
    border: "border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badge: "bg-orange-100 text-orange-700",
    accent: "text-orange-700",
    purpose: "Optional Comparison",
    description: "Hydrophobic treatment first, then EICP — reverse sequence. Tests whether order matters. Expected to show non-uniform cementation due to obstructed EICP penetration.",
    tests: ["Uniformity", "CaCO₃ Content", "Direct Shear", "WDPT"],
    isPrimary: false,
    isOptional: true,
  },
];

export default function ExperimentGroups() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-100 border border-cyan-200 rounded-full text-xs font-bold text-cyan-800 mb-4 tracking-wide uppercase shadow-sm">
            Experimental Design
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Four Treatment Groups
          </h2>
          <p className="text-slate-600 font-inter leading-relaxed">
            One sand. One relative density. One EICP formulation. One hydrophobic dosage. Scientifically controlled.
          </p>
        </motion.div>

        {/* Groups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {groups.filter(g => !g.isOptional).map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative card-base p-6 ${group.bgColor} border ${group.border} shadow-sm hover:shadow-xl transition-all duration-300`}
              >
                {/* Primary badge */}
                {group.isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-600 text-white text-xs font-bold rounded-full shadow-md">
                      ⭐ Primary System
                    </span>
                  </div>
                )}

                {/* ID badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${group.iconBg} flex items-center justify-center shadow-inner`}>
                    <Icon className={`w-6 h-6 ${group.iconColor}`} />
                  </div>
                  <span className={`badge ${group.badge} font-mono text-xs`}>{group.id}</span>
                </div>

                {/* Label */}
                <h3 className="font-jakarta font-bold text-base text-slate-900 mb-1">
                  {group.label}
                </h3>
                <p className={`text-xs font-semibold ${group.accent} mb-3`}>{group.purpose}</p>

                {/* Description */}
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{group.description}</p>

                {/* Tests */}
                <div className="flex flex-wrap gap-1.5">
                  {group.tests.map((test) => (
                    <span key={test} className="px-2 py-0.5 bg-white/80 text-slate-700 text-[10px] rounded-md font-medium border border-slate-200">
                      {test}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-xl mx-auto"
        >
          {groups.filter(g => g.isOptional).map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.id} className={`card-base p-5 ${group.bgColor} border ${group.border} border-dashed shadow-sm`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${group.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${group.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-sm text-orange-700">{group.id}</span>
                      <span className="badge bg-orange-100 text-orange-700 text-[10px] font-bold">Optional</span>
                    </div>
                    <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-1">{group.label}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{group.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Link to full programme */}
        <div className="text-center mt-10">
          <Link
            href="/experimental-programme"
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-200 text-cyan-800 font-semibold rounded-xl hover:bg-cyan-50 transition-all text-sm shadow-sm hover:shadow-md"
          >
            View Full Experimental Programme →
          </Link>
        </div>
      </div>
    </section>
  );
}
