import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { img } from "@/lib/images";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact KM Biosciences — Request a Call back" },
      {
        name: "description",
        content:
          "Speak with KM Biosciences about QP, RP, RPi, QA, eQMS or regulatory support. UK & Ireland offices, email and phone.",
      },
      { property: "og:title", content: "Contact | KM Biosciences" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  return (
    <>
      <section className="relative isolate overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 -z-20 grad-hero" />
        <div
          aria-hidden
          className="absolute -right-40 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[color:var(--royal-purple)] opacity-40 blur-[120px] drift"
        />
        <div className="container-x relative text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Contact
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Let's discuss your{" "}
              <span className="bg-gradient-to-r from-white to-[color:var(--light-blue)] bg-clip-text text-transparent">
                quality &amp; regulatory needs
              </span>
            </h1>
            <p className="mt-5 text-white/80">
              Whether you need QP batch release, an RPi for UK import or a full eQMS deployment, our
              team responds within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="rounded-3xl bg-white p-8 shadow-elegant sm:p-10">
              <SectionHeading
                eyebrow="Request a Call Back"
                title={<>Tell us about your project</>}
              />

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-[color:var(--border)] bg-[color:var(--accent)] p-8 text-center">
                  <div className="font-display text-2xl font-semibold text-[color:var(--deep-purple)]">
                    Thank you.
                  </div>
                  <p className="mt-2 text-[color:var(--ink-soft)]">
                    A member of the KMB team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  className="mt-8 grid gap-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      await emailjs.send(
                        "service_mbin4ut",
                        "template_ln07m0a",
                        {
                          name: formData.name,
                          company: formData.company,
                          email: formData.email,
                          phone: formData.phone,
                          service: formData.service,
                          message: formData.message,
                        },
                        "ELoi2L2CRIelCO_hR",
                      );

                      setSubmitted(true);

                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    } catch (err) {
                      alert("Failed to send message.");
                      console.error(err);
                    }
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Field
                      label="Company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)]">
                      Service of interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      <option>Importation Services</option>
                      <option>Qualified Person (QP)</option>
                      <option>Responsible Person (RP)</option>
                      <option>Responsible Person for Import (RPi)</option>
                      <option>Quality Assurance</option>
                      <option>eQMS (Scilife)</option>
                      <option>Lead Auditor Services</option>
                      <option>Regulatory Support</option>
                      <option>Other Service</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)]">
                      How can we help?
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full grad-button px-6 py-3.5 text-sm font-semibold text-white shadow-elegant transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="grid gap-6 self-start">
            <Reveal delay={0.05}>
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  src={img("office")}
                  alt="Modern corporate office"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                <OfficeCard
                  flag="🇬🇧"
                  city="London"
                  country="United Kingdom"
                  role="39 Northumberland Crescent, Feltham, London TW149SY"
                />
                <OfficeCard
                  flag="🇮🇪"
                  city="Cork"
                  country="Ireland"
                  role="2 Station Road, Ballincollig, Co. Cork, P31C799"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl bg-[color:var(--ink)] p-7 text-white">
                <div className="grid gap-4 text-sm">
                  <a
                    href="mailto:info@kmbios.com"
                    className="flex items-center gap-3 hover:text-[color:var(--light-blue)]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                      <Mail className="h-4 w-4" />
                    </span>
                    info@kmbios.com
                  </a>
                  <a
                    href="tel:+447880111192"
                    className="flex items-center gap-3 hover:text-[color:var(--light-blue)]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                      <Phone className="h-4 w-4" />
                    </span>
                    +447880111192
                  </a>
                  <a
                    href="https://www.linkedin.com/company/km-biosciences/"
                    className="flex items-center gap-3 hover:text-[color:var(--light-blue)]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    KMBiosciences on LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] shadow-soft">
                <iframe
                  title="KM Biosciences Office Location"
                  src="https://www.google.com/maps?q=Hamilton+House,+4+Mabledon+Pl,+London+WC1H+9BB,+UK&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-[color:var(--ink-soft)]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--royal-purple)]"
      />
    </div>
  );
}

function OfficeCard({
  flag,
  city,
  country,
  role,
}: {
  flag: string;
  city: string;
  country: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--accent)] text-lg">
          {flag}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-[color:var(--ink)]">
            {city}, {country}
          </div>
          <div className="text-xs text-[color:var(--ink-soft)]">{role}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs text-[color:var(--ink-soft)]">
        <MapPin className="h-3.5 w-3.5" /> By appointment only
      </div>
    </div>
  );
}
