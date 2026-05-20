import { motion } from "motion/react";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexCouple from "@/assets/hex-couple.png";
import hexBrand from "@/assets/geneva-g-mark.png";

// Flat-top hexagon clip (vertex left/right, flat top/bottom) to match the
// orientation of the user-provided couple image.
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

type Tile = {
  src: string;
  alt: string;
  x: number; // multiple of W/2
  y: number; // multiple of 0.75 * H
  preShaped?: boolean;
  delay?: number;
};

export function HexMosaic({ className = "" }: { className?: string }) {
  // Pointy-top hex sizing
  const W = 180;
  const H = W * 1.1547;
  const GAP = 10;

  // Honeycomb axial offsets (in W and H units), gap added per step.
  // Center = Geneva. Cluster of 4 photos attached to right side of center.
  //   NE   (W/2, -0.75H)        far-NE  (3W/2, -0.75H)  <- couple (user upload)
  //   SE   (W/2, +0.75H)        far-SE  (3W/2, +0.75H)  <- advisor (below couple)
  const tiles: Tile[] = [
    { src: hexBrand,   alt: "Geneva",                   x: 0,   y: 0,    preShaped: true, delay: 0    },
    { src: hexFamily,  alt: "Multigenerational family", x: 0.5, y: -1,   delay: 0.15 },
    { src: hexOffice,  alt: "Family office boardroom",  x: 0.5, y:  1,   delay: 0.25 },
    { src: hexCouple,  alt: "UHNW couple",              x: 1.5, y: -1,   preShaped: true, delay: 0.35 },
    { src: hexAdvisor, alt: "Trusted advisor",          x: 1.5, y:  1,   delay: 0.45 },
  ];

  const stepX = W / 2 + GAP / 2;
  const stepY = 0.75 * H + GAP * 0.5;

  const positions = tiles.map((t) => ({
    x: t.x * 2 * stepX, // multiplier of W/2 → pixels
    y: t.y * stepY,
  }));

  const minX = Math.min(...positions.map((p) => p.x)) - W / 2;
  const maxX = Math.max(...positions.map((p) => p.x)) + W / 2;
  const minY = Math.min(...positions.map((p) => p.y)) - H / 2;
  const maxY = Math.max(...positions.map((p) => p.y)) + H / 2;
  const boxW = maxX - minX;
  const boxH = maxY - minY;

  return (
    <div
      className={className}
      style={{ width: boxW, height: boxH, position: "relative" }}
    >
      {tiles.map((t, i) => {
        const p = positions[i];
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: t.delay ?? 0, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: p.x - W / 2 - minX,
              top: p.y - H / 2 - minY,
              width: W,
              height: H,
            }}
          >
            {t.preShaped ? (
              <img
                src={t.src}
                alt={t.alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
