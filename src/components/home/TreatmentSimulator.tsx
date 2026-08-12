"use client";

import { useState } from "react";
import { Sliders, Sparkles, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function TreatmentSimulator() {
  const [eicpCycles, setEicpCycles] = useState(4);
  const [dmdcsDosage, setDmdcsDosage] = useState(0.05);

  // Calculated estimates based on empirical laboratory formulas
  const estimatedCaco3 = (eicpCycles * 1.15).toFixed(2);
  const estimatedContactAngle = Math.min(142, Math.round(dmdcsDosage * 1800 + 40));
  const estimatedInfiltrationRed = Math.min(95, Math.round(dmdcsDosage * 1200 + eicpCycles * 5));
  const estimatedStrengthSRR = Math.min(92, Math.round(75 + eicpCycles * 3.5 - (dmdcsDosage > 0.08 ? (dmdcsDosage - 0.08) * 150 : 0)));

  const isOptimal = eicpCycles === 4 && dmdcsDosage >= 0.04 && dmdcsDosage <= 0.06;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-xs font-bold text-purple-700 mb-4 tracking-wide uppercase">
            <Sliders className="w-4 h-4 text-purple-600" />
            Interactive Lab Simulator
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Treatment Dosage & Performance Estimator
          </h2>
          <p className="text-gray-600 font-inter leading-relaxed">
            Adjust EICP treatment cycles and hydrophobic DMDCS dosage to predict precipitation content, water repellency, and flood strength retention.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 card-base p-8 bg-slate-50 border border-slate-200">
            <h3 className="font-jakarta font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
              <Sliders className="w-5 h-5 text-blue-700" />
              Adjust Treatment Parameters
            </h3>

            {/* Slider 1: EICP Cycles */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800">
                  EICP Dosing Cycles
                </label>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 font-mono font-bold text-sm rounded-lg">
                  {eicpCycles} Cycles
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={eicpCycles}
                onChange={(e) => setEicpCycles(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>1 Cycle (Low)</span>
                <span>4 Cycles (Proposed Core)</span>
                <span>6 Cycles (Clogging Risk)</span>
              </div>
            </div>

            {/* Slider 2: DMDCS Dosage */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-800">
                  Hydrophobic DMDCS Dosage (% mass)
                </label>
                <span className="px-3 py-1 bg-teal-100 text-teal-800 font-mono font-bold text-sm rounded-lg">
                  {dmdcsDosage.toFixed(2)}%
                </span>
              </div>
              <input
                type="range"
                min="0.00"
                max="0.12"
                step="0.01"
                value={dmdcsDosage}
                onChange={(e) => setDmdcsDosage(Number(e.target.value))}
                className="w-full h-2 bg-teal-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>0.00% (None)</span>
                <span>0.05% (Literature Pilot)</span>
                <span>0.12% (High Coating)</span>
              </div>
            </div>

            {/* Status Alert */}
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${
                isOptimal
                  ? "bg-green-50 border-green-200 text-green-800"
                  : "bg-amber-50 border-amber-200 text-amber-800"
              }`}
            >
              {isOptimal ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div className="text-xs">
                <p className="font-bold">
                  {isOptimal ? "⭐ Recommended FYP Configuration" : "Custom Experimental Configuration"}
                </p>
                <p className="mt-0.5 leading-relaxed">
                  {isOptimal
                    ? "4 EICP cycles + 0.05% DMDCS provides optimum balance of load capacity and water repellency."
                    : "Parameters differ from proposed core baseline. Verify through pilot column testing."}
                </p>
              </div>
            </div>
          </div>

          {/* Predicted Metrics Output Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Metric 1 */}
            <div className="card-base p-6 border-l-4 border-l-blue-500 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Estimated CaCO₃ Precipitation</span>
                <span className="font-mono font-bold text-lg text-blue-700">{estimatedCaco3}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Number(estimatedCaco3) * 15)}%` }}
                />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="card-base p-6 border-l-4 border-l-teal-500 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Apparent Contact Angle (ACA)</span>
                <span className="font-mono font-bold text-lg text-teal-700">{estimatedContactAngle}°</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-teal-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (estimatedContactAngle / 150) * 100)}%` }}
                />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="card-base p-6 border-l-4 border-l-purple-500 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Infiltration Reduction (IR)</span>
                <span className="font-mono font-bold text-lg text-purple-700">{estimatedInfiltrationRed}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-purple-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${estimatedInfiltrationRed}%` }}
                />
              </div>
            </div>

            {/* Metric 4 */}
            <div className="card-base p-6 border-l-4 border-l-green-500 bg-white">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Post-Flood Strength Retention (SRR)</span>
                <span className="font-mono font-bold text-lg text-green-700">{estimatedStrengthSRR}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${estimatedStrengthSRR}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
