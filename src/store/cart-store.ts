import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
      vendor?: string;
      featuredImage?: {
        url: string;
      };
    };
    price: {
      amount: string;
    };
  };
}

interface CartStore {
  cartId: string | null;
  checkoutUrl: string;
  items: CartItem[];
  isOpen: boolean;

  setCart: (
    cartId: string,
    checkoutUrl: string,
    items: CartItem[]
  ) => void;

  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartId: null,
      checkoutUrl: "",
      items: [],
      isOpen: false,

      setCart: (cartId, checkoutUrl, items) =>
        set({ cartId, checkoutUrl, items }),

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),
    }),
    {
      name: "reestore-cart",                     // localStorage key
      storage: createJSONStorage(() => localStorage),
      // only persist cart data — not the open/close UI state
      partialize: (state) => ({
        cartId: state.cartId,
        checkoutUrl: state.checkoutUrl,
        items: state.items,
      }),
    }
  )
);