import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow && (
        <Reveal>
          <div
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              light
                ? "border border-white/25 bg-white/10 text-white/85"
                : "bg-[color:var(--accent)] text-[color:var(--deep-purple)]"
            }`}
          >
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`mt-4 font-display text-3xl font-semibold leading-tight sm:text-5xl ${
            light ? "text-white" : "text-[color:var(--ink)]"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              light ? "text-white/75" : "text-[color:var(--ink-soft)]"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
