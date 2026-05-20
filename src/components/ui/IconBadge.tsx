import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  tone?: "brick" | "sunset" | "white";
  size?: number;
  className?: string;
};

export function IconBadge({ icon: Icon, tone = "brick", size = 56, className }: Props) {
  const color = tone === "brick" ? "text-brick border-brick" : "text-sunset border-sunset";
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border",
        color,
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Icon strokeWidth={1.5} size={size * 0.42} />
    </div>
  );
}
