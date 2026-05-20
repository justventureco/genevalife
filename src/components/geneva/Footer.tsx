import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import genevaLogo from "@/assets/geneva-logo-inverted.png";


const navLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Approach", href: "#approach" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Why Geneva", href: "#why-geneva" },
  { label: "What's Next", href: "#whats-next" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-sunset/20 bg-aubergine">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:gap-8">
          <div>
            <img src={genevaLogo} alt="Geneva" className="h-14 w-auto md:h-16" />
            <address className="mt-8 not-italic text-[14px] leading-[1.7] text-beige/75">
              Geneva Life Holdings<br />
              2nd Floor, One Welches<br />
              Welches, St. Thomas<br />
              Barbados BB22025
            </address>
          </div>

          <div>
            <EyebrowLabel className="text-sunset">Contact</EyebrowLabel>
            <ul className="mt-6 space-y-3 text-[14px] text-beige/80">
              <li>
                <a href="tel:+12466239700" className="transition-colors hover:text-beige">
                  +1 246 623 9700
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@geneva-ppli.com"
                  className="transition-colors hover:text-beige"
                >
                  info@geneva-ppli.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <EyebrowLabel className="text-sunset">Navigate</EyebrowLabel>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-[14px] text-beige/80">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-beige">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-beige/15" />

        <div className="flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-center">
          <p className="text-[13px] text-beige/60">
            © 2026 Geneva Life Holdings. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[13px] text-beige/60">
            <a href="#" className="transition-colors hover:text-beige">Privacy</a>
            <span aria-hidden>|</span>
            <a href="#" className="transition-colors hover:text-beige">Terms</a>
            <span aria-hidden>|</span>
            <a href="#" className="transition-colors hover:text-beige">Regulatory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
