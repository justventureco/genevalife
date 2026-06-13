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
import { NewsPreview } from "@/components/geneva/NewsPreview";
import { Contact } from "@/components/geneva/Contact";
import { Footer } from "@/components/geneva/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geneva Life Holdings: A Platform for Private Wealth" },
      {
        name: "description",
        content:
          "Geneva Life Holdings is a financial services platform helping families, advisors, and family offices structure, protect, and carry private wealth forward.",
      },
      { property: "og:title", content: "Geneva Life Holdings" },
      {
        property: "og:description",
        content:
          "A platform built for HNW families, family offices, RIAs, attorneys, accountants, and institutional counterparties.",
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
        <WhyGeneva />
        <OurPlatform />
        <Approach />
        <WhoWeServe />
        <Process />
        <GlobalFootprint />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
