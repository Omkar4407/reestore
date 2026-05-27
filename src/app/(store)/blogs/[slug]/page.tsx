import Image from "next/image";
import { notFound } from "next/navigation";

import {
  shopifyFetch,
} from "@/lib/shopify";

import {
  getBlogArticleQuery,
} from "@/lib/queries";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const res = await shopifyFetch({
    query: getBlogArticleQuery,
    variables: {
      handle: slug,
    },
  });

  const article =
    res.data.articles.edges?.[0]?.node;

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-[110px] sm:pt-[140px] md:pt-[170px] pb-16 md:pb-24">

      <article className="max-w-[960px] mx-auto px-4 md:px-6">

        {/* CATEGORY */}
        <div className="mb-4 md:mb-6">

          <span
            className="
              inline-flex
              px-4
              py-1.5
              md:px-5
              md:py-2
              rounded-full
              bg-[var(--sage)]
              text-[var(--forest-dark)]
              text-[11px]
              md:text-sm
              font-semibold
            "
          >

            {article.blog?.title || "Wellness"}
          </span>
        </div>

        {/* TITLE */}
        <h1
          className="
            text-[28px]
            sm:text-[34px]
            md:text-5xl
            lg:text-6xl
            font-black
            leading-[1.04]
            tracking-[-0.03em]
            max-w-[900px]
          "
        >

          {article.title}
        </h1>

        {/* DATE */}
        <p className="mt-4 md:mt-6 text-black/40 text-[13px] leading-[1.85]">

          {new Date(
            article.publishedAt
          ).toDateString()}
        </p>

        {/* IMAGE */}
        {article.image?.url && (

          <div
            className="
              relative
              mt-7
              md:mt-10
              aspect-[1.7/1]
              rounded-[22px]
              md:rounded-[36px]
              overflow-hidden
            "
          >

            <Image
              src={article.image.url}
              alt={article.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        )}

        {/* CONTENT */}
        <div
          className="
            mt-8
            md:mt-12
            prose
            prose-sm
            md:prose-lg
            max-w-none
            prose-headings:font-bold
            prose-p:text-black/70
          "
          dangerouslySetInnerHTML={{
            __html: article.contentHtml,
          }}
        />
      </article>
    </main>
  );
}
