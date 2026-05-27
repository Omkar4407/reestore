import Hero from "@/components/home/hero";
import FeaturedProducts from "@/components/home/featured-products";
import ReviewsSection from "@/components/home/reviews-section";
import WhyReestore from "@/components/home/why-reestore";
import AppSection from "@/components/home/app-section";

import { shopifyFetch } from "@/lib/shopify";
import { getProductsQuery } from "@/lib/queries";

export default async function HomePage() {

  const res = await shopifyFetch({
    query: getProductsQuery,
  });

  const products =
  res?.data?.collection?.products?.edges || [];
  return (
    <main className="relative bg-white overflow-hidden">

      <div className="relative z-10">

        <Hero />

        <FeaturedProducts
          products={products}
        />

        <ReviewsSection />

        <AppSection/>

        <WhyReestore />

      </div>
    </main>
  );
}