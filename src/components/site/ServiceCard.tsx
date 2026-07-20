import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { img } from "@/lib/images";

export function ServiceCard({
  title,
  short,
  icon: Icon,
  image,
  highlights,
  slug,
  reverse,
  id,
}: {
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  highlights: readonly string[];
  slug: string;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative">
        <div className="absolute -inset-6 rounded-[2rem] grad-soft opacity-70 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl shadow-elegant">
          <img
            src={img(image)}
            alt={title}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--deep-purple)]/40 via-transparent to-transparent" />
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold text-[color:var(--deep-purple)] shadow-soft">
            <Icon className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>

      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--deep-purple)]">
          <Icon className="h-3.5 w-3.5" /> {slug.replace(/-/g, " ")}
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[color:var(--ink-soft)]">
          {short}
        </p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[color:var(--ink)]">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full grad-button">
                <Check className="h-3 w-3 text-white" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[color:var(--ink)] shadow-soft transition-all hover:-translate-y-0.5 hover:border-[color:var(--royal-purple)] hover:text-[color:var(--deep-purple)]"
        >
          Discuss this service <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
