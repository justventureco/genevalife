import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Navigation } from "@/components/geneva/Navigation";
import { Footer } from "@/components/geneva/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { NewsCard } from "@/components/geneva/NewsCard";
import { newsData, type NewsType, type NewsTopic } from "@/lib/news";

const PER_PAGE = 12;

type TypeKey = "all" | "press-release" | "whitepaper" | "insight" | "announcement";
type TopicKey = "all" | "regulatory" | "wealth-structuring" | "platform" | "perspective";
type SortKey = "recent" | "oldest";

const TYPE_PILLS: { key: TypeKey; label: string; value: NewsType | null }[] = [
  { key: "all", label: "All", value: null },
  { key: "press-release", label: "Press Release", value: "Press Release" },
  { key: "whitepaper", label: "Whitepaper", value: "Whitepaper" },
  { key: "insight", label: "Insight", value: "Insight" },
  { key: "announcement", label: "Announcement", value: "Announcement" },
];

const TOPIC_OPTIONS: { key: TopicKey; label: string; value: NewsTopic | null }[] = [
  { key: "all", label: "All Topics", value: null },
  { key: "regulatory", label: "Regulatory & Compliance", value: "Regulatory & Compliance" },
  { key: "wealth-structuring", label: "Wealth Structuring", value: "Wealth Structuring" },
  { key: "platform", label: "Platform News", value: "Platform News" },
  { key: "perspective", label: "Industry Perspective", value: "Industry Perspective" },
];

type NewsSearch = {
  type: TypeKey;
  topic: TopicKey;
  sort: SortKey;
  q: string;
  page: number;
};

function asTypeKey(v: unknown): TypeKey {
  return TYPE_PILLS.some((p) => p.key === v) ? (v as TypeKey) : "all";
}
function asTopicKey(v: unknown): TopicKey {
  return TOPIC_OPTIONS.some((p) => p.key === v) ? (v as TopicKey) : "all";
}

export const Route = createFileRoute("/news/")({
  validateSearch: (search: Record<string, unknown>): NewsSearch => ({
    type: asTypeKey(search.type),
    topic: asTopicKey(search.topic),
    sort: search.sort === "oldest" ? "oldest" : "recent",
    q: typeof search.q === "string" ? search.q : "",
    page: Math.max(1, Number(search.page) || 1),
  }),
  head: () => ({
    meta: [
      { title: "News & Press — Geneva Life Holdings" },
      {
        name: "description",
        content:
          "Press releases, whitepapers, and institutional perspectives from across the Geneva Life Holdings platform.",
      },
      { property: "og:title", content: "News & Press — Geneva Life Holdings" },
      {
        property: "og:description",
        content: "Insights and announcements from Geneva Life Holdings.",
      },
    ],
  }),
  component: NewsArchive,
});

function NewsArchive() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const update = (patch: Partial<NewsSearch>) => {
    navigate({
      search: (prev: NewsSearch) => ({ ...prev, ...patch, page: patch.page ?? 1 }),
    });
  };

  const typeValue = TYPE_PILLS.find((p) => p.key === search.type)?.value ?? null;
  const topicValue = TOPIC_OPTIONS.find((p) => p.key === search.topic)?.value ?? null;
  const query = search.q.trim().toLowerCase();

  const filtered = newsData
    .filter((a) => (typeValue ? a.type === typeValue : true))
    .filter((a) => (topicValue ? a.topic === topicValue : true))
    .filter((a) =>
      query
        ? a.headline.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query)
        : true,
    )
    .sort((a, b) => {
      const diff = new Date(b.date).getTime() - new Date(a.date).getTime();
      return search.sort === "oldest" ? -diff : diff;
    });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(search.page, totalPages);
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const selectCls =
    "border-0 border-b border-aubergine/20 bg-transparent py-2 px-3 font-sans text-[14px] text-aubergine outline-none focus:border-brick";

  return (
    <div className="min-h-dvh bg-beige text-aubergine">
      <Navigation />
      <main className="pt-16 md:pt-20">
        {/* Page header */}
        <section className="bg-beige py-24" style={{ backgroundColor: "#E9E0DB" }}>
          <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
            <EyebrowLabel className="text-brick">News &amp; Press</EyebrowLabel>
            <h1
              className="mt-6 font-display font-medium text-aubergine"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              Insights and <span className="italic text-brick">announcements</span> from Geneva.
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] font-sans text-[18px] text-aubergine/80" style={{ lineHeight: 1.6 }}>
              Press releases, whitepapers, and institutional perspectives from across the platform.
            </p>
          </div>
        </section>

        {/* Filter & sort bar */}
        <div className="sticky top-20 z-30 border-y border-aubergine/10 bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 md:flex-wrap md:overflow-visible">
              {TYPE_PILLS.map((p) => {
                const active = search.type === p.key;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => update({ type: p.key })}
                    className={`shrink-0 rounded-none border px-4 py-2 font-sans text-[13px] font-medium uppercase transition-colors ${
                      active
                        ? "border-aubergine bg-aubergine text-beige"
                        : "border-aubergine/20 text-aubergine hover:border-brick"
                    }`}
                    style={{ letterSpacing: "0.12em" }}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <label className="flex items-center gap-2 text-[12px] uppercase text-aubergine/60" style={{ letterSpacing: "0.12em" }}>
                Topic
                <select
                  className={selectCls}
                  value={search.topic}
                  onChange={(e) => update({ topic: e.target.value as TopicKey })}
                >
                  {TOPIC_OPTIONS.map((o) => (
                    <option key={o.key} value={o.key}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex items-center gap-2 text-[12px] uppercase text-aubergine/60" style={{ letterSpacing: "0.12em" }}>
                Sort
                <select
                  className={selectCls}
                  value={search.sort}
                  onChange={(e) => update({ sort: e.target.value as SortKey })}
                >
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mt-8 flex justify-end">
            <div className="relative w-full max-w-[360px]">
              <Search size={16} className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-aubergine/40" />
              <input
                type="text"
                value={search.q}
                onChange={(e) => update({ q: e.target.value })}
                placeholder="Search articles..."
                className="w-full border-0 border-b border-aubergine/15 bg-transparent py-2 pl-7 font-sans text-[14px] italic text-aubergine outline-none transition-colors placeholder:text-aubergine/40 focus:border-brick"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          {pageItems.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display text-[24px] text-aubergine">No articles match these filters.</p>
              <button
                type="button"
                onClick={() => navigate({ search: { type: "all", topic: "all", sort: "recent", q: "", page: 1 } })}
                className="mt-4 font-sans text-[14px] font-medium text-brick underline decoration-brick decoration-1 underline-offset-4 transition-colors hover:text-sunset"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {pageItems.map((a) => (
                  <NewsCard key={a.id} article={a} />
                ))}
              </div>

              <div className="mt-16 flex items-center justify-center gap-6 font-sans text-[14px] text-aubergine">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => update({ page: page - 1 })}
                  className="transition-colors hover:text-brick disabled:cursor-not-allowed disabled:text-aubergine/30"
                >
                  ← Previous
                </button>
                <span>
                  Page <span className="text-brick">{page}</span> of {totalPages}
                </span>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => update({ page: page + 1 })}
                  className="transition-colors hover:text-brick disabled:cursor-not-allowed disabled:text-aubergine/30"
                >
                  Next →
                </button>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
