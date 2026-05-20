import Image from "next/image";
import Link from "next/link";

import { shopifyFetch } from "@/lib/shopify";
import { getBlogsQuery } from "@/lib/queries";

import {
  Camera,
  Play,
  ArrowUp,
  ArrowRight,
} from "lucide-react";

export default async function Footer() {

  const res = await shopifyFetch({
    query: getBlogsQuery,
  });

  const blogs =
    res?.data?.blogs?.edges?.[0]?.node?.articles?.edges?.map(
      ({ node }: any) => ({
        title: node.title,
        slug: node.handle,

        category:
          node.blog?.title || "Wellness",

        image:
          node.image?.url ||
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop",

          excerpt: node.excerpt || "",
      })
    ) || [];

  return (
    <>
      {/* BLOG SECTION */}
      <section className="bg-[#d3f7f0] pt-16 md:pt-28">

        <div className="max-w-[1600px] mx-auto px-4 md:px-6">

          {/* HEADER */}
          <div className="text-center mb-10 md:mb-16">

            <p className="text-[#00b894] font-semibold mb-3 md:mb-4">
              Insights & Wellness
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111] mb-4 md:mb-6">
              Blog & Articles
            </h2>

            <p className="text-black/60 max-w-[760px] mx-auto text-base md:text-lg leading-7 md:leading-8">
              Explore expert wellness insights, smarter nutrition habits and practical guides for healthier living.
            </p>
          </div>

          {/* BLOG IMAGES - desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 relative z-20">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="
                  relative
                  h-[420px]
                  rounded-t-[34px]
                  overflow-hidden
                  group
                "
              >

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  unoptimized
                  className="
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-700
                  "
                />

                <div className="absolute top-5 left-5 bg-[#1f6861] text-white text-sm font-semibold px-4 py-1 rounded-full z-20">
                  {blog.category}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            ))}
          </div>

          {/* BLOG CARDS - mobile */}
          <div className="md:hidden space-y-5 pb-10">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  shadow-sm
                  flex
                  flex-col
                "
              >

                <div className="relative h-[200px]">

                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-[#1f6861] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {blog.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">

                  <h3 className="text-lg font-bold leading-tight text-[#111] mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-black/60 leading-6 text-sm">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-5">

                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="
                        inline-flex
                        items-center
                        justify-center
                        bg-[#0d5c4d]
                        text-white
                        px-5
                        py-2.5
                        rounded-full
                        text-sm
                        font-medium
                      "
                    >

                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-4">

              <Link
                href="/blogs"
                className="
                  border
                  border-black/10
                  rounded-full
                  px-7
                  py-3
                  text-sm
                  font-medium
                  hover:bg-black
                  hover:text-white
                  transition
                  inline-flex
                  items-center
                  justify-center
                "
              >

                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d5c4d] text-white pt-0 pb-10 overflow-hidden">

        {/* BLOG TEXT CARDS - desktop */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 -mt-1 relative z-30">

          <div className="hidden md:grid md:grid-cols-3 gap-8">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="
                  bg-[#d3f7f0]
                  rounded-b-[34px]
                  p-8
                  flex
                  flex-col
                  h-full
                "
              >

                <h3 className="text-[28px] md:text-[32px] leading-tight font-bold text-[#111] mb-4 md:mb-5">
                  {blog.title}
                </h3>

                <p className="text-black/60 leading-7">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-8">

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-[#1f6861]
                      text-white
                      px-5
                      py-3
                      rounded-full
                      font-semibold
                      hover:gap-3
                      transition-all
                    "
                  >

                    Read More

                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW ALL - desktop */}
          <div className="hidden md:flex justify-center mt-10 mb-20">

            <Link
              href="/blogs"
              className="
                border
                border-white/10
                rounded-full
                px-8
                py-4
                font-semibold
                hover:bg-white
                hover:text-black
                transition
              "
            >

              View All Blogs
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-6 pt-10 md:pt-0">

          {/* TOP */}
          <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-white/10 pb-5 md:pb-6">

            {/* LOGO */}
            <Link
              href="/"
              className="relative w-[180px] h-[54px] sm:w-[220px] sm:h-[66px] md:w-[280px] md:h-[82px] shrink-0"
            >

              <Image
                src="/logo.svg"
                alt="Reestore"
                fill
                priority
                unoptimized
                className="object-contain object-left"
              />
            </Link>

            {/* SCROLL TOP */}
            <a
              href="#top"
              className="
                w-12
                h-12
                md:w-14
                md:h-14
                rounded-2xl
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
              "
            >

              <ArrowUp className="w-5 h-5" />
            </a>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {/* COMPANY */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
                Company
              </h3>

              <div className="flex flex-col gap-3 md:gap-4 text-white/70 text-sm">

                <Link href="/about-us" className="hover:text-white transition">
                  About Us
                </Link>

                <Link href="/quality-compliance" className="hover:text-white transition">
                  Quality & Compliance
                </Link>

                <Link href="/contact-us" className="hover:text-white transition">
                  Contact Us
                </Link>

                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>

                <Link href="/terms-of-service" className="hover:text-white transition">
                  Terms of Service
                </Link>

                <Link href="/refund-policy" className="hover:text-white transition">
                  Refund Policy
                </Link>

                <Link href="/shipping-policy" className="hover:text-white transition">
                  Shipping Policy
                </Link>
              </div>
            </div>

            {/* CATEGORIES */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
                Categories
              </h3>

              <div className="space-y-3 md:space-y-4 text-white/70 text-sm">
                <p>Food Products</p>
                <p>Supplements</p>
                <p>Nutraceuticals</p>
                <p>Health Gadgets</p>
              </div>
            </div>

            {/* CONTACT */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
                Contact
              </h3>

              <div className="space-y-3 md:space-y-4 text-white/70 text-sm">
                <p>ecom@reework.in</p>
                <p>+91 8652631386</p>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>

            {/* SOCIALS */}
            <div>

              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">
                Follow Us
              </h3>

              <div className="flex items-center gap-3 md:gap-4">

                <a
                  href="https://www.instagram.com/ree_coach_?igsh=aGo3dzhpeXJ1a3B0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >

                  <Camera className="w-5 h-5" />
                </a>

                <a
                  href="https://www.youtube.com/@reecoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
                >

                  <Play className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-white/50 text-center">

            <p>
              © 2026 Reestore. All rights reserved.
            </p>

            <p>
              Designed for modern wellness.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}