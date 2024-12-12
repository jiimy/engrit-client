import { create } from "zustand";

interface LayoutState {
  menuState: boolean;
  setMenuState: (newState: boolean) => void;
  text: string;
  setText: (newText: string) => void;
  tag: string[];
  setTag: (newTags: string[]) => void;
}

export const layoutStore = create<LayoutState>((set) => ({
  menuState: true,
  setMenuState: (newState) => set(() => ({ menuState: newState })),
  text: "",
  setText: (newText) => set(() => ({ text: newText })),
  tag: [],
  setTag: (newTags) => set(() => ({ tag: newTags })),
}));
