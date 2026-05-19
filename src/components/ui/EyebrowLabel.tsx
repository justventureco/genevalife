import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

export function EyebrowLabel({ children, className, as: Tag = "p" }: Props) {
  return (
    <Tag
      className={cn(
        "font-sans text-[13px] font-medium uppercase",
        className,
      )}
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
    </Tag>
  );
}
