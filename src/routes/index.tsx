import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/geneva/Navigation";
import { Hero } from "@/components/geneva/Hero";
import { MetricsStrip } from "@/components/geneva/MetricsStrip";
import { WhoWeAre } from "@/components/geneva/WhoWeAre";
import { OurPlatform } from "@/components/geneva/OurPlatform";
import { Approach } from "@/components/geneva/Approach";
import { WhoWeServe } from "@/components/geneva/WhoWeServe";
import { WhyGeneva } from "@/components/geneva/WhyGeneva";
import { Process } from "@/components/geneva/Process";
import { GlobalFootprint } from "@/components/geneva/GlobalFootprint";
import { Contact } from "@/components/geneva/Contact";
import { Footer } from "@/components/geneva/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geneva Life Holdings — Sophisticated wealth deserves sophisticated structure" },
      {
        name: "description",
        content:
          "Geneva Life Holdings is a financial services holding company helping families, advisors, and family offices structure, protect, and carry generational wealth forward.",
      },
      { property: "og:title", content: "Geneva Life Holdings" },
      {
        property: "og:description",
        content:
          "An institutional platform built for HNW families, RIAs, attorneys, and family offices.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-beige text-aubergine">
      <Navigation />
      <main>
        <Hero />
        <MetricsStrip />
        <WhoWeAre />
        <OurPlatform />
        <Approach />
        <WhoWeServe />
        <WhyGeneva />
        <Process />
        <GlobalFootprint />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
