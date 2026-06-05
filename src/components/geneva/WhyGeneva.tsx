import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

const proofs = [
  {
    title: "Regulated & Established",
    body: "Anchored by an established life insurance carrier with a decade of operating history.",
  },
  {
    title: "Institutionally Capitalized",
    body: "Backed by ownership and capital structures designed to support our commitments over the long term.",
  },
  {
    title: "Directly Accessible Leadership",
    body: "A leadership team that is reachable, responsive, and accountable; by design, not by exception.",
  },
];

export function WhyGeneva() {
  return (
    <SectionReveal
      as="section"
      id="why-geneva"
      ariaLabel="Why Geneva"
      className="bg-wine py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <EyebrowLabel className="text-sunset">Why Geneva</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            A platform you can <span className="italic text-sunset">stand behind</span>.
          </h2>
          <p className="mt-8 text-[18px] leading-[1.65] text-beige/85">
            Geneva Life Holdings combines the focus of a specialist with the discipline of an
            institution. We are led by an executive team that is directly accessible to the partners
            and families we serve.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
          {proofs.map((p) => (
            <div key={p.title} className="text-center">
              <h3 className="font-display text-[22px] font-medium text-beige md:text-[24px]">
                {p.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[320px] text-[15px] leading-[1.65] text-beige/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
