import { Shield, HandHeart, Scale } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { HexIcon } from "@/components/ui/HexIcon";

const pillars = [
  {
    icon: Shield,
    title: <>Institutional<br />Discipline</>,
    body: "We operate with the governance, oversight, and operating rigor expected by the families and advisors we serve. Institutional standards are our baseline, not our ceiling.",
  },
  {
    icon: HandHeart,
    title: <>White-Glove<br />Partnership</>,
    body: "Proactive service, dedicated coverage on our key relationships, faster turnaround on what matters most, and a leadership team that is reachable, responsive, and accountable.",
  },
  {
    icon: Scale,
    title: <>Aligned<br />Interests</>,
    body: "At every layer of the structure, our interests are aligned with the interests of the people we serve. No mixed incentives. No competing priorities. One platform. One standard.",
  },
];

export function Approach() {
  return (
    <SectionReveal
      as="section"
      id="approach"
      ariaLabel="Our approach"
      className="bg-beige py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto text-center">
          <EyebrowLabel className="text-brick">Our Approach</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            What <span className="italic text-brick">alignment</span> looks like in practice.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group border border-aubergine/10 p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-brick"
            >
              <HexIcon Icon={p.icon} size={56} className="mx-auto text-brick" iconClassName="text-brick" />
              <h3 className="mt-6 font-display text-[24px] font-medium text-aubergine md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.65] text-aubergine/75" style={{ textWrap: "pretty" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
