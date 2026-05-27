"use client";

import Image from "next/image";
import Link from "next/link";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

import AddToCartButton from "@/components/cart/add-to-cart-button";

interface ProductProps {
  products: {
    node: {
      id: string;
      title: string;
      handle: string;
      featuredImage?: {
        url: string;
      };
      variants: {
        edges: {
          node: {
            id: string;
          };
        }[];
      };
      priceRange: {
        minVariantPrice: {
          amount: string;
          currencyCode: string;
        };
      };
    };
  }[];
}

export default function FeaturedProducts({
  products,
}: ProductProps) {

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-[#d3f7f0]">

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8 md:mb-14 gap-4">

          <div>
            <p className="text-[#00b894] font-semibold text-[13px] leading-[1.85] mb-1 md:mb-2">
              Featured Products
            </p>

            <h2 className="text-[28px] sm:text-[34px] md:text-4xl font-black leading-[1.04] tracking-[-0.03em]">
              Discover healthy favourites
            </h2>
          </div>

          <button className="border border-black/10 rounded-full px-4 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition whitespace-nowrap shrink-0">
            View All
          </button>
        </div>

        {/* PRODUCTS */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-3
            md:gap-5
          "
        >
{products.map((product) => {

  const item = product.node;

  const variantId =
    item.variants.edges?.[0]?.node?.id;

  return (

    <div
      key={item.id}
      className="
        group
        flex
        flex-col
        h-full
      "
    >

      {/* CARD */}
      <Link
        href={`/products/${item.handle}`}
        className="flex-1 flex flex-col"
      >

        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="
            flex
            flex-col
            h-full
          "
        >

          {/* IMAGE AREA */}
          <div
            className="
              relative
              mt-10
              sm:mt-14
              h-[140px]
              sm:h-[200px]
              lg:h-[240px]
              overflow-visible
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            {/* OUTER BOX */}
            <div
              className="
                absolute
                inset-0
                bg-white
                rounded-[20px]
                h-[200px]
                sm:rounded-[28px]
                sm:h-[250px]
              "
            />

            {/* SOFT GRADIENT */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/25
                to-transparent
                rounded-[20px]
                sm:rounded-[28px]
              "
            />

            {/* PRODUCT IMAGE */}
            {item.featuredImage && (

              <motion.div
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  absolute
                  -top-8
                  sm:-top-10
                  w-[80%]
                  h-[80%]
                  z-10
                "
              >

                <Image
                  src={item.featuredImage.url}
                  alt={item.title}
                  fill
                  priority
                  unoptimized
                  className="
                    object-contain
                    drop-shadow-[0_30px_40px_rgba(0,0,0,0.18)]
                  "
                />
              </motion.div>
            )}
          </div>

          {/* CONTENT */}
          <div
            className="
              flex
              flex-col
              flex-1
              pt-4
              md:pt-5
            "
          >

            {/* RATING */}
            <div
              className="
                flex
                items-center
                gap-1
                text-sm
                mb-2
              "
            >

              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />

              <span className="text-xs sm:text-sm">4.8</span>

              <span className="text-black/40 text-xs sm:text-sm">
                (42)
              </span>
            </div>

            {/* TITLE */}
            <div className="min-h-[44px] sm:min-h-[56px]">

              <h3
                className="
                  text-[13px]
                  sm:text-[15px]
                  md:text-[17px]
                  leading-[1.3]
                  font-black
                  tracking-tight
                  line-clamp-3
                  sm:line-clamp-4
                "
              >

                {item.title}
              </h3>
            </div>

            {/* TAG */}
            <div className="mt-2 mb-3 md:mt-3 md:mb-5">

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#bdeee5]
                  text-[#0d5c4d]
                  px-2.5
                  py-0.5
                  md:px-3
                  md:py-1
                  text-[10px]
                  md:text-xs
                  rounded-full
                  font-semibold
                "
              >

                Premium Wellness
              </span>
            </div>

            {/* PRICE */}
            <div
              className="
                flex
                items-center
                gap-2
                md:gap-3
                mb-4
                md:mb-6
                mt-auto
              "
            >

              <span className="text-sm sm:text-base md:text-lg font-bold">

                ₹{" "}
                {Math.round(
                  Number(
                    item.priceRange
                      .minVariantPrice
                      .amount
                  )
                )}
              </span>

              <span className="text-[#00b894] font-medium text-xs sm:text-sm">

                In Stock
              </span>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* BUTTON */}
      <div className="mt-auto pt-1 pb-1">

        {variantId && (

          <AddToCartButton
            variantId={variantId}
          />
        )}
      </div>
    </div>
  );
})}
</div>
      </div>
    </section>
  );
}
