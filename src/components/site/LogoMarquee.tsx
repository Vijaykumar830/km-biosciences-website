export type LogoItem = {
  name: string;
  src: string;
};

export function LogoMarquee({ items, speed = 40 }: { items: LogoItem[]; speed?: number }) {
  const loop = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex w-max gap-10 py-4"
        style={{
          animation: `logo-marquee ${speed}s linear infinite`,
        }}
      >
        {loop.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex h-24 w-48 items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.name}
              loading="lazy"
              className="max-h-21 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logo-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
