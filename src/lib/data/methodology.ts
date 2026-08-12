// Complete methodology data extracted from Complete_EICP_Hydrophobic_FYP_Methodology.docx

export const methodologyMeta = {
  title: "Complete Laboratory Methodology",
  subtitle: "Combined EICP-Hydrophobic Treatment",
  focus: "Flood-resilient foundation sand: mechanical strengthening, water-repellency and repeated flood-dry durability",
  principalSequence: "EICP treatment → curing and drying → low-dose hydrophobic post-treatment",
  evidenceNote:
    "Published methods are separated from proposed FYP operating conditions. No universally standardized combined EICP-hydrophobic protocol was identified.",
};

export const aim =
  "To determine whether EICP strengthening combined with a low-dose hydrophobic barrier improves the flood resistance, post-flood strength and settlement behaviour of foundation sand.";

export const methodologyObjectives = [
  {
    id: 1,
    text: "Quantify the individual effects of EICP and hydrophobic treatment on strength, stiffness, infiltration and water repellency.",
  },
  {
    id: 2,
    text: "Evaluate the EICP-first, hydrophobic-second treatment sequence under repeated flood-dry cycles.",
  },
  {
    id: 3,
    text: "Measure treatment uniformity through CaCO₃ content and top-middle-bottom comparisons.",
  },
  {
    id: 4,
    text: "Determine whether the combined treatment retains more strength and bearing capacity after flooding than EICP alone.",
  },
  {
    id: 5,
    text: "Identify the lowest hydrophobic dosage that gives consistent water repellency without unacceptable mechanical loss.",
  },
];

export const hypotheses = [
  {
    id: 1,
    text: "EICP-only specimens will have higher initial strength than untreated and hydrophobic-only specimens.",
    group: "E",
  },
  {
    id: 2,
    text: "Hydrophobic-only specimens will show lower water entry but may exhibit reduced friction angle or dilatancy.",
    group: "H",
  },
  {
    id: 3,
    text: "EICP → hydrophobic specimens will show lower infiltration than EICP-only and higher strength than hydrophobic-only.",
    group: "E+H",
  },
  {
    id: 4,
    text: "EICP → hydrophobic specimens will retain a greater percentage of initial strength after flood-dry cycling than EICP-only.",
    group: "E+H",
  },
  {
    id: 5,
    text: "Hydrophobic → EICP may produce greater clogging and lower cementation uniformity than EICP → hydrophobic.",
    group: "H+E",
  },
];

export const treatmentStages = [
  {
    stage: 1,
    operation: "Prepare and characterize sand",
    purpose: "Control density, grading and baseline properties",
    evidence: "Standard geotechnical practice",
    evidenceType: "published",
    icon: "Layers",
  },
  {
    stage: 2,
    operation: "Apply EICP solution",
    purpose: "Precipitate CaCO₃ and bond soil particles",
    evidence: "Published EICP basis",
    evidenceType: "published",
    icon: "FlaskConical",
  },
  {
    stage: 3,
    operation: "Cure and dry",
    purpose: "Complete reaction and establish stable initial condition",
    evidence: "Published basis; duration selected for FYP",
    evidenceType: "published",
    icon: "Sun",
  },
  {
    stage: 4,
    operation: "Apply low-dose hydrophobic treatment",
    purpose: "Create surface/upper-zone water-entry resistance",
    evidence: "Proposed combined design",
    evidenceType: "proposed",
    icon: "Droplets",
  },
  {
    stage: 5,
    operation: "Verify hydrophobicity and uniformity",
    purpose: "Confirm treatment before durability testing",
    evidence: "Published sessile-drop basis",
    evidenceType: "published",
    icon: "CheckCircle",
  },
  {
    stage: 6,
    operation: "Apply flood-dry cycles",
    purpose: "Simulate repeated seasonal inundation and drying",
    evidence: "Proposed climate-durability design",
    evidenceType: "proposed",
    icon: "RefreshCw",
  },
  {
    stage: 7,
    operation: "Perform mechanical/hydraulic tests",
    purpose: "Quantify benefit, deterioration and trade-offs",
    evidence: "Standard tests",
    evidenceType: "published",
    icon: "BarChart3",
  },
];

