import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { OFFICES } from "@/lib/constants";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export function GlobalFootprint() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  return (
    <SectionReveal
      as="section"
      id="global-footprint"
      ariaLabel="Global footprint"
      className="bg-aubergine py-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <EyebrowLabel className="text-sunset">Global Footprint</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-beige"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Five offices. <span className="italic text-sunset">One</span> standard.
          </h2>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[720px]">
          {mounted && (
            <ComposableMap
              projectionConfig={{ scale: 145 }}
              width={800}
              height={400}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: { fill: "rgba(233,224,219,0.08)", stroke: "rgba(233,224,219,0.2)", strokeWidth: 0.5, outline: "none" },
                        hover: { fill: "rgba(233,224,219,0.08)", stroke: "rgba(233,224,219,0.2)", strokeWidth: 0.5, outline: "none" },
                        pressed: { fill: "rgba(233,224,219,0.08)", outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {OFFICES.map((o) => (
                <Marker
                  key={o.city}
                  coordinates={o.coords}
                  onMouseEnter={() => setActive(o.city)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(o.city)}
                  onBlur={() => setActive(null)}
                  tabIndex={0}
                  aria-label={`${o.city}${o.hq ? " (headquarters)" : ""}`}
                >
                  <circle
                    r={active === o.city ? 7 : 5}
                    fill="#FE9F56"
                    stroke="#3C1214"
                    strokeWidth={2}
                    style={{ transition: "r 0.2s ease", cursor: "pointer" }}
                  />
                  {(active === o.city || o.hq) && (
                    <text
                      textAnchor="middle"
                      y={-12}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        letterSpacing: "0.08em",
                        fill: "rgba(233,224,219,0.85)",
                        textTransform: "uppercase",
                      }}
                    >
                      {o.city}
                      {o.hq ? " · HQ" : ""}
                    </text>
                  )}
                </Marker>
              ))}
            </ComposableMap>
          )}
        </div>

        <p className="mt-10 text-center text-[14px] text-beige/60">
          Operating from Barbados, New York, Miami, Jerusalem, and Zurich.
        </p>
      </div>
    </SectionReveal>
  );
}
