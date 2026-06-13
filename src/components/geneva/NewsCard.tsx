import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/news";
import { formatNewsDate } from "@/lib/news";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group flex flex-col border border-aubergine/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brick">
      <p
        className="font-sans text-[11px] font-medium uppercase text-brick"
        style={{ letterSpacing: "0.16em" }}
      >
        {article.type}
      </p>
      <p className="mt-2 font-sans text-[12px] text-aubergine/60">
        {formatNewsDate(article.date)}
      </p>

      <h3
        className="mt-4 font-display text-[22px] font-medium text-aubergine"
        style={{ lineHeight: 1.3 }}
      >
        <Link
          to="/news/$slug"
          params={{ slug: article.slug }}
          className="transition-colors hover:text-brick"
        >
          {article.headline}
        </Link>
      </h3>

      <p
        className="mt-3 font-sans text-[14px] text-aubergine/75"
        style={{
          lineHeight: 1.6,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {article.excerpt}
      </p>

      <div className="mt-6">
        <Link
          to="/news/$slug"
          params={{ slug: article.slug }}
          className="group/link inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-brick transition-colors hover:text-sunset"
        >
          Read more
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}
