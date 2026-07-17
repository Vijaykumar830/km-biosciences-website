import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { NAV, SERVICES } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--ink)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-3xl opacity-30 grad-brand"
      />
      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm text-white/70">
              MHRA (UK) and HPRA (Ireland) authorised MIA Holder delivering pharmaceutical quality,
              regulatory and compliance services across the UK and EU.
            </p>
            <p className="mt-4 text-xs text-white/50">
              Services are delivered through an approved subcontractor network where applicable.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Explore
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" hash={s.slug} className="hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />

                <a
                  href="https://maps.google.com/?q=Hamilton+House,+4+Mabledon+Place,+London+WC1H+9BB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="block font-semibold text-white">UK Office</span>
                  Hamilton House, 4 Mabledon Place, London WC1H 9BB, United Kingdom
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />
                <span>
                  <span className="block font-semibold text-white">UK Office</span>
                  39 Northumberland Crescent, Feltham, London TW149SY
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />

                <a
                  href="https://maps.google.com/?q=2+Station+Road,+Ballincollig,+Co.+Cork,+P31+C799,+Ireland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="block font-semibold text-white">Ireland Office</span>2 Station
                  Road, Ballincollig, Co. Cork, P31 C799, Ireland
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />
                <a href="mailto:info@kmbios.com" className="hover:text-white">
                  info@kmbios.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />

                <div className="space-y-2">
                  <div>
                    <span className="block font-semibold text-white">Office</span>
                    <a href="tel:2033722397" className="hover:text-white transition-colors">
                      20 3372 2397
                    </a>
                  </div>

                  <div>
                    <span className="block font-semibold text-white">UK Mobile</span>
                    <a href="tel:+447880111192" className="hover:text-white transition-colors">
                      +44 7880 111192
                    </a>
                  </div>

                  <div>
                    <span className="block font-semibold text-white">Ireland Mobile</span>
                    <a href="tel:+353894394555" className="hover:text-white transition-colors">
                      +353 89 439 4555
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 shrink-0 text-[color:var(--light-blue)]" />
                <a
                  href="https://www.linkedin.com/company/km-biosciences/"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} KM Biosciences Limited. All rights reserved.</div>
          <div className="flex gap-4">
            <Link to="/compliance" className="hover:text-white">
              Compliance
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
