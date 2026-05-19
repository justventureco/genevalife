import { motion } from "motion/react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { GenevaButton } from "@/components/ui/GenevaButton";
import genevaGMark from "@/assets/geneva-g-mark.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-aubergine pt-20"
      aria-labelledby="hero-heading"
    >
      {/* G mark, desktop only */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-1/2 hidden -translate-y-1/2 opacity-55 lg:block"
      >
        <img
          src={genevaGMark}
          alt=""
          className="h-auto w-[460px] xl:w-[560px] 2xl:w-[620px]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <EyebrowLabel className="text-sunset">A New Chapter</EyebrowLabel>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 font-display font-medium text-beige"
            style={{
              fontSize: "clamp(2.75rem, 6vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Sophisticated wealth deserves sophisticated structure.
          </motion.h1>

          <motion.p
            className="mt-8 text-[17px] leading-relaxed text-beige/75 md:text-[19px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            A financial services platform built to help families, advisors, and family offices
            structure, protect, and carry generational wealth forward.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <GenevaButton href="#contact">Start a Conversation</GenevaButton>
            <GenevaButton href="#approach" variant="ghost-sunset">
              How We Work
            </GenevaButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
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
