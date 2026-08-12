import Link from "next/link";
import { FlaskConical, Droplets, ArrowRight } from "lucide-react";

export default function WhatIsResearch() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-xs font-semibold text-teal-700 mb-6">
              Dual-Technology Approach
            </span>
            <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
              Why Combine EICP with{" "}
              <span className="gradient-text">Hydrophobic Treatment?</span>
            </h2>
            <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
              <p>
                <strong className="text-slate-800">EICP</strong> (Enzyme-Induced Carbonate Precipitation) uses
                plant-derived urease to catalyze precipitation of calcium carbonate — creating CaCO₃ bonds between sand
                grains that dramatically improve stiffness and shear strength.
              </p>
              <p>
                <strong className="text-slate-800">Hydrophobic treatment</strong> creates a water-repellent barrier on
                soil particles, delaying flood water infiltration and protecting the foundation from saturation. However,
                stronger coatings may reduce friction angle and suppress dilatancy.
              </p>
              <p>
                Alone, each has limitations. Together, they may be{" "}
                <span className="font-semibold text-blue-700">complementary</span>: EICP provides the load-bearing
                skeleton while the hydrophobic layer shields it from flood-induced degradation.
              </p>
            </div>

            {/* Callout */}
            <div className="callout-blue mt-6">
              <p className="text-sm font-inter text-slate-700 italic">
                <span className="font-semibold text-blue-800 not-italic">Central Research Question: </span>
                Can EICP compensate for the mechanical weakening associated with hydrophobic coating, while the
                hydrophobic layer protects the cemented foundation soil against flood-induced saturation and
                deterioration?
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 shadow-sm hover:shadow-md transition-all text-sm"
              >
                Read Full Research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Two treatment cards */}
          <div className="space-y-4">
            {/* EICP Card */}
            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-jakarta font-semibold text-lg text-slate-900">EICP Treatment</h3>
                    <span className="badge bg-blue-100 text-blue-700">Mechanical</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Enzyme-induced CaCO₃ precipitation",
                      "Increases stiffness, strength & erosion resistance",
                      "Applied to hydrophilic sand (aqueous solution)",
                      "Principal role: load-bearing skeleton",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hydrophobic Card */}
            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-jakarta font-semibold text-lg text-slate-900">Hydrophobic Treatment</h3>
                    <span className="badge bg-teal-100 text-teal-700">Hydraulic</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Water-repellent DMDCS-based coating",
                      "Delays infiltration and saturation",
                      "Effective below water-entry head threshold",
                      "Risk: may reduce peak friction angle",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Combined result */}
            <div className="p-5 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">E+H</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">Combined: EICP → Cure → Hydrophobic</p>
                  <p className="text-xs text-gray-500 mt-0.5">Primary treatment configuration (recommended sequence)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
