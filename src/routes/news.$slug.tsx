import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/geneva/Navigation";
import { Footer } from "@/components/geneva/Footer";
import { getArticleBySlug, formatNewsDate } from "@/lib/news";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.headline} — Geneva Life Holdings` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.headline },
          { property: "og:description", content: loaderData.article.excerpt },
        ]
      : [],
  }),
  component: ArticleDetail,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <div className="min-h-dvh bg-beige text-aubergine">
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pb-32 pt-40 text-center md:px-10">
        <h1 className="font-display text-[32px] font-medium text-aubergine">Article not found.</h1>
        <p className="mt-4 text-aubergine/75">The article you are looking for is not available.</p>
        <Link
          to="/news"
          className="mt-8 inline-flex items-center gap-2 font-sans text-[14px] font-medium text-brick transition-colors hover:text-sunset"
        >
          <ArrowLeft size={15} /> Back to News &amp; Press
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function ArticleDetail() {
  const { article } = Route.useLoaderData();

  return (
    <div className="min-h-dvh bg-beige text-aubergine">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <article className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className="font-sans text-[11px] font-medium uppercase text-brick"
              style={{ letterSpacing: "0.16em" }}
            >
              {article.type}
            </span>
            <span className="font-sans text-[12px] text-aubergine/60">
              {formatNewsDate(article.date)}
            </span>
          </div>

          <h1
            className="mt-5 font-display font-medium text-aubergine"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15, letterSpacing: "-0.015em" }}
          >
            {article.headline}
          </h1>

          <div className="mt-6">
            <span
              className="inline-block border border-aubergine/20 px-3 py-1 font-sans text-[11px] font-medium uppercase text-aubergine/70"
              style={{ letterSpacing: "0.12em" }}
            >
              {article.topic}
            </span>
          </div>

          <div className="mt-12 space-y-6 font-sans text-[17px] text-aubergine/85" style={{ lineHeight: 1.7 }}>
            <p>{article.excerpt}</p>
            <p>
              Geneva Life Holdings brings institutional discipline to the structuring and
              preservation of private wealth. This perspective examines the considerations that
              shape how families, advisors, and family offices approach long-horizon planning, and
              how a platform built on transparency and continuity supports those objectives.
            </p>
            <p>
              Across every relationship, the firm applies a consistent standard; clarity in
              structure, discretion in service, and alignment of interests at each stage. These
              principles guide the way Geneva works with advisors, attorneys, accountants, and the
              families they serve.
            </p>
            <p>
              Full article content for this item will be published here. For inquiries related to
              this announcement or to speak with a member of the team, please reach out through the
              contact form on the homepage.
            </p>
          </div>

          <div className="mt-16 border-t border-aubergine/10 pt-8">
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-brick transition-colors hover:text-sunset"
            >
              <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to News &amp; Press
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
