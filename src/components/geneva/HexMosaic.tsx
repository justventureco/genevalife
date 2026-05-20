import { motion } from "motion/react";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexBrand from "@/assets/geneva-g-mark.png";

// Flat-top hexagon (vertices left/right, flat edges top/bottom)
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

type Tile = {
  src: string;
  alt: string;
  pos: "top" | "right" | "bottom" | "center";
  brand?: boolean;
  delay?: number;
};

const tiles: Tile[] = [
  { src: hexFamily, alt: "Multigenerational family", pos: "top", delay: 0.15 },
  { src: hexBrand, alt: "Geneva", pos: "center", brand: true, delay: 0 },
  { src: hexAdvisor, alt: "Advisor in client meeting", pos: "right", delay: 0.3 },
  { src: hexOffice, alt: "Family office boardroom", pos: "bottom", delay: 0.45 },
];

export function HexMosaic({ className = "" }: { className?: string }) {
  // Flat-top hex: width W, height H = W * sqrt(3)/2.
  const W = 200;
  const H = W * 0.8660;
  const GAP = 16;

  // Center logo, with images on top, bottom, right.
  const positions: Record<Tile["pos"], { x: number; y: number }> = {
    top:    { x: 0,         y: -(H + GAP) },
    center: { x: 0,         y: 0 },
    bottom: { x: 0,         y: H + GAP },
    right:  { x: W + GAP,   y: 0 },
  };

  // Mosaic bounding box: x from 0 to W*2+GAP, y from -(H+GAP) to 2H+GAP
  const width = W * 2 + GAP;
  const height = H * 3 + GAP * 2;
  const offsetY = H + GAP; // shift so top tile starts at y=0

  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
    >
      {tiles.map((t, i) => {
        const p = positions[t.pos];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: t.delay ?? 0, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y + offsetY,
              width: W,
              height: H,
            }}
          >
            {t.brand ? (
              // Logo is already a hexagon — render directly, no clip frame.
              <img
                src={t.src}
                alt={t.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath: HEX_CLIP,
                  WebkitClipPath: HEX_CLIP,
                  overflow: "hidden",
                }}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
