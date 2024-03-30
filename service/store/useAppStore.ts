import { create } from "zustand";
import { persist } from "zustand/middleware";

interface useAppStoreState {
  isLove: any;
  setIsLove: (by: boolean) => void;
}

const useAppStore = create<useAppStoreState>()(
  persist(
    (set) => ({
      isLove: false,
      setIsLove: (by) => set({ isLove: by }),
    }),
    {
      name: "web-storage",
    }
  )
);

export default useAppStore;
