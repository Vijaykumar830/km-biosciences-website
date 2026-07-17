import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { FAQ } from "@/components/site/FAQ";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stat } from "@/components/site/Reveal";
import { SERVICES, WHY, PROCESS, INDUSTRIES, COMPLIANCE, STATS } from "@/lib/site";
import { img } from "@/lib/images";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "KMBiosciences — Pharmaceutical Quality & Regulatory Services (UK & Ireland)" },
      {
        property: "og:title",
        content: "KM Biosciences — Pharmaceutical Quality & Regulatory Services (UK & Ireland)",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust bar */}
      <section className="border-b border-[color:var(--border)] bg-white py-10">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--ink-soft)]">
              Authorisations · Frameworks · Standards
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {COMPLIANCE.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="rounded-xl border border-[color:var(--border)] bg-white px-3 py-3 text-center text-sm font-semibold text-[color:var(--ink)] shadow-soft transition-transform hover:-translate-y-0.5">
                  {c}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="About KMB"
                title={
                  <>
                    A trusted pharmaceutical <span className="grad-text">service partner</span> for
                    the UK &amp; EU
                  </>
                }
                intro="KM Biosciences Limited is a pharmaceutical service provider supporting pharmaceutical and biotechnology companies across the United Kingdom and European Union. As an MHRA (UK) and HPRA (Ireland) authorised MIA Holder, we deliver quality, regulatory and compliance services with the discipline the industry demands."
              />
              <Reveal delay={0.1}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    "MHRA & HPRA authorised MIA Holder",
                    "UK & Ireland offices",
                    "20+ years of pharmaceutical expertise",
                    "Flexible, client-focused engagement",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--ink)]">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full grad-button">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {i}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 rounded-full grad-button px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5"
                  >
                    About KM Biosciences
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-3 text-sm font-semibold text-[color:var(--ink)] transition-all hover:border-[color:var(--royal-purple)] hover:text-[color:var(--deep-purple)]"
                  >
                    Our services <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] grad-soft blur-2xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  <img
                    src={img("manufacturing")}
                    alt="Pharmaceutical manufacturing"
                    loading="lazy"
                    className="col-span-2 h-64 w-full rounded-2xl object-cover shadow-elegant"
                  />
                  <img
                    src={img("testing-lab")}
                    alt="Analytical laboratory"
                    loading="lazy"
                    className="h-48 w-full rounded-2xl object-cover shadow-card"
                  />
                  <img
                    src={img("office")}
                    alt="Modern corporate office"
                    loading="lazy"
                    className="h-48 w-full rounded-2xl object-cover shadow-card"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-[color:var(--surface)] py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Our Services"
            title={
              <>
                Regulatory rigour, delivered as a{" "}
                <span className="grad-text">complete service model</span>
              </>
            }
            intro="A full suite of pharmaceutical services — from Qualified Person and Responsible Person to eQMS, Lead Auditor and Regulatory Support — delivered by named professionals with decades of MHRA and HPRA experience."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden">
                    <img
                      src={img(s.image)}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-[color:var(--deep-purple)] shadow-soft">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[color:var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {s.short}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[color:var(--deep-purple)] group-hover:text-[color:var(--royal-purple)]">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose KMB — dark image section with stats */}
      <section className="relative isolate overflow-hidden py-28">
        <div className="absolute inset-0 -z-20">
          <img src={img("manufacturing")} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 grad-hero opacity-90" />
        </div>

        <div className="container-x relative text-white">
          <SectionHeading
            light
            eyebrow="Why choose KMB"
            title={
              <>
                Built for pharmaceutical companies that demand{" "}
                <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                  compliance without compromise
                </span>
              </>
            }
            intro="From start-ups seeking UK & EU market access to established MAHs and CMOs, KMB delivers regulatory clarity, quality oversight and inspection readiness at every stage."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.04}>
                <div className="glass-dark flex h-full items-start gap-4 rounded-2xl p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[color:var(--light-blue)]">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white">{w.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Our Process"
            title={
              <>
                A structured path to{" "}
                <span className="grad-text">compliance &amp; market access</span>
              </>
            }
            intro="A proven engagement model built around your regulatory needs — from first discussion through implementation, ongoing quality support and continuous improvement."
          />

          <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <li className="relative flex h-full flex-col rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft">
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl grad-button font-display text-lg font-semibold text-white shadow-soft">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[color:var(--ink)]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries preview */}
      <section className="relative overflow-hidden bg-[color:var(--surface)] py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries we support"
            title={
              <>
                Trusted by the organisations that shape{" "}
                <span className="grad-text">pharmaceutical innovation</span>
              </>
            }
            intro="KMB partners with pharmaceutical manufacturers, marketing authorisation holders, biotechnology companies, virtual pharma, wholesalers, start-ups and CMOs to unlock UK & EU market access."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.04}>
                <div className="group relative overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={img(ind.image)}
                    alt={ind.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center gap-2 text-white">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md">
                        <ind.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="font-semibold">{ind.title}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--ink)] shadow-soft transition-all hover:border-[color:var(--royal-purple)]"
            >
              View all industries <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] grad-hero p-10 shadow-elegant sm:p-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[color:var(--royal-purple)] opacity-40 blur-3xl drift"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-16 h-96 w-96 rounded-full bg-[color:var(--royal-blue)] opacity-40 blur-3xl drift"
              style={{ animationDelay: "-5s" }}
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                  Ready when you are
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl">
                  Bring KMB into your regulatory &amp; quality strategy.
                </h2>
                <p className="mt-4 max-w-xl text-white/80">
                  From batch certification to eQMS deployment, our team is ready to support your
                  next inspection, product launch or market expansion across the UK and EU.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant transition-transform hover:-translate-y-0.5"
                >
                  Book an Appointment <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
