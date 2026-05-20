import { motion } from "motion/react";
import hexCouple from "@/assets/hex-couple.png";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexBrand from "@/assets/geneva-g-mark.png";

// Pointy-top hexagon
const HEX_CLIP =
  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

type Tile = {
  src: string;
  alt: string;
  // position in hex grid units; 1 unit ≈ one hex size
  col: number;
  row: number;
  size?: number; // relative scale, 1 = base
  brand?: boolean;
  delay?: number;
};

const tiles: Tile[] = [
  { src: hexCouple, alt: "Family planning their legacy", col: 0, row: 0, delay: 0.1 },
  { src: hexAdvisor, alt: "Advisor in client meeting", col: 1, row: 0.5, delay: 0.25 },
  { src: hexBrand, alt: "", col: 0, row: 1, brand: true, delay: 0.4 },
  { src: hexFamily, alt: "Multigenerational family", col: 1, row: 1.5, delay: 0.55 },
  { src: hexOffice, alt: "Family office boardroom", col: 0, row: 2, delay: 0.7 },
];

export function HexMosaic({ className = "" }: { className?: string }) {
  // Pointy-top hex: width W, height H = W * 2/sqrt(3).
  // Honeycomb pitch: horizontal = W, vertical = H * 0.75.
  // Add GX/GY to create clean gaps so tiles never touch.
  const W = 180;
  const H = W * 1.1547;
  const GX = 24;
  const GY = 18;

  // Explicit pixel positions for a 5-tile honeycomb cluster.
  const positions = [
    { x: 0, y: 0 },                                          // top-left
    { x: W + GX, y: 0 },                                     // top-right
    { x: (W + GX) / 2, y: H * 0.75 + GY },                   // middle
    { x: 0, y: H * 1.5 + GY * 2 },                           // bottom-left
    { x: W + GX, y: H * 1.5 + GY * 2 },                      // bottom-right
  ];

  const width = (W + GX) + W;
  const height = H * 1.5 + GY * 2 + H;


  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
      aria-hidden={false}
    >
      {tiles.map((t, i) => {
        const left = t.col * COL_STEP;
        const top = t.row * ROW_STEP;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: t.delay ?? 0, ease: "easeOut" }}
            style={{
              position: "absolute",
              left,
              top,
              width: BASE - GAP,
              height: H - GAP,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                clipPath: HEX_CLIP,
                WebkitClipPath: HEX_CLIP,
                background: t.brand
                  ? "linear-gradient(135deg, #2a0d12 0%, #6B2024 55%, #D72C06 100%)"
                  : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={t.src}
                alt={t.alt}
                loading="lazy"
                style={
                  t.brand
                    ? { width: "62%", height: "auto", objectFit: "contain" }
                    : { width: "100%", height: "100%", objectFit: "cover" }
                }
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
