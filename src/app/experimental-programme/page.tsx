import type { Metadata } from "next";
import Link from "next/link";
import {
  FlaskConical, Droplets, Sun, RefreshCw, BarChart3, CheckCircle,
  Layers, AlertTriangle, Shield, BookOpen, Calendar, Microscope,
  AlertCircle, ChevronRight, Target, Activity, Zap
} from "lucide-react";

export const metadata: Metadata = {
  title: "Laboratory Methodology | GeoFYP Research",
  description:
    "Complete laboratory methodology for combined EICP-Hydrophobic treatment — specimen preparation, EICP formulation, hydrophobic post-treatment, flood-dry cycles, mechanical testing and data analysis.",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="-mt-20 pt-20" />;
}

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700 mb-3">
        {label}
      </span>
      <h2 className="font-jakarta font-bold text-3xl text-slate-900 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 font-inter leading-relaxed max-w-2xl">{subtitle}</p>}
    </div>
  );
}

// ─── Sidebar Nav ─────────────────────────────────────────────────────────────
const navSections = [
  { id: "overview", label: "Overview" },
  { id: "aim", label: "Aim & Objectives" },
  { id: "hypotheses", label: "Hypotheses" },
  { id: "configuration", label: "Treatment Configuration" },
  { id: "matrix", label: "Experimental Matrix" },
  { id: "eicp-formulation", label: "EICP Formulation" },
  { id: "eicp-procedure", label: "EICP Procedure" },
  { id: "hydrophobic", label: "Hydrophobic Post-Treatment" },
  { id: "contact-angle", label: "Contact Angle Testing" },
  { id: "flood-cycle", label: "Flood–Dry Protocol" },
  { id: "mechanical", label: "Mechanical Tests" },
  { id: "formulas", label: "Data Reduction" },
  { id: "schedule", label: "16-Week Schedule" },
  { id: "safety", label: "Safety" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "references", label: "References" },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function MethodologyPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-6">
            Laboratory Methodology
          </span>
          <h1 className="font-jakarta font-bold text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Complete EICP–Hydrophobic<br />
            <span className="text-teal-300">Treatment Methodology</span>
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mb-6">
            Flood-resilient foundation sand: mechanical strengthening, water-repellency and repeated flood-dry durability.
            Principal sequence: <span className="text-teal-300 font-semibold">EICP → Cure → Hydrophobic Post-treatment</span>.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-xs font-medium text-white/80">
              ✅ Published methods separated from proposed FYP conditions
            </div>
            <div className="px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-lg text-xs font-medium text-amber-200">
              ⚠️ Proposed values must be verified through pilot testing
            </div>
          </div>
        </div>
      </div>

      {/* Body: Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-12">
          {/* Sticky Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24 space-y-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-3">Sections</p>
              {navSections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-20">

            {/* ── 1. OVERVIEW ────────────────────────────────── */}
            <section>
              <SectionAnchor id="overview" />
              <SectionHeader
                label="Section 1 — Methodological Basis"
                title="Overview & Evidence Limits"
                subtitle="Core methodology and evidence boundaries for the combined EICP-Hydrophobic treatment study."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: FlaskConical, color: "blue", title: "Published EICP Evidence",
                    text: "1.0 M urea + 0.67 M CaCl₂·2H₂O + 3 g/L urease — published EICP formulation for sand biocementation. Forms CaCO₃ to fill pores and bridge particles."
                  },
                  {
                    icon: Droplets, color: "teal", title: "Published Hydrophobic Evidence",
                    text: "Zhou & Leung (2022) — DMDCS-treated Toyoura sand. ~0.05% DMDCS by dry sand mass produced strong water repellency with comparatively small mechanical changes."
                  },
                  {
                    icon: AlertTriangle, color: "amber", title: "Compatibility Evidence",
                    text: "2025 study (Vilar et al.): Hydrophobic patches increased urease activity but caused rapid upper-zone clogging. Supports EICP-first sequence."
                  },
                ].map(({ icon: Icon, color, title, text }) => (
                  <div key={title} className={`card-base p-6 border-t-4 border-t-${color}-300`}>
                    <div className={`w-10 h-10 rounded-xl bg-${color}-100 flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 text-${color}-700`} />
                    </div>
                    <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-2">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className="callout-warning">
                <p className="text-sm text-amber-800">
                  <strong>Accuracy Statement: </strong>
                  No universally standardized combined EICP-hydrophobic protocol was identified. Values labelled
                  "starting", "pilot" or "proposed" are controlled FYP design choices and must not be presented as
                  universal optimum values.
                </p>
              </div>
            </section>

            {/* ── 2. AIM & OBJECTIVES ────────────────────────── */}
            <section>
              <SectionAnchor id="aim" />
              <SectionHeader label="Section 2" title="Aim & Objectives" />
              <div className="callout-blue mb-8">
                <p className="text-base font-semibold text-blue-900 leading-relaxed">
                  🎯 Aim: To determine whether EICP strengthening combined with a low-dose hydrophobic barrier improves
                  the flood resistance, post-flood strength and settlement behaviour of foundation sand.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Quantify the individual effects of EICP and hydrophobic treatment on strength, stiffness, infiltration and water repellency.",
                  "Evaluate the EICP-first, hydrophobic-second treatment sequence under repeated flood-dry cycles.",
                  "Measure treatment uniformity through CaCO₃ content and top-middle-bottom comparisons.",
                  "Determine whether the combined treatment retains more strength and bearing capacity after flooding than EICP alone.",
                  "Identify the lowest hydrophobic dosage that gives consistent water repellency without unacceptable mechanical loss.",
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <span className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 3. HYPOTHESES ──────────────────────────────── */}
            <section>
              <SectionAnchor id="hypotheses" />
              <SectionHeader label="Section 2.2" title="Testable Hypotheses" />
              <div className="space-y-3">
                {[
                  { group: "E", color: "blue", text: "EICP-only specimens will have higher initial strength than untreated and hydrophobic-only specimens." },
                  { group: "H", color: "teal", text: "Hydrophobic-only specimens will show lower water entry but may exhibit reduced friction angle or dilatancy." },
                  { group: "E+H", color: "purple", text: "EICP → hydrophobic specimens will show lower infiltration than EICP-only and higher strength than hydrophobic-only." },
                  { group: "E+H", color: "purple", text: "EICP → hydrophobic specimens will retain a greater percentage of initial strength after flood-dry cycling than EICP-only." },
                  { group: "H+E", color: "orange", text: "Hydrophobic → EICP may produce greater clogging and lower cementation uniformity than EICP → hydrophobic." },
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:bg-slate-50 transition-colors">
                    <span className={`px-2 py-0.5 rounded-md text-xs font-mono font-bold bg-${h.color}-100 text-${h.color}-700 shrink-0 mt-0.5`}>
                      {h.group}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">{h.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. TREATMENT CONFIGURATION ─────────────────── */}
            <section>
              <SectionAnchor id="configuration" />
              <SectionHeader
                label="Section 3"
                title="Recommended Treatment Configuration"
                subtitle="7-stage principal sequence with evidence status for each step."
              />

              {/* 7-Stage table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Stage</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Operation</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Main Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">Evidence Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { stage: 1, operation: "Prepare and characterize sand", purpose: "Control density, grading and baseline properties", evidence: "Standard geotechnical practice", type: "published" },
                      { stage: 2, operation: "Apply EICP solution", purpose: "Precipitate CaCO₃ and bond soil particles", evidence: "Published EICP basis", type: "published" },
                      { stage: 3, operation: "Cure and dry", purpose: "Complete reaction and establish stable initial condition", evidence: "Published basis; duration selected for FYP", type: "published" },
                      { stage: 4, operation: "Apply low-dose hydrophobic treatment", purpose: "Create surface/upper-zone water-entry resistance", evidence: "Proposed combined design", type: "proposed" },
                      { stage: 5, operation: "Verify hydrophobicity and uniformity", purpose: "Confirm treatment before durability testing", evidence: "Published sessile-drop basis", type: "published" },
                      { stage: 6, operation: "Apply flood-dry cycles", purpose: "Simulate repeated seasonal inundation and drying", evidence: "Proposed climate-durability design", type: "proposed" },
                      { stage: 7, operation: "Perform mechanical/hydraulic tests", purpose: "Quantify benefit, deterioration and trade-offs", evidence: "Standard tests", type: "published" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-mono font-bold text-blue-700">{row.stage}</td>
                        <td className="px-4 py-3 font-medium text-slate-800">{row.operation}</td>
                        <td className="px-4 py-3 text-gray-600">{row.purpose}</td>
                        <td className="px-4 py-3">
                          <span className={`badge text-xs ${row.type === "published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                            {row.type === "published" ? "✅ Published" : "⚗️ Proposed"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Engineering Configurations */}
              <h3 className="font-jakarta font-semibold text-lg text-slate-800 mb-5">Engineering Configurations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  { id: "A", label: "Configuration A — Primary", isPrimary: true, color: "blue", desc: "EICP-stabilized lower layer protected by a 20–30 mm hydrophobic upper layer. Preferred model-footing configuration." },
                  { id: "B", label: "Configuration B — Column", isPrimary: false, color: "teal", desc: "EICP-treated column given a controlled hydrophobic surface impregnation. For infiltration, water-entry and durability testing." },
                  { id: "C", label: "Configuration C — Optional", isPrimary: false, color: "orange", desc: "Hydrophobic sand treated with EICP — tests clogging and bypassing. Should NOT be the main design." },
                ].map((cfg) => (
                  <div key={cfg.id} className={`card-base p-5 border-l-4 border-l-${cfg.color}-400 ${cfg.isPrimary ? "ring-2 ring-blue-200" : ""}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-mono font-bold text-lg text-${cfg.color}-700`}>{cfg.id}</span>
                      {cfg.isPrimary && <span className="badge bg-blue-100 text-blue-700 text-[10px]">⭐ Primary</span>}
                    </div>
                    <p className="font-jakarta font-semibold text-sm text-slate-800 mb-2">{cfg.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{cfg.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 5. EXPERIMENTAL MATRIX ─────────────────────── */}
            <section>
              <SectionAnchor id="matrix" />
              <SectionHeader label="Section 4" title="Experimental Design & Core Matrix" />
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider font-semibold">Variable</th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider font-semibold">Core Level(s)</th>
                      <th className="px-4 py-3 text-left text-xs uppercase tracking-wider font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { variable: "Soil", level: "One clean sand", note: "Use the same batch throughout." },
                      { variable: "Relative Density", level: "One fixed value, preferably 50–60%", note: "Select after index-density tests." },
                      { variable: "EICP Recipe", level: "One selected formulation after pilot testing", note: "Do not vary recipe in the main matrix." },
                      { variable: "EICP Cycles", level: "Four cycles", note: "Proposed core level; verify clogging in pilot columns." },
                      { variable: "Hydrophobic Dosage", level: "One selected low dosage", note: "Select the lowest consistent dosage from screening." },
                      { variable: "Flood-Dry Cycles", level: "0, 5 and 10", note: "Use identical head, duration and drying endpoint." },
                      { variable: "Replicates", level: "Minimum three per measurement", note: "Report mean, standard deviation and coefficient of variation." },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-semibold text-slate-800">{row.variable}</td>
                        <td className="px-4 py-3 text-blue-700 font-medium">{row.level}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 6. EICP FORMULATION ─────────────────────────── */}
            <section>
              <SectionAnchor id="eicp-formulation" />
              <SectionHeader
                label="Section 7 — EICP Pilot Tests"
                title="EICP Solution Preparation & Formulation"
                subtitle="Literature-based starting formulation. Must be verified through pilot testing before main experiment."
              />

              <div className="callout-warning mb-8">
                <p className="text-sm font-semibold text-amber-800 mb-1">Literature-Based Starting Formulation:</p>
                <p className="font-mono text-sm text-amber-900 font-bold">1.0 M urea + 0.67 M CaCl₂·2H₂O + 3 g/L urease</p>
                <p className="text-xs text-amber-700 mt-1">This is a starting point for pilot testing — NOT a universal optimum. Masses below are for CaCl₂ DIHYDRATE (MW ≈ 147.02 g/mol). Anhydrous CaCl₂ requires different masses.</p>
              </div>

              {/* Formulation Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-blue-700 text-white">
                      <th className="px-5 py-3 text-left font-semibold">Final Volume</th>
                      <th className="px-5 py-3 text-center font-semibold">Urea</th>
                      <th className="px-5 py-3 text-center font-semibold">CaCl₂·2H₂O</th>
                      <th className="px-5 py-3 text-center font-semibold">Urease</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { vol: "1.000 L", urea: "60.06 g", cacl2: "98.50 g", urease: "3.00 g" },
                      { vol: "0.500 L", urea: "30.03 g", cacl2: "49.25 g", urease: "1.50 g" },
                      { vol: "0.250 L", urea: "15.02 g", cacl2: "24.63 g", urease: "0.75 g" },
                      { vol: "0.100 L", urea: "6.01 g", cacl2: "9.85 g", urease: "0.30 g" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                        <td className="px-5 py-3 font-mono font-bold text-blue-800">{row.vol}</td>
                        <td className="px-5 py-3 font-mono text-center text-slate-700">{row.urea}</td>
                        <td className="px-5 py-3 font-mono text-center text-slate-700">{row.cacl2}</td>
                        <td className="px-5 py-3 font-mono text-center text-slate-700">{row.urease}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Preparation steps */}
              <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-4">Solution Preparation Procedure</h3>
              <div className="space-y-3">
                {[
                  "Calculate required final volume from number of specimens, pore volume per cycle and expected losses. Prepare a small excess.",
                  "Add ~60–70% of final deionized-water volume to a clean beaker.",
                  "Dissolve the measured urea completely.",
                  "Dissolve CaCl₂·2H₂O separately — allow to cool to room temperature (dissolution is exothermic).",
                  "Combine urea and calcium solutions. Record temperature, pH and electrical conductivity.",
                  "Add urease LAST and mix gently. Avoid prolonged high-speed mixing.",
                  "Bring to final volume with deionized water. Record preparation time, enzyme batch and temperature.",
                  "Use promptly. Reject batches with abnormally low activity or immediate bulk precipitation.",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-sm text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 7. EICP PROCEDURE ─────────────────────────── */}
            <section>
              <SectionAnchor id="eicp-procedure" />
              <SectionHeader label="Section 8" title="EICP Specimen Treatment & Curing" />

              {/* Core cycle */}
              <div className="callout-blue mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Proposed Core Treatment Cycle: </strong>
                  Inject ~1 pore volume of EICP solution per cycle at controlled low rate → allow 24-hour reaction →
                  repeat for <strong>4 cycles</strong>. Starting flow rate: ~1 mL/min for 50 mm × 100 mm pilot column.
                </p>
              </div>

              {/* Density formulas */}
              <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-4">Specimen Calculations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Relative Density", formula: "Dr = [(e_max − e) / (e_max − e_min)] × 100" },
                  { name: "Dry Density", formula: "ρ_d = (Gs × ρ_w) / (1 + e)" },
                  { name: "Required Dry Mass", formula: "Ms = ρ_d × V" },
                  { name: "Pore Volume", formula: "PV = n × V, where n = e / (1 + e)" },
                ].map((f) => (
                  <div key={f.name} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-xs font-semibold text-gray-500 mb-1">{f.name}</p>
                    <div className="formula">{f.formula}</div>
                  </div>
                ))}
              </div>

              {/* Clogging stop rules */}
              <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-4">Clogging Stop Rules</h3>
              <div className="space-y-2 mb-8">
                {[
                  "Flow rate falls below 20% of the initial value at the same applied pressure.",
                  "Injection pressure rises sharply or exceeds the safe column limit.",
                  "Solution bypasses along the column wall.",
                  "Inlet zone becomes visibly sealed while the lower column remains untreated.",
                  "Less than 80% of the intended pore volume can be introduced.",
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-800">{rule}</p>
                  </div>
                ))}
              </div>

              {/* Curing */}
              <div className="card-base p-6">
                <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-3">Curing & Drying</h3>
                <ul className="space-y-2">
                  {[
                    "Cure principal specimens for 7 days at controlled room temperature (14 days optional).",
                    "Keep curing conditions IDENTICAL among E and E+H specimens.",
                    "After curing, drain gently and dry at 40–60°C until constant mass.",
                    "Record dry treated mass and dimensions before hydrophobic post-treatment.",
                    "Avoid aggressive rinsing — can remove weakly bonded precipitate.",
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── 8. HYDROPHOBIC POST-TREATMENT ─────────────── */}
            <section>
              <SectionAnchor id="hydrophobic" />
              <SectionHeader label="Section 9" title="Hydrophobic Post-Treatment" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card-base p-6 border-t-4 border-t-teal-300">
                  <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-3">✅ Preferred Route (FYP)</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Use a <strong>commercial breathable silane/siloxane product</strong> with declared active content
                    and a manufacturer-approved application procedure. Easier and safer for an undergraduate FYP.
                  </p>
                </div>
                <div className="card-base p-6 border-t-4 border-t-amber-300">
                  <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-3">⚗️ DMDCS Research Route</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Use DMDCS only where the laboratory can provide a fume hood, chemical SOP and waste plan.
                    Source study used <strong>~0.05% by dry sand mass</strong> (Toyoura sand pilot level — not universal).
                  </p>
                </div>
              </div>

              {/* Dosage screening */}
              <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-4">Dosage Screening Levels</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-teal-700 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Level</th>
                      <th className="px-4 py-3 text-left font-semibold">Starting Dosage</th>
                      <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { level: "Control", dosage: "0%", purpose: "Untreated reference" },
                      { level: "Low", dosage: "~0.05% active agent by original dry sand mass", purpose: "Literature-based DMDCS pilot level" },
                      { level: "Moderate", dosage: "~0.10% or 0.50%", purpose: "Check whether greater repellency causes mechanical penalty" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50"}>
                        <td className="px-4 py-3 font-semibold text-teal-800">{row.level}</td>
                        <td className="px-4 py-3 font-mono text-sm text-slate-700">{row.dosage}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="formula mb-4">M_H = (dosage / 100) × M_s</div>
              <p className="text-xs text-gray-500">Calculate active-agent mass from ORIGINAL dry sand mass, not post-EICP mass.</p>
            </section>

            {/* ── 9. CONTACT ANGLE TESTING ──────────────────── */}
            <section>
              <SectionAnchor id="contact-angle" />
              <SectionHeader
                label="Section 10"
                title="Contact Angle & Water Repellency Testing"
                subtitle="Sessile-drop procedure for apparent contact angle (ACA) measurement on compacted soil specimens."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-4">Sessile-Drop Procedure</h3>
                  <div className="space-y-2">
                    {[
                      "Level specimen surface without polishing or crushing grains.",
                      "Fixed droplet volume: 5 ± 0.2 µL deionized water.",
                      "Deposit gently — needle must NOT touch the soil.",
                      "Classify stable: droplet remains on surface for > 2 seconds.",
                      "Measure left and right angles relative to surface baseline.",
                      "Test 10 different locations per specimen.",
                      "Avoid previously wetted zones and specimen edges.",
                    ].map((step, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-600 p-2 bg-slate-50 rounded-lg">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[10px]">{i + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-jakarta font-semibold text-sm text-slate-800 mb-4">ACA Interpretation Table</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      { condition: "ACA < 90°", result: "Hydrophilic surface", color: "blue" },
                      { condition: "ACA > 90°, few steady drops", result: "Local / non-uniform hydrophobicity", color: "amber" },
                      { condition: "ACA > 90° + ≥9/10 drops steady", result: "✅ Consistently hydrophobic", color: "green" },
                      { condition: "ACA ≥ 150°", result: "Very strong repellency — still verify under head", color: "purple" },
                    ].map((row) => (
                      <div key={row.condition} className={`flex justify-between items-center p-3 bg-${row.color}-50 border border-${row.color}-100 rounded-lg text-xs`}>
                        <span className={`font-mono font-bold text-${row.color}-800`}>{row.condition}</span>
                        <span className={`text-${row.color}-700`}>{row.result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="formula">θᵢ = (θ_L + θ_R) / 2</div>
                    <div className="formula">Pₛ = (Nₛ / Nₜ) × 100</div>
                    <p className="text-xs text-gray-500">Pₛ = steady-drop percentage. Nₛ = stable drops, Nₜ = total drops tested.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 10. FLOOD-DRY PROTOCOL ────────────────────── */}
            <section>
              <SectionAnchor id="flood-cycle" />
              <SectionHeader label="Section 11" title="Flood–Dry Durability Protocol" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {[
                  { icon: "💧", label: "Flood Head", value: "50 mm above specimen surface", type: "proposed" },
                  { icon: "⏱️", label: "Flood Duration", value: "24 hours", type: "proposed" },
                  { icon: "☀️", label: "Drain + Dry", value: "24 h gravity drain → dry to constant mass", type: "proposed" },
                ].map((item) => (
                  <div key={item.label} className="card-base p-5 text-center">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                    <p className="font-jakarta font-bold text-sm text-slate-800">{item.value}</p>
                    <span className="badge bg-amber-100 text-amber-700 text-[10px] mt-2">⚗️ Proposed</span>
                  </div>
                ))}
              </div>

              <h3 className="font-jakarta font-semibold text-base text-slate-800 mb-4">Measurements Per Cycle</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Measurement</th>
                      <th className="px-4 py-3 text-left font-semibold">Formula / Record</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { param: "Water Absorption", formula: "(M_wet − M_dry) / M_dry × 100" },
                      { param: "Dry Mass Loss", formula: "(M₀ − Mₙ) / M₀ × 100" },
                      { param: "Infiltration Time", formula: "Time to first visible breakthrough or cumulative volume" },
                      { param: "Effluent Chemistry", formula: "pH, conductivity; calcium/ammonium where available" },
                      { param: "Surface Condition", formula: "Photographs, cracking, erosion, coating loss" },
                      { param: "Hydrophobicity", formula: "ACA and WDPT at selected cycle levels" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                        <td className="px-4 py-3 font-semibold text-slate-800">{row.param}</td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-600">{row.formula}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 11. MECHANICAL TESTS ──────────────────────── */}
            <section>
              <SectionAnchor id="mechanical" />
              <SectionHeader label="Section 12" title="Mechanical & Hydraulic Testing" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Unconfined Compression (UCS)", icon: Activity, color: "blue",
                    groups: ["E", "E+H", "H+E (optional)"], cycles: "0, 5 and 10",
                    details: ["Rate: 2 mm/min (published BEICP basis)", "Dry specimens before testing", "Report: Peak strength, axial strain, stiffness, failure mode"],
                  },
                  {
                    name: "Direct Shear Test", icon: Zap, color: "teal",
                    groups: ["UT", "H", "E", "E+H"], normalStresses: "25, 50, 100 kPa",
                    details: ["Rate: 0.25 mm/min (Zhou & Leung 2022)", "Report: Peak and residual friction angle, cohesion, dilatancy"],
                  },
                  {
                    name: "Oedometer / Compressibility", icon: Layers, color: "purple",
                    groups: ["All groups"], loading: "Up to 300 kPa incremental",
                    details: ["Before and after flood cycling", "Report: Compression index, swelling index, settlement change"],
                  },
                  {
                    name: "Permeability & Infiltration", icon: Droplets, color: "teal",
                    groups: ["All groups"], method: "Constant-head",
                    details: ["Pre-treatment, post-treatment and post-cycling", "Report: k (m/s), infiltration resistance of surface barrier"],
                  },
                  {
                    name: "Model Footing Test ⭐", icon: Target, color: "green",
                    groups: ["UT", "E", "E+H"], isPrimary: true,
                    details: [
                      "Tank: ≥ 5 footing widths wide, ≥ 4 footing depths deep",
                      "Lower zone: EICP-treated load-bearing sand",
                      "Upper zone: 20–30 mm hydrophobic protective layer",
                      "Report: Load-settlement curve, ultimate bearing pressure, service-load settlement",
                    ],
                  },
                ].map((test) => {
                  const Icon = test.icon;
                  return (
                    <div key={test.name} className={`card-base p-6 ${test.isPrimary ? "ring-2 ring-green-200" : ""}`}>
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl bg-${test.color}-100 flex items-center justify-center shrink-0`}>
                          <Icon className={`w-5 h-5 text-${test.color}-700`} />
                        </div>
                        <div>
                          <h3 className="font-jakarta font-semibold text-sm text-slate-800">{test.name}</h3>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {test.groups?.map((g) => (
                              <span key={g} className="badge bg-gray-100 text-gray-600 text-[10px]">{g}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {test.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-1.5 shrink-0" />{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ── 12. DATA REDUCTION FORMULAS ───────────────── */}
            <section>
              <SectionAnchor id="formulas" />
              <SectionHeader label="Section 14" title="Data Reduction & Performance Indices" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { name: "Strength Retention Ratio", symbol: "Rₛ", formula: "Rₛ = (τ_N / τ₀) × 100", unit: "%" },
                  { name: "Bearing Capacity Retention", symbol: "R_q", formula: "R_q = (q_ult,N / q_ult,0) × 100", unit: "%" },
                  { name: "Hydraulic Conductivity Ratio", symbol: "R_k", formula: "R_k = k_N / k₀", unit: "ratio" },
                  { name: "Infiltration Reduction", symbol: "I_R", formula: "I_R = [1 − (i_t / i_ut)] × 100", unit: "%" },
                  { name: "Contact Angle Retention", symbol: "H_R", formula: "H_R = (θ_N / θ₀) × 100", unit: "%" },
                  { name: "CaCO₃ Estimate", symbol: "", formula: "CaCO₃ (%) = [(M_t − M_i) / M_i] × 100", unit: "%" },
                  { name: "Uniformity (COV)", symbol: "COV", formula: "COV = (σ / mean) × 100", unit: "%" },
                ].map((f) => (
                  <div key={f.name} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-xs font-semibold text-gray-600">{f.name}</p>
                      <span className="text-xs text-gray-400 font-mono">{f.unit}</span>
                    </div>
                    <div className="formula text-xs">{f.formula}</div>
                  </div>
                ))}
              </div>
              <div className="callout-blue">
                <p className="text-sm text-blue-800">
                  <strong>Statistical Plan: </strong>
                  Report mean, SD and CV. Use two-way ANOVA (treatment type × flood-cycle level). Post-hoc Tukey test
                  after significant ANOVA. Present effect sizes and CIs — not only p-values. Do not select optimum
                  based only on maximum UCS; evaluate hydraulic, mechanical and durability indicators together.
                </p>
              </div>
            </section>

            {/* ── 13. 16-WEEK SCHEDULE ──────────────────────── */}
            <section>
              <SectionAnchor id="schedule" />
              <SectionHeader label="Section 16.2" title="Suggested 16-Week Laboratory Schedule" />
              <div className="space-y-2">
                {[
                  { weeks: "1–2", activity: "Literature review, safety approvals, materials and apparatus preparation", phase: "Prep", color: "gray" },
                  { weeks: "3", activity: "Soil characterization and density calculations", phase: "Characterization", color: "blue" },
                  { weeks: "4–5", activity: "Urease activity, EICP solution and flow pilot tests", phase: "Pilot", color: "teal" },
                  { weeks: "6", activity: "Hydrophobic dosage and contact-angle screening", phase: "Screening", color: "teal" },
                  { weeks: "7–8", activity: "Main specimen preparation and EICP treatment", phase: "Treatment", color: "blue" },
                  { weeks: "9", activity: "Curing, drying and hydrophobic post-treatment", phase: "Treatment", color: "blue" },
                  { weeks: "10", activity: "Initial hydraulic and mechanical tests", phase: "Testing", color: "purple" },
                  { weeks: "11–13", activity: "Flood-dry cycling and repeated measurements", phase: "Durability", color: "amber" },
                  { weeks: "14", activity: "Final mechanical tests and carbonate analysis", phase: "Testing", color: "purple" },
                  { weeks: "15", activity: "Statistical analysis and figure preparation", phase: "Analysis", color: "green" },
                  { weeks: "16", activity: "Interpretation, conclusions and methodology audit", phase: "Reporting", color: "green" },
                ].map((row, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 bg-${row.color}-50 border border-${row.color}-100 rounded-xl`}>
                    <div className={`w-20 shrink-0 text-center font-mono font-bold text-${row.color}-700 text-sm`}>
                      Wk {row.weeks}
                    </div>
                    <div className="flex-1">
                      <span className={`badge bg-${row.color}-100 text-${row.color}-700 text-[10px] mb-1`}>{row.phase}</span>
                      <p className="text-sm text-gray-700">{row.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 14. SAFETY ────────────────────────────────── */}
            <section>
              <SectionAnchor id="safety" />
              <SectionHeader label="Section 5.3" title="Safety & Waste Management" />
              <div className="space-y-4">
                {[
                  { chemical: "EICP Effluent (Ammonium-bearing)", risk: "Environmental contamination", severity: "high", action: "Collect ALL EICP drainage in labelled containers. Do NOT discharge to sinks or soil." },
                  { chemical: "DMDCS", risk: "Reacts with moisture → generates HCl gas", severity: "critical", action: "Use ONLY under functioning fume hood, approved SOP, full PPE (coat, goggles, chemical gloves) and supervisor authorization." },
                  { chemical: "Urease Enzyme", risk: "Temperature sensitivity — loss of activity", severity: "medium", action: "Add urease ONLY after the salt solution has cooled to room temperature." },
                  { chemical: "HCl (carbonate digestion)", risk: "Corrosive, acidic fumes", severity: "high", action: "Use only under approved laboratory procedure with neutralization waste plan." },
                ].map((item) => (
                  <div key={item.chemical} className={`flex items-start gap-4 p-5 rounded-xl border ${
                    item.severity === "critical" ? "bg-red-50 border-red-200" :
                    item.severity === "high" ? "bg-amber-50 border-amber-200" :
                    "bg-yellow-50 border-yellow-200"
                  }`}>
                    <Shield className={`w-5 h-5 shrink-0 mt-0.5 ${
                      item.severity === "critical" ? "text-red-600" :
                      item.severity === "high" ? "text-amber-600" : "text-yellow-600"
                    }`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-sm text-slate-800">{item.chemical}</p>
                        <span className={`badge text-[10px] ${
                          item.severity === "critical" ? "bg-red-100 text-red-700" :
                          item.severity === "high" ? "bg-amber-100 text-amber-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>{item.severity.toUpperCase()}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1">Risk: {item.risk}</p>
                      <p className="text-sm text-gray-700">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 15. TROUBLESHOOTING ───────────────────────── */}
            <section>
              <SectionAnchor id="troubleshooting" />
              <SectionHeader label="Section 15.3" title="Troubleshooting Guide" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Problem</th>
                      <th className="px-4 py-3 text-left font-semibold">Likely Cause</th>
                      <th className="px-4 py-3 text-left font-semibold">Corrective Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { p: "Immediate precipitation in mixing beaker", c: "Solution too warm or reaction too fast", a: "Cool components; add urease last; prepare fresh smaller batches." },
                      { p: "Upper-zone clogging", c: "Excess activity, high concentration or fast precipitation", a: "Reduce concentration/activity or flow rate; use smaller doses; reassess sequence." },
                      { p: "Wall bypass", c: "Poor packing or column-wall gap", a: "Improve lift compaction and cap sealing; reject affected specimen." },
                      { p: "Low UCS with high mass gain", c: "Non-bridging precipitate or residual salts", a: "Check top-middle-bottom distribution and perform carbonate verification." },
                      { p: "High ACA but rapid infiltration elsewhere", c: "Non-uniform hydrophobic treatment", a: "Increase application uniformity, not automatically the total dosage." },
                      { p: "Strength loss after hydrophobic treatment", c: "Excess coating or deep penetration", a: "Reduce dosage or confine treatment to a thinner upper zone." },
                      { p: "Large replicate variability", c: "Density, enzyme activity or flow inconsistency", a: "Tighten preparation controls and repeat the pilot batch." },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-4 py-3 font-medium text-red-700">{row.p}</td>
                        <td className="px-4 py-3 text-gray-600 text-xs">{row.c}</td>
                        <td className="px-4 py-3 text-green-700 text-xs font-medium">{row.a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── 16. REFERENCES ────────────────────────────── */}
            <section>
              <SectionAnchor id="references" />
              <SectionHeader label="Section 17" title="Methodology References" />
              <div className="space-y-4">
                {[
                  { id: 1, citation: "Zhou, Z., & Leung, A. K. (2022). Modifying the mechanical properties of sand by using different hydrophobic conditions. Acta Geotechnica, 17, 3783–3797.", doi: "10.1007/s11440-022-01482-z", role: "Primary — Hydrophobic sand (DMDCS dosage, ACA protocol, direct shear)", isPrimary: true },
                  { id: 2, citation: "Gitanjali, A., et al. (2024). Bio-cementation of sand using enzyme-induced calcite precipitation. Construction and Building Materials, 417, 135360.", doi: "10.1016/j.conbuildmat.2024.135360", role: "EICP formulation basis (1.0 M urea + 0.67 M CaCl₂ + 3 g/L urease)" },
                  { id: 3, citation: "Vilar, R., Ikuma, K., & Cetin, B. (2025). Impact of sand surface coating on biocementation mechanisms. Frontiers in Materials, 12, 1641275.", doi: "10.3389/fmats.2025.1641275", role: "BEICP + hydrophobic clogging evidence — supports EICP-first sequence" },
                  { id: 4, citation: "Xu, K., et al. (2023). Effect of drying-wetting cycles on EICP-reinforced sea sand. Journal of Rock Mechanics and Geotechnical Engineering.", doi: "10.1016/j.jrmge.2023.02.014", role: "4-cycle dosing basis; flood-dry cycle effect on EICP specimens" },
                  { id: 5, citation: "Almajed, A., et al. (2020). EICP for soil improvement. Journal of Cleaner Production, 254, 120033.", doi: "10.1016/j.jclepro.2020.120033", role: "General EICP soil improvement mechanisms" },
                  { id: 6, citation: "ASTM D3080/D3080M. Standard Test Method for Direct Shear Test of Soils.", doi: null, role: "Direct shear testing standard" },
                  { id: 7, citation: "ASTM D2435/D2435M. Standard Test Methods for One-Dimensional Consolidation Properties.", doi: null, role: "Oedometer / consolidation testing standard" },
                ].map((ref) => (
                  <div key={ref.id} className={`flex items-start gap-4 p-5 rounded-xl border ${ref.isPrimary ? "bg-blue-50 border-blue-200" : "bg-white border-gray-100"}`}>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${ref.isPrimary ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600"}`}>[{ref.id}]</span>
                    <div>
                      {ref.isPrimary && <span className="badge bg-blue-100 text-blue-700 text-[10px] mb-2">★ Primary Reference</span>}
                      <p className="text-sm text-gray-800 leading-relaxed mb-1">{ref.citation}</p>
                      <p className="text-xs text-gray-500 italic mb-1">Role: {ref.role}</p>
                      {ref.doi && (
                        <a href={`https://doi.org/${ref.doi}`} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-mono text-blue-600 hover:text-blue-800 transition-colors">
                          DOI: {ref.doi} ↗
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
