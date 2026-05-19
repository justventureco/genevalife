type Props = {
  size?: number;
  className?: string;
  gradient?: boolean;
  stroke?: string;
};

// Placeholder hexagonal "G" mark. Replace with real Geneva SVG when provided.
export function HexLogo({ size = 32, className, gradient = false, stroke = "currentColor" }: Props) {
  const id = `hex-grad-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6B2024" />
            <stop offset="50%" stopColor="#D72C06" />
            <stop offset="100%" stopColor="#FE9F56" />
          </linearGradient>
        </defs>
      )}
      <polygon
        points="50,4 92,27 92,73 50,96 8,73 8,27"
        fill={gradient ? `url(#${id})` : "none"}
        stroke={gradient ? "none" : stroke}
        strokeWidth="2"
      />
      <path
        d="M64 38 C 60 32, 52 30, 46 32 C 38 35, 34 44, 36 53 C 38 62, 46 68, 55 67 C 62 66, 67 61, 67 54 L 67 50 L 54 50"
        fill="none"
        stroke={gradient ? "#E9E0DB" : stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GenevaWordmark({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "light" ? "text-beige" : "text-aubergine";
  return (
    <div className={`flex items-center gap-3 ${color}`}>
      {/* Replace with actual Geneva SVG logo — horizontal lockup */}
      <HexLogo size={32} stroke="currentColor" />
      <span
        className="font-display text-[22px] font-medium tracking-wide"
        style={{ letterSpacing: "0.08em" }}
      >
        GENEVA
      </span>
    </div>
  );
}
