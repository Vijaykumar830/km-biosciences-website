import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

// Cache motion components per tag so we don't call motion() on every render.
const motionTagCache = new Map<
  string,
  ReturnType<typeof motion.div extends never ? never : typeof motion>
>();

function getMotionTag(tag: keyof HTMLElementTagNameMap) {
  if (!motionTagCache.has(tag)) {
    motionTagCache.set(tag, motion(tag as never) as never);
  }
  return motionTagCache.get(tag) as typeof motion.div;
}

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}) {
  const MotionTag = getMotionTag(as);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <motion.div
      className="rounded-3xl bg-white/10 p-6 backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      <div className="font-display text-5xl font-semibold text-white">
        {value}
        {suffix}
      </div>

      <div className="mt-2 text-sm text-white/70">{label}</div>
    </motion.div>
  );
}
