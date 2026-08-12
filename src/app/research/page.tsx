import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Layers, FlaskConical, Droplets, RefreshCw, Target, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Overview | GeoFYP Research",
  description:
    "Full research overview of combined EICP-Hydrophobic treatment study — background, engineering rationale, methodology, expected outcomes and risk assessment.",
};

export default function ResearchPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-6">
            Research Overview
          </span>
          <h1 className="font-jakarta font-bold text-4xl sm:text-5xl text-white mb-5 leading-tight">
            EICP + Hydrophobic Combined<br />
            <span className="text-teal-300">Treatment Research</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl">
            A systematic investigation into flood-resilient foundation engineering using enzyme-induced carbonate
            precipitation and hydrophobic surface treatment.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Section 1: Background */}
        <section id="background">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-5">
            Background
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-6">Literature & Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card-base p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-slate-900">What is EICP?</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Enzyme-Induced Carbonate Precipitation (EICP) is a bio-geotechnical ground improvement technique that
                uses plant-derived urease enzyme to catalyze the hydrolysis of urea, producing carbonate ions that react
                with calcium to precipitate calcium carbonate (CaCO₃).
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The CaCO₃ crystals fill pore spaces and create mineral bridges between sand grains, improving stiffness,
                shear strength and erosion resistance without the need for Portland cement.
              </p>
            </div>
            <div className="card-base p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-teal-100 flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="font-jakarta font-bold text-lg text-slate-900">What is Hydrophobic Sand?</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Hydrophobic sand is created by applying water-repellent chemical agents (such as DMDCS —
                dimethyldichlorosilane) to sand particles. The coating creates a hydrophobic surface that resists
                water infiltration.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zhou & Leung (2022) demonstrated that increasing hydrophobic coating reduces peak friction angle and
                suppresses dilatancy, but a low dosage (~0.05% DMDCS) can provide strong water repellency with
                minimal mechanical penalty.
              </p>
            </div>
          </div>
          <div className="callout-blue">
            <p className="text-sm text-blue-800">
              <strong>The Knowledge Gap: </strong>
              No published study has experimentally validated a combined EICP + hydrophobic treatment system for
              flood-resilient shallow foundations. This FYP addresses this gap through a controlled experimental
              programme comparing four treatment groups under repeated flood–dry cycles.
            </p>
          </div>
        </section>

        {/* Section 2: Engineering Rationale */}
        <section id="rationale">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-xs font-semibold text-teal-700 mb-5">
            Engineering Rationale
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-6">Why This Combination?</h2>
          <div className="space-y-5">
            {[
              {
                title: "Complementary Mechanisms",
                icon: Layers,
                color: "blue",
                text: "EICP provides the load-bearing skeleton through CaCO₃ cementation. The hydrophobic layer shields this skeleton from direct flood-water entry. Together, they address both the mechanical and hydraulic vulnerabilities of foundation sand.",
              },
              {
                title: "Flood Engineering Relevance",
                icon: RefreshCw,
                color: "teal",
                text: "Repeated flood–dry cycles are the critical loading condition for shallow foundations in flood-prone regions. EICP-only foundations may deteriorate through repeated wetting. Hydrophobic barriers can delay saturation, but alone they may weaken the soil mechanically.",
              },
              {
                title: "Sequence Matters",
                icon: Target,
                color: "purple",
                text: "EICP must be applied first — while the sand is hydrophilic — so the aqueous solution can distribute uniformly through the pore space. Applying the hydrophobic treatment first may block EICP solution penetration, causing clogging and non-uniform cementation.",
              },
            ].map(({ title, icon: Icon, color, text }) => (
              <div key={title} className="flex items-start gap-5 p-6 card-base">
                <div className={`w-11 h-11 rounded-2xl bg-${color}-100 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 text-${color}-700`} />
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-base text-slate-900 mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Expected Outcomes */}
        <section id="outcomes">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-100 rounded-full text-xs font-semibold text-green-700 mb-5">
            Expected Outcomes
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-6">Expected Results</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Group</th>
                  <th className="px-4 py-3 text-left font-semibold">Hydraulic Performance</th>
                  <th className="px-4 py-3 text-left font-semibold">Mechanical Performance</th>
                  <th className="px-4 py-3 text-left font-semibold">Durability</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { group: "UT", bg: "bg-gray-50", hydraulic: "High infiltration (reference)", mechanical: "Baseline strength", durability: "No protection" },
                  { group: "H", bg: "bg-teal-50", hydraulic: "Reduced infiltration ✓", mechanical: "Reduced φ, suppressed dilatancy ⚠️", durability: "Limited (no bonding)" },
                  { group: "E", bg: "bg-blue-50", hydraulic: "Marginal reduction", mechanical: "Improved strength ✓", durability: "Moderate (wetting risk)" },
                  { group: "E+H ⭐", bg: "bg-purple-50", hydraulic: "Best hydraulic protection ✓", mechanical: "High strength ✓", durability: "Best combined ✓" },
                ].map((row, i) => (
                  <tr key={i} className={row.bg}>
                    <td className="px-4 py-3 font-mono font-bold text-slate-800">{row.group}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.hydraulic}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.mechanical}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Acceptance Criteria */}
        <section id="criteria">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-600 mb-5">
            Quality Assurance
          </span>
          <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-6">Acceptance Criteria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { criterion: "Hydraulic", cond: "Infiltration < EICP-only and untreated sand.", icon: Droplets, color: "teal" },
              { criterion: "Mechanical", cond: "Strength > hydrophobic-only and suitable for target load.", icon: Layers, color: "blue" },
              { criterion: "Durability", cond: "Strength/bearing retention after cycling > EICP-only.", icon: RefreshCw, color: "green" },
              { criterion: "Uniformity", cond: "No severe upper-zone clogging or untreated lower zone.", icon: Target, color: "purple" },
              { criterion: "Hydrophobicity", cond: "≥ 9 of 10 drops stable and repellency remains after cycling.", icon: Droplets, color: "teal" },
              { criterion: "Reproducibility", cond: "Replicate variability acceptable — no single specimen controls conclusion.", icon: BookOpen, color: "gray" },
            ].map(({ criterion, cond, icon: Icon, color }) => (
              <div key={criterion} className={`flex items-start gap-3 p-4 bg-${color === "gray" ? "slate" : color}-50 border border-${color === "gray" ? "slate" : color}-100 rounded-xl`}>
                <div className={`w-9 h-9 rounded-xl bg-${color === "gray" ? "slate" : color}-100 flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 text-${color === "gray" ? "slate" : color}-700`} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800 mb-0.5">{criterion}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{criterion === "Combined treatment is favourable when:" ? "" : cond}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation to other pages */}
        <section className="bg-gradient-to-r from-blue-700 to-teal-600 rounded-3xl p-10 text-white text-center">
          <h2 className="font-jakarta font-bold text-2xl mb-3">Explore More</h2>
          <p className="text-blue-100 mb-6 text-sm">Dive into the detailed methodology, feasibility assessment or team information.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Full Methodology", href: "/experimental-programme" },
              { label: "Feasibility Report", href: "/feasibility" },
              { label: "References", href: "/references" },
              { label: "Research Team", href: "/team" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold rounded-xl text-sm transition-colors">
                {link.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
