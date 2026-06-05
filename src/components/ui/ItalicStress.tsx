type Tone = "brick" | "sunset";

type Props = {
  before?: string;
  em: string;
  after?: string;
  tone?: Tone;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/**
 * Renders a headline with a single word set in Fraunces italic and a color shift
 * (brick on light backgrounds, sunset on dark).
 */
export function ItalicStress({
  before = "",
  em,
  after = "",
  tone = "brick",
  className,
  style,
  as: Tag = "h2",
}: Props) {
  const emColor = tone === "brick" ? "text-brick" : "text-sunset";
  return (
    <Tag className={className} style={style}>
      {before}
      <span className={`italic ${emColor}`} style={{ fontStyle: "italic" }}>
        {em}
      </span>
      {after}
    </Tag>
  );
}
