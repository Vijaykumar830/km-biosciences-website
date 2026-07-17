import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Compass,
  Handshake,
  Sparkles,
  Target,
  BadgeCheck,
  ShieldCheck,
  Factory,
  Truck,
  Briefcase,
  Wallet,
  Zap,
  Settings,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { img } from "@/lib/images";
import { CLIENT_LOGOS } from "@/lib/clients";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About KMBiosciences — MHRA & HPRA Authorised MIA Holder" },
      {
        name: "description",
        content:
          "Learn about KMBiosciences Limited — a pharmaceutical service provider with 20+ years of expertise, MHRA & HPRA authorised, delivering quality and regulatory services across the UK and EU.",
      },
      { property: "og:title", content: "About KMBiosciences Limited" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const WHY_CHOOSE_KMB = [
  {
    icon: BadgeCheck,
    title: "Experienced Pharmaceutical Professionals",
    body: "Our team brings extensive pharmaceutical industry experience across quality, compliance, regulatory affairs and manufacturing operations.",
  },
  {
    icon: ShieldCheck,
    title: "MHRA & HPRA Expertise",
    body: "Supporting pharmaceutical companies with UK MHRA and Ireland HPRA regulatory requirements through authorised MIA services.",
  },
  {
    icon: Factory,
    title: "GMP Specialists",
    body: "Comprehensive Good Manufacturing Practice (GMP) support to maintain product quality, compliance and inspection readiness.",
  },
  {
    icon: Truck,
    title: "GDP Specialists",
    body: "Expert Good Distribution Practice (GDP) guidance for compliant pharmaceutical storage, transportation and supply chain management.",
  },
  {
    icon: Briefcase,
    title: "Flexible Contract Support",
    body: "Short-term, long-term and project-based pharmaceutical quality and regulatory support tailored to your operational needs.",
  },
  {
    icon: Wallet,
    title: "Cost-effective Solutions",
    body: "High-quality pharmaceutical services delivered efficiently without the overhead of maintaining large in-house specialist teams.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    body: "Quick mobilisation of experienced professionals to support urgent regulatory, quality and compliance requirements.",
  },
  {
    icon: Settings,
    title: "Tailored Quality Services",
    body: "Every engagement is customised to your products, processes, regulatory obligations and business objectives.",
  },
];

const VALUES = [
  {
    icon: Target,
    title: "Mission",
    body: "To empower pharmaceutical and biotechnology companies with trusted quality, regulatory and compliance services that enable safe access to UK and EU markets.",
  },
  {
    icon: Compass,
    title: "Vision",
    body: "To be the pharmaceutical service provider of choice across the UK and EU — recognised for integrity, expertise and long-term client partnerships.",
  },
  {
    icon: Handshake,
    title: "Core Values",
    body: "Compliance-first thinking. Client-focused delivery. Scientific rigour. Transparency at every step of the engagement.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KMB"
        title={
          <>
            Two decades of pharmaceutical{" "}
            <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
              quality &amp; regulatory expertise
            </span>
          </>
        }
        intro="KM Biosciences Limited is a specialist pharmaceutical service provider supporting pharmaceutical and biotechnology companies across the United Kingdom and European Union."
        image="office"
      />

      {/* Company overview */}
      <section className="py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] grad-soft blur-2xl" />
              <img
                src={img("manufacturing")}
                alt="Pharmaceutical facility"
                loading="lazy"
                className="relative h-full w-full rounded-3xl object-cover shadow-elegant"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Company Overview"
              title={<>A pharmaceutical service partner</>}
              intro="KMB is an MHRA (UK) and HPRA (Ireland) authorised Manufacturer/Importer Authorisation (MIA) Holder. We provide Importation, Qualified Person, Responsible Person, Responsible Person for Import, Quality Assurance, eQMS (Scilife), Lead Auditor and Regulatory Support services under a single, coordinated model."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[color:var(--ink-soft)]">
                Where specialised capabilities are required — such as warehousing, transportation
                and laboratory testing — KMB coordinates delivery through an approved subcontractor
                network of qualified partners.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-[color:var(--surface)] py-24">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What we stand for"
            title={
              <>
                The principles guiding <span className="grad-text">every engagement</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-card">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl grad-button text-white shadow-soft">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-[color:var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[color:var(--ink-soft)]">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose KMB */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Why Choose KMB"
            title={
              <>
                Your trusted <span className="grad-text">pharmaceutical partner</span>
              </>
            }
            intro="We combine industry expertise, regulatory knowledge and flexible service delivery to help pharmaceutical and biotechnology companies maintain compliance and achieve operational excellence."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_KMB.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl grad-button text-white">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-[color:var(--ink)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* Our Valued Clients */}
      <section className="py-24 bg-[color:var(--surface)]">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Trusted by Industry"
            title={
              <>
                Our <span className="grad-text">Valued Clients</span>
              </>
            }
            intro="We are proud to support pharmaceutical, biotechnology and healthcare organisations across the UK, Ireland and Europe with quality, regulatory and compliance services."
          />

          <div className="mt-14">
            <LogoMarquee items={CLIENT_LOGOS} speed={40} />
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Where we operate"
            title={
              <>
                Offices in the UK and Ireland,{" "}
                <span className="grad-text">serving the whole of Europe</span>
              </>
            }
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                flag: "🇬🇧",
                city: "London",
                country: "United Kingdom",
                role: "39 Northumberland Crescent, Feltham, London TW149SY",
                img: "office",
              },
              {
                flag: "🇮🇪",
                city: "Cork",
                country: "Ireland",
                role: "2 Station Road, Ballincollig, Co. Cork, P31C799",
                img: "office",
              },
            ].map((o, i) => (
              <Reveal key={o.country} delay={i * 0.08}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-card">
                  <img
                    src={img(o.img)}
                    alt={`${o.city} office`}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-7">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--accent)] text-lg">
                        {o.flag}
                      </div>
                      <div>
                        <div className="font-display text-xl font-semibold text-[color:var(--ink)]">
                          {o.city}, {o.country}
                        </div>
                        <div className="text-sm text-[color:var(--ink-soft)]">{o.role}</div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--ink-soft)]">
                      <Building2 className="h-4 w-4" /> MHRA & HPRA Authorised MIA Holder
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <div className="rounded-[2rem] grad-brand p-10 text-white shadow-elegant sm:p-14">
            <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                  <Sparkles className="h-3.5 w-3.5" /> Partner with KMB
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                  Ready to strengthen your quality and regulatory function?
                </h3>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24">
      <div className="absolute inset-0 -z-20 grad-hero" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -right-32 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[color:var(--royal-purple)] opacity-40 blur-[120px] drift"
      />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            {eyebrow}
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-white/80">{intro}</p>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] p-2 glass-dark shadow-elegant">
            <img
              src={img(image)}
              alt=""
              loading="lazy"
              className="h-[360px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
