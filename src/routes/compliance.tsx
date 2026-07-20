import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { COMPLIANCE } from "@/lib/site";
import { img } from "@/lib/images";


export const Route = createFileRoute("/compliance")({
  component: CompliancePage,
  head: () => ({
    meta: [
      { title: "Regulatory Compliance — MHRA, HPRA, GMP, GDP, Annex 16 | KMB" },
      {
        name: "description",
        content:
          "KM Biosciences operates to MHRA, HPRA, UK & EU GMP, GDP, ICH and Annex 16/21 standards, backed by MIA authorisations in both the UK and Ireland.",
      },
      { property: "og:title", content: "Regulatory Compliance | KM Biosciences" },
      { property: "og:url", content: "/compliance" },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
});

const LICENCES = [
  {
    title: "MHRA MIA Licence",
    body: "Manufacturer/Importer Authorisation issued by the Medicines and Healthcare products Regulatory Agency (UK).",
    tag: "United Kingdom",
    pdf: "/licences/MHRA-MIA-Licence.pdf",
    logo: "/Certification/mhra.jpg",
  },
  {
    title: "HPRA MIA Licence",
    body: "Manufacturer/Importer Authorisation issued by the Health Products Regulatory Authority (Ireland).",
    tag: "Ireland",
    pdf: "/licences/HPRA-MIA-Licence.pdf",
    logo: "/Certification/hpra.png",
  },
];

function CompliancePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 -z-20 grad-hero" />
        <div className="container-x relative text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <ShieldCheck className="h-3.5 w-3.5" /> Compliance
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Regulatory compliance is the
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                foundation of everything we do
              </span>
            </h1>
            <p className="mt-5 text-white/80">
              KMBiosciences operates under MHRA and HPRA authorisations and to the highest UK and EU
              pharmaceutical standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Authorisations & Standards"
            title={
              <>
                Aligned with <span className="grad-text">the standards that matter</span>
              </>
            }
          />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {COMPLIANCE.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.03}>
                <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 text-center shadow-soft transition-transform hover:-translate-y-1">
                  <div className="flex h-16 items-center justify-center">
                    <img src={item.logo} alt={item.name} className="h-20 w-auto object-contain" />
                  </div>

                  <div className="mt-4 text-base font-semibold text-[color:var(--ink)]">
                    {item.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--surface)] py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Licences"
            title={
              <>
                Our <span className="grad-text">MIA authorisations</span>
              </>
            }
            intro="KMB holds Manufacturer/Importer Authorisations in both the UK and Ireland — the foundation of our importation and QP services."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {LICENCES.map((l, i) => (
              <Reveal key={l.title} delay={i * 0.06}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img("regulatory")}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grad-brand opacity-70" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--deep-purple)]">
                        {l.tag}
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-4">
                      <img src={l.logo} alt={l.title} className="h-14 w-auto object-contain" />

                      <h3 className="font-display text-2xl font-semibold text-[color:var(--ink)]">
                        {l.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[color:var(--ink-soft)]">{l.body}</p>
                    <a
                      href={l.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--ink)] shadow-soft transition-all hover:border-[color:var(--royal-purple)] hover:text-[color:var(--deep-purple)]"
                    >
                      <Download className="h-4 w-4" />
                      Download Preview
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="rounded-[2rem] grad-brand p-10 text-white shadow-elegant sm:p-14">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
                Planning to new product introduction into UK and EU?
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant hover:-translate-y-0.5"
              >
                Request MIA suppor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
