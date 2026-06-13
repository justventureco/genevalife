import { useEffect, useRef, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, ChevronDown, Check } from "lucide-react";
import { Navigation } from "@/components/geneva/Navigation";
import { Footer } from "@/components/geneva/Footer";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { NewsCard } from "@/components/geneva/NewsCard";
import { newsData, NEWS_TYPES, type NewsType, type NewsTopic } from "@/lib/news";

const PER_PAGE = 12;

type TopicKey = "all" | "regulatory" | "wealth-structuring" | "platform" | "perspective";
type SortKey = "recent" | "oldest";

const TOPIC_OPTIONS: { key: TopicKey; label: string; value: NewsTopic | null }[] = [
  { key: "all", label: "All Topics", value: null },
  { key: "regulatory", label: "Regulatory & Compliance", value: "Regulatory & Compliance" },
  { key: "wealth-structuring", label: "Wealth Structuring", value: "Wealth Structuring" },
  { key: "platform", label: "Platform News", value: "Platform News" },
  { key: "perspective", label: "Industry Perspective", value: "Industry Perspective" },
];

type NewsSearch = {
  types: NewsType[];
  topic: TopicKey;
  sort: SortKey;
  q: string;
  page: number;
};

function asTypes(v: unknown): NewsType[] {
  const arr = Array.isArray(v) ? v : typeof v === "string" && v ? v.split(",") : [];
  return arr.filter((t): t is NewsType => NEWS_TYPES.includes(t as NewsType));
}
function asTopicKey(v: unknown): TopicKey {
  return TOPIC_OPTIONS.some((p) => p.key === v) ? (v as TopicKey) : "all";
}

export const Route = createFileRoute("/news/")({
  validateSearch: (search: Record<string, unknown>): NewsSearch => ({
    types: asTypes(search.types),
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

function TypeDropdown({
  selected,
  onChange,
}: {
  selected: NewsType[];
  onChange: (next: NewsType[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const allSelected = selected.length === 0 || selected.length === NEWS_TYPES.length;
  const label =
    allSelected
      ? "All Types"
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  const toggle = (t: NewsType) => {
    const base = allSelected ? [] : selected;
    const next = base.includes(t) ? base.filter((x) => x !== t) : [...base, t];
    onChange(next.length === NEWS_TYPES.length ? [] : next);
  };

  return (
    <div ref={ref} className="relative">
      <label className="flex items-center gap-2 text-[12px] uppercase text-aubergine/60" style={{ letterSpacing: "0.12em" }}>
        Type
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex min-w-[160px] items-center justify-between gap-3 border-0 border-b border-aubergine/20 bg-transparent py-2 px-3 font-sans text-[14px] normal-case tracking-normal text-aubergine outline-none transition-colors hover:border-brick"
        >
          {label}
          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </label>

      {open && (
        <div className="absolute left-0 top-full z-40 mt-1 w-[220px] rounded-none border border-aubergine/15 bg-white py-1 shadow-lg">
          <button
            type="button"
            onClick={() => onChange([])}
            className="flex w-full items-center gap-3 px-4 py-2 text-left font-sans text-[14px] text-aubergine transition-colors hover:bg-beige"
          >
            <span className="flex h-4 w-4 items-center justify-center border border-aubergine/40">
              {allSelected && <Check size={12} className="text-brick" />}
            </span>
            All
          </button>
          {NEWS_TYPES.map((t) => {
            const checked = !allSelected && selected.includes(t);
            return (
              <button
                key={t}
                type="button"
                onClick={() => toggle(t)}
                className="flex w-full items-center gap-3 px-4 py-2 text-left font-sans text-[14px] text-aubergine transition-colors hover:bg-beige"
              >
                <span className="flex h-4 w-4 items-center justify-center border border-aubergine/40">
                  {checked && <Check size={12} className="text-brick" />}
                </span>
                {t}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function NewsArchive() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const update = (patch: Partial<NewsSearch>) => {
    navigate({
      search: (prev: NewsSearch) => ({ ...prev, ...patch, page: patch.page ?? 1 }),
    });
  };

  const topicValue = TOPIC_OPTIONS.find((p) => p.key === search.topic)?.value ?? null;
  const query = search.q.trim().toLowerCase();
  const typesActive = search.types.length > 0 && search.types.length < NEWS_TYPES.length;

  const filtered = newsData
    .filter((a) => (typesActive ? search.types.includes(a.type) : true))
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
        <section className="bg-aubergine py-24">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
            <EyebrowLabel className="text-sunset">News &amp; Press</EyebrowLabel>
            <h1
              className="mt-6 font-display font-medium text-beige"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
            >
              Insights and <span className="italic text-sunset">announcements</span> from Geneva.
            </h1>
            <p className="mx-auto mt-6 max-w-[720px] font-sans text-[18px] text-beige/80" style={{ lineHeight: 1.6 }}>
              Press releases, whitepapers, and institutional perspectives from across the platform.
            </p>
          </div>
        </section>

        {/* Filter & sort bar */}
        <div className="sticky top-20 z-30 border-y border-aubergine/10 bg-white py-6">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-6 px-6 md:px-10">
            <TypeDropdown
              selected={search.types}
              onChange={(next) => update({ types: next })}
            />

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
                onClick={() => navigate({ search: { types: [], topic: "all", sort: "recent", q: "", page: 1 } })}
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
