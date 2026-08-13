"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FlaskConical, Droplets, ArrowRight } from "lucide-react";

export default function WhatIsResearch() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-bold text-cyan-800 mb-6 shadow-sm">
              Dual-Technology Approach
            </span>
            <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
              Why Combine EICP with{" "}
              <span className="gradient-text">Hydrophobic Treatment?</span>
            </h2>
            <div className="space-y-4 text-slate-600 font-inter leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">EICP</strong> (Enzyme-Induced Carbonate Precipitation) uses
                plant-derived urease to catalyze precipitation of calcium carbonate — creating CaCO₃ bonds between sand
                grains that dramatically improve stiffness and shear strength.
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Hydrophobic treatment</strong> creates a water-repellent barrier on
                soil particles, delaying flood water infiltration and protecting the foundation from saturation. However,
                stronger coatings may reduce friction angle and suppress dilatancy.
              </p>
              <p>
                Alone, each has limitations. Together, they are{" "}
                <span className="font-bold text-blue-700">complementary</span>: EICP provides the load-bearing
                skeleton while the hydrophobic layer shields it from flood-induced degradation.
              </p>
            </div>

            {/* Callout */}
            <div className="callout-blue mt-6">
              <p className="text-sm font-inter text-slate-700 italic">
                <span className="font-bold text-blue-900 not-italic">Central Research Question: </span>
                Can EICP compensate for the mechanical weakening associated with hydrophobic coating, while the
                hydrophobic layer protects the cemented foundation soil against flood-induced saturation and
                deterioration?
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 shadow-md hover:shadow-lg transition-all text-sm"
              >
                Read Full Research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right: Two treatment cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* EICP Card */}
            <div className="card-base p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0 shadow-inner">
                  <FlaskConical className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-jakarta font-bold text-lg text-slate-900">EICP Treatment</h3>
                    <span className="badge bg-blue-100 text-blue-800 font-bold">Mechanical</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Enzyme-induced CaCO₃ precipitation",
                      "Increases stiffness, strength & erosion resistance",
                      "Applied to hydrophilic sand (aqueous solution)",
                      "Principal role: load-bearing skeleton",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hydrophobic Card */}
            <div className="card-base p-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center shrink-0 shadow-inner">
                  <Droplets className="w-6 h-6 text-cyan-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-jakarta font-bold text-lg text-slate-900">Hydrophobic Treatment</h3>
                    <span className="badge bg-cyan-100 text-cyan-800 font-bold">Hydraulic</span>
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Water-repellent DMDCS-based coating",
                      "Delays infiltration and saturation",
                      "Effective below water-entry head threshold",
                      "Risk: may reduce peak friction angle",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Combined result */}
            <div className="p-5 bg-gradient-to-r from-blue-50 via-cyan-50 to-emerald-50 border border-cyan-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-cyan-600 flex items-center justify-center shrink-0 shadow-md">
                  <span className="text-white font-extrabold text-sm">E+H</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Combined: EICP → Cure → Hydrophobic</p>
                  <p className="text-xs text-slate-500 mt-0.5">Primary treatment configuration (recommended sequence)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
