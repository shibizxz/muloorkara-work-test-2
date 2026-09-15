export const contact = {
  phone: "+919744284965",
  phoneHref: "tel:+919744284965",
  email: "info@yukti-in.com",
  emailHref: "mailto:info@yukti-in.com",
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  capabilityLabel?: string;
  capabilities: string[];
  outcomes: string[];
  insight?: {
    label: string;
    title: string;
    text: string;
  };
  software?: string[];
};

export const services: Service[] = [
  {
    slug: "electrical-engineering",
    index: "01",
    title: "Electrical Engineering",
    short: "Studies, audits and design support for safe, reliable power systems.",
    intro:
      "YUKTI's electrical engineering capability helps clients understand system behaviour, identify risks and make confident technical decisions before committing to major expenditure.",
    image: "/assets/yukti-electrical-engineering.webp",
    imageAlt: "High voltage electrical substation engineered for industrial power distribution",
    capabilityLabel: "Studies & analysis",
    capabilities: [
      "Load Flow Analysis - voltage profile, loading and system capacity.",
      "Short Circuit / Fault Analysis - fault levels and equipment duty.",
      "Protection Coordination - selective and dependable protection settings.",
      "Motor & Equipment Studies - starting, loading and system impact.",
      "Power Quality / Reliability Assessment - identify causes of poor performance.",
      "Backup Power Assessment - review resilience, capacity and critical loads.",
    ],
    outcomes: [
      "Actionable engineering recommendations",
      "Clear study reports and settings guidance",
      "Reduced operational and safety risk",
      "Right-sized upgrades aligned with actual need",
    ],
    insight: {
      label: "Evidence-led engineering",
      title: "Diagnose the real need before committing capital.",
      text: "Analysis distinguishes symptoms from root causes and prioritizes interventions according to technical risk and business impact.",
    },
  },
  {
    slug: "civil-structural-engineering",
    index: "02",
    title: "Civil & Structural Engineering",
    short: "Analysis, design and assessment for structures that must perform with confidence.",
    intro:
      "YUKTI's Civil & Structural Engineering division provides analytical, design and technical support across industrial facilities, high-rise buildings, specialized infrastructure and bridge works, combining strong structural analysis capability with practical engineering experience.",
    image: "/assets/yukti-civil-structural-engineering.webp",
    imageAlt: "Complex bridge and structural engineering works in a coastal industrial setting",
    capabilities: [
      "Structural Analysis & Design - steel and reinforced concrete structures.",
      "Industrial & Infrastructure Structures - industrial facilities, infrastructure and specialized structures.",
      "Building Structures - residential, commercial and high-rise developments.",
      "Bridge & Specialized Structures - engineering analysis and design support.",
      "Structural Assessment & Review - design verification and evaluation of existing and proposed structures.",
      "International Design Codes - ACI 318, AISC 360, Eurocode 2 & 3, IS 456:2000 and IS 800.",
      "Design Documentation - structural calculations, engineering drawings, design reports and technical documentation.",
    ],
    outcomes: [
      "Code-aligned design decisions",
      "Buildable details and coordinated drawings",
      "Practical strengthening or modification options",
      "Clear basis of design and calculation packages",
    ],
    software: ["STAAD.Pro", "ETABS", "SAFE", "RAM Connection", "Dlubal RFEM", "STAAD Foundation"],
  },
  {
    slug: "mechanical-engineering",
    index: "03",
    title: "Mechanical Engineering",
    short: "Plant systems, material handling and equipment engineering with execution in view.",
    intro:
      "YUKTI's Mechanical Engineering capability combines practical design and analysis experience across bulk material handling, process equipment, fluid systems and mechanical processing plant applications.",
    image: "/assets/yukti-mechanical-engineering.webp",
    imageAlt: "Engineered conveyor, piping and process equipment inside a modern industrial plant",
    capabilities: [
      "Conveyor Design & Optimization - belt and chain conveyor design, drive pulley selection, shaft sizing and bearing configuration.",
      "Conveyor & Chute Analysis - Helix-based conveyor performance analysis and DEM analysis of material transfer chutes.",
      "Mechanical Plant Structures - structural analysis of mechanical processing plant structures and steelwork using Dlubal RFEM.",
      "Dust Collection Systems - filter-bag dust collection design, duct sizing and hydraulic calculations.",
      "Process Equipment - rotary dryer design calculations and process equipment sizing.",
      "Piping System Evaluation - basic pipe stress analysis and modelling using Bentley AutoPIPE.",
      "Mechanical Design & Documentation - 3D modelling, drawings, isometrics, calculation reports and technical submittals.",
    ],
    outcomes: [
      "Improved flow, operability and maintainability",
      "Coordinated mechanical and structural interfaces",
      "Fabrication-ready documentation",
      "Focused solutions for plant performance issues",
    ],
    software: [
      "Helix",
      "Dlubal RFEM",
      "Autodesk Inventor",
      "AutoCAD",
      "AutoCAD Plant 3D",
      "Bentley AutoPIPE",
    ],
  },
  {
    slug: "audit-root-cause-analysis",
    index: "04",
    title: "Audit & Root Cause Analysis",
    short: "Find the real cause before committing capital.",
    intro:
      "When a system repeatedly trips, overheats, underperforms or fails, replacing equipment is not always the right first response. YUKTI focuses on evidence-led diagnosis to identify the underlying technical cause and define corrective action.",
    image: "/assets/yukti-audit-root-cause.webp",
    imageAlt:
      "Engineer carrying out vibration diagnostics on a large industrial motor and pump system",
    capabilities: [
      "Site inspection and data collection.",
      "Review of drawings, settings, maintenance records and operating history.",
      "Electrical measurements and system modelling where appropriate.",
      "Failure-mode and root-cause assessment.",
      "Prioritized corrective and preventive recommendations.",
      "Post-correction verification and documentation.",
    ],
    outcomes: [
      "A defensible understanding of the problem",
      "Prioritized corrective actions",
      "Avoided unnecessary replacement",
      "A clear path from finding to implementation",
    ],
  },
  {
    slug: "design-documentation",
    index: "05",
    title: "Design & Documentation",
    short: "Engineering information that is complete, coordinated and ready to use.",
    intro:
      "Good engineering is also good documentation. YUKTI helps clients bring drawings and technical records closer to the actual installation so future operation, maintenance, modification and troubleshooting become safer and faster.",
    image: "/assets/yukti-design-documentation.webp",
    imageAlt: "Engineers coordinating structural, electrical and mechanical design documentation",
    capabilities: [
      "Single-line diagrams and electrical schematics.",
      "Drawing correction and as-built updating.",
      "Detailed engineering drawings and design detailing.",
      "Technical specifications and equipment schedules.",
      "Engineering calculations and study reports.",
      "Document review for constructability, clarity and consistency.",
    ],
    outcomes: [
      "Consistent engineering deliverables",
      "Fewer interface gaps",
      "Stronger procurement and execution clarity",
      "Traceable technical decisions",
    ],
  },
  {
    slug: "project-support",
    index: "06",
    title: "Project Support",
    short: "Practical engineering continuity from study to site.",
    intro:
      "YUKTI provides practical technical continuity from scope definition and procurement through installation, commissioning and project close-out.",
    image: "/assets/yukti-project-support.webp",
    imageAlt: "Multidisciplinary engineers reviewing plans at an industrial project site",
    capabilities: [
      "Technical scope development and work-package definition.",
      "Tender and contractor technical support.",
      "Vendor / equipment technical evaluation.",
      "Site engineering and installation review.",
      "Interdisciplinary coordination and design clarification.",
      "Testing, commissioning support and close-out documentation.",
      "Execution monitoring against approved technical requirements.",
    ],
    outcomes: [
      "Faster technical decisions",
      "Better discipline coordination",
      "Reduced execution ambiguity",
      "Engineering support matched to project need",
    ],
  },
];

