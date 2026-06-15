import { SectionReveal } from "@/components/ui/SectionReveal";

const metrics = [
  { value: "2016", label: ["Platform", "Established"] },
  { value: "~$2.5B", label: ["Assets Across Our", "Operating Businesses"] },
  { value: "25", label: ["Professionals"] },
  { value: "5", label: ["Offices Around", "the World"] },
];

export function MetricsStrip() {
  return (
    <SectionReveal as="section" ariaLabel="Geneva at a glance" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center md:px-4">
              <div
                className="font-display font-medium text-brick"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  fontVariantNumeric: "lining-nums",
                  fontFeatureSettings: '"lnum" 1',
                }}
              >
                {m.value}
              </div>
              <p
                className="mx-auto mt-4 max-w-[220px] font-sans text-[13px] uppercase text-aubergine/70"
                style={{ letterSpacing: "0.14em", lineHeight: 1.5 }}
              >
                {m.label.map((line, li) => (
                  <span key={li}>
                    {line}
                    {li < m.label.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
