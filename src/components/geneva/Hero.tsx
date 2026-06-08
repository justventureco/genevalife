import { motion } from "motion/react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { GenevaButton } from "@/components/ui/GenevaButton";
import heroEstate from "@/assets/hex-family.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-aubergine pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed hero image on the right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img
          src={heroEstate}
          alt="A multi-generational family walking together on the grounds of their family estate at golden hour"
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Fade into the aubergine background on the left edge and bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-aubergine via-aubergine/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-aubergine/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:px-10">
        <div className="max-w-[760px] pb-28 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <EyebrowLabel className="text-sunset">A Platform for Private Wealth</EyebrowLabel>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 font-display font-medium text-beige"
            style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Structure <span className="italic text-brick">Equal</span> to the Wealth It Carries.
          </motion.h1>

          <motion.p
            className="mt-8 text-[17px] leading-[1.6] text-beige/75 md:text-[19px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            A financial services platform built to help families, advisors, and family offices
            structure, protect, and carry private wealth forward.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <GenevaButton href="#contact" variant="outline-white">
              Start a Conversation
            </GenevaButton>
            <GenevaButton href="#platform" variant="outline-white">
              See the Platform
            </GenevaButton>
          </motion.div>
        </div>
      </div>


      {/* Scroll indicator */}
      <div
        className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => {
          const el = document.getElementById("who-we-are");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        role="button"
        aria-label="Scroll to content"
      >
        <EyebrowLabel className="text-sunset/80 text-[11px]">Scroll</EyebrowLabel>
        <motion.span
          className="block h-10 w-px bg-sunset"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
