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
    <main className="bg-white min-h-screen pt-[140px] md:pt-[170px] pb-24">

      {/* HERO */}
      <section className="px-4 md:px-6">

        <div
          className="
            max-w-[1600px]
            mx-auto
            rounded-[36px]
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
              px-6
              md:px-14
              py-16
              md:py-20
              text-center
            "
          >

            <div
              className="
                inline-flex
                px-5
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                text-white
                text-sm
                font-semibold
                mb-6
              "
            >

              ReeStore Journal
            </div>

            <h1
              className="
                text-4xl
                md:text-6xl
                font-bold
                tracking-tight
                leading-[1]
                text-white
              "
            >

              Wellness insights,
              <br />
              backed by science.
            </h1>

            <p
              className="
                mt-6
                text-base
                md:text-xl
                leading-8
                text-white/80
                max-w-[760px]
                mx-auto
              "
            >

              Explore evidence-based articles on nutrition,
              wellness, supplements and healthier living.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="mt-20 px-4 md:px-6">

        <div
          className="
            max-w-[1600px]
            mx-auto
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          {blogs.map((blog) => (

            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="
                group
                bg-[#f7fffd]
                rounded-[30px]
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
              <div className="p-6">

                <div className="flex items-center gap-3 mb-4">

                  <span
                    className="
                      px-4
                      py-1.5
                      rounded-full
                      bg-[var(--sage)]
                      text-[var(--forest-dark)]
                      text-xs
                      font-semibold
                    "
                  >

                    {blog.category}
                  </span>

                  <span className="text-sm text-black/40">
                    {blog.date}
                  </span>
                </div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    leading-[1.25]
                    tracking-tight
                    mb-4
                    group-hover:text-[var(--forest-dark)]
                    transition-colors
                  "
                >

                  {blog.title}
                </h2>

                <p className="text-black/60 leading-7 text-[15px]">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}