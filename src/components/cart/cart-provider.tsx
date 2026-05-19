"use client";

import { useEffect } from "react";

import { getCart }
from "@/lib/shopify";

import { useCartStore }
from "@/store/cart-store";

export default function CartProvider() {

  const { setCart } =
    useCartStore();

  useEffect(() => {

    async function restoreCart() {

      const cartId =
        localStorage.getItem(
          "reestore-cart-id"
        );

      if (!cartId) return;

      try {

        const cart =
          await getCart(cartId);

        if (!cart) return;

        setCart(

          cart.id,

          cart.checkoutUrl,

          cart.lines.edges.map(
            (line: any) => line.node
          )
        );

      } catch (err) {

        console.error(err);
      }
    }

    restoreCart();

  }, [setCart]);

  return null;
}