export const engineeringConfigurations = [
  {
    id: "A",
    label: "Configuration A — Primary",
    description:
      "An EICP-stabilized lower layer is protected by a 20–30 mm hydrophobic upper layer. This is the preferred model-footing configuration.",
    isPrimary: true,
    color: "blue",
  },
  {
    id: "B",
    label: "Configuration B — Column",
    description:
      "An EICP-treated column is dried and then given a controlled hydrophobic surface impregnation. Suitable for infiltration, water-entry and durability testing.",
    isPrimary: false,
    color: "teal",
  },
  {
    id: "C",
    label: "Configuration C — Optional",
    description:
      "Hydrophobic sand treated with EICP to determine whether water repellency causes solution bypassing or premature clogging. Should NOT be the main design.",
    isPrimary: false,
    color: "orange",
    isOptional: true,
  },
];

export const coreMatrix = [
  { variable: "Soil", level: "One clean sand", note: "Use the same batch throughout." },
  { variable: "Relative Density", level: "One fixed value, preferably 50–60%", note: "Select after index-density tests." },
  { variable: "EICP Recipe", level: "One selected formulation (after pilot testing)", note: "Do not vary recipe in the main matrix." },
  { variable: "EICP Cycles", level: "Four cycles", note: "Proposed core level; verify clogging in pilot columns." },
  { variable: "Hydrophobic Dosage", level: "One selected low dosage", note: "Select the lowest consistent dosage from screening." },
  { variable: "Flood-Dry Cycles", level: "0, 5 and 10", note: "Use identical head, duration and drying endpoint." },
  { variable: "Replicates", level: "Minimum three per principal measurement", note: "Report mean, SD and coefficient of variation." },
];

export const eicpFormulation = {
  title: "Literature-Based Starting EICP Formulation",
  note: "1.0 M urea + 0.67 M calcium chloride dihydrate + 3 g/L urease. This is a starting point for pilot testing, NOT a universal optimum.",
  table: [
    { volume: "1.000 L", urea: "60.06 g", cacl2: "98.50 g", urease: "3.00 g" },
    { volume: "0.500 L", urea: "30.03 g", cacl2: "49.25 g", urease: "1.50 g" },
    { volume: "0.250 L", urea: "15.02 g", cacl2: "24.63 g", urease: "0.75 g" },
    { volume: "0.100 L", urea: "6.01 g", cacl2: "9.85 g", urease: "0.30 g" },
  ],
  caveat: "Masses are for calcium chloride DIHYDRATE (MW ≈ 147.02 g/mol). Anhydrous CaCl₂ requires a different mass.",
};

export const specimenCalculations = {
  title: "Specimen Calculations",
  formulas: [
    {
      name: "Relative Density",
      formula: "Dr = [(e_max − e) / (e_max − e_min)] × 100",
      desc: "Select one target relative density and calculate the corresponding void ratio e.",
    },
    {
      name: "Dry Density",
      formula: "ρ_d = (Gs × ρ_w) / (1 + e)",
      desc: "Use this dry density for EVERY comparable specimen.",
    },
    {
      name: "Required Dry Mass",
      formula: "Ms = ρ_d × V",
      desc: "Ms = required dry soil mass, V = internal specimen volume.",
    },
    {
      name: "Porosity",
      formula: "n = e / (1 + e)",
      desc: "Express each EICP dose as a fraction or multiple of specimen pore volume (PV = n × V).",
    },
  ],
};

export const cloggingStopRules = [
  "Flow rate falls below 20% of the initial value at the same applied pressure.",
  "Injection pressure rises sharply or exceeds the safe column limit.",
  "Solution bypasses along the column wall.",
  "Inlet zone becomes visibly sealed while the lower column remains untreated.",
  "Less than 80% of the intended pore volume can be introduced.",
];

