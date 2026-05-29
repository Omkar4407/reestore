import { getAllProducts } from "@/lib/shopify";
import CollectionProducts from "@/components/store/collection-products";

export default async function AllProductsPage() {

  const products =
    await getAllProducts();

  return (

    <section className="pt-36 pb-20 bg-[#fafdfc]">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        <h1
          className="
            text-[42px]
            md:text-[56px]
            font-black
            tracking-tight
          "
        >
          All Products
        </h1>

        <p
          className="
            mt-4
            text-black/60
            max-w-[700px]
          "
        >
          Browse all products currently available on ReeStore.
        </p>

        <CollectionProducts
          products={products}
        />

      </div>

    </section>
  );
}