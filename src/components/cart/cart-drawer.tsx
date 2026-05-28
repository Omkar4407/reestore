"use client";

import Image from "next/image";
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

import {
  updateCartLine,
  removeCartLine,
} from "@/lib/shopify";

import { useCartStore } from "@/store/cart-store";

export default function CartDrawer() {

  const {
    isOpen,
    closeCart,
    items,
    checkoutUrl,
    cartId,
    setCart,
  } = useCartStore();

  const [loadingId, setLoadingId] =
    useState<string | null>(null);

  /* SUBTOTAL */
  const subtotal = items.reduce(
    (acc, item) =>
      acc +
      Number(
        item.merchandise.price.amount
      ) *
        item.quantity,
    0
  );

  /* UPDATE */
  const handleUpdate = async (
    lineId: string,
    quantity: number
  ) => {

    if (!cartId) return;

    setLoadingId(lineId);

    try {

      const updated =
        await updateCartLine({
          cartId,
          lineId,
          quantity,
        });

      if (updated) {

        setCart(
          cartId,
          updated.checkoutUrl,
          updated.lines.edges.map(
            (e: any) => e.node
          )
        );
      }

    } catch (e) {

      console.error(e);

    } finally {

      setLoadingId(null);
    }
  };

  /* REMOVE */
  const handleRemove = async (
    lineId: string
  ) => {

    if (!cartId) return;

    setLoadingId(lineId);

    try {

      const updated =
        await removeCartLine({
          cartId,
          lineId,
        });

      if (updated) {

        setCart(
          cartId,
          updated.checkoutUrl,
          updated.lines.edges.map(
            (e: any) => e.node
          )
        );
      }

    } catch (e) {

      console.error(e);

    } finally {

      setLoadingId(null);
    }
  };

  /* VENDOR TOTALS */
  const vendorTotals = items.reduce(
    (
      acc: Record<string, number>,
      item
    ) => {

      const vendor =
        item.merchandise.product.vendor ||
        "Unknown Vendor";

      const itemTotal =
        Number(
          item.merchandise.price.amount
        ) * item.quantity;

      acc[vendor] =
        (acc[vendor] || 0) + itemTotal;

      return acc;

    },
    {}
  );

  /* SHIPPING CALCULATION */
  const vendorShippingBreakdown =
    Object.entries(vendorTotals).map(
      ([vendor, subtotal]) => {

        const qualifiesForFreeShipping =
          subtotal >= 1000;

        return {
          vendor,
          subtotal,
          shipping:
            qualifiesForFreeShipping
              ? 0
              : 150,
          remaining:
            Math.max(
              1000 - subtotal,
              0
            ),
          qualifiesForFreeShipping,
        };
      }
    );

  /* TOTAL SHIPPING */
  const totalShipping =
    vendorShippingBreakdown.reduce(
      (acc, vendor) =>
        acc + vendor.shipping,
      0
    );

  /* PROGRESS */
  const closestVendorProgress =
    Math.max(
      ...vendorShippingBreakdown.map(
        (v) => v.subtotal
      ),
      0
    );

  const progressWidth =
    Math.min(
      (closestVendorProgress / 1000) *
        100,
      100
    );

  return (
    <AnimatePresence>

      {isOpen && (

        <>

          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="
              fixed
              inset-0
              bg-black/40
              backdrop-blur-sm
              z-[999]
            "
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 260,
            }}
            className="
              fixed
              top-0
              right-0
              h-screen
              w-full
              sm:w-[500px]
              bg-white
              z-[1000]
              flex
              flex-col
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                px-6
                py-5
                border-b
                border-black/5
                shrink-0
              "
            >

              <div className="flex items-center gap-3">

                <ShoppingBag className="w-5 h-5" />

                <h2
                  className="
                    text-[22px]
                    font-black
                  "
                >
                  Your Cart
                </h2>
              </div>

              <button
                onClick={closeCart}
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >

                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ITEMS */}
            <div
  className="
    flex-1
    overflow-y-auto
    px-6
    py-4
    min-h-0
    pb-10
  "
>

              {items.length === 0 ? (

                <div
                  className="
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    text-black/40
                  "
                >

                  <ShoppingBag className="w-12 h-12 opacity-20" />

                  <p>Your cart is empty</p>
                </div>

              ) : (

                <div className="space-y-4">

                  {items.map((item) => {

                    const isLoading =
                      loadingId === item.id;

                    return (

                      <div
                        key={item.id}
                        className={`
                          flex
                          gap-4
                          border
                          border-black/5
                          rounded-[24px]
                          p-4
                          transition

                          ${
                            isLoading
                              ? "opacity-50 pointer-events-none"
                              : ""
                          }
                        `}
                      >

                        {/* IMAGE */}
                        <div
                          className="
                            relative
                            w-24
                            h-24
                            sm:w-28
                            sm:h-28
                            bg-[#f7fffd]
                            rounded-[18px]
                            overflow-hidden
                            shrink-0
                          "
                        >

                          {item.merchandise.product
                            .featuredImage
                            ?.url && (

                            <Image
                              src={
                                item
                                  .merchandise
                                  .product
                                  .featuredImage
                                  .url
                              }
                              alt={
                                item
                                  .merchandise
                                  .product
                                  .title
                              }
                              fill
                              unoptimized
                              className="
                                object-contain
                                p-3
                              "
                            />
                          )}
                        </div>

                        {/* INFO */}
                        <div
                          className="
                            flex-1
                            min-w-0
                          "
                        >

                          <h3
                            className="
                              font-bold
                              text-[15px]
                              leading-[1.35]
                              mb-1
                              line-clamp-2
                            "
                          >

                            {
                              item.merchandise
                                .product.title
                            }
                          </h3>

                          <p
                            className="
                              text-[11px]
                              text-black/40
                              mb-2
                            "
                          >

                            {
                              item.merchandise
                                .product.vendor
                            }
                          </p>

                          <p
                            className="
                              text-[18px]
                              font-black
                              text-[#0d5c4d]
                              mb-3
                            "
                          >
                            ₹{" "}
                            {Math.round(
                              Number(
                                item
                                  .merchandise
                                  .price.amount
                              )
                            )}
                          </p>

                          {/* CONTROLS */}
                          <div
                            className="
                              flex
                              items-center
                              gap-2
                            "
                          >

                            {/* MINUS */}
                            <button
                              onClick={() =>
                                item.quantity >
                                1
                                  ? handleUpdate(
                                      item.id,
                                      item.quantity -
                                        1
                                    )
                                  : handleRemove(
                                      item.id
                                    )
                              }
                              className="
                                w-8
                                h-8
                                rounded-full
                                border
                                border-black/10
                                flex
                                items-center
                                justify-center
                                hover:bg-[#0d5c4d]
                                hover:text-white
                                hover:border-[#0d5c4d]
                                transition
                              "
                            >

                              <Minus className="w-3 h-3" />
                            </button>

                            {/* QTY */}
                            <span
                              className="
                                w-7
                                text-center
                                font-semibold
                                text-[13px]
                              "
                            >
                              {item.quantity}
                            </span>

                            {/* PLUS */}
                            <button
                              onClick={() =>
                                handleUpdate(
                                  item.id,
                                  item.quantity +
                                    1
                                )
                              }
                              className="
                                w-8
                                h-8
                                rounded-full
                                border
                                border-black/10
                                flex
                                items-center
                                justify-center
                                hover:bg-[#0d5c4d]
                                hover:text-white
                                hover:border-[#0d5c4d]
                                transition
                              "
                            >

                              <Plus className="w-3 h-3" />
                            </button>

                            {/* REMOVE */}
                            <button
                              onClick={() =>
                                handleRemove(
                                  item.id
                                )
                              }
                              className="
                                ml-auto
                                w-8
                                h-8
                                rounded-full
                                border
                                border-red-100
                                text-red-400
                                flex
                                items-center
                                justify-center
                                hover:bg-red-500
                                hover:text-white
                                hover:border-red-500
                                transition
                              "
                            >

                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
          {/* FLOATING SUMMARY */}
{items.length > 0 && (

<motion.div
  initial={{
    opacity: 0,
    x: -20,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  exit={{
    opacity: 0,
    x: -20,
  }}
  className="
    fixed
    left-6
    bottom-6
    z-[1001]
    hidden
    lg:block
  "
>

  <div
    className="
      w-[360px]
      rounded-[30px]
      border
      border-white/20
      bg-white/70
      backdrop-blur-xl
      shadow-[0_20px_60px_rgba(0,0,0,0.18)]
      p-5
    "
  >

    {/* SUBTOTAL */}
    <div
      className="
        flex
        items-center
        justify-between
        mb-5
      "
    >

      <span
        className="
          text-[13px]
          font-medium
          text-black/50
        "
      >
        Subtotal
      </span>

      <span
        className="
          text-[32px]
          font-black
        "
      >
        ₹ {Math.round(subtotal)}
      </span>
    </div>

    {/* SHIPPING */}
    <div className="space-y-2">

      {vendorShippingBreakdown.map(
        (vendorData, i) => (

          <div
            key={i}
            className="
              rounded-[18px]
              bg-white/85
              border
              border-black/5
              px-4
              py-3
            "
          >

            <div
              className="
                flex
                items-start
                justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[13px]
                    font-bold
                  "
                >
                  {vendorData.vendor}
                </p>

                <p
                  className="
                    text-[11px]
                    text-black/50
                    mt-1
                  "
                >
                  ₹
                  {Math.round(
                    vendorData.subtotal
                  )}
                </p>
              </div>

              <div
                className="
                  text-[11px]
                  font-bold
                "
                style={{
                  color:
                    vendorData.qualifiesForFreeShipping
                      ? "#00b894"
                      : "#f97316",
                }}
              >

                {vendorData.qualifiesForFreeShipping
                  ? "FREE"
                  : "₹150"}
              </div>
            </div>
          </div>
        )
      )}
    </div>

    {/* TOTAL SHIPPING */}
    <div
      className="
        flex
        items-center
        justify-between
        mt-5
        pt-5
        border-t
        border-black/5
      "
    >

      <span
        className="
          text-[13px]
          text-black/50
        "
      >
        Shipping
      </span>

      <span
        className="
          text-[20px]
          font-black
        "
      >
        {totalShipping === 0
          ? "FREE"
          : `₹ ${totalShipping}`}
      </span>
    </div>

    {/* CHECKOUT */}
    <a
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-5
        w-full
        bg-[#0d5c4d]
        text-white
        rounded-full
        py-4
        text-[15px]
        font-bold
        flex
        items-center
        justify-center
        hover:opacity-90
        transition
      "
    >
      Checkout
    </a>
  </div>
</motion.div>
)}
        </>
      )}
    </AnimatePresence>
  );
}