export const contactAngleData = {
  dropVolume: "5 ± 0.2 microlitres (deionized water)",
  steadyThreshold: "Droplet remains on surface for > 2 seconds",
  testLocations: "10 different locations per specimen",
  formula_aca: "θᵢ = (θ_L + θ_R) / 2",
  formula_ps: "Pₛ = (Nₛ / Nₜ) × 100",
  interpretations: [
    { condition: "ACA < 90°", result: "Hydrophilic surface" },
    { condition: "ACA > 90° but few steady drops", result: "Local / non-uniform hydrophobicity" },
    { condition: "ACA > 90° and ≥ 9 of 10 drops steady", result: "✅ Consistently hydrophobic surface" },
    { condition: "ACA ≥ 150°", result: "Very strong water repellency — still verify under head" },
  ],
};

export const floodCycleProtocol = {
  head: "50 mm water head above specimen surface",
  floodDuration: "24 hours",
  drainDuration: "24 hours (gravity)",
  drying: "Air-dry or low-temperature to constant mass",
  note: "The 50 mm head and 24-hour duration are proposed FYP conditions. They may be modified after pilot test, but MUST remain fixed throughout main experiment.",
  measurements: [
    { param: "Water Absorption", formula: "(M_wet − M_dry) / M_dry × 100" },
    { param: "Dry Mass Loss", formula: "(M₀ − Mₙ) / M₀ × 100" },
    { param: "Infiltration Time", formula: "Time to first visible breakthrough" },
    { param: "Effluent Chemistry", formula: "pH and conductivity; calcium/ammonium" },
    { param: "Surface Condition", formula: "Photographs, cracking, erosion, coating loss" },
    { param: "Hydrophobicity", formula: "ACA and/or WDPT at selected cycle levels" },
  ],
};

export const mechanicalTests = [
  {
    name: "Unconfined Compression (UCS)",
    groups: ["E", "E+H", "H+E (optional)"],
    cycles: "0, 5 and 10",
    rate: "2 mm/min (published BEICP basis)",
    outputs: ["Peak strength", "Axial strain at peak", "Initial stiffness", "Failure mode"],
    icon: "ArrowDown",
    color: "blue",
  },
  {
    name: "Direct Shear Test",
    groups: ["UT", "H", "E", "E+H"],
    normalStresses: "25, 50 and 100 kPa (shallow foundations)",
    rate: "0.25 mm/min (from Zhou & Leung 2022)",
    outputs: ["Peak friction angle", "Residual friction angle", "Apparent cohesion", "Dilatancy"],
    icon: "Scissors",
    color: "teal",
  },
  {
    name: "Oedometer / Compressibility",
    groups: ["All groups"],
    loading: "Up to 300 kPa (incremental)",
    outputs: ["Compression index", "Swelling index", "Settlement change before/after cycling"],
    icon: "Layers",
    color: "purple",
  },
  {
    name: "Permeability / Infiltration",
    groups: ["All groups"],
    method: "Constant-head testing",
    outputs: ["Hydraulic conductivity", "Pre/post treatment comparison", "Surface barrier infiltration resistance"],
    icon: "Droplets",
    color: "amber",
  },
  {
    name: "Model Footing Test",
    groups: ["UT", "E", "E+H"],
    arrangement: {
      tankWidth: "≥ 5 footing widths",
      soilDepth: "≥ 4 footing widths below footing base",
      lowerZone: "EICP-treated load-bearing sand",
      upperZone: "20–30 mm hydrophobic protective layer",
    },
    outputs: ["Load-settlement curve", "Ultimate bearing pressure", "Service-load settlement", "Failure pattern"],
    icon: "Home",
    color: "green",
    isPrimary: true,
  },
];

