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
      <div className="pt-40 px-6">
        Product not found
      </div>
    );
  }

  const variant = product.variants?.edges?.[0]?.node;
  const price = variant?.price?.amount;
  const comparePrice = variant?.compareAtPrice?.amount;

  return (
    <main className="bg-white min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-4 md:px-6">

      <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-10
    md:gap-16
    items-stretch
  "
>
          {/* LEFT */}
          <div
  className="
    lg:sticky
    lg:top-32
    h-full
    flex
    flex-col
  "
>
            <div className="space-y-4 md:space-y-6">

              {/* MAIN IMAGE */}
              <div className="relative bg-[#d3f7f0] rounded-[36px] md:rounded-[52px] h-[360px] sm:h-[480px] md:h-[600px] lg:h-[720px] overflow-hidden">

                {product.featuredImage && (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.title}
                    fill
                    unoptimized
                    className="object-contain p-8 md:p-14"
                  />
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="grid grid-cols-4 gap-3 md:gap-4">

                {product.images.edges
                  .slice(0, 4)
                  .map((img: any, i: number) => (
                    <div
                      key={i}
                      className="relative bg-[#f7fffd] rounded-[18px] md:rounded-[24px] h-[80px] sm:h-[110px] md:h-[140px] overflow-hidden border border-black/5"
                    >
                      <Image
                        src={img.node.url}
                        alt=""
                        fill
                        unoptimized
                        className="object-contain p-3 md:p-4"
                      />
                    </div>
                  ))}
              </div>
              {/* DELIVERY CHECKER */}
<div
  className="
    lg:sticky
    lg:top-[650px]
    mt-8
    bg-[#f7fffd]
    border
    border-black/5
    rounded-[32px]
    p-6
    shadow-[0_10px_30px_rgba(0,0,0,0.03)]
  "
>

  {/* HEADER */}
  <div className="mb-5">

    <p className="text-sm font-semibold text-[var(--mint-dark)] mb-2">

      Delivery Availability
    </p>

    <h3 className="text-2xl font-bold text-black">

      Check delivery to your area
    </h3>
  </div>

  {/* INPUT */}
  <div className="flex gap-3">

    <input
      type="text"
      placeholder="Enter Pincode"
      className="
        flex-1
        h-14
        rounded-full
        border
        border-black/5
        bg-white
        px-5
        text-sm
        outline-none
        focus:border-[var(--forest)]
      "
    />

    <button
      className="
        px-6
        rounded-full
        bg-[var(--forest)]
        text-white
        text-sm
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
      mt-5
      rounded-[24px]
      bg-[var(--sage)]
      p-4
    "
  >

    <div className="flex items-start gap-3">

      <div
        className="
          w-10
          h-10
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

        <p className="font-semibold text-[var(--forest-dark)] mb-1">

          Fast delivery available
        </p>

        <p className="text-sm text-black/60 leading-6">

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
    gap-8
  "
>
            {/* TAG */}
            <div className="inline-flex items-center justify-center bg-[#d3f7f0] text-[#0d5c4d] px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              Premium Wellness
            </div>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl sm:text-4xl lg:text-1xl font-bold tracking-tight leading-[1.05] mb-5 md:mb-8">
              {product.title}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-5 text-sm md:text-base">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-black/50 text-sm">
                42 reviews
              </span>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-3 md:gap-4 mb-7 md:mb-10">
              <span className="text-4xl md:text-1xl font-bold">
                ₹ {Math.round(Number(price))}
              </span>

              {comparePrice && (
                <span className="text-xl md:text-2xl text-black/30 line-through">
                  ₹ {Math.round(Number(comparePrice))}
                </span>
              )}
            </div>

            <ProductTabs
              description={product.descriptionHtml}
            />

            {/* BENEFITS */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-7 md:mb-10">
              <div className="bg-[#f7fffd] border border-black/5 rounded-full px-4 py-2 md:px-5 md:py-3 text-sm font-medium">
                High Protein
              </div>
              <div className="bg-[#f7fffd] border border-black/5 rounded-full px-4 py-2 md:px-5 md:py-3 text-sm font-medium">
                Clean Ingredients
              </div>
              <div className="bg-[#f7fffd] border border-black/5 rounded-full px-4 py-2 md:px-5 md:py-3 text-sm font-medium">
                Everyday Wellness
              </div>
            </div>


            {/* CTA */}
            <div className="space-y-4 md:space-y-5 mb-10 md:mb-14">

              {variant?.id && (
                <AddToCartButton variantId={variant.id} />
              )}

              <button className="w-full border bg-black text-white border-black/10 rounded-full py-4 md:py-6 text-lg md:text-xl font-semibold hover:bg-white hover:text-black hover:border-black transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
{/* FULL WIDTH FEATURES */}
<div
  className="
    mt-12
    grid
    grid-cols-1
    md:grid-cols-3
    gap-4
  "
>

  {/* QUALITY */}
  <div
    className="
      flex
      items-center
      gap-4
      bg-[#f7fffd]
      border
      border-black/5
      rounded-[26px]
      px-6
      py-5
    "
  >

    <div
      className="
        w-14
        h-14
        rounded-2xl
        bg-[var(--sage)]
        flex
        items-center
        justify-center
        shrink-0
      "
    >

      <ShieldCheck className="w-7 h-7 text-[var(--mint-dark)]" />
    </div>

    <div>

      <h3 className="font-semibold mb-1">

        Quality Checked
      </h3>

      <p className="text-black/50 text-sm leading-6">

        Premium ingredients & strict compliance standards.
      </p>
    </div>
  </div>

  {/* DELIVERY */}
  <div
    className="
      flex
      items-center
      gap-4
      bg-[#f7fffd]
      border
      border-black/5
      rounded-[26px]
      px-6
      py-5
    "
  >

    <div
      className="
        w-14
        h-14
        rounded-2xl
        bg-[var(--sage)]
        flex
        items-center
        justify-center
        shrink-0
      "
    >

      <Truck className="w-7 h-7 text-[var(--mint-dark)]" />
    </div>

    <div>

      <h3 className="font-semibold mb-1">

        Fast Delivery
      </h3>

      <p className="text-black/50 text-sm leading-6">

        Reliable shipping across India.
      </p>
    </div>
  </div>

  {/* WELLNESS */}
  <div
    className="
      flex
      items-center
      gap-4
      bg-[#f7fffd]
      border
      border-black/5
      rounded-[26px]
      px-6
      py-5
    "
  >

    <div
      className="
        w-14
        h-14
        rounded-2xl
        bg-[var(--sage)]
        flex
        items-center
        justify-center
        shrink-0
      "
    >

      <Leaf className="w-7 h-7 text-[var(--mint-dark)]" />
    </div>

    <div>

      <h3 className="font-semibold mb-1">

        Wellness Focused
      </h3>

      <p className="text-black/50 text-sm leading-6">

        Designed for modern healthy lifestyles.
      </p>
    </div>
  </div>
</div>
    </main>
  );
}
