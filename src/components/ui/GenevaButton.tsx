import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "peer" | "ghost-sunset";
type Size = "default" | "compact";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: never;
  href?: string;
};

const base =
  "inline-flex items-center justify-center font-sans text-[14px] font-medium uppercase transition-all duration-300 relative overflow-hidden group whitespace-nowrap rounded-[2px]";

const variants: Record<Variant, string> = {
  // Aubergine bg, beige text; gradient sweep + white text on hover.
  primary: "bg-aubergine text-beige hover:text-white",
  // 1px brick border, brick text; fill brick + white text on hover.
  peer: "border border-brick text-brick bg-transparent hover:bg-brick hover:text-white",
  // Sunset border + sunset text on dark; gradient sweep + white text on hover.
  "ghost-sunset": "border border-sunset text-sunset bg-transparent hover:text-white",
};

const sizes: Record<Size, string> = {
  default: "py-4 px-8",
  compact: "py-2.5 px-6 text-[13px]",
};

export const GenevaButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  ({ variant = "primary", size = "default", className, children, href, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);
    const tracking = { letterSpacing: "0.12em" } as React.CSSProperties;
    const sweep = variant === "primary" || variant === "ghost-sunset";

    const inner = (
      <>
        {sweep && (
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 bg-gradient-brand"
          />
        )}
        <span className="relative z-10">{children}</span>
      </>
    );

    if (href) {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} style={tracking}>
          {inner}
        </a>
      );
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} style={tracking} {...props}>
        {inner}
      </button>
    );
  },
);
GenevaButton.displayName = "GenevaButton";
