import type { Metadata } from "next";
import { CheckCircle, AlertTriangle, XCircle, ArrowRight, AlertCircle, FlaskConical, Droplets, Sun, BarChart3 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feasibility Assessment | GeoFYP Research",
  description:
    "Expert geotechnical feasibility assessment for combined EICP and hydrophobic treatment research. Verdict: Proceed with the topic.",
};

const advantages = [
  "Combines hydraulic protection with mechanical strengthening — addressing both flood and load problems",
  "Directly relevant to rainfall, flooding and shallow foundation engineering",
  "Clear systematic comparison among untreated, single and combined treatment groups",
  "High potential for a publishable hydro-mechanical study in geotechnical journals",
];

const risks = [
  "Hydrophobic coating may reduce friction angle and strongly suppress dilatancy",
  "Hydrophobic-first treatment (H+E) may obstruct EICP solution — non-uniform cementation",
  "EICP may be non-uniform or locally clogged depending on pore geometry",
  "Repeated flooding may expose weak or poorly bonded zones in cemented structure",
];

const treatmentSequence = [
  { step: 1, icon: "🧱", title: "Prepare Sand", sub: "Toyoura sand — controlled relative density (hydrophilic state)", color: "bg-gray-100 border-gray-300" },
  { step: 2, icon: "⚗️", title: "Apply EICP", sub: "Aqueous urease solution — CaCO₃ bonds form between grains", color: "bg-blue-100 border-blue-300" },
  { step: 3, icon: "☀️", title: "Cure & Dry", sub: "Controlled curing and drying under lab conditions", color: "bg-amber-100 border-amber-300" },
  { step: 4, icon: "💧", title: "Apply Hydrophobic", sub: "Low-dose DMDCS post-treatment — surface/upper zone", color: "bg-teal-100 border-teal-300" },
  { step: 5, icon: "📊", title: "Test System", sub: "Hydraulic + mechanical + durability before & after cycles", color: "bg-purple-100 border-purple-300" },
];

