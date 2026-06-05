import { SectionReveal } from "@/components/ui/SectionReveal";

const metrics = [
  { value: "2016", label: "Platform Established" },
  { value: "~$2.5B", label: "Assets Across Our Operating Businesses" },
  { value: "25", label: "Professionals" },
  { value: "5", label: "Offices: Barbados · New York · Miami · Jerusalem · Zurich" },
];

export function MetricsStrip() {
  return (
    <SectionReveal as="section" ariaLabel="Geneva at a glance" className="bg-beige py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="border-y border-aubergine/15">
          <div className="grid grid-cols-1 gap-y-12 py-14 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center md:px-4">
                <div
                  className="font-display font-medium text-brick"
                  style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
                >
                  {m.value}
                </div>
                <p
                  className="mx-auto mt-4 max-w-[220px] font-sans text-[13px] uppercase text-aubergine/70"
                  style={{ letterSpacing: "0.14em", lineHeight: 1.5 }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          className="mx-auto mt-12 max-w-[720px] text-center font-display italic text-aubergine/85"
          style={{ fontSize: "18px", lineHeight: 1.6 }}
        >
          One holding company, assembling operating businesses under common ownership; anchored today
          by our life insurance carrier, with more to come.
        </p>
      </div>
    </SectionReveal>
  );
}
