import Link from "next/link";
import Image from "next/image";

import {
  shopifyFetch,
} from "@/lib/shopify";

import {
  getAllBlogsQuery,
} from "@/lib/queries";

const res = await shopifyFetch({
    query: getAllBlogsQuery,
  });
  
  const blogs =
    res.data.blogs.edges?.[0]?.node?.articles?.edges?.map(
      ({ node }: any) => ({
        title: node.title,
        slug: node.handle,
  
        category:
          node.blog?.title || "Wellness",
  
        date: new Date(
          node.publishedAt
        ).toDateString(),
  
        image:
          node.image?.url ||
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop",
  
        excerpt:
          node.excerpt ||
          "Discover practical wellness insights for healthier lifestyles.",
      })
    ) || [];

export default function BlogsPage() {
  return (
    <main className="bg-white min-h-screen pt-[110px] sm:pt-[140px] md:pt-[170px] pb-16 md:pb-24">

      {/* HERO */}
      <section className="px-4 md:px-6">

        <div
          className="
            max-w-[1600px]
            mx-auto
            rounded-[28px]
            md:rounded-[48px]
            bg-gradient-to-br
            from-[var(--forest)]
            to-[var(--mint-dark)]
            overflow-hidden
            relative
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]
            "
          />

          <div
            className="
              relative
              z-10
              px-5
              sm:px-8
              md:px-14
              py-10
              sm:py-14
              md:py-20
              text-center
            "
          >

            <div
              className="
                inline-flex
                px-4
                py-1.5
                md:px-5
                md:py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                text-white
                text-[11px]
                md:text-sm
                font-semibold
                mb-4
                md:mb-6
              "
            >

              ReeStore Journal
            </div>

            <h1
              className="
                text-[28px]
                sm:text-[34px]
                md:text-5xl
                lg:text-6xl
                font-black
                leading-[1.04]
                tracking-[-0.03em]
                text-white
              "
            >

              Wellness insights,
              <br />
              backed by science.
            </h1>

            <p
              className="
                mt-4
                md:mt-6
                text-[13px]
                leading-[1.85]
                font-medium
                text-white/80
                max-w-[620px]
                mx-auto
                md:text-xl
                md:leading-8
              "
            >

              Explore evidence-based articles on nutrition,
              wellness, supplements and healthier living.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="mt-10 md:mt-20 px-4 md:px-6">

        <div
          className="
            max-w-[1600px]
            mx-auto
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-4
            md:gap-6
          "
        >

{blogs.map((blog: any) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="
                group
                bg-[#f7fffd]
                rounded-[24px]
                md:rounded-[30px]
                overflow-hidden
                border
                border-black/5
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* IMAGE */}
              <div className="relative aspect-[1.35/1] overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 md:p-6">

                <div className="flex items-center gap-3 mb-3 md:mb-4">

                  <span
                    className="
                      px-3
                      py-1
                      md:px-4
                      md:py-1.5
                      rounded-full
                      bg-[var(--sage)]
                      text-[var(--forest-dark)]
                      text-[11px]
                      md:text-xs
                      font-semibold
                    "
                  >

                    {blog.category}
                  </span>

                  <span className="text-xs md:text-sm text-black/40">
                    {blog.date}
                  </span>
                </div>

                <h2
                  className="
                    text-[17px]
                    leading-[1.3]
                    font-black
                    tracking-tight
                    mb-3
                    md:mb-4
                    group-hover:text-[var(--forest-dark)]
                    transition-colors
                  "
                >

                  {blog.title}
                </h2>

                
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
