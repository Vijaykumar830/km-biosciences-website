import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { INDUSTRIES, SUBCONTRACTORS } from "@/lib/site";
import { PARTNER_LABS, PARTNER_WAREHOUSES } from "@/lib/partners";
import { img } from "@/lib/images";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries We Support — Pharma, Biotech, MAHs, CMOs | KMB" },
      {
        name: "description",
        content:
          "KM Biosciences supports pharmaceutical manufacturers, MAHs, biotechnology, virtual pharma, wholesale distributors, start-ups and CMOs across the UK and EU.",
      },
      { property: "og:title", content: "Industries We Support | KM Biosciences" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
});

function IndustriesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 -z-20 grad-hero" />
        <div className="container-x relative text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Industries
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Supporting the organisations behind{" "}
              <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                pharmaceutical innovation
              </span>
            </h1>
            <p className="mt-5 text-white/80">
              KMB works with pharmaceutical, biotechnology, distribution and contract manufacturing
              organisations across the UK and EU.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.04}>
                <div className="group overflow-hidden rounded-3xl bg-white shadow-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={img(ind.image)}
                      alt={ind.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep-purple)]/50 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/90 text-[color:var(--deep-purple)] shadow-soft">
                      <ind.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-[color:var(--ink)]">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
                      KMB provides tailored quality, regulatory and compliance support for{" "}
                      {ind.title.toLowerCase()}.
                    </p>
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
            center
            eyebrow="Subcontractor Network"
            title={
              <>
                Coordinated delivery through <span className="grad-text">approved partners</span>
              </>
            }
            intro="KMB works with carefully selected and qualified subcontractors to support specialised services. These services are delivered through an approved subcontractor network where applicable."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {SUBCONTRACTORS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img src={img(s.image)} alt={s.title} className="h-56 w-full object-cover" />

                  <div className="p-7">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl grad-button text-white">
                        <s.icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-semibold text-[color:var(--ink)]">{s.title}</h3>
                    </div>

                    <ul className="space-y-3">
                      {s.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-sm text-[color:var(--ink-soft)]"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--royal-purple)]"></span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl bg-[color:var(--surface)] p-4 text-sm font-medium text-[color:var(--deep-purple)]">
                      ✓ Coordinated by KMB through approved partner network
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          {/* 
          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-[color:var(--border)] bg-white p-5 text-center text-sm text-[color:var(--ink-soft)]">
              KMB coordinates these services through approved subcontractors and partners. KMB does
              not own testing laboratories or warehouses.
            </p>
          </Reveal> */}
        </div>
      </section>
      <section className="relative isolate overflow-hidden py-24">
        <div className="absolute inset-0 -z-20 grad-hero" />

        <div
          aria-hidden
          className="absolute -right-40 top-10 -z-10 h-[480px] w-[480px] rounded-full bg-[color:var(--royal-purple)] opacity-30 blur-[120px] drift"
        />

        <div className="container-x">
          <SectionHeading
            center
            light
            eyebrow="Our Partnership Network"
            title={
              <>
                Our Approved{" "}
                <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                  Testing Laboratories & Warehouses
                </span>
              </>
            }
            intro="Services are delivered through our approved subcontractor network, including qualified testing laboratories, GDP-certified warehouses and temperature-controlled logistics partners."
          />
        </div>

        {(() => {
          const allPartners = [...PARTNER_LABS, ...PARTNER_WAREHOUSES];
          const middle = Math.ceil(allPartners.length / 2);

          const firstRow = allPartners.slice(0, middle);
          const secondRow = allPartners.slice(middle);

          return (
            <>
              <div className="mt-14">
                <LogoMarquee items={firstRow} speed={40} />
              </div>

              <div className="mt-8">
                <LogoMarquee items={secondRow} speed={50} />
              </div>
            </>
          );
        })()}
      </section>
      <section className="py-24">
        <div className="container-x">
          <div className="rounded-[2rem] grad-brand p-10 text-white shadow-elegant sm:p-14">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
                Let's map the right service model to your product portfolio.
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant hover:-translate-y-0.5"
              >
                Talk to KMB <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
