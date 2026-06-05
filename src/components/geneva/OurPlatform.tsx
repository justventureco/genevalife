import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import genevaGMark from "@/assets/geneva-g-mark.png";

export function OurPlatform() {
  return (
    <SectionReveal
      as="section"
      id="platform"
      ariaLabel="Our platform"
      className="relative isolate overflow-hidden bg-aubergine py-28 md:py-36"
    >
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 opacity-[0.07]">
        <img src={genevaGMark} alt="" className="h-auto w-[520px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] px-6 text-center md:px-10">
        <EyebrowLabel className="text-sunset">The Platform</EyebrowLabel>
        <h2
          className="mt-6 font-display font-medium text-beige"
          style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
        >
          A platform of operating businesses.
        </h2>

        <div className="mt-10 space-y-6 text-left text-[17px] leading-[1.65] text-beige/85 md:text-[19px]">
          <p>
            Geneva Life Holdings is a holding company. We bring operating businesses under common
            ownership and hold each to a single standard.
          </p>
          <p>
            The platform is anchored today by our life insurance carrier; the foundation, not the
            whole of what we are building.
          </p>
        </div>

        {/* Room reserved for operating-company detail in a future iteration */}
        <div aria-hidden className="h-[50px]" />
      </div>
    </SectionReveal>
  );
}
