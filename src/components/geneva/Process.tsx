import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Reach out through the form below or directly to our team.",
  },
  {
    n: "02",
    title: "Consult",
    body: "A member of leadership will meet with you to understand your situation, objectives, and the role Geneva might play.",
  },
  {
    n: "03",
    title: "Structure",
    body: "If there is fit, we move to structuring; with clear timelines, transparent terms, and direct access to the team responsible for delivery.",
  },
];

export function Process() {
  return (
    <SectionReveal
      as="section"
      id="engagement"
      ariaLabel="Our engagement"
      className="bg-aubergine py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <EyebrowLabel className="text-sunset">Engagement</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            A simple, <span className="italic text-sunset">deliberate</span> process.
          </h2>
        </div>

        <div className="mt-16">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={
                "grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-12 md:gap-8 " +
                (i !== 0 ? "border-t border-beige/15" : "")
              }
            >
              <div className="md:col-span-2">
                <div
                  className="font-display font-medium text-gradient-brand pb-2"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 6.25rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                >
                  {s.n}
                </div>
              </div>
              <div className="md:col-span-10">
                <h3 className="font-display text-[28px] font-medium text-beige md:text-[36px]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65] text-beige/80 md:text-[18px]">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