export const sectors = [
  ["01", "Industrial", "Industrial plants and manufacturing facilities."],
  ["02", "Energy & Process", "Oil and gas, process and utility environments."],
  ["03", "Infrastructure", "Infrastructure and public utility projects."],
  ["04", "Buildings", "Commercial buildings and facilities."],
  ["05", "Critical Systems", "Critical power and mission-critical environments."],
  ["06", "Renewables", "Renewable and energy-related installations."],
  [
    "07",
    "Existing Assets",
    "Facilities requiring audit, troubleshooting, upgrades or modernization.",
  ],
];

export const values = [
  ["Integrity", "Objective recommendations and transparent communication."],
  ["Practicality", "Solutions that can actually be implemented and maintained."],
  ["Client value", "Spend where it creates value; avoid expenditure that does not."],
  ["Continuous learning", "Stronger solutions through better methods, tools and knowledge."],
  ["Technical excellence", "Engineering decisions grounded in sound analysis."],
  ["Safety & reliability", "Protection of people, equipment and continuity of operations."],
  ["Sustainability", "Improve efficiency and lifecycle performance responsibly."],
];

export const software = [
  "STAAD.Pro",
  "ETABS",
  "SAFE",
  "RAM Connection",
  "Dlubal RFEM",
  "STAAD Foundation",
  "Helix",
  "Autodesk Inventor",
  "AutoCAD",
  "AutoCAD Plant 3D",
  "Bentley AutoPIPE",
];

export const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Sectors", "/sectors"],
  ["Contact", "/contact"],
];
