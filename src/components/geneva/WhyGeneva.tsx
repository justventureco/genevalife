import { BadgeCheck, Landmark, Users } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { IconBadge } from "@/components/ui/IconBadge";

const proofs = [
  {
    icon: BadgeCheck,
    title: "Regulated &\nEstablished",
    body: "A long-standing, regulated insurance platform operating in a recognized international financial center.",
  },
  {
    icon: Landmark,
    title: "Institutionally\nCapitalized",
    body: "Backed by ownership and capital structures designed to support our commitments over the long term.",
  },
  {
    icon: Users,
    title: "Directly Accessible\nLeadership",
    body: "A leadership team that is reachable, responsive, and accountable – by design, not by exception.",
  },
];

export function WhyGeneva() {
  return (
    <SectionReveal
      as="section"
      id="why-geneva"
      ariaLabel="Why Geneva"
      className="bg-wine py-20 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[960px] text-center">
          <EyebrowLabel className="text-sunset">Why Geneva</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            A platform you can stand behind.
          </h2>
          <p className="mt-8 text-[17px] leading-relaxed text-beige/85 md:text-[18px]">
            Geneva Life Holdings combines the focus of a specialist with the discipline of an
            institution. We are domiciled and regulated in a recognized international financial
            center, capitalized to support our long-term commitments, and led by an executive team
            that is directly accessible to the partners and families we serve.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center">
              <IconBadge icon={p.icon} tone="sunset" />
              <h3 className="mt-6 whitespace-pre-line font-display text-[22px] font-medium text-beige md:text-[24px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[320px] text-[15px] leading-relaxed text-beige/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
