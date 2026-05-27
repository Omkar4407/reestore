"use client";

import { useState } from "react";
import { createCart, addToCart } from "@/lib/shopify";
import { useCartStore } from "@/store/cart-store";

interface Props {
  variantId: string;
}

export default function AddToCartButton({ variantId }: Props) {
  const [loading, setLoading] = useState(false);
  const { cartId, setCart, openCart } = useCartStore();

  async function handleAddToCart() {
    try {
      setLoading(true);

      let currentCartId = cartId;

      // Create a new Shopify cart if we don't have one persisted
      if (!currentCartId) {
        const newCart = await createCart();
        currentCartId = newCart.id;
        setCart(
          newCart.id,
          newCart.checkoutUrl,
          newCart.lines.edges.map((line: any) => line.node)
        );
      }

      // Add product to cart
      const updatedCart = await addToCart({
        cartId: currentCartId!,
        merchandiseId: variantId,
        quantity: 1,
      });

      setCart(
        updatedCart.id,
        updatedCart.checkoutUrl,
        updatedCart.lines.edges.map((line: any) => line.node)
      );

      openCart();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="
        w-full
        bg-[#0d5c4d]
        text-white
        rounded-full
        h-11
        text-sm
        font-semibold
        hover:opacity-90
        transition
        disabled:opacity-50
        flex
        items-center
        justify-center
      "
    >
      {loading ? "Adding..." : "Add to Bag"}
    </button>
  );
}