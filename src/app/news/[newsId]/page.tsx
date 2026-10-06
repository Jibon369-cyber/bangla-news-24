

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    },
  );


  const data = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  const formattedDate = new Date(
    news.firstPublished,
  ).toLocaleDateString("bn-BD", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const paragraphs = news.text
    ?.split("\n")
    .map((paragraph: string) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-50">
      <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-900"
          >
            ← সব খবর
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">

          {/* Topics */}
          {news.topics?.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {news.topics.map(
                (topic: {
                  id: string;
                  name: string;
                }) => (
                  <span
                    key={topic.id}
                    className="rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-600"
                  >
                    {topic.name}
                  </span>
                ),
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {news.title}
          </h1>

          {/* Description */}
          {news.description?.blocks?.[0]?.text && (
            <p className="mt-5 max-w-4xl text-lg leading-9 text-slate-600 sm:text-xl">
              {news.description.blocks[0].text}
            </p>
          )}

          {/* Author + Date */}
          <div className="mt-7 flex flex-col gap-4 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between">

            {/* Author */}
            <div>
              {news.byline?.map(
                (author: {
                  name: string;
                  role: string;
                }) => (
                  <div key={author.name}>
                    <p className="font-semibold text-slate-900">
                      {author.name}
                    </p>

                    <p className="text-sm text-slate-500">
                      {author.role}
                    </p>
                  </div>
                ),
              )}
            </div>

            {/* Date + Source */}
            <div className="text-sm text-slate-500 sm:text-right">
              <p>{formattedDate}</p>

              <p className="mt-1 font-medium text-slate-700">
                {news.source}
              </p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {news.imageUrl && (
          <div className="relative mb-10 aspect-video overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="mx-auto max-w-3xl">
          <div className="text-[18px] leading-[2] text-slate-700 sm:text-[19px]">

            {paragraphs?.map(
              (paragraph: string, index: number) => {

                /*
                 * Short paragraphs without punctuation
                 * are treated as article headings.
                 */
                const isHeading =
                  paragraph.length < 80 &&
                  !paragraph.includes("।") &&
                  !paragraph.includes(",") &&
                  !paragraph.includes("“") &&
                  !paragraph.includes("”") &&
                  !paragraph.includes('"');

                if (isHeading) {
                  return (
                    <h2
                      key={index}
                      className="mb-4 mt-10 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl"
                    >
                      {paragraph}
                    </h2>
                  );
                }

                return (
                  <p
                    key={index}
                    className="mb-6"
                  >
                    {paragraph}
                  </p>
                );
              },
            )}

          </div>

          {/* Tags */}
          {news.tags?.length > 0 && (
            <div className="mt-12 border-t border-slate-200 pt-6">

              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                ট্যাগ
              </h3>

              <div className="flex flex-wrap gap-2">
                {news.tags.map(
                  (tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      #{tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          )}

          {/* Source */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <p className="text-sm text-slate-500">
              সংবাদসূত্র
            </p>

            <p className="mt-1 font-semibold text-slate-900">
              {news.source}
            </p>

            {news.sourceUrl && (
              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-red-600 transition hover:text-red-700 hover:underline"
              >
                মূল সংবাদ দেখুন →
              </a>
            )}
          </div>

        </div>
      </article>
    </main>
  );
};

export default NewsDetails;

