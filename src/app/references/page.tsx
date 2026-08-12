import type { Metadata } from "next";
import { ExternalLink, BookOpen, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "References | GeoFYP Research",
  description:
    "Full list of references and citations used in the EICP + Hydrophobic FYP research, including DOI links.",
};

const references = [
  {
    id: 1,
    authors: "Zhou, Z., & Leung, A. K.",
    year: 2022,
    title: "Modifying the mechanical properties of sand by using different hydrophobic conditions",
    journal: "Acta Geotechnica",
    volume: "17",
    pages: "3783–3797",
    doi: "10.1007/s11440-022-01482-z",
    isPrimary: true,
    role: "Primary Reference — Hydrophobic sand (DMDCS dosage, contact angle protocol, direct shear)",
    keyFindings: [
      "Hydrophobicity threshold at ~0.05% DMDCS by mass and ~30% treated-sand proportion",
      "Stronger coating reduces peak friction angle and suppresses dilatancy",
      "Compressibility unchanged until extreme 10% DMDCS case",
      "Shearing shifts from strain softening to strain hardening with increased coating",
    ],
    tags: ["Hydrophobic Sand", "DMDCS", "Friction Angle", "Toyoura Sand"],
  },
  {
    id: 2,
    authors: "Gitanjali, A., Jhuo, Y.-S., Yeh, F.-H., & Ge, L. Y. N.",
    year: 2024,
    title: "Bio-cementation of sand using enzyme-induced calcite precipitation: Mechanical behavior and microstructural analysis",
    journal: "Construction and Building Materials",
    volume: "417",
    pages: "135360",
    doi: "10.1016/j.conbuildmat.2024.135360",
    isPrimary: false,
    role: "EICP formulation basis — 1.0 M urea + 0.67 M CaCl₂·2H₂O + 3 g/L urease",
    keyFindings: [
      "Published starting EICP formulation for sand biocementation",
      "Microstructural analysis of CaCO₃ distribution",
    ],
    tags: ["EICP", "Biocementation", "CaCO₃", "Urease"],
  },
  {
    id: 3,
    authors: "Vilar, R., Ikuma, K., & Cetin, B.",
    year: 2025,
    title: "Impact of sand surface coating on biocementation mechanisms",
    journal: "Frontiers in Materials",
    volume: "12",
    pages: "1641275",
    doi: "10.3389/fmats.2025.1641275",
    isPrimary: false,
    role: "BEICP + hydrophobic interaction — supports EICP-first sequence (clogging evidence)",
    keyFindings: [
      "Hydrophobic patches increased retained urease activity",
      "Hydrophobic coating caused rapid upper-zone clogging and non-uniform carbonate distribution",
    ],
    tags: ["BEICP", "Hydrophobic", "Clogging", "Biocementation"],
  },
  {
    id: 4,
    authors: "Xu, K., et al.",
    year: 2023,
    title: "Effect of drying-wetting cycles on pore characteristics and mechanical properties of enzyme-induced carbonate precipitation-reinforced sea sand",
    journal: "Journal of Rock Mechanics and Geotechnical Engineering",
    volume: "—",
    pages: "—",
    doi: "10.1016/j.jrmge.2023.02.014",
    isPrimary: false,
    role: "Flood-dry cycle effect on EICP specimens — 4-cycle dosing basis",
    keyFindings: ["Drying-wetting cycles affect pore structure of EICP specimens", "Strength degradation pattern documented"],
    tags: ["EICP", "Flood-Dry Cycles", "Durability", "Sea Sand"],
  },
  {
    id: 5,
    authors: "Almajed, A., Khodadadi Tirkolaei, H., Kavazanjian, E., & Hamdan, N.",
    year: 2020,
    title: "Enzyme induced carbonate precipitation (EICP) for soil improvement",
    journal: "Journal of Cleaner Production",
    volume: "254",
    pages: "120033",
    doi: "10.1016/j.jclepro.2020.120033",
    isPrimary: false,
    role: "General EICP soil improvement mechanisms",
    keyFindings: ["Comprehensive review of EICP for soil stabilization", "Strength improvement with treatment cycles"],
    tags: ["EICP", "Soil Improvement", "Urease"],
  },
  {
    id: 6,
    authors: "ASTM International",
    year: null,
    title: "ASTM D3080/D3080M — Standard Test Method for Direct Shear Test of Soils Under Consolidated Drained Conditions",
    journal: "ASTM International",
    volume: "—",
    pages: "—",
    doi: null,
    isPrimary: false,
    role: "Direct shear testing standard",
    keyFindings: [],
    tags: ["Standard", "Direct Shear", "ASTM"],
  },
  {
    id: 7,
    authors: "ASTM International",
    year: null,
    title: "ASTM D2435/D2435M — Standard Test Methods for One-Dimensional Consolidation Properties of Soils Using Incremental Loading",
    journal: "ASTM International",
    volume: "—",
    pages: "—",
    doi: null,
    isPrimary: false,
    role: "Oedometer / consolidation testing standard",
    keyFindings: [],
    tags: ["Standard", "Oedometer", "ASTM"],
  },
];

