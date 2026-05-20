import { motion } from "motion/react";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexCouple from "@/assets/hex-couple.png";
import hexBrand from "@/assets/geneva-g-mark.png";

// Pointy-top hexagon (vertices top/bottom, vertical edges left/right)
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

type Tile = {
  src: string;
  alt: string;
  pos: "nw" | "ne" | "sw" | "se" | "center";
  brand?: boolean;
  delay?: number;
};

const tiles: Tile[] = [
  { src: hexBrand,   alt: "Geneva",                          pos: "center", brand: true, delay: 0    },
  { src: hexFamily,  alt: "Multigenerational family",        pos: "nw",     delay: 0.15 },
  { src: hexCouple,  alt: "UHNW family",                     pos: "ne",     delay: 0.25 },
  { src: hexOffice,  alt: "Family office boardroom",         pos: "sw",     delay: 0.35 },
  { src: hexAdvisor, alt: "Advisor in client meeting",       pos: "se",     delay: 0.45 },
];

export function HexMosaic({ className = "" }: { className?: string }) {
  // Pointy-top hex: width W (flat side to flat side), height H = W * 2/sqrt(3).
  const W = 200;
  const H = W * 1.1547; // ≈ 230.9
  const GAP = 14;

  // Honeycomb offsets relative to center (in px).
  // Vertical neighbor step = 0.75 * H, horizontal half-step = W / 2.
  const dx = W / 2 + GAP * 0.5;
  const dy = 0.75 * H + GAP * 0.5;

  const positions: Record<Tile["pos"], { x: number; y: number }> = {
    center: { x: 0,    y: 0   },
    nw:     { x: -dx,  y: -dy },
    ne:     { x:  dx,  y: -dy },
    sw:     { x: -dx,  y:  dy },
    se:     { x:  dx,  y:  dy },
  };

  // Compute bounding box from tile rectangles.
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
            {t.brand ? (
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
