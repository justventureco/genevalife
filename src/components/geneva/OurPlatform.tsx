import { UserPlus, Settings, FileText, ShieldCheck, Layers, Umbrella } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { HexIcon } from "@/components/ui/HexIcon";
import genevaGMark from "@/assets/geneva-g-mark.png";

const tiles = [
  {
    Icon: UserPlus,
    titleLines: ["Onboarding &", "New Business"],
    body: "Transparent at every step. Calibrated to the families and advisors we serve.",
  },
  {
    Icon: Settings,
    titleLines: ["Service &", "Administration"],
    body: "Modernized systems, dedicated points of contact, calibrated service standards.",
  },
  {
    Icon: FileText,
    titleLines: ["Reporting &", "Statements"],
    body: "Clearer, more frequent, more useful.",
  },
  {
    Icon: ShieldCheck,
    titleLines: ["Compliance &", "Regulatory Rigor"],
    body: "Institutional standards as the baseline, not the ceiling.",
  },
  {
    Icon: Umbrella,
    titleLines: ["Geneva International Insurance"],
    body: "Our life insurance carrier and the foundation of the platform. Purpose-built to structure, protect, and carry private wealth forward across generations.",
  },
  {
    Icon: Layers,
    titleLines: ["Platform", "Expansion"],
    body: "An expanded set of institutional-quality capabilities, anchored by our life insurance carrier.",
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
            A platform you can <span className="italic text-sunset">stand behind</span>.
          </h2>
          <p className="mx-auto mt-8 max-w-[760px] text-[18px] leading-[1.6] text-beige/85">
            Geneva Life Holdings combines the focus of a specialist with the discipline of an
            institution. We are led by an executive team that is directly accessible to the partners
            and families we serve.
          </p>
        </div>

        <div aria-hidden style={{ height: 80 }} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="group border border-beige/15 bg-transparent p-10 transition-all duration-500 hover:-translate-y-1 hover:border-sunset"
            >
              {t.Icon && (
                <HexIcon Icon={t.Icon} size={64} strokeColor="currentColor" className="mb-6 text-sunset" iconClassName="text-sunset" />
              )}
              <div
                className={`font-display text-[22px] font-medium ${t.isCarrier ? "text-sunset" : "text-brick"}`}
                style={{ marginBottom: t.Icon ? 12 : 16 }}
              >
                {t.roman}
              </div>
              <h3 className="font-display text-[24px] font-medium text-beige">
                {t.titleLines.map((line, li) => (
                  <span key={li}>
                    {line}
                    {li < t.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h3>
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
