import logo from "@/assets/image.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="KM Biosciences Limited"
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 object-contain"
      />
      <div className="leading-tight">
        <div
          className={`text-lg font-semibold tracking-tight ${
            variant === "light" ? "text-white" : "text-[color:var(--ink)]"
          }`}
        >
          KMBiosciences
        </div>
        <div
          className={`text-[8px] font-medium uppercase tracking-[0.18em] ${
            variant === "light"
              ? "text-white/50"
              : "text-[color:var(--ink-soft)]"
          }`}
        >
          Quality · Regulatory · Compliance
        </div>
      </div>
    </div>
  );
}