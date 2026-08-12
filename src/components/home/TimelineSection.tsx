const phases = [
  {
    number: "01",
    icon: "📚",
    title: "Literature Review",
    description: "Study EICP mechanisms, hydrophobic sand behaviour, and existing combined treatment research. Define scope and objectives.",
    duration: "Weeks 1–3",
    color: "border-blue-200 bg-blue-50",
    numColor: "text-blue-700",
  },
  {
    number: "02",
    icon: "🧱",
    title: "Specimen Preparation",
    description: "Prepare Toyoura sand specimens at controlled relative density. Establish treatment application protocols for each group.",
    duration: "Weeks 4–6",
    color: "border-teal-200 bg-teal-50",
    numColor: "text-teal-700",
  },
  {
    number: "03",
    icon: "⚗️",
    title: "Treatment Application",
    description: "Apply EICP → Cure & Dry → Apply Hydrophobic (E+H). Also prepare UT, H-only, and E-only groups for comparison.",
    duration: "Weeks 7–10",
    color: "border-purple-200 bg-purple-50",
    numColor: "text-purple-700",
  },
  {
    number: "04",
    icon: "📊",
    title: "Testing Programme",
    description: "Hydraulic tests (WDPT, contact angle, infiltration) + Mechanical tests (direct shear, load-settlement) + Flood–dry cycles (0, 5, 10).",
    duration: "Weeks 11–18",
    color: "border-amber-200 bg-amber-50",
    numColor: "text-amber-700",
  },
  {
    number: "05",
    icon: "✅",
    title: "Analysis & Report",
    description: "Statistical analysis of results. Compare all KPIs across groups. Write up findings, conclusions and recommendations.",
    duration: "Weeks 19–24",
    color: "border-green-200 bg-green-50",
    numColor: "text-green-700",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full text-xs font-semibold text-green-700 mb-4">
            Project Timeline
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Research Phases
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            A structured 24-week experimental research programme from literature review to final conclusions.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-300 via-purple-300 to-green-300" />

          <div className="grid grid-cols-5 gap-4 relative">
            {phases.map((phase) => (
              <div key={phase.number} className="flex flex-col items-center text-center group">
                {/* Circle node */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex flex-col items-center justify-center mb-4 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all">
                  <span className="text-2xl">{phase.icon}</span>
                </div>

                {/* Content card */}
                <div className={`card-base p-4 text-left border ${phase.color} w-full`}>
                  <span className={`font-mono text-xs font-bold ${phase.numColor} mb-1 block`}>
                    Phase {phase.number}
                  </span>
                  <h3 className="font-jakarta font-bold text-sm text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{phase.description}</p>
                  <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] font-medium rounded-md">
                    {phase.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.number} className="flex gap-4">
              {/* Left: line + circle */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm shrink-0">
                  <span className="text-xl">{phase.icon}</span>
                </div>
                {index < phases.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                )}
              </div>

              {/* Right: content */}
              <div className={`flex-1 card-base p-5 border ${phase.color} mb-2`}>
                <span className={`font-mono text-xs font-bold ${phase.numColor} mb-1 block`}>
                  Phase {phase.number} · {phase.duration}
                </span>
                <h3 className="font-jakarta font-bold text-base text-slate-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
