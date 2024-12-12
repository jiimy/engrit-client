import { create } from "zustand";

interface layout {
  headerTitle: string;
  setTitle: (text: string) => void;
}

export const layoutStore = create<layout>()((set) => ({
  headerTitle: "",
  setTitle: (text: string) => set({ headerTitle: text }),
}));
