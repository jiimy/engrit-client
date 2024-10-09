import { create } from "zustand";

interface HeaderTitle {
  headerTitle: string;
  setTitle: (text: string) => void;
}

// 테스트 코드
export const HeaderTitleStore = create<HeaderTitle>()((set) => ({
  headerTitle: "",
  setTitle: (text: string) => set({ headerTitle: text }),
}));
