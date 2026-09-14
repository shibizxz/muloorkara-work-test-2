export const contact = {
  phone: "+91 9567094491",
  phoneHref: "tel:+919567094491",
  email: "shibilmulakkal@gmail.com",
  emailHref: "mailto:shibilmulakkal@gmail.com",
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  intro: string;
  image?: string;
  imageAlt?: string;
  capabilities: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "electrical-engineering",
    index: "01",
    title: "Electrical Engineering",
    short: "Studies, audits and design support for safe, reliable power systems.",
    intro:
      "We evaluate electrical systems from source to load, combining analytical studies, field observations and practical design judgement to improve safety, selectivity, reliability and future readiness.",
    image: "/assets/yukti-electrical-engineering.webp",
    imageAlt: "High voltage electrical substation engineered for industrial power distribution",
    capabilities: [
      "Load flow and system performance studies",
      "Short circuit and fault level analysis",
      "Protection coordination and selectivity",
      "Motor starting and equipment evaluation",
      "Power quality and reliability review",
      "Backup power and critical supply assessment",
    ],
    outcomes: [
      "Actionable engineering recommendations",
      "Clear study reports and settings guidance",
      "Reduced operational and safety risk",
      "Right-sized upgrades aligned with actual need",
    ],
  },
  {
    slug: "civil-structural-engineering",
    index: "02",
    title: "Civil & Structural Engineering",
    short: "Analysis, design and assessment for structures that must perform with confidence.",
    intro:
      "From industrial structures and buildings to bridges and specialized assets, our work connects structural analysis, code compliance, constructability and clear documentation.",
    image: "/assets/yukti-civil-structural-engineering.webp",
    imageAlt: "Complex bridge and structural engineering works in a coastal industrial setting",
    capabilities: [
      "Steel and reinforced concrete analysis and design",
      "Industrial and infrastructure structures",
      "Buildings and high-rise structural systems",
      "Bridges and specialized structures",
      "Existing structure assessment and design review",
      "Foundation design and connection design",
    ],
    outcomes: [
      "Code-aligned design decisions",
      "Buildable details and coordinated drawings",
      "Practical strengthening or modification options",
      "Clear basis of design and calculation packages",
    ],
  },
  {
    slug: "mechanical-engineering",
    index: "03",
    title: "Mechanical Engineering",
    short: "Plant systems, material handling and equipment engineering with execution in view.",
    intro:
      "We support industrial systems from concept and analysis through detailed documentation, with particular strength in material handling, process equipment, piping and plant integration.",
    image: "/assets/yukti-mechanical-engineering.webp",
    imageAlt: "Engineered conveyor, piping and process equipment inside a modern industrial plant",
    capabilities: [
      "Conveyor design and optimization",
      "Chute analysis using Helix and DEM methods",
      "Plant structure coordination and analysis",
      "Dust collection and process equipment support",
      "Rotary dryer and equipment engineering",
      "Piping evaluation, 3D models and isometrics",
    ],
    outcomes: [
      "Improved flow, operability and maintainability",
      "Coordinated mechanical and structural interfaces",
      "Fabrication-ready documentation",
      "Focused solutions for plant performance issues",
    ],
  },
  {
    slug: "audit-root-cause-analysis",
    index: "04",
    title: "Audit & Root Cause Analysis",
    short: "Find the real cause before committing capital.",
    intro:
      "We investigate recurring failures, performance gaps and asset concerns through evidence-led audits that connect field condition, operating history and engineering analysis.",
    image: "/assets/yukti-audit-root-cause.webp",
    imageAlt:
      "Engineer carrying out vibration diagnostics on a large industrial motor and pump system",
    capabilities: [
      "Technical condition audits",
      "Failure and incident review",
      "Root cause analysis",
      "Risk and reliability assessment",
      "Corrective action prioritization",
      "Independent technical opinion",
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
      "We translate engineering decisions into the calculations, drawings, models, specifications and reports needed for procurement, fabrication, construction and safe operation.",
    image: "/assets/yukti-design-documentation.webp",
    imageAlt: "Engineers coordinating structural, electrical and mechanical design documentation",
    capabilities: [
      "Basis of design and calculations",
      "Concept and detailed design",
      "Technical specifications",
      "2D drawings and 3D models",
      "Equipment layouts and isometrics",
      "Review comments and design reports",
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
      "We bridge the space between analysis, design, procurement and execution so that technical intent survives real project constraints.",
    image: "/assets/yukti-project-support.webp",
    imageAlt: "Multidisciplinary engineers reviewing plans at an industrial project site",
    capabilities: [
      "Engineering coordination",
      "Vendor document review",
      "Tender and bid technical support",
      "Construction query resolution",
      "Site and commissioning support",
      "Modification and brownfield planning",
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
  ["01", "Industrial", "Manufacturing, material handling and plant systems."],
  ["02", "Energy & Process", "Power, utilities and process-intensive operations."],
  ["03", "Infrastructure", "Transport, public works and essential systems."],
  ["04", "Buildings", "Commercial, institutional and high-rise assets."],
  ["05", "Critical Systems", "Facilities where reliability and continuity are central."],
  ["06", "Renewables", "Supporting systems for responsible energy transition."],
  ["07", "Existing Assets", "Assessment, troubleshooting, upgrades and life extension."],
];

export const values = [
  ["Integrity", "Independent thinking and transparent advice."],
  ["Technical excellence", "Sound analysis, disciplined review and clear engineering basis."],
  ["Practicality", "Solutions shaped by actual constraints and real operating needs."],
  ["Safety & reliability", "Protection of people, assets and continuity of operation."],
  ["Client value", "Focused effort and proportionate investment."],
  ["Sustainability", "Longer asset life, reduced waste and responsible decisions."],
  ["Continuous learning", "Curiosity, improvement and current engineering practice."],
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
  "Plant 3D",
  "AutoPIPE",
];

export const nav = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Sectors", "/sectors"],
  ["Contact", "/contact"],
];
