import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import genevaLogo from "@/assets/geneva-logo-inverted.png";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

const navLinks = [...NAV_LINKS, { label: "News & Press", href: "/news" }, { label: "Contact", href: "#contact" }];

export function Footer() {
  return (
    <footer className="border-t border-sunset/20 bg-aubergine">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:gap-8">
          <div>
            {/* Replace with actual Geneva SVG logo */}
            <img src={genevaLogo} alt="Geneva Life Holdings" className="h-14 w-auto md:h-16" />
            <address className="mt-6 not-italic text-[14px] text-beige/75" style={{ lineHeight: 1.7 }}>
              Geneva Life Holdings
              <br />
              2nd Floor, One Welches
              <br />
              Welches, St. Thomas
              <br />
              Barbados BB22025
            </address>
          </div>

          <div>
            <EyebrowLabel className="text-sunset">Contact</EyebrowLabel>
            <ul className="mt-6 space-y-3 text-[14px] text-beige/80">
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-beige">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-beige">
                  {CONTACT.email}
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

        {/* DISCLOSURE PARAGRAPH — counsel-supplied wording pending.
            Reserve approximately 4-6 lines of text. Plain prose, no formatting. */}
        <div className="max-w-[900px] py-6">
          <p className="text-[12px] text-beige/55" style={{ lineHeight: 1.6 }}>
            [Disclosure language to be provided by counsel; holding company and operating subsidiary
            structure clarification.]
          </p>
        </div>

        <div className="h-px w-full bg-beige/15" />

        <div className="flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
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
