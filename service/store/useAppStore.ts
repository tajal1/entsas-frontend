import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useAppStoreState {
  isLove: any;
  setIsLove: (by: boolean) => void;

  wishlist: any[];
  setWishlist: (wishlist: any[]) => void;

  selectedProduct: any;
  setSelectedProduct: (product: any) => void;
}

const useAppStore = create<useAppStoreState>()(
  persist(
    (set) => ({
      isLove: false,
      setIsLove: (by) => set({ isLove: by }),

      wishlist: [],
      setWishlist: (wishlist) => set({ wishlist }),

      selectedProduct: null,
      setSelectedProduct: (product: any) => set({ selectedProduct: product }),
    }),

    {
      name: "web-storage",
    }
  )
);

export default useAppStore;
