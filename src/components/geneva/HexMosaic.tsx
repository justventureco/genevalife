import { motion } from "motion/react";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexCouple from "@/assets/hex-couple.png";
import hexBrand from "@/assets/geneva-g-mark.png";

// Pointy-top hexagon (vertex at top/bottom, vertical edges left/right)
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

type Tile = {
  src: string;
  alt: string;
  pos: "top" | "bottom" | "left" | "right" | "center";
  preShaped?: boolean; // image already has hex transparency — don't clip
  delay?: number;
};

const tiles: Tile[] = [
  { src: hexBrand,   alt: "Geneva",                   pos: "center", preShaped: true, delay: 0    },
  { src: hexFamily,  alt: "Multigenerational family", pos: "top",    delay: 0.15 },
  { src: hexAdvisor, alt: "Trusted advisor",          pos: "left",   delay: 0.25 },
  { src: hexCouple,  alt: "UHNW couple",              pos: "right",  preShaped: true, delay: 0.35 },
  { src: hexOffice,  alt: "Family office boardroom",  pos: "bottom", delay: 0.45 },
];

export function HexMosaic({ className = "" }: { className?: string }) {
  // Pointy-top hex: W = flat-to-flat width, H = vertex-to-vertex height.
  const W = 190;
  const H = W * 1.1547; // ≈ 219.4
  const GAP = 14;

  // Cross layout around center: vertical neighbors offset by H + GAP
  // (vertex-to-vertex), horizontal neighbors offset by W + GAP (edge-shared).
  const positions: Record<Tile["pos"], { x: number; y: number }> = {
    center: { x: 0,        y: 0           },
    top:    { x: 0,        y: -(H + GAP)  },
    bottom: { x: 0,        y:  (H + GAP)  },
    left:   { x: -(W + GAP), y: 0          },
    right:  { x:  (W + GAP), y: 0          },
  };

  const xs = Object.values(positions).map((p) => p.x);
  const ys = Object.values(positions).map((p) => p.y);
  const minX = Math.min(...xs) - W / 2;
  const maxX = Math.max(...xs) + W / 2;
  const minY = Math.min(...ys) - H / 2;
  const maxY = Math.max(...ys) + H / 2;
  const boxW = maxX - minX;
  const boxH = maxY - minY;

  return (
    <div
      className={className}
      style={{ width: boxW, height: boxH, position: "relative" }}
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
