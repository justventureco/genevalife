import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GenevaButton } from "@/components/ui/GenevaButton";
import { cn } from "@/lib/utils";
import genevaLogo from "@/assets/geneva-logo-inverted.png";

const links = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Approach", href: "#approach" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Why Geneva", href: "#why-geneva" },
  { label: "What's Next", href: "#whats-next" },
];


export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-beige/10 bg-aubergine/95 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10"
      >
        <a href="#top" aria-label="Geneva Life Holdings home" className="flex items-center">
          <img src={genevaLogo} alt="Geneva" className="h-12 w-auto md:h-14" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-block text-[16px] text-beige/80 transition-colors hover:text-beige"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-sunset transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GenevaButton href="#contact" size="compact">
            Get in Touch
          </GenevaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center text-beige lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-aubergine transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="flex h-full flex-col items-start gap-8 px-8 pt-16">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[32px] font-medium text-beige"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <GenevaButton href="#contact" size="default">
              Get in Touch
            </GenevaButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
