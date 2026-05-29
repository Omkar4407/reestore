"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import AddToCartButton from "@/components/cart/add-to-cart-button";

interface ProductCardProps {
  item: any;
}

export default function ProductCard({
  item,
}: ProductCardProps) {

  const variantId =
    item?.variants?.edges?.[0]?.node?.id;

  return (

    <div
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
        className="
          flex-1
          flex
          flex-col
        "
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
              h-[180px]
              sm:h-[260px]
              lg:h-[320px]
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
                h-[130px]
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
                  -top-14
                  sm:-top-16
                  w-full
                  h-full
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
                    drop-shadow-[0_38px_50px_rgba(0,0,0,0.22)]
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
              pt-1
              md:pt-2
            "
          >

            {/* TITLE */}
            <div
              className="
                min-h-[44px]
                sm:min-h-[56px]
              "
            >

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

            {/* VENDOR */}
            {item.vendor && (

              <p
                className="
                  mt-1
                  text-[11px]
                  font-medium
                  text-black/45
                "
              >
                {item.vendor}
              </p>
            )}

            {/* TAG */}
            <div
              className="
                mt-1
                mb-2
                md:mt-2
                md:mb-4
              "
            >

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

              <span
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  font-bold
                "
              >

                ₹{" "}
                {Math.round(
                  Number(
                    item.priceRange
                      ?.minVariantPrice
                      ?.amount || 0
                  )
                )}
              </span>

              <span
                className="
                  text-[#00b894]
                  font-medium
                  text-xs
                  sm:text-sm
                "
              >

                In Stock
              </span>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* BUTTON */}
      <div
        className="
          mt-auto
          pt-1
          pb-1
        "
      >

        {variantId && (

          <AddToCartButton
            variantId={variantId}
          />
        )}
      </div>
    </div>
  );
}