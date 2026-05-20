import { Check, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

type Col = {
  tag: string;
  heading: string;
  body: string;
  proof: string[];
  cta: { label: string; href: string };
};

const cols: Col[] = [
  {
    tag: "Advisors & Family Offices",
    heading: "A partner that makes you more\u00A0effective.",
    body: "RIAs, attorneys, and family offices choose Geneva because we make the complex parts of generational wealth planning easier to execute – and easier to defend with clients. Our structures are transparent. Our turnaround is fast. Our service model is built around the way you actually work.",
    proof: [
      "Direct access to leadership and decision-makers",
      "Transparent structuring and reporting",
      "Dedicated coverage for active relationships",
    ],
    cta: { label: "Partner with Geneva", href: "#contact" },
  },
  {
    tag: "Families & Principals",
    heading: "A platform built to carry wealth\u00A0forward.",
    body: "Families work with Geneva to protect, optimize, and carry forward what has taken a lifetime – sometimes generations – to build. We bring discretion to every conversation, discipline to every structure, and continuity to every relationship. Your advisors stay at the center. We stand behind them.",
    proof: [
      "Discretion as an operating standard, not a promise",
      "Solutions designed for continuity across generations",
      "Service calibrated to the families we serve",
    ],
    cta: { label: "Begin a Conversation", href: "#contact" },
  },
];

export function WhoWeServe() {
  return (
    <SectionReveal
      as="section"
      id="who-we-serve"
      ariaLabel="Who we serve"
      className="bg-white py-16 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <EyebrowLabel className="text-brick">Who We Serve</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Two audiences. One standard of partnership.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-2 md:gap-0">
          {cols.map((c, i) => (
            <div
              key={c.tag}
              className={
                i === 0
                  ? "md:pr-12 md:border-r md:border-brick/20"
                  : "md:pl-12"
              }
            >
              <EyebrowLabel className="text-brick">{c.tag}</EyebrowLabel>
              <h3 className="mt-5 font-display text-[26px] font-medium text-aubergine md:text-[32px]" style={{ lineHeight: 1.2 }}>
                {c.heading}
              </h3>
              <p className="mt-6 text-[17px] leading-relaxed text-aubergine/85">{c.body}</p>

              <ul className="mt-8 space-y-4">
                {c.proof.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[16px] text-aubergine">
                    <Check size={18} strokeWidth={2.25} className="mt-1 shrink-0 text-brick" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={c.cta.href}
                className="group mt-10 inline-flex items-center gap-2 text-[14px] font-medium uppercase text-brick transition-colors hover:text-sunset"
                style={{ letterSpacing: "0.12em" }}
              >
                {c.cta.label}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
