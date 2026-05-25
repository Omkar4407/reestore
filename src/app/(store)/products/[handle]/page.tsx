import Image from "next/image";

import {
  Star,
  ShieldCheck,
  Truck,
  Leaf,
} from "lucide-react";

import { shopifyFetch } from "@/lib/shopify";
import { getProductQuery } from "@/lib/queries";
import AddToCartButton from "@/components/cart/add-to-cart-button";
import ProductTabs from "@/components/product/product-tabs";

interface Props {
  params: Promise<{
    handle: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {

  const { handle } = await params;

  const res = await shopifyFetch({
    query: getProductQuery,
    variables: { handle },
  });

  const product = res.data.product;

  if (!product) {
    return (
      <div className="pt-32 px-6">
        Product not found
      </div>
    );
  }

  const variant = product.variants?.edges?.[0]?.node;

  const price = variant?.price?.amount;

  const comparePrice =
    variant?.compareAtPrice?.amount;

  return (
    <main
      className="
        bg-white
        min-h-screen
        pt-24
        md:pt-28
        pb-10
        md:pb-14
        overflow-hidden
      "
    >

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-7
            md:gap-10
            items-stretch
          "
        >

          {/* LEFT */}
          <div
            className="
              lg:sticky
              lg:top-28
              h-full
              flex
              flex-col
            "
          >

            <div className="space-y-4">

              {/* MAIN IMAGE */}
              <div
                className="
                  relative
                  bg-[#d3f7f0]
                  rounded-[24px]
                  md:rounded-[32px]
                  h-[300px]
                  sm:h-[400px]
                  md:h-[480px]
                  lg:h-[560px]
                  overflow-hidden
                "
              >

                {product.featuredImage && (

                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    unoptimized
                    className="
                      object-contain
                      p-5
                      md:p-8
                    "
                  />
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-3">

                {product.images.edges
                  .slice(0, 4)
                  .map((img: any, i: number) => (

                    <div
                      key={i}
                      className="
                        relative
                        bg-[#f7fffd]
                        rounded-[14px]
                        md:rounded-[18px]
                        h-[70px]
                        sm:h-[90px]
                        md:h-[110px]
                        overflow-hidden
                        border
                        border-black/5
                      "
                    >

                      <Image
                        src={img.node.url}
                        alt=""
                        fill
                        unoptimized
                        className="
                          object-contain
                          p-3
                        "
                      />
                    </div>
                  ))}
              </div>

              {/* DELIVERY CHECKER */}
              <div
                className="
                  lg:sticky
                  lg:top-[600px]
                  mt-5
                  bg-[#f7fffd]
                  border
                  border-black/5
                  rounded-[22px]
                  p-4
                  md:p-5
                  shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                "
              >

                {/* HEADER */}
                <div className="mb-4">

                  <p
                    className="
                      text-xs
                      font-semibold
                      text-[var(--mint-dark)]
                      mb-2
                    "
                  >

                    Delivery Availability
                  </p>

                  <h3
                    className="
                      text-lg
                      md:text-xl
                      font-bold
                      text-black
                    "
                  >

                    Check delivery to your area
                  </h3>
                </div>

                {/* INPUT */}
                <div className="flex gap-2">

                  <input
                    type="text"
                    placeholder="Enter Pincode"
                    className="
                      flex-1
                      h-11
                      rounded-full
                      border
                      border-black/5
                      bg-white
                      px-4
                      text-sm
                      outline-none
                      focus:border-[var(--forest)]
                    "
                  />

                  <button
                    className="
                      px-5
                      rounded-full
                      bg-[var(--forest)]
                      text-white
                      text-xs
                      font-semibold
                      hover:opacity-90
                      transition
                    "
                  >

                    Check
                  </button>
                </div>

                {/* INFO */}
                <div
                  className="
                    mt-4
                    rounded-[18px]
                    bg-[var(--sage)]
                    p-4
                  "
                >

                  <div className="flex items-start gap-3">

                    <div
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-white
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >

                      🚚
                    </div>

                    <div>

                      <p
                        className="
                          font-semibold
                          text-sm
                          text-[var(--forest-dark)]
                          mb-1
                        "
                      >

                        Fast delivery available
                      </p>

                      <p
                        className="
                          text-xs
                          text-black/60
                          leading-5
                        "
                      >

                        Most metro cities delivered within 2-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              h-full
              flex
              flex-col
              gap-6
            "
          >

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                bg-[#d3f7f0]
                text-[#0d5c4d]
                px-3
                py-1
                rounded-full
                text-xs
                font-semibold
                mb-2
                w-fit
              "
            >

              Premium Wellness
            </div>

            {/* TITLE */}
            <h1
              className="
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                tracking-tight
                leading-[1.05]
                mb-1
              "
            >

              {product.title}
            </h1>

            {/* RATING */}
            <div
              className="
                flex
                items-center
                gap-2
                mb-1
                text-sm
              "
            >

              <div className="flex items-center gap-1">

                {[1, 2, 3, 4, 5].map((i) => (

                  <Star
                    key={i}
                    className="
                      w-3.5
                      h-3.5
                      md:w-4
                      md:h-4
                      fill-yellow-400
                      text-yellow-400
                    "
                  />
                ))}
              </div>

              <span className="text-black/50 text-xs">
                42 reviews
              </span>
            </div>

            {/* PRICE */}
            <div
              className="
                flex
                items-center
                gap-3
                mb-3
                md:mb-1
              "
            >

              <span
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                "
              >

                ₹ {Math.round(Number(price))}
              </span>

              {comparePrice && (

                <span
                  className="
                    text-lg
                    text-black/30
                    line-through
                  "
                >

                  ₹ {Math.round(Number(comparePrice))}
                </span>
              )}
            </div>

            <ProductTabs
              description={product.descriptionHtml}
            />

            {/* BENEFITS */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                mb-5
                md:mb-6
              "
            >

              <div
                className="
                  bg-[#f7fffd]
                  border
                  border-black/5
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                "
              >

                High Protein
              </div>

              <div
                className="
                  bg-[#f7fffd]
                  border
                  border-black/5
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                "
              >

                Clean Ingredients
              </div>

              <div
                className="
                  bg-[#f7fffd]
                  border
                  border-black/5
                  rounded-full
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                "
              >

                Everyday Wellness
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                space-y-3
                mb-6
                md:mb-8
              "
            >

              {variant?.id && (

                <AddToCartButton
                  variantId={variant.id}
                />
              )}

              <button
                className="
                  w-full
                  border
                  bg-black
                  text-white
                  border-black/10
                  rounded-full
                  h-11
                  text-sm
                  font-semibold
                  hover:bg-white
                  hover:text-black
                  hover:border-black
                  transition
                "
              >

                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            md:grid-cols-3
            gap-3
          "
        >

          {/* QUALITY */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-[#f7fffd]
              border
              border-black/5
              rounded-[18px]
              px-4
              py-4
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[var(--sage)]
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <ShieldCheck
                className="
                  w-5
                  h-5
                  text-[var(--mint-dark)]
                "
              />
            </div>

            <div>

              <h3
                className="
                  text-sm
                  font-semibold
                  mb-1
                "
              >

                Quality Checked
              </h3>

              <p
                className="
                  text-black/50
                  text-xs
                  leading-5
                "
              >

                Premium ingredients & strict compliance standards.
              </p>
            </div>
          </div>

          {/* DELIVERY */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-[#f7fffd]
              border
              border-black/5
              rounded-[18px]
              px-4
              py-4
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[var(--sage)]
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <Truck
                className="
                  w-5
                  h-5
                  text-[var(--mint-dark)]
                "
              />
            </div>

            <div>

              <h3
                className="
                  text-sm
                  font-semibold
                  mb-1
                "
              >

                Fast Delivery
              </h3>

              <p
                className="
                  text-black/50
                  text-xs
                  leading-5
                "
              >

                Reliable shipping across India.
              </p>
            </div>
          </div>

          {/* WELLNESS */}
          <div
            className="
              flex
              items-center
              gap-3
              bg-[#f7fffd]
              border
              border-black/5
              rounded-[18px]
              px-4
              py-4
            "
          >

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[var(--sage)]
                flex
                items-center
                justify-center
                shrink-0
              "
            >

              <Leaf
                className="
                  w-5
                  h-5
                  text-[var(--mint-dark)]
                "
              />
            </div>

            <div>

              <h3
                className="
                  text-sm
                  font-semibold
                  mb-1
                "
              >

                Wellness Focused
              </h3>

              <p
                className="
                  text-black/50
                  text-xs
                  leading-5
                "
              >

                Designed for modern healthy lifestyles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}