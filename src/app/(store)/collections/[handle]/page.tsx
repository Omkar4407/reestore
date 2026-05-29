import { getCollection } from "@/lib/shopify";
import ProductCard from "@/components/store/product-card";
import CollectionProducts from "@/components/store/collection-products";
import Link from "next/link";

interface Props {
  params: Promise<{
    handle: string;
  }>;
}

export default async function CollectionPage({
  params,
}: Props) {

  const { handle } = await params;

  const collection =
    await getCollection(handle);

  if (!collection) {

    return (
      <div className="pt-40 pb-20 text-center">
        Collection not found
      </div>
    );
  }

  return (

    <section className="pt-36 pb-20 bg-[#d3f7f0]">

      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        <h1
          className="
            text-[42px]
            md:text-[56px]
            font-black
            tracking-tight
          "
        >
          {collection.title}
        </h1>

        {collection.description && (

          <p
            className="
              mt-4
              text-black/60
              max-w-[700px]
            "
          >
            {collection.description}
          </p>
        )}

<CollectionProducts
  products={
    collection.products.edges
  }
/>
<div className="flex justify-center mt-12">

  <Link
    href="/products"
    className="
      rs-btn-outline
      h-[48px]
      px-8
      rounded-[14px]
      font-bold
      text-[14px]
      inline-flex
      items-center
      justify-center
    "
  >
    View All Products
  </Link>

</div>

      </div>

    </section>
  );
}