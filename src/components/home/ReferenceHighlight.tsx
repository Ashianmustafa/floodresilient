import { ExternalLink, BookOpen, AlertCircle } from "lucide-react";

export default function ReferenceHighlight() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
          <BookOpen className="w-8 h-8 text-white" />
        </div>

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-6">
          Primary Research Reference
        </span>

        {/* Reference */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">
          <p className="font-inter text-white/90 text-base sm:text-lg leading-relaxed mb-2">
            Zhou, Z., & Leung, A. K. (2022).{" "}
            <em className="text-teal-300">
              Modifying the mechanical properties of sand by using different hydrophobic conditions.
            </em>{" "}
            <span className="text-blue-300">Acta Geotechnica</span>, 17, 3783–3797.
          </p>
          <a
            href="https://doi.org/10.1007/s11440-022-01482-z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-mono transition-colors"
          >
            DOI: 10.1007/s11440-022-01482-z
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Key Findings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
          {[
            "Hydrophobicity threshold at ~0.05% DMDCS by mass and ~30% treated-sand proportion",
            "Stronger hydrophobic coating reduces peak friction angle and suppresses dilatancy",
            "Compressibility largely unchanged until extreme 10% DMDCS case",
            "Shearing shifts from strain softening to strain hardening with increased coating",
          ].map((finding) => (
            <div
              key={finding}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <AlertCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
              <p className="text-white/70 text-sm leading-relaxed">{finding}</p>
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="bg-amber-500/10 border border-amber-400/30 rounded-2xl px-6 py-4 text-left">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-300 text-sm mb-1">Important Dosage Caution</p>
              <p className="text-amber-200/70 text-sm leading-relaxed">
                These values (0.05% DMDCS, 30% treated-sand proportion) are specific to Toyoura sand and must{" "}
                <strong className="text-amber-300">not</strong> be adopted as universal optimum dosages. Conduct a pilot
                study with varying dosages before selecting treatment parameters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
