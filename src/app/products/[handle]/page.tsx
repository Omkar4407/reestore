import Image from "next/image";

import {
  Star,
  ShieldCheck,
  Truck,
  ChevronDown,
  Leaf,
} from "lucide-react";

import { shopifyFetch } from "@/lib/shopify";
import { getProductQuery } from "@/lib/queries";
import AddToCartButton from "@/components/cart/add-to-cart-button";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-32">

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
            </div>
          </div>

          {/* RIGHT */}
          <div>

            {/* TAG */}
            <div className="inline-flex items-center justify-center bg-[#d3f7f0] text-[#0d5c4d] px-4 py-1.5 md:px-5 md:py-2 rounded-full text-sm font-semibold mb-4 md:mb-6">
              Premium Wellness
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-5 md:mb-8">
              {product.title}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mb-5 md:mb-8">
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
              <span className="text-4xl md:text-5xl font-bold">
                ₹ {Math.round(Number(price))}
              </span>

              {comparePrice && (
                <span className="text-xl md:text-2xl text-black/30 line-through">
                  ₹ {Math.round(Number(comparePrice))}
                </span>
              )}
            </div>

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

            {/* DESCRIPTION */}
            <div
              className="text-black/65 text-base md:text-lg leading-7 md:leading-8 mb-8 md:mb-12"
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml,
              }}
            />

            {/* CTA */}
            <div className="space-y-4 md:space-y-5 mb-10 md:mb-14">

              {variant?.id && (
                <AddToCartButton variantId={variant.id} />
              )}

              <button className="w-full border border-black/10 rounded-full py-4 md:py-6 text-lg md:text-xl font-semibold hover:bg-black hover:text-white transition">
                Buy Now
              </button>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">

              <div className="bg-[#f7fffd] rounded-[24px] md:rounded-[28px] p-5 md:p-6 border border-black/5">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-[#00b894] mb-3 md:mb-4" />
                <h3 className="font-semibold mb-1 md:mb-2">Quality Checked</h3>
                <p className="text-black/50 text-sm leading-6">
                  Premium ingredients & strict compliance standards.
                </p>
              </div>

              <div className="bg-[#f7fffd] rounded-[24px] md:rounded-[28px] p-5 md:p-6 border border-black/5">
                <Truck className="w-6 h-6 md:w-7 md:h-7 text-[#00b894] mb-3 md:mb-4" />
                <h3 className="font-semibold mb-1 md:mb-2">Fast Delivery</h3>
                <p className="text-black/50 text-sm leading-6">
                  Reliable shipping across India.
                </p>
              </div>

              <div className="bg-[#f7fffd] rounded-[24px] md:rounded-[28px] p-5 md:p-6 border border-black/5">
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-[#00b894] mb-3 md:mb-4" />
                <h3 className="font-semibold mb-1 md:mb-2">Wellness Focused</h3>
                <p className="text-black/50 text-sm leading-6">
                  Designed for modern healthy lifestyles.
                </p>
              </div>
            </div>

            {/* PRODUCT DETAILS ACCORDIONS */}
            <div className="mt-14 md:mt-20 border-t border-black/10">

              <details className="group border-b border-black/10 py-5 md:py-7">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    Ingredients
                  </h3>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 transition group-open:rotate-180" />
                </summary>
                <div className="pt-5 text-black/60 leading-7 md:leading-8 text-base md:text-lg max-w-[90%]">
                  Ingredients information will be updated soon. Future Shopify metafields can dynamically render ingredient lists here.
                </div>
              </details>

              <details className="group border-b border-black/10 py-5 md:py-7">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    Allergen Information
                  </h3>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 transition group-open:rotate-180" />
                </summary>
                <div className="pt-5 text-black/60 leading-7 md:leading-8 text-base md:text-lg max-w-[90%]">
                  Allergen and dietary information will be added soon.
                </div>
              </details>

              <details className="group border-b border-black/10 py-5 md:py-7">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    Additional Information
                  </h3>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 transition group-open:rotate-180" />
                </summary>
                <div className="pt-5 text-black/60 leading-7 md:leading-8 text-base md:text-lg max-w-[90%]">
                  Storage instructions, usage guidance and nutritional insights will appear here.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
