export type Member = {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  knowsAbout: string[];
};

export const TEAM: Member[] = [
  {
    id: "dr-parmis",
    name: "Dr. Parmis",
    role: "Lead Medical Researcher",
    credentials: "PharmD",
    bio: "Leads GLP Review's provider scoring and clinical research. Focus areas: GLP-1/GIP receptor agonists, compounded peptides, 503A/503B pharmacy practice, and USP <797> sterile compounding.",
    knowsAbout: [
      "Tirzepatide",
      "Semaglutide",
      "GLP-1 receptor agonists",
      "503A compounding pharmacies",
      "503B outsourcing facilities",
      "USP <797> sterile compounding",
    ],
  },
  {
    id: "adam-kennah",
    name: "Adam Kennah, M.D.",
    role: "Medical Reviewer",
    credentials: "M.D.",
    bio: "Board-certified physician who reviews GLP Review's clinical content for accuracy. Reviews are advisory and do not influence ranking placement.",
    knowsAbout: ["Obesity medicine", "Type 2 diabetes", "Internal medicine", "Telehealth practice"],
  },
  {
    id: "julliana-edwards",
    name: "Julliana Edwards",
    role: "Editor",
    credentials: "Editorial",
    bio: "Edits GLP Review for clarity, sourcing, and corrections. Maintains the public corrections log and oversees the editorial-independence firewall.",
    knowsAbout: ["Health journalism", "Editorial standards", "Fact-checking"],
  },
  {
    id: "ravi-shankar",
    name: "Ravi Shankar",
    role: "Fact-checker",
    credentials: "M.P.H., Epidemiology",
    bio: "Independent fact-checker for GLP Review. Verifies primary-source claims for clinical, regulatory, and pricing content; maintains source citation standards. Not employed by any provider in the ranking.",
    knowsAbout: ["Clinical-trial methodology", "Health policy", "Fact-checking"],
  },
  {
    id: "dr-aisha-patel",
    name: "Aisha Patel, M.D., M.S.",
    role: "Contributing Clinician",
    credentials: "M.D., Internal Medicine; M.S. Clinical Epidemiology",
    bio: "Practicing internist and contributing reviewer on the clinical desk. Reviews drug-page content and condition-specific guidance. Reviews are advisory and do not influence ranking placement; clinical practice is unaffiliated with any reviewed provider.",
    knowsAbout: [
      "Internal medicine",
      "Obesity medicine",
      "Diabetes care",
      "Clinical epidemiology",
    ],
  },
];

export const EDITORIAL = {
  independence:
    "Rankings are editorial and non-payable. No provider can pay for placement, a higher score, or favorable coverage. GLP Review is affiliate-supported; affiliate relationships never influence scores, which are determined solely by the published v3.0 six-pillar rubric.",
  firewall:
    "Our medical reviewer also advises clinical programs in the telehealth space. To prevent conflicts, clinical review is advisory only and is firewalled from scoring; provider scores are set by the research team against the published rubric.",
  corrections:
    "Material errors are corrected promptly and logged publicly with the date and nature of the change. Email editorial@glpreview.org to request a correction.",
} as const;

export function getMember(id: string): Member | undefined {
  return TEAM.find((m) => m.id === id);
}
