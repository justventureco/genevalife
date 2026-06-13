import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { GenevaButton } from "@/components/ui/GenevaButton";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import genevaLogo from "@/assets/geneva-logo-inverted.png";

const navLinkCls =
  "group relative inline-block text-[14px] text-beige/80 transition-colors hover:text-beige";

function NavUnderline() {
  return (
    <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-sunset transition-transform duration-300 group-hover:scale-x-100" />
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-beige/10 bg-aubergine/95 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-10"
      >
        {/* Replace with actual Geneva SVG logo */}
        {isHome ? (
          <a href="#top" aria-label="Geneva Life Holdings home" className="flex items-center">
            <img src={genevaLogo} alt="Geneva" className="h-12 w-auto md:h-14" />
          </a>
        ) : (
          <Link to="/" aria-label="Geneva Life Holdings home" className="flex items-center">
            <img src={genevaLogo} alt="Geneva" className="h-12 w-auto md:h-14" />
          </Link>
        )}

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              {isHome ? (
                <a href={l.href} className={navLinkCls}>
                  {l.label}
                  <NavUnderline />
                </a>
              ) : (
                <Link to="/" hash={l.href.replace("#", "")} className={navLinkCls}>
                  {l.label}
                  <NavUnderline />
                </Link>
              )}
            </li>
          ))}
          <li>
            {isHome ? (
              <a href="#news" className={navLinkCls}>
                News &amp; Press
                <NavUnderline />
              </a>
            ) : (
              <Link to="/news" className={navLinkCls}>
                News &amp; Press
                <NavUnderline />
              </Link>
            )}
          </li>
        </ul>

        <div className="hidden lg:block">
          <GenevaButton href={isHome ? "#contact" : "/#contact"} variant="outline-white" size="compact">
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
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              {isHome ? (
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-[32px] font-medium text-beige"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to="/"
                  hash={l.href.replace("#", "")}
                  onClick={() => setOpen(false)}
                  className="font-display text-[32px] font-medium text-beige"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            {isHome ? (
              <a
                href="#news"
                onClick={() => setOpen(false)}
                className="font-display text-[32px] font-medium text-beige"
              >
                News &amp; Press
              </a>
            ) : (
              <Link
                to="/news"
                onClick={() => setOpen(false)}
                className="font-display text-[32px] font-medium text-beige"
              >
                News &amp; Press
              </Link>
            )}
          </li>
          <li className="pt-4">
            <GenevaButton href="#contact" variant="outline-white" size="default">
              Get in Touch
            </GenevaButton>
          </li>
        </ul>
      </div>
    </header>
  );
}
