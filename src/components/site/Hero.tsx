import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 grad-hero gradient-anim"
      />
      {/* Animated glow orbs */}
      <div
        aria-hidden
        className="absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-[color:var(--royal-blue)] opacity-30 blur-[120px] drift"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-40 -z-10 h-[560px] w-[560px] rounded-full bg-[color:var(--royal-purple)] opacity-40 blur-[140px] drift"
        style={{ animationDelay: "-6s" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-full opacity-40"
        style={{ backgroundImage: "var(--grad-glow)" }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--light-blue)]" />
              MHRA · HPRA · MIA Holder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]"
            >
              Pharmaceutical Quality &amp;{" "}
              <span className="block bg-gradient-to-r from-white via-[color:var(--light-blue)] to-[#B8A6FF] bg-clip-text text-transparent">
                Regulatory Services
              </span>
              <span className="text-white/85">across the UK &amp; Ireland</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            >
              MHRA (UK) and HPRA (Ireland) authorised MIA Holder providing
              Importation, Qualified Person (QP), Responsible Person (RP),
              Responsible Person for Import (RPi), Quality Assurance, eQMS
              (Scilife), Lead Auditor and Regulatory Support services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--deep-purple)] shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Book an Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10"
              >
                <Sparkles className="h-4 w-4" /> Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 text-white/85"
            >
              {[
                { k: "20+", v: "Years experience" },
                { k: "UK · EU", v: "Market access" },
                { k: "Scilife", v: "eQMS partner" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md"
                >
                  <div className="font-display text-2xl font-semibold">{s.k}</div>
                  <div className="mt-1 text-xs text-white/65">{s.v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] p-3 shadow-elegant glass-dark">
              <img
                src={heroImg}
                alt="Modern pharmaceutical laboratory"
                width={1920}
                height={1200}
                className="rounded-[1.6rem] object-cover"
              />
              <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] bg-gradient-to-tr from-[color:var(--deep-purple)]/20 via-transparent to-[color:var(--light-blue)]/10" />
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-4 hidden max-w-[220px] rounded-2xl bg-white p-4 shadow-elegant sm:block float-slow"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--deep-purple)]">
                <ShieldCheck className="h-4 w-4" /> Batch Certified
              </div>
              <div className="mt-1 text-sm text-[color:var(--ink)]">
                Annex 16 aligned QP release across the EU &amp; UK.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-4 -right-4 hidden rounded-2xl bg-white p-4 shadow-elegant sm:block float-slow"
              style={{ animationDelay: "-3s" }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--royal-blue)]">
                Scilife eQMS
              </div>
              <div className="mt-1 text-sm text-[color:var(--ink)]">Digital quality, delivered.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}
