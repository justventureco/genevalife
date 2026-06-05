import { Check } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { GenevaButton } from "@/components/ui/GenevaButton";

const columns = [
  {
    tag: "Advisors & Family Offices",
    heading: "A partner that makes you more effective.",
    body: (
      <>
        Advisors, attorneys, accountants, and family offices choose Geneva because we make the complex parts of sophisticated planning easier to execute; and easier to defend with clients.
        <br />
        <br />
        Our structures are transparent. Our turnaround is fast. Our service model is built around the way you actually work.
      </>
    ),
    proof: [
      "Direct access to leadership and decision-makers",
      "Transparent structuring and reporting",
      "Dedicated coverage for active relationships",
      "Channel partnerships for advisors building book at scale",
    ],
    cta: { label: "Partner with Geneva", href: "#contact", variant: "peer" as const },
  },
  {
    tag: "Families & Institutional Counterparties",
    heading: "A platform built to carry wealth forward.",
    body: "Families work with Geneva to protect, optimize, and carry forward what has taken a lifetime; sometimes generations; to build. Institutional counterparties work with the platform where it makes sense to. In both cases, we bring discretion to every conversation, discipline to every structure, and continuity to every relationship.",
    proof: [
      "Discretion as an operating standard, not a promise",
      "Solutions designed for continuity across generations",
      "Service calibrated to the relationships we serve",
    ],
    cta: { label: "Contact", href: "#contact", variant: "primary" as const },
  },
];

export function WhoWeServe() {
  return (
    <SectionReveal
      as="section"
      id="who-we-serve"
      ariaLabel="Who we serve"
      className="bg-white py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <EyebrowLabel className="text-brick">Who We Serve</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Two audiences. One <span className="italic text-brick">standard</span> of partnership.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
          {columns.map((c, i) => (
            <div key={c.tag} className={i === 0 ? "md:pr-12 md:border-r md:border-brick/20" : "md:pl-12"}>
              <p
                className="font-sans text-[12px] font-medium uppercase text-brick"
                style={{ letterSpacing: "0.16em" }}
              >
                {c.tag}
              </p>
              <h3
                className="mt-5 font-display text-[26px] font-medium text-aubergine md:text-[32px]"
                style={{ lineHeight: 1.2 }}
              >
                {c.heading}
              </h3>
              <p className="mt-6 text-[17px] leading-[1.65] text-aubergine/85">{c.body}</p>

              <ul className="mt-8 space-y-4">
                {c.proof.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[16px] leading-[1.55] text-aubergine">
                    <Check size={14} strokeWidth={2.5} className="mt-1.5 shrink-0 text-brick" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <GenevaButton href={c.cta.href} variant={c.cta.variant}>
                  {c.cta.label}
                </GenevaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
