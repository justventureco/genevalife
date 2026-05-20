import { FileCheck, Settings2, BarChart3, ShieldCheck, Layers, Phone, type LucideIcon } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type Item = { icon: LucideIcon; title: string; body: string };

const items: Item[] = [
  { icon: FileCheck, title: "Onboarding & New Business", body: "Easier, faster, more transparent at every step." },
  { icon: Settings2, title: "Service & Administration", body: "Modernized systems, dedicated points of contact, calibrated service standards." },
  { icon: BarChart3, title: "Reporting & Statements", body: "Clearer, more frequent, more useful." },
  { icon: ShieldCheck, title: "Compliance & Regulatory Rigor", body: "Institutional standards as the baseline, not the ceiling." },
  { icon: Layers, title: "Platform Expansion", body: "An expanded set of institutional-quality offerings, rolling out over the coming quarters." },
  { icon: Phone, title: "Leadership Access", body: "Direct lines, clear escalation, no surprises." },
];

export function TransformationAgenda() {
  return (
    <SectionReveal
      as="section"
      id="agenda"
      ariaLabel="Transformation agenda"
      className="bg-beige py-16 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[960px]">
          <EyebrowLabel className="text-brick">Transformation Agenda</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            A transformation already underway.
          </h2>
          <p className="mt-6 max-w-[720px] text-[17px] leading-relaxed text-aubergine/85 md:text-[18px]">
            Under new ownership, Geneva is being rebuilt around the touchpoints that matter most to
            the families and advisors we serve. These initiatives are in flight today.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-aubergine/10 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="border-aubergine/10 p-8 md:p-10 [&:not(:last-child)]:border-b max-md:sm:[&:nth-child(odd)]:border-r max-md:sm:[&:nth-last-child(-n+2):nth-child(odd)]:border-b-0 md:[&:nth-child(3n+1)]:border-r md:[&:nth-child(3n+2)]:border-r md:[&:nth-last-child(-n+3)]:border-b-0"
                data-i={i}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brick text-brick">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-display text-[20px] font-medium text-aubergine md:text-[22px]">
                  {it.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-aubergine/75">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
