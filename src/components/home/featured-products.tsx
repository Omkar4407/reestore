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
    <section className="py-16 md:py-24 bg-[#d3f7f0]">

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10 md:mb-14">

          <div>
            <p className="text-[#00b894] font-semibold text-sm md:text-base mb-1 md:mb-2">
              Featured Products
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Discover healthy favourites
            </h2>
          </div>

          <button className="border border-black/10 rounded-full px-4 py-2 sm:px-7 sm:py-3 text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition whitespace-nowrap">
            View All
          </button>
        </div>

        {/* PRODUCTS */}
        <div
  className="
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-2
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
              mt-12
sm:mt-16
              h-[180px]
sm:h-[220px]
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
                rounded-[24px]
                h-[250px]
sm:rounded-[30px]
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
                rounded-[24px]
sm:rounded-[30px]
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
                  -top-10
sm:-top-12
w-[82%]
h-[82%]
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
              pt-5
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
                sm:mb-3
              "
            >

              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

              <span>4.8</span>

              <span className="text-black/40">

                (42)
              </span>
            </div>

            {/* TITLE */}
            <div className="min-h-[56px]
sm:min-h-[64px]">

              <h3
                className="
                  text-[15px]
sm:text-[16px]
md:text-[17px]
                  leading-tight
                  font-semibold
                  tracking-tight
                  line-clamp-4
                "
              >

                {item.title}
              </h3>
            </div>

            {/* TAG */}
            <div className="mt-3 mb-5">

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#bdeee5]
                  text-[#0d5c4d]
                  px-3
py-1
text-xs
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
                gap-3
                mb-6
                mt-auto
              "
            >

              <span className="text-base
sm:text-lg font-bold">

                ₹{" "}
                {Math.round(
                  Number(
                    item.priceRange
                      .minVariantPrice
                      .amount
                  )
                )}
              </span>

              <span className="text-[#00b894] font-medium">

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
