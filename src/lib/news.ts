export type NewsType = "Press Release" | "Whitepaper" | "Insight" | "Announcement";
export type NewsTopic =
  | "Regulatory & Compliance"
  | "Wealth Structuring"
  | "Platform News"
  | "Industry Perspective";

export type NewsArticle = {
  id: string;
  type: NewsType;
  topic: NewsTopic;
  date: string; // ISO format
  headline: string;
  excerpt: string;
  slug: string;
};

export const NEWS_TYPES: NewsType[] = [
  "Press Release",
  "Whitepaper",
  "Insight",
  "Announcement",
];

export const NEWS_TOPICS: NewsTopic[] = [
  "Regulatory & Compliance",
  "Wealth Structuring",
  "Platform News",
  "Industry Perspective",
];

export const newsData: NewsArticle[] = [
  {
    id: "1",
    type: "Press Release",
    topic: "Platform News",
    date: "2026-05-28",
    headline: "Geneva Life Holdings expands platform with new operating capabilities",
    excerpt:
      "Geneva Life Holdings announces the expansion of its institutional-quality platform, building on the foundation of its life insurance carrier.",
    slug: "geneva-expands-platform-operating-capabilities",
  },
  {
    id: "2",
    type: "Whitepaper",
    topic: "Wealth Structuring",
    date: "2026-05-12",
    headline: "Structuring private wealth across generations: a framework for advisors",
    excerpt:
      "A practical framework for RIAs, attorneys, and family offices navigating the complexity of multi-generational wealth transfer.",
    slug: "structuring-private-wealth-across-generations",
  },
  {
    id: "3",
    type: "Insight",
    topic: "Industry Perspective",
    date: "2026-04-30",
    headline: "Why alignment of interests matters in private wealth",
    excerpt:
      "An institutional perspective on what alignment looks like in practice, and why it matters to the families and advisors we serve.",
    slug: "why-alignment-of-interests-matters",
  },
  {
    id: "4",
    type: "Announcement",
    topic: "Platform News",
    date: "2026-04-08",
    headline: "Geneva opens new client services capacity for advisor partners",
    excerpt:
      "Dedicated coverage teams are now available to support advisors managing active relationships across the platform.",
    slug: "new-client-services-capacity-advisor-partners",
  },
  {
    id: "5",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2026-03-22",
    headline: "Navigating cross-border compliance for internationally mobile families",
    excerpt:
      "A detailed examination of the regulatory considerations that shape planning for families with interests across multiple jurisdictions.",
    slug: "cross-border-compliance-mobile-families",
  },
  {
    id: "6",
    type: "Insight",
    topic: "Wealth Structuring",
    date: "2026-03-05",
    headline: "The role of private placement life insurance in modern portfolios",
    excerpt:
      "How institutionally structured insurance solutions can complement a disciplined approach to long-horizon wealth planning.",
    slug: "private-placement-life-insurance-modern-portfolios",
  },
  {
    id: "7",
    type: "Press Release",
    topic: "Platform News",
    date: "2026-02-18",
    headline: "Geneva Life Holdings appoints senior leadership to drive platform growth",
    excerpt:
      "The appointments strengthen the firm's capacity to serve advisors, family offices, and institutional counterparties at scale.",
    slug: "geneva-appoints-senior-leadership",
  },
  {
    id: "8",
    type: "Insight",
    topic: "Industry Perspective",
    date: "2026-01-29",
    headline: "Discretion as an operating standard, not a marketing promise",
    excerpt:
      "What it means to build confidentiality into the structure of a relationship, rather than treating it as an afterthought.",
    slug: "discretion-as-an-operating-standard",
  },
  {
    id: "9",
    type: "Whitepaper",
    topic: "Wealth Structuring",
    date: "2026-01-12",
    headline: "Continuity planning: carrying wealth forward across decades",
    excerpt:
      "A framework for designing structures that endure beyond a single generation and adapt to changing family circumstances.",
    slug: "continuity-planning-carrying-wealth-forward",
  },
  {
    id: "10",
    type: "Announcement",
    topic: "Regulatory & Compliance",
    date: "2025-12-20",
    headline: "Geneva enhances reporting transparency for partner relationships",
    excerpt:
      "New reporting standards give advisors clearer, more timely visibility into the structures they help their clients establish.",
    slug: "enhanced-reporting-transparency-partners",
  },
  {
    id: "11",
    type: "Press Release",
    topic: "Platform News",
    date: "2025-11-30",
    headline: "Geneva Life Holdings establishes presence in additional markets",
    excerpt:
      "The platform deepens its global footprint to better serve families and advisors operating across borders.",
    slug: "geneva-establishes-presence-additional-markets",
  },
  {
    id: "12",
    type: "Insight",
    topic: "Industry Perspective",
    date: "2025-11-04",
    headline: "What family offices look for in a structuring partner",
    excerpt:
      "Drawing on conversations with principals and advisors, a look at the qualities that distinguish a durable partnership.",
    slug: "what-family-offices-look-for",
  },
  {
    id: "13",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2025-10-15",
    headline: "Understanding the regulatory landscape for life insurance carriers",
    excerpt:
      "A primer on the supervisory frameworks that govern carriers and what they mean for the families relying on them.",
    slug: "regulatory-landscape-life-insurance-carriers",
  },
  {
    id: "14",
    type: "Announcement",
    topic: "Wealth Structuring",
    date: "2025-09-22",
    headline: "Geneva introduces refined structuring options for advisors",
    excerpt:
      "Updated solutions give advisors greater flexibility to tailor structures to the specific needs of each relationship.",
    slug: "refined-structuring-options-advisors",
  },
  {
    id: "15",
    type: "Insight",
    topic: "Wealth Structuring",
    date: "2025-08-19",
    headline: "Designing for the long horizon: discipline over fashion",
    excerpt:
      "Why durable structures favor clarity and continuity over the products and trends of any given moment.",
    slug: "designing-for-the-long-horizon",
  },
  {
    id: "16",
    type: "Press Release",
    topic: "Industry Perspective",
    date: "2025-07-28",
    headline: "Geneva Life Holdings publishes annual perspective on private wealth",
    excerpt:
      "The firm shares its outlook on the trends shaping how families and advisors approach the preservation of private wealth.",
    slug: "annual-perspective-on-private-wealth",
  },
  {
    id: "17",
    type: "Announcement",
    topic: "Platform News",
    date: "2025-06-30",
    headline: "Geneva strengthens channel partnerships for advisors building at scale",
    excerpt:
      "New partnership structures support advisors looking to grow their book with institutional-quality solutions behind them.",
    slug: "channel-partnerships-advisors-at-scale",
  },
  {
    id: "18",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2025-05-14",
    headline: "Compliance by design: building trust into every structure",
    excerpt:
      "An exploration of how rigorous compliance, embedded from the outset, becomes a source of confidence for clients and advisors.",
    slug: "compliance-by-design-building-trust",
  },
];

export function sortedNews(): NewsArticle[] {
  return [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsData.find((a) => a.slug === slug);
}

export function formatNewsDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
