import {
  BadgeCheck, Beaker, BookOpenCheck, Boxes, Building2, ClipboardCheck,
  FileCheck2, FlaskConical, Gauge, GitBranch, Handshake, Landmark, LayoutDashboard,
  LibraryBig, LifeBuoy, Microscope, Package, Pill, Plane, Recycle, ScrollText,
  ShieldCheck, Snowflake, Sparkles, Stethoscope, Truck, Users,
  Warehouse, Workflow,
} from "lucide-react";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Compliance", to: "/compliance" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "importation",
    title: "Importation Services",
    short: "Compliant importation into the UK and EU under our MIA authorisations.",
    icon: Plane,
    image: "rpi-import",
    highlights: [
      "MIA-backed import authorisation",
      "UK & EU market access",
      "Batch documentation control",
      "FMD verification",
      "MHRA & HPRA aligned processes",
      "Coordinated logistics oversight",
    ],
  },
  {
    slug: "qualified-person",
    title: "Qualified Person (QP)",
    short: "Contract QP oversight, batch certification and release across the UK and EU.",
    icon: BadgeCheck,
    image: "qp-batch",
    highlights: [
      "Contract Qualified Person",
      "Batch Certification & Release",
      "Product Quality Review",
      "Deviation & Change Control Review",
      "QP Declaration (Annex 16)",
      "Quality Oversight & GMP Compliance",
      "Inspection Support",
    ],
  },
  {
    slug: "responsible-person",
    title: "Responsible Person (RP)",
    short: "Named RP services with full GDP oversight for wholesale distribution.",
    icon: ShieldCheck,
    image: "rp-warehouse",
    highlights: [
      "Named Responsible Person",
      "Supplier & Customer Qualification",
      "GDP Compliance Programme",
      "Recall Management",
      "Self-Inspection & CAPA",
      "MHRA & HPRA Inspection Support",
    ],
  },
  {
    slug: "rpi",
    title: "Responsible Person for Import (RPi)",
    short: "Dedicated RPi services supporting compliant importation into the UK.",
    icon: Package,
    image: "rpi-import",
    highlights: [
      "Contract RPi",
      "Import Compliance Oversight",
      "FMD Verification",
      "Batch Verification",
      "GDP Compliance",
      "MHRA Inspection Support",
      "RPi Audits",
    ],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    short: "Contract QA leadership across quality systems, risk and documentation.",
    icon: ClipboardCheck,
    image: "qa-inspection",
    highlights: [
      "Contract QA Oversight",
      "SOP Development & Training",
      "CAPA & Risk Management",
      "Batch Documentation Review",
      "Product Quality Review",
      "KPI Trending & Metrics",
    ],
  },
  {
    slug: "eqms",
    title: "Quality Management System",
    short: "Digital-first eQMS implementation with Scilife and full QMS design.",
    icon: LayoutDashboard,
    image: "eqms",
    highlights: [
      "eQMS Implementation (Scilife)",
      "QMS Design & Deployment",
      "SOP Writing & Document Control",
      "Validation Documentation",
      "Internal Audit Programme",
      "Training Matrix",
      "CAPA, Change Control & Risk Management",
    ],
  },
  {
    slug: "lead-auditor",
    title: "Lead Auditor Services",
    short: "Independent GMP, GDP and supplier audits by experienced Lead Auditors.",
    icon: BookOpenCheck,
    image: "audit",
    highlights: [
      "GMP Audits",
      "GDP Audits",
      "Supplier Audits",
      "Internal Audits",
      "Compliance Assessments",
      "Inspection Readiness",
    ],
  },
  {
    slug: "regulatory",
    title: "Regulatory Support",
    short: "End-to-end regulatory strategy, documentation and lifecycle management.",
    icon: ScrollText,
    image: "regulatory",
    highlights: [
      "MIA Support",
      "Regulatory Strategy",
      "Inspection Readiness",
      "Technical & Quality Agreements",
      "MHRA & HPRA Support",
      "Lifecycle Management",
      "Documentation Review",
    ],
  },
] as const;

export const INDUSTRIES = [
  { title: "Pharmaceutical Manufacturers", icon: Pill, image: "manufacturing" },
  { title: "Marketing Authorisation Holders", icon: Landmark, image: "regulatory" },
  { title: "Biotechnology Companies", icon: Microscope, image: "testing-lab" },
  { title: "Virtual Pharmaceutical Companies", icon: LayoutDashboard, image: "eqms" },
  { title: "Wholesale Distributors", icon: Warehouse, image: "rp-warehouse" },
  { title: "Start-up Pharmaceutical Companies", icon: Sparkles, image: "hero-lab" },
  { title: "Contract Manufacturing Organisations", icon: FlaskConical, image: "manufacturing" },
] as const;

export const WHY = [
  { title: "MHRA & HPRA Authorised MIA Holder", icon: ShieldCheck },
  { title: "20+ Years Industry Experience", icon: Handshake },
  { title: "Dedicated Pharmaceutical Service Provider", icon: Stethoscope },
  { title: "Flexible Service Model", icon: Workflow },
  { title: "Experienced Professionals", icon: Users },
  { title: "GMP & GDP Expertise", icon: BadgeCheck },
  { title: "Client-focused Solutions", icon: LifeBuoy },
  { title: "Trusted Regulatory Partner", icon: Landmark },
] as const;

export const PROCESS = [
  { title: "Initial Discussion", desc: "We listen to your regulatory, quality and market access objectives." },
  { title: "Requirement Assessment", desc: "Gap analysis against MHRA, HPRA, GMP and GDP expectations." },
  { title: "Compliance Planning", desc: "A tailored roadmap covering QP, RP, RPi, QA, eQMS and regulatory activities." },
  { title: "Implementation", desc: "Named professionals deliver services with full documentation and oversight." },
  { title: "Ongoing Quality Support", desc: "Continuous oversight, inspection readiness and lifecycle management." },
  { title: "Continuous Improvement", desc: "KPI trending, CAPA and process refinement to keep you audit-ready." },
] as const;

export const SUBCONTRACTORS = [
  { title: "Approved Contract Warehouses", icon: Warehouse, image: "rp-warehouse" },
  { title: "Approved Testing Laboratories", icon: Beaker, image: "testing-lab" },
  { title: "Chemical Testing", icon: FlaskConical, image: "testing-lab" },
  { title: "Physical Testing", icon: Gauge, image: "testing-lab" },
  { title: "Microbiological Testing", icon: Microscope, image: "testing-lab" },
  { title: "Active Microbiological Testing (AMT)", icon: Recycle, image: "testing-lab" },
  { title: "Analytical Method Validation (AMV)", icon: LibraryBig, image: "eqms" },
  { title: "Temperature Controlled Logistics", icon: Snowflake, image: "coldchain" },
  { title: "Qualified Transportation Providers", icon: Truck, image: "coldchain" },
] as const;

export const COMPLIANCE = [
  "MHRA", "HPRA", "UK GMP", "EU GMP", "GDP",
  "ICH Guidelines", "Annex 16", "Annex 21",
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years of pharmaceutical expertise" },
  { value: 2, suffix: "", label: "Regulatory authorities (MHRA & HPRA)" },
  { value: 100, suffix: "%", label: "Client-focused engagement" },
  { value: 8, suffix: "", label: "Core service pillars" },
] as const;

export const ICONS = { Boxes, Building2, FileCheck2, GitBranch };
