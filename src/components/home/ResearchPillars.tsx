import { Droplets, Layers, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Droplets,
    title: "Hydraulic Performance",
    badge: "Water Repellency",
    badgeColor: "bg-teal-100 text-teal-700",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    accent: "border-teal-200",
    description:
      "Water-drop penetration time (WDPT), contact angle measurement, infiltration rate and sorptivity testing to quantify flood-water resistance before and after treatment.",
    metrics: ["Contact Angle", "Infiltration Rate", "WDPT", "Sorptivity"],
  },
  {
    icon: Layers,
    title: "Mechanical Strength",
    badge: "Load Bearing",
    badgeColor: "bg-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    accent: "border-blue-200",
    description:
      "Direct shear tests, model footing load–settlement curves (primary foundation test), UCS and oedometer testing to verify structural capacity is maintained after treatment.",
    metrics: ["Friction Angle", "Bearing Capacity", "UCS", "Settlement"],
  },
  {
    icon: RefreshCw,
    title: "Flood–Dry Durability",
    badge: "Cyclic Resilience",
    badgeColor: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    accent: "border-amber-200",
    description:
      "0, 5 and 10 repeated flood–dry cycles to measure strength retention ratio, settlement change, mass loss and bearing capacity retention over time.",
    metrics: ["0 Cycles", "5 Cycles", "10 Cycles", "Mass Loss"],
  },
];

export default function ResearchPillars() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-4">
            Research Framework
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Three Research Pillars
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            Each pillar addresses a critical dimension of the combined treatment performance under flood
            conditions.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`card-base p-8 border-t-4 ${pillar.accent} group`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
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
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {pillar.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {pillar.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
