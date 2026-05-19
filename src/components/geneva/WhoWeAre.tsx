import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";

export function WhoWeAre() {
  return (
    <SectionReveal
      as="section"
      id="who-we-are"
      ariaLabel="Who we are"
      className="bg-beige py-20 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <EyebrowLabel className="text-brick">Who We Are</EyebrowLabel>
            <h2
              className="mt-6 font-display font-medium text-aubergine"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              One institution. One standard. One alignment of interests.
            </h2>
          </div>
          <div className="space-y-8 text-[17px] leading-relaxed text-aubergine md:col-span-6 md:col-start-7 md:text-[19px]">
            <p>
              Geneva Life Holdings is a financial services holding company operating under new
              ownership and new leadership. Our platform is anchored by an established, regulated
              insurance business and is expanding to include a broader set of institutional-quality
              offerings.
            </p>
            <p>
              What unifies the platform is not a product set. It is a standard – one we apply
              consistently across every entity, every relationship, and every interaction.
            </p>
            <p
              className="font-display italic text-brick"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", lineHeight: 1.4, letterSpacing: "-0.01em" }}
            >
              The families and advisors we serve are sophisticated. The institution serving them is
              being built to match.
            </p>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