export default function ReferencesPage() {
  return (
    <div className="pt-16 bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold text-white/80 mb-6">
            <BookOpen className="w-3.5 h-3.5" /> Citations & References
          </span>
          <h1 className="font-jakarta font-bold text-4xl text-white mb-4">Research References</h1>
          <p className="text-gray-400 max-w-xl">
            All published sources used in the feasibility assessment and methodology. Primary reference highlighted in blue.
          </p>
        </div>
      </div>

      {/* References list */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {references.map((ref) => (
            <div
              key={ref.id}
              className={`card-base p-6 ${ref.isPrimary ? "ring-2 ring-blue-200 bg-blue-50" : ""}`}
            >
              <div className="flex items-start gap-4">
                {/* Number */}
                <span className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 ${ref.isPrimary ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600"}`}>
                  [{ref.id}]
                </span>

                <div className="flex-1">
                  {/* Primary badge */}
                  {ref.isPrimary && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 badge bg-blue-700 text-white text-[10px]">
                        <Star className="w-3 h-3" /> Primary Reference
                      </span>
                    </div>
                  )}

                  {/* APA Citation */}
                  <p className="text-sm text-slate-800 leading-relaxed mb-1">
                    <span className="font-semibold">{ref.authors}</span>
                    {ref.year && <span> ({ref.year}).</span>}{" "}
                    <em>{ref.title}.</em>{" "}
                    {ref.journal !== "—" && (
                      <span className="text-blue-700">{ref.journal}</span>
                    )}
                    {ref.volume !== "—" && <span>, {ref.volume}</span>}
                    {ref.pages !== "—" && <span>, {ref.pages}</span>}
                    {ref.doi && <span>.</span>}
                  </p>

                  {/* DOI */}
                  {ref.doi && (
                    <a
                      href={`https://doi.org/${ref.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-800 transition-colors mb-3"
                    >
                      <ExternalLink className="w-3 h-3" />
                      DOI: {ref.doi}
                    </a>
                  )}

                  {/* Role */}
                  <p className="text-xs text-gray-500 italic mb-3">
                    <span className="font-semibold not-italic text-gray-600">Role in FYP: </span>
                    {ref.role}
                  </p>

                  {/* Key Findings */}
                  {ref.keyFindings.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-600 mb-1.5">Key Findings:</p>
                      <ul className="space-y-1">
                        {ref.keyFindings.map((finding) => (
                          <li key={finding} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {ref.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="callout-warning mt-10">
          <p className="text-sm text-amber-800">
            <strong>Reference Note: </strong>
            Reference [3] (Vilar et al., 2025) is a BEICP study using crude bacterial protein extract, not purified
            plant-urease EICP. It is cited only as evidence that hydrophobic surfaces can change enzyme retention,
            carbonate distribution and clogging — not as a direct validation of the proposed protocol.
          </p>
        </div>
      </div>
    </div>
  );
}