export const performanceFormulas = [
  { name: "Strength Retention Ratio", symbol: "Rₛ", formula: "Rₛ = (τ_N / τ₀) × 100", unit: "%" },
  { name: "Bearing Capacity Retention", symbol: "R_q", formula: "R_q = (q_ult,N / q_ult,0) × 100", unit: "%" },
  { name: "Hydraulic Conductivity Ratio", symbol: "R_k", formula: "R_k = k_N / k₀", unit: "ratio" },
  { name: "Infiltration Reduction", symbol: "I_R", formula: "I_R = [1 − (i_t / i_ut)] × 100", unit: "%" },
  { name: "Contact Angle Retention", symbol: "H_R", formula: "H_R = (θ_N / θ₀) × 100", unit: "%" },
  { name: "CaCO₃ Estimate", symbol: "CaCO₃_est", formula: "[(M_treated − M_initial) / M_initial] × 100", unit: "%" },
  { name: "Uniformity (COV)", symbol: "COV", formula: "COV = (σ / mean) × 100", unit: "%" },
];

export const acceptanceCriteria = [
  {
    criterion: "Hydraulic",
    condition: "Infiltration is lower than EICP-only and untreated sand.",
    icon: "Droplets",
    color: "teal",
  },
  {
    criterion: "Mechanical",
    condition: "Strength is higher than hydrophobic-only and suitable for target load.",
    icon: "Zap",
    color: "blue",
  },
  {
    criterion: "Durability",
    condition: "Strength/bearing retention after cycling exceeds EICP-only treatment.",
    icon: "RefreshCw",
    color: "green",
  },
  {
    criterion: "Uniformity",
    condition: "No severe upper-zone clogging or untreated lower zone present.",
    icon: "Grid3x3",
    color: "purple",
  },
  {
    criterion: "Hydrophobicity",
    condition: "At least 9 of 10 drops stable and repellency remains after cycling.",
    icon: "Shield",
    color: "teal",
  },
  {
    criterion: "Reproducibility",
    condition: "Replicate variability acceptable and no single specimen controls the conclusion.",
    icon: "CheckSquare",
    color: "gray",
  },
];

export const troubleshooting = [
  {
    problem: "Immediate precipitation in mixing beaker",
    cause: "Solution too warm or reaction too fast",
    action: "Cool components; add urease last; prepare fresh smaller batches.",
  },
  {
    problem: "Upper-zone clogging",
    cause: "Excess activity, high concentration or fast precipitation",
    action: "Reduce concentration/activity or flow rate; use smaller doses; reassess sequence.",
  },
  {
    problem: "Wall bypass",
    cause: "Poor packing or column-wall gap",
    action: "Improve lift compaction and cap sealing; reject affected specimen.",
  },
  {
    problem: "Low UCS with high mass gain",
    cause: "Non-bridging precipitate or residual salts",
    action: "Check top-middle-bottom distribution and perform carbonate verification.",
  },
  {
    problem: "High ACA but rapid infiltration elsewhere",
    cause: "Non-uniform hydrophobic treatment",
    action: "Increase application uniformity, not automatically the total dosage.",
  },
  {
    problem: "Strength loss after hydrophobic treatment",
    cause: "Excess coating or deep penetration",
    action: "Reduce dosage or confine treatment to a thinner upper zone.",
  },
  {
    problem: "Large replicate variability",
    cause: "Density, enzyme activity or flow inconsistency",
    action: "Tighten preparation controls and repeat the pilot batch.",
  },
];

export const labSchedule16Weeks = [
  { weeks: "1–2", activity: "Literature review, safety approvals, materials and apparatus preparation", phase: "Prep", color: "gray" },
  { weeks: "3", activity: "Soil characterization and density calculations", phase: "Characterization", color: "blue" },
  { weeks: "4–5", activity: "Urease activity, EICP solution preparation and flow pilot tests", phase: "Pilot", color: "teal" },
  { weeks: "6", activity: "Hydrophobic dosage and contact-angle screening", phase: "Screening", color: "teal" },
  { weeks: "7–8", activity: "Main specimen preparation and EICP treatment", phase: "Treatment", color: "blue" },
  { weeks: "9", activity: "Curing, drying and hydrophobic post-treatment", phase: "Treatment", color: "blue" },
  { weeks: "10", activity: "Initial hydraulic and mechanical tests", phase: "Testing", color: "purple" },
  { weeks: "11–13", activity: "Flood-dry cycling and repeated measurements", phase: "Durability", color: "amber" },
  { weeks: "14", activity: "Final mechanical tests and carbonate analysis", phase: "Testing", color: "purple" },
  { weeks: "15", activity: "Statistical analysis and figure preparation", phase: "Analysis", color: "green" },
  { weeks: "16", activity: "Interpretation, conclusions and methodology audit", phase: "Reporting", color: "green" },
];

