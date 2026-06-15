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
    headline: "Lorem ipsum dolor sit amet consectetur adipiscing",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "lorem-ipsum-4",
  },
  {
    id: "5",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2026-03-22",
    headline: "Sed ut perspiciatis unde omnis iste natus error",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "lorem-ipsum-5",
  },
  {
    id: "6",
    type: "Insight",
    topic: "Wealth Structuring",
    date: "2026-03-05",
    headline: "Duis aute irure dolor in reprehenderit voluptate",
    excerpt:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    slug: "lorem-ipsum-6",
  },
  {
    id: "7",
    type: "Press Release",
    topic: "Platform News",
    date: "2026-02-18",
    headline: "Neque porro quisquam est qui dolorem ipsum quia",
    excerpt:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    slug: "lorem-ipsum-7",
  },
  {
    id: "8",
    type: "Insight",
    topic: "Industry Perspective",
    date: "2026-01-29",
    headline: "At vero eos et accusamus et iusto odio dignissimos",
    excerpt:
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi.",
    slug: "lorem-ipsum-8",
  },
  {
    id: "9",
    type: "Whitepaper",
    topic: "Wealth Structuring",
    date: "2026-01-12",
    headline: "Temporibus autem quibusdam et aut officiis debitis",
    excerpt:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.",
    slug: "lorem-ipsum-9",
  },
  {
    id: "10",
    type: "Announcement",
    topic: "Regulatory & Compliance",
    date: "2025-12-20",
    headline: "Nam libero tempore cum soluta nobis eligendi optio",
    excerpt:
      "Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est omnis dolor.",
    slug: "lorem-ipsum-10",
  },
  {
    id: "11",
    type: "Press Release",
    topic: "Platform News",
    date: "2025-11-30",
    headline: "Quis autem vel eum iure reprehenderit voluptate",
    excerpt:
      "Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat sequi.",
    slug: "lorem-ipsum-11",
  },
  {
    id: "12",
    type: "Insight",
    topic: "Industry Perspective",
    date: "2025-11-04",
    headline: "Vel illum qui dolorem eum fugiat quo voluptas",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    slug: "lorem-ipsum-12",
  },
  {
    id: "13",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2025-10-15",
    headline: "Quia voluptas sit aspernatur aut odit aut fugit",
    excerpt:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam.",
    slug: "lorem-ipsum-13",
  },
  {
    id: "14",
    type: "Announcement",
    topic: "Wealth Structuring",
    date: "2025-09-22",
    headline: "Eius modi tempora incidunt ut labore et dolore",
    excerpt:
      "Magnam aliquam quaerat voluptatem ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
    slug: "lorem-ipsum-14",
  },
  {
    id: "15",
    type: "Insight",
    topic: "Wealth Structuring",
    date: "2025-08-19",
    headline: "Laboriosam nisi ut aliquid ex ea commodi consequatur",
    excerpt:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.",
    slug: "lorem-ipsum-15",
  },
  {
    id: "16",
    type: "Press Release",
    topic: "Industry Perspective",
    date: "2025-07-28",
    headline: "Sed quia consequuntur magni dolores eos qui ratione",
    excerpt:
      "Voluptatem sequi nesciunt neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci.",
    slug: "lorem-ipsum-16",
  },
  {
    id: "17",
    type: "Announcement",
    topic: "Platform News",
    date: "2025-06-30",
    headline: "Ut enim ad minima veniam quis nostrum exercitationem",
    excerpt:
      "Ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure dolor.",
    slug: "lorem-ipsum-17",
  },
  {
    id: "18",
    type: "Whitepaper",
    topic: "Regulatory & Compliance",
    date: "2025-05-14",
    headline: "Quam nihil molestiae consequatur vel illum dolorem",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
    slug: "lorem-ipsum-18",
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
