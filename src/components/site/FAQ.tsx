import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "Why should I choose KMB?",
    a: (
      <>
        <p>KMB is committed to:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Transparent pricing with no hidden costs.</li>
          <li>Cost-effective solutions within the agreed budget.</li>
          <li>High-quality workmanship and professional service.</li>
          <li>Clear communication throughout the project.</li>
          <li>Timely delivery and customer satisfaction.</li>
        </ul>
      </>
    ),
  },
  {
    q: "What industries do you work with?",
    a: "KMB works with clients across Pharmaceutical and Bio Pharmaceuticals, delivering tailored solutions to meet each client's specific business and project needs.",
  },
  {
    q: "How is the project cost determined?",
    a: "The cost is calculated based on the project's scope, complexity, timeline, and resource requirements. We provide a detailed quotation so you know exactly what is included.",
  },
  {
    q: "Are there any hidden costs?",
    a: "No. KMB is committed to complete transparency. The project cost is agreed upon based on the defined scope of work before the project begins. Any additional work outside the agreed scope will only proceed after discussion and written approval from the client.",
  },
  {
    q: "What if the project scope changes?",
    a: "If you request additional services or changes beyond the original scope, we will provide a revised quotation for your approval before carrying out the extra work.",
  },
  {
    q: "Do you provide cost-effective solutions?",
    a: "Yes. KMB focuses on delivering high-quality, cost-effective solutions that meet your project requirements while staying within the agreed budget wherever possible.",
  },
  {
    q: "How do you ensure transparency throughout the project?",
    a: "We maintain open communication, provide regular progress updates, and clearly explain any decisions, timelines, or budget implications. There are no unexpected charges without your prior approval.",
  },
  {
    q: "How long will my project take?",
    a: "The project timeline depends on its size and complexity. A detailed schedule with key milestones will be shared before work begins.",
  },
  {
    q: "Do you provide support after project completion?",
    a: "Yes. We offer post-project support and maintenance services as agreed in the project contract to ensure your solution continues to perform effectively.",
  },
  {
    q: "How can I get a quotation?",
    a: "Simply contact KMB with your project requirements. We'll review your needs and provide a detailed, no-obligation quotation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="grad-text">questions</span>
            </>
          }
          intro="Everything you need to know about working with KMB. Can't find the answer you're looking for? Reach out to our team."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.02}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all ${
                    isOpen
                      ? "border-[color:var(--royal-purple)] bg-white shadow-elegant"
                      : "border-[color:var(--border)] bg-white shadow-soft"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-[color:var(--ink)] sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen
                          ? "grad-button text-white"
                          : "bg-[color:var(--surface)] text-[color:var(--deep-purple)]"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
