import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  Icon: LucideIcon;
  size?: number;
  className?: string;
  iconClassName?: string;
  strokeColor?: string;
};

// Renders a lucide icon centered inside a Geneva hexagon outline.
export function HexIcon({
  Icon,
  size = 64,
  className,
  iconClassName,
  strokeColor = "currentColor",
}: Props) {
  return (
    <span
      className={cn("relative inline-flex items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <polygon
          points="4,50 27,8 73,8 96,50 73,92 27,92"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
        />
      </svg>
      <Icon className={cn("relative", iconClassName)} size={size * 0.4} strokeWidth={1.5} />
    </span>
  );
}
