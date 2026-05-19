import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/geneva/Navigation";
import { Hero } from "@/components/geneva/Hero";
import { WhoWeAre } from "@/components/geneva/WhoWeAre";
import { Approach } from "@/components/geneva/Approach";
import { WhoWeServe } from "@/components/geneva/WhoWeServe";
import { WhyGeneva } from "@/components/geneva/WhyGeneva";
import { TransformationAgenda } from "@/components/geneva/TransformationAgenda";
import { WhatsNext } from "@/components/geneva/WhatsNext";
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
        <WhoWeAre />
        <Approach />
        <WhoWeServe />
        <WhyGeneva />
        <TransformationAgenda />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
