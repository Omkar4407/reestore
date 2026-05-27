"use client";

import Image from "next/image";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { updateCartLine, removeCartLine } from "@/lib/shopify";
import { useCartStore } from "@/store/cart-store";

export default function CartDrawer() {
  const { isOpen, closeCart, items, checkoutUrl, cartId, setCart } = useCartStore();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const subtotal = items.reduce(
    (acc, item) => acc + Number(item.merchandise.price.amount) * item.quantity,
    0
  );

  const handleUpdate = async (lineId: string, quantity: number) => {
    if (!cartId) return;
    setLoadingId(lineId);
    try {
      const updated = await updateCartLine({ cartId, lineId, quantity });
      if (updated) setCart(cartId, updated.checkoutUrl, updated.lines.edges.map((e: any) => e.node));
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingId(null);
    }
  };

  const handleRemove = async (lineId: string) => {
    if (!cartId) return;
    setLoadingId(lineId);
    try {
      const updated = await removeCartLine({ cartId, lineId });
      if (updated) setCart(cartId, updated.checkoutUrl, updated.lines.edges.map((e: any) => e.node));
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingId(null);
    }
  };

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999]"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-white z-[1000] flex flex-col"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-black/5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-3 text-black/40">
                  <ShoppingBag className="w-12 h-12 opacity-20" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const isLoading = loadingId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`flex gap-4 border border-black/5 rounded-[28px] p-4 transition ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
                      >
                        {/* IMAGE */}
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-[#f7fffd] rounded-[20px] overflow-hidden shrink-0">
                          {item.merchandise.product.featuredImage?.url && (
                            <Image
                              src={item.merchandise.product.featuredImage.url}
                              alt={item.merchandise.product.title}
                              fill
                              unoptimized
                              className="object-contain p-3"
                            />
                          )}
                        </div>

                        {/* INFO */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base sm:text-lg leading-tight mb-1 truncate">
                            {item.merchandise.product.title}
                          </h3>

                          <p className="text-xl font-bold text-[#0d5c4d] mb-3">
                            ₹ {Math.round(Number(item.merchandise.price.amount))}
                          </p>

                          {/* QUANTITY CONTROLS + REMOVE */}
                          <div className="flex items-center gap-2">

                            {/* MINUS */}
                            <button
                              onClick={() =>
                                item.quantity > 1
                                  ? handleUpdate(item.id, item.quantity - 1)
                                  : handleRemove(item.id)
                              }
                              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0d5c4d] hover:text-white hover:border-[#0d5c4d] transition"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>

                            {/* QTY */}
                            <span className="w-8 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>

                            {/* PLUS */}
                            <button
                              onClick={() => handleUpdate(item.id, item.quantity + 1)}
                              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0d5c4d] hover:text-white hover:border-[#0d5c4d] transition"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>

                            {/* REMOVE */}
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="ml-auto w-9 h-9 rounded-full border border-red-100 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* FOOTER */}
            {items.length > 0 && (
              <div className="border-t border-black/5 px-6 py-6 space-y-5">
                {/* SUBTOTAL */}
<div className="flex items-center justify-between">
  <span className="text-black/50">Subtotal</span>
  <span className="text-3xl font-bold">
    ₹ {Math.round(subtotal)}
  </span>
</div>

{/* FREE SHIPPING PROGRESS */}
<div
  className="
    rounded-[24px]
    border
    border-black/5
    bg-[#f7fffd]
    p-4
  "
>

  {/* TEXT */}
  {subtotal < 1000 ? (

    <p
      className="
        text-[13px]
        leading-[1.7]
        font-semibold
        text-black/70
        mb-3
      "
    >
      Add{" "}
      <span className="text-[#0d5c4d] font-black">
        ₹ {1000 - Math.round(subtotal)}
      </span>{" "}
      more to unlock{" "}
      <span className="text-[#0d5c4d] font-black">
        FREE delivery
      </span>
      . Orders below ₹1000 outside Mumbai will have a ₹150 delivery charge.
    </p>

  ) : (

    <p
      className="
        text-[13px]
        leading-[1.7]
        font-bold
        text-[#0d5c4d]
        mb-3
      "
    >
      🎉 You Unclocked FREE Delivery.
    </p>
  )}

  {/* PROGRESS BAR */}
  <div
    className="
      h-[10px]
      rounded-full
      overflow-hidden
      bg-black/5
    "
  >

    <div
      className="
        h-full
        rounded-full
        transition-all
        duration-500
      "
      style={{
        width: `${Math.min((subtotal / 1000) * 100, 100)}%`,
        background:
          "linear-gradient(90deg,#0d5c4d 0%, #00b894 100%)",
      }}
    />
  </div>

  {/* LABELS */}
  <div className="flex items-center justify-between mt-2">

    <span className="text-[11px] text-black/40 font-medium">
      ₹0
    </span>

    <span className="text-[11px] text-[#0d5c4d] font-bold">
      ₹1000 Free Delivery
    </span>
  </div>
</div>

                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#0d5c4d] text-white rounded-full py-5 text-lg font-semibold flex items-center justify-center hover:opacity-90 transition"
                >
                  Checkout
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}