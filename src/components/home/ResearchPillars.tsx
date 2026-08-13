"use client";

import { motion } from "framer-motion";
import { Droplets, Layers, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Droplets,
    title: "Hydraulic Performance",
    badge: "Water Repellency",
    badgeColor: "bg-cyan-100 text-cyan-900 font-bold",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
    accent: "border-cyan-400",
    description:
      "Water-drop penetration time (WDPT), contact angle measurement, infiltration rate and sorptivity testing to quantify flood-water resistance before and after treatment.",
    metrics: ["Contact Angle", "Infiltration Rate", "WDPT", "Sorptivity"],
  },
  {
    icon: Layers,
    title: "Mechanical Strength",
    badge: "Load Bearing",
    badgeColor: "bg-blue-100 text-blue-900 font-bold",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    accent: "border-blue-400",
    description:
      "Direct shear tests, model footing load–settlement curves (primary foundation test), UCS and oedometer testing to verify structural capacity is maintained after treatment.",
    metrics: ["Friction Angle", "Bearing Capacity", "UCS", "Settlement"],
  },
  {
    icon: RefreshCw,
    title: "Flood–Dry Durability",
    badge: "Cyclic Resilience",
    badgeColor: "bg-emerald-100 text-emerald-900 font-bold",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    accent: "border-emerald-400",
    description:
      "0, 5 and 10 repeated flood–dry cycles to measure strength retention ratio, settlement change, mass loss and bearing capacity retention over time.",
    metrics: ["0 Cycles", "5 Cycles", "10 Cycles", "Mass Loss"],
  },
];

export default function ResearchPillars() {
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
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 border border-blue-200 rounded-full text-xs font-bold text-blue-800 mb-4 uppercase tracking-wide">
            Research Framework
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Three Research Pillars
          </h2>
          <p className="text-slate-600 font-inter leading-relaxed">
            Each pillar addresses a critical dimension of the combined treatment performance under flood
            conditions.
          </p>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className={`card-base p-8 border-t-4 ${pillar.accent} bg-white shadow-sm hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                  <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                </div>

                {/* Badge */}
                <span className={`badge ${pillar.badgeColor} mb-3`}>
                  {pillar.badge}
                </span>

                {/* Title */}
                <h3 className="font-jakarta font-bold text-xl text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {pillar.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-semibold border border-slate-200"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
