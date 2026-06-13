import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { NewsCard } from "@/components/geneva/NewsCard";
import { sortedNews } from "@/lib/news";

export function NewsPreview() {
  const latest = sortedNews().slice(0, 3);

  return (
    <SectionReveal
      as="section"
      id="news"
      ariaLabel="News and press"
      className="bg-beige-warm py-32 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-[800px] text-center">
          <EyebrowLabel className="text-brick">News &amp; Press</EyebrowLabel>
          <h2
            className="mt-6 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.015em" }}
          >
            Insights and <span className="italic text-brick">announcements</span> from Geneva.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {latest.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-16 flex justify-end">
          <Link
            to="/news"
            className="group inline-flex items-center gap-1.5 font-sans text-[14px] font-medium text-brick underline decoration-brick decoration-1 underline-offset-4 transition-colors hover:text-sunset"
          >
            View all News &amp; Press
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}