export const safetyPoints = [
  {
    chemical: "EICP Effluent (Ammonium)",
    risk: "Environmental contamination",
    control: "Collect ALL drainage in labelled containers. Do not discharge to sinks or soil.",
    severity: "high",
  },
  {
    chemical: "DMDCS",
    risk: "Reacts with moisture → HCl gas",
    control: "Use ONLY under functioning fume hood, approved SOP, full PPE and supervisor authorization.",
    severity: "critical",
  },
  {
    chemical: "Urease Enzyme",
    risk: "Temperature sensitivity",
    control: "Add urease ONLY after the salt solution has cooled to room temperature.",
    severity: "medium",
  },
  {
    chemical: "Hydrochloric Acid (carbonate digestion)",
    risk: "Corrosive, fumes",
    control: "Use only under approved lab procedure with neutralization waste plan.",
    severity: "high",
  },
];

export const methodologyReferences = [
  {
    id: 1,
    citation: "Zhou, Z., & Leung, A. K. (2022). Modifying the mechanical properties of sand by using different hydrophobic conditions. Acta Geotechnica, 17, 3783–3797.",
    doi: "10.1007/s11440-022-01482-z",
    role: "Primary — Hydrophobic sand behaviour (DMDCS dosage, ACA, direct shear protocol)",
  },
  {
    id: 2,
    citation: "Gitanjali, A., Jhuo, Y.-S., Yeh, F.-H., & Ge, L. Y. N. (2024). Bio-cementation of sand using enzyme-induced calcite precipitation. Construction and Building Materials, 417, 135360.",
    doi: "10.1016/j.conbuildmat.2024.135360",
    role: "EICP formulation basis (1.0 M urea + 0.67 M CaCl₂ + 3 g/L urease)",
  },
  {
    id: 3,
    citation: "Vilar, R., Ikuma, K., & Cetin, B. (2025). Impact of sand surface coating on biocementation mechanisms. Frontiers in Materials, 12, 1641275.",
    doi: "10.3389/fmats.2025.1641275",
    role: "BEICP + hydrophobic interaction — supports EICP-first sequence (clogging evidence)",
  },
  {
    id: 4,
    citation: "Xu, K., et al. (2023). Effect of drying-wetting cycles on pore characteristics and mechanical properties of EICP-reinforced sea sand. Journal of Rock Mechanics and Geotechnical Engineering.",
    doi: "10.1016/j.jrmge.2023.02.014",
    role: "Flood-dry cycle effect on EICP specimens — 4-cycle dosing basis",
  },
  {
    id: 5,
    citation: "Almajed, A., Khodadadi Tirkolaei, H., Kavazanjian, E., & Hamdan, N. (2020). Enzyme induced carbonate precipitation (EICP) for soil improvement. Journal of Cleaner Production, 254, 120033.",
    doi: "10.1016/j.jclepro.2020.120033",
    role: "EICP general reference — soil improvement mechanisms",
  },
  {
    id: 6,
    citation: "ASTM D3080/D3080M. Standard Test Method for Direct Shear Test of Soils Under Consolidated Drained Conditions.",
    doi: null,
    role: "Direct shear testing standard",
  },
  {
    id: 7,
    citation: "ASTM D2435/D2435M. Standard Test Methods for One-Dimensional Consolidation Properties of Soils Using Incremental Loading.",
    doi: null,
    role: "Oedometer / consolidation testing standard",
  },
];
