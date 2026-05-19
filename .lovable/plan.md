# Geneva Life Holdings — Build Plan

A single-page, scroll-based marketing site for Geneva Life Holdings. Institutional, refined, typography-led. All copy and design rules from your master prompt are treated as locked spec.

## Stack adaptation

Your brief specifies React + Vite. This project is on **TanStack Start** (React 19 + Vite 7 + Tailwind v4), which is functionally equivalent for a marketing page. The single page lives at `src/routes/index.tsx`; global shell stays in `src/routes/__root.tsx`. Framer Motion (`motion`) added for scroll animations. `react-hook-form` for the form. Lucide for icons.

## Design system setup

- **`src/styles.css`** — register brand tokens as oklch CSS variables and Tailwind `@theme` colors: `aubergine`, `brick`, `sunset`, `wine`, `beige`. Add `--gradient-brand` (wine→brick→sunset 135°). Override `--background`, `--foreground`, `--primary`, `--border` etc. so shadcn primitives inherit the palette.
- **Fonts** — import Playfair Display (400/500/700 + italic) and Hanken Grotesk (300–600) via Google Fonts `<link>` in `__root.tsx` head, plus `--font-display` / `--font-sans` tokens.
- **Global rules** — smooth scroll, `prefers-reduced-motion` disables motion, focus ring = 2px sunset with 2px offset, max-width `max-w-6xl` + `px-6 md:px-10`, section rhythm `py-32 md:py-40` (mobile `py-20`).

## Reusable UI primitives (`src/components/ui/`)

- `Button.tsx` — variants `primary` (aubergine bg → gradient sweep on hover) and `ghost` (brick or sunset border, fills on hover). Squared 2px radius, uppercase tracked 14px.
- `EyebrowLabel.tsx` — uppercase Hanken 13px, 0.18em tracking, color prop.
- `IconBadge.tsx` — 56px circle, 1px brick border, 1.5 stroke lucide icon, color prop for light/dark backgrounds.
- `SectionReveal.tsx` — Framer Motion `whileInView` wrapper: fade + 24px translate-y, 0.7s easeOut, threshold 0.15, disabled under reduced motion.

## Page sections (`src/components/`)

Composed in order inside `src/routes/index.tsx`. Each section uses semantic `<section id="...">` matching nav anchors.

1. **Navigation** — fixed `bg-aubergine/95 backdrop-blur-md` 80/64px, logo placeholder left, center links (Who We Are, Approach, Who We Serve, Why Geneva, What's Next), compact "Get in Touch" primary CTA right. Mobile hamburger → full-screen aubergine overlay with stacked Playfair 32px links. Sunset underline animates from left on hover.
2. **Hero (`#top`)** — `min-h-screen` aubergine. Left-aligned content (max 640px): sunset eyebrow "A NEW CHAPTER", Playfair 72/44 H1, beige/75 subhead, CTA row (primary "Start a Conversation" → #contact; ghost "How We Work" → #approach). Right 40% (desktop only): oversized hex G SVG with gradient fill at 60% opacity bleeding off edge. Staggered load animation (0.2s eyebrow → 0.8s CTAs). Bottom-center pulsing SCROLL indicator.
3. **Who We Are (`#who-we-are`)** — beige bg. 12-col grid: brick eyebrow + aubergine H2 (5 cols) / 3 paragraphs (6 cols, offset 1). Third paragraph rendered as Playfair Italic 24px brick pull-quote.
4. **Approach (`#approach`)** — aubergine bg, centered intro, low-opacity hex G watermark bottom-right. Three pillar cards (Shield / HandHeart / Scale) with `border border-beige/15 p-10`, hover lifts + sunset border.
5. **Who We Serve (`#who-we-serve`)** — white bg. Centered intro, then two columns split by 1px brick/20 vertical divider (desktop). Each column: brick tag, Playfair 32 sub-headline, body, three checkmark proof items, inline arrow CTA link with `translate-x` arrow animation.
6. **Why Geneva (`#why-geneva`)** — wine bg, centered intro, three transparent proof cards (BadgeCheck / Landmark / Users) with centered icon + Playfair H3 + body.
7. **Transformation Agenda (`#agenda`)** — beige bg. Left-aligned intro in upper third, then 3×2 grid (responsive 2×3, 1×6) of six items with top+right hairline dividers in aubergine/10.
8. **What's Next (`#whats-next`)** — aubergine. Centered intro, then three horizontal step rows with massive 120px Playfair numerals using `background-clip: text` gradient fill, separated by beige/15 hairlines.
9. **Contact (`#contact`)** — beige. Left col: intro + brick divider + quiet "Existing Partners" block with mailto/tel links. Right col: white p-10 card with react-hook-form. Inputs are label-above + bottom-border-only (no boxed fields). Select for "I am a...". On submit: console.log + replace card with brick checkmark + "Thank you." confirmation. Code comment marks backend integration as pending.
10. **Footer** — aubergine, sunset/20 top border. Row 1 three cols (logo+address / contact / navigate). Beige/15 divider. Row 3 flex: copyright left, Privacy | Terms | Regulatory right.

## Locked rules enforced in code

- No em dashes — copy uses en dashes with spaces per your spec.
- No drop shadows on logo; cards may use the specified soft shadow only.
- Sunset never used for body copy on dark backgrounds (contrast).
- Color proportions ~70/20/10 honored via section background alternation (aubergine/beige/white/wine).
- Gradient reserved for: hero hex graphic, primary button hover sweep, numerals in What's Next, optional dividers.
- All sections wrapped in `SectionReveal` (auto-disabled under reduced motion).
- Single `<main>` in `__root.tsx` shell, sections have proper `aria-labelledby`, form labels associated, 44px+ touch targets.

## Out of scope / flagged

- Real Geneva SVG logo — placeholder text "GENEVA" + hex square with `{/* Replace with actual SVG */}` comment. Drop real SVG into `public/` later.
- Form submission backend (Formspree / Resend / serverFn) — client-side only for now, marked with TODO.
- No stock imagery, no carousels, no parallax, no video.

## Deliverable

Fully responsive single-page site, all 9 sections rendered with locked copy, brand tokens applied across shadcn + custom components, form working client-side with success state, ready to preview.
