import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import genevaGMark from "@/assets/geneva-g-mark.png";

const tiles = [
  {
    roman: "I",
    title: "Onboarding & New Business",
    body: "Transparent at every step. Calibrated to the families and advisors we serve.",
  },
  {
    roman: "II",
    title: "Service & Administration",
    body: "Modernized systems, dedicated points of contact, calibrated service standards.",
  },
  {
    roman: "III",
    title: "Reporting & Statements",
    body: "Clearer, more frequent, more useful.",
  },
  {
    roman: "IV",
    title: "Compliance & Regulatory Rigor",
    body: "Institutional standards as the baseline, not the ceiling.",
  },
  {
    roman: "V",
    title: "Platform Expansion",
    body: "An expanded set of institutional-quality capabilities, anchored by our life insurance carrier.",
  },
  {
    roman: "VI",
    title: "Leadership Access",
    body: "Direct lines, clear escalation, no surprises.",
  },
];

export function OurPlatform() {
  return (
    <SectionReveal
      as="section"
      id="platform"
      ariaLabel="Our platform"
      className="relative isolate overflow-hidden bg-aubergine py-32 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 opacity-[0.07]">
        <img src={genevaGMark} alt="" className="h-auto w-[520px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          <EyebrowLabel className="text-sunset">The Platform</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            A platform of operating businesses.
          </h2>
          <p
            className="mx-auto mt-8 max-w-[760px] font-display italic text-sunset"
            style={{ fontSize: "24px", lineHeight: 1.4 }}
          >
            Geneva Life Holdings is a holding company. We bring operating businesses under common
            ownership and hold each to a single standard.
          </p>
        </div>

        <div aria-hidden style={{ height: 80 }} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {tiles.map((t) => (
            <div
              key={t.roman}
              className="group border border-beige/15 bg-transparent p-10 transition-all duration-500 hover:-translate-y-1 hover:border-sunset"
            >
              <div className="mb-6 font-display font-medium text-brick" style={{ fontSize: "22px" }}>
                {t.roman}
              </div>
              <h3 className="font-display text-[24px] font-medium text-beige">{t.title}</h3>
              <p className="mt-4 text-[15px] text-beige/75" style={{ lineHeight: 1.6 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
