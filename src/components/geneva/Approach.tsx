import { Shield, HandHeart, Scale } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { IconBadge } from "@/components/ui/IconBadge";
import genevaGMark from "@/assets/geneva-g-mark.png";


const pillars = [
  {
    icon: Shield,
    title: "Institutional Discipline",
    body: "We operate with the governance, oversight, and operating rigor expected by the families and advisors we serve. Institutional standards are our baseline, not our ceiling.",
  },
  {
    icon: HandHeart,
    title: "White-Glove Partnership",
    body: "Proactive service, dedicated coverage on our key relationships, faster turnaround on what matters most, and a leadership team that is reachable, responsive, and accountable.",
  },
  {
    icon: Scale,
    title: "Aligned\nInterests",
    body: "At every layer of the structure, our interests are aligned with the interests of the people we serve. No mixed incentives. No competing priorities. One institution. One standard.",
  },
];

export function Approach() {
  return (
    <SectionReveal
      as="section"
      id="approach"
      ariaLabel="Our approach"
      className="relative isolate overflow-hidden bg-aubergine py-20 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 opacity-[0.08]">
        <img src={genevaGMark} alt="" className="h-auto w-[480px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[960px] text-center">
          <EyebrowLabel className="text-sunset">Our Approach</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            What alignment looks like in practice.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group border border-beige/15 p-10 transition-all duration-500 hover:-translate-y-1 hover:border-sunset"
            >
              <IconBadge icon={p.icon} tone="sunset" />
              <h3 className="mt-8 whitespace-pre-line font-display text-[24px] font-medium text-beige md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-beige/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