export default function FeasibilityPage() {
  return (
    <div className="pt-16">
      {/* Verdict Banner */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-teal-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-green-100 mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 border border-green-200 rounded-full text-xs font-semibold text-green-700 mb-4">
            Geotechnical FYP Assessment
          </span>
          <h1 className="font-jakarta font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
            Feasibility Verdict:{" "}
            <span className="text-green-600">✅ PROCEED</span>
          </h1>
          <p className="text-lg text-gray-600 font-inter leading-relaxed max-w-2xl mx-auto">
            Expert assessment confirms this topic is{" "}
            <strong className="text-slate-800">suitable, original and strongly relevant</strong> to flood-resilient
            foundation engineering, provided the scope is controlled.
          </p>

          {/* Preferred concept callout */}
          <div className="callout-teal mt-8 text-left max-w-2xl mx-auto">
            <p className="text-sm font-inter text-slate-700">
              <span className="font-semibold text-teal-800">Preferred Concept: </span>
              EICP strengthening first, followed by a low-dose hydrophobic protective treatment or a hydrophobic surface
              layer. The project should test hydraulic protection, mechanical performance and durability under repeated
              flood–dry cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Rationale */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-3">Engineering Rationale</h2>
            <p className="text-gray-600">Why each treatment is needed — and what each does alone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* EICP Rationale */}
            <div className="card-base p-8 border-t-4 border-t-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-jakarta font-bold text-lg text-slate-900">EICP Treatment</h3>
                  <span className="badge bg-blue-100 text-blue-700">Mechanical Role</span>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "Plant-derived urease catalyzes CaCO₃ precipitation",
                  "Forms mineral bonds between sand grains",
                  "Increases stiffness, strength and erosion resistance",
                  "Performance depends on treatment uniformity and curing",
                  "Requires curing under controlled conditions",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hydrophobic Rationale */}
            <div className="card-base p-8 border-t-4 border-t-teal-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-jakarta font-bold text-lg text-slate-900">Hydrophobic Treatment</h3>
                  <span className="badge bg-teal-100 text-teal-700">Hydraulic Role</span>
                </div>
              </div>
              <ul className="space-y-2">
                {[
                  "DMDCS-based water-repellent coating on sand particles",
                  "Principal role: delay infiltration and saturation",
                  "Effective only while infiltration head < water-entry head",
                  "Stronger coating → reduced friction angle (risk!)",
                  "Suppresses dilatancy — changes shear behaviour",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Combined concept */}
          <div className="callout-blue">
            <p className="text-sm font-inter text-slate-700">
              <span className="font-semibold text-blue-800">Combined Concept: </span>
              The treatments are potentially complementary — EICP provides the load-bearing skeleton, while the hydrophobic
              component limits direct flood-water entry. The central FYP question is whether this combination retains
              strength and limits settlement better than either treatment alone.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Sequence */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-3">
              Recommended Treatment Sequence
            </h2>
            <p className="text-gray-600">Why EICP must be applied first — before hydrophobic treatment</p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-8">
            {treatmentSequence.map((phase, i) => (
              <div key={phase.step} className="flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-2xl border-2 ${phase.color} flex items-center justify-center text-2xl mb-3 shadow-sm`}>
                  {phase.icon}
                </div>
                <p className="font-jakarta font-bold text-sm text-slate-800 mb-1">{phase.title}</p>
                <p className="text-gray-500 text-[11px] leading-snug">{phase.sub}</p>
                {i < treatmentSequence.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-300 mt-3 hidden sm:block rotate-0 absolute" />
                )}
              </div>
            ))}
          </div>

          {/* Why not H first */}
          <div className="callout-warning">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 text-sm mb-1">
                  Why NOT Hydrophobic First?
                </p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Applying hydrophobic treatment before EICP may hinder penetration of the water-based EICP solution,
                  producing preferential flow, non-uniform cementation, or surface clogging. This is a testable
                  engineering hypothesis and the H+E group (optional) will verify this.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages vs Risks */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-3">Advantages & Risks</h2>
            <p className="text-gray-600">Balanced assessment of potential benefits and principal risks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Advantages */}
            <div>
              <h3 className="font-jakarta font-semibold text-lg text-green-700 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Potential Advantages
              </h3>
              <div className="space-y-3">
                {advantages.map((adv) => (
                  <div key={adv} className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">{adv}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks */}
            <div>
              <h3 className="font-jakarta font-semibold text-lg text-red-600 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Principal Risks
              </h3>
              <div className="space-y-3">
                {risks.map((risk) => (
                  <div key={risk} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">{risk}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosage Caution */}
      <section className="py-20 bg-amber-50 border-y border-amber-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-3">
              ⚠️ Important Dosage Caution
            </h2>
            <p className="text-gray-600">From Zhou & Leung (2022) — Acta Geotechnica</p>
          </div>

          <div className="card-base p-8 border-2 border-amber-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="font-mono font-bold text-2xl text-amber-700">~0.05%</p>
                <p className="text-xs text-gray-600 mt-1">DMDCS by mass (hydrophobicity threshold)</p>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="font-mono font-bold text-2xl text-amber-700">~30%</p>
                <p className="text-xs text-gray-600 mt-1">Treated-sand proportion threshold</p>
              </div>
            </div>

            <div className="callout-warning mb-4">
              <p className="text-sm text-amber-800">
                <strong>These values are material-specific to Toyoura sand and must NOT be adopted as universal optimum
                dosages.</strong> They were not calibrated for EICP-treated specimens or combined treatment systems.
              </p>
            </div>

            <div className="space-y-2">
              {[
                "Compressibility remained largely unchanged until extreme 10% DMDCS case",
                "Increasing coating reduced peak friction angle and strongly suppressed dilatancy",
                "Pilot study required with untreated, low-dose and moderate-dose hydrophobic specimens",
              ].map((note) => (
                <div key={note} className="flex items-start gap-2 text-sm text-gray-700">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Recommendation */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-jakarta font-bold text-3xl text-white mb-4">Final Recommendation</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            The strongest and lowest-risk FYP is an{" "}
            <span className="text-blue-300 font-semibold">EICP-stabilized load-bearing sand zone</span> protected by a
            thin, low-dose{" "}
            <span className="text-teal-300 font-semibold">hydrophobic upper layer</span>, evaluated through infiltration
            testing, direct shear or model footing tests, and repeated flood–dry cycles. Keep hydrophobic-first EICP
            application as an optional comparison rather than the principal design.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/experimental-programme"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm"
            >
              View Experimental Programme →
            </Link>
            <Link
              href="/research"
              className="px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Full Research Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
