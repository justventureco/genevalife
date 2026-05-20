import { motion } from "motion/react";
import hexAdvisor from "@/assets/hex-advisor.jpg";
import hexFamily from "@/assets/hex-family.jpg";
import hexOffice from "@/assets/hex-office.jpg";
import hexCouple from "@/assets/hex-couple.png";
import hexBrand from "@/assets/geneva-g-gradient.png";

// Flat-top hexagon (vertex left/right, flat top/bottom) — matches the
// orientation of the user-provided couple image and the Geneva mark.
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

type Tile = {
  src: string;
  alt: string;
  // Honeycomb coords in (column, row) — column step = 0.75W, row step = H,
  // odd columns offset by H/2.
  col: number;
  row: number;
  preShaped?: boolean;
  brand?: boolean;
  delay?: number;
};

export function HexMosaic({ className = "" }: { className?: string }) {
  // Flat-top hex aspect ratio: W (vertex-to-vertex) : H (flat-to-flat) = 2 : √3
  const W = 200;
  const H = W * 0.8660; // ≈ 173.2
  const GAP = 10;

  // Honeycomb around Geneva: N (top), NE (top-right), SE (bottom-right), S (bottom).
  const tiles: Tile[] = [
    { src: hexBrand,   alt: "Geneva",                   col: 0, row:  0,    brand: true, delay: 0    },
    { src: hexFamily,  alt: "Multigenerational family", col: 0, row: -1,    delay: 0.15 },
    { src: hexCouple,  alt: "UHNW couple",              col: 1, row: -0.5,  preShaped: true, delay: 0.25 },
    { src: hexAdvisor, alt: "Trusted advisor",          col: 1, row:  0.5,  delay: 0.35 },
    { src: hexOffice,  alt: "Family office boardroom",  col: 0, row:  1,    delay: 0.45 },
  ];

  const stepX = 0.75 * W + GAP * 0.5;
  const stepY = H + GAP * 0.5;

  const positions = tiles.map((t) => ({
    x: t.col * stepX,
    y: t.row * stepY,
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
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath: HEX_CLIP,
                  WebkitClipPath: HEX_CLIP,
                  background: "var(--color-sunset)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 3,
                    clipPath: HEX_CLIP,
                    WebkitClipPath: HEX_CLIP,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={t.src}
                    alt={t.alt}
                    style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath: HEX_CLIP,
                  WebkitClipPath: HEX_CLIP,
                  background: "var(--color-sunset)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 3,
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
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
