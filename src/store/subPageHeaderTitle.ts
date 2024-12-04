import { create } from "zustand";

interface HeaderTitle {
  headerTitle: string;
  setTitle: (text: string) => void;
}

export const HeaderTitleStore = create<HeaderTitle>()((set) => ({
  headerTitle: "",
  setTitle: (text: string) => set({ headerTitle: text }),
}));
