import { create } from "zustand";

interface User {
  email: string;
  setEmail: (text: string) => void;
}

export const UserStore = create<User>()((set) => ({
  email: "",
  setEmail: (text: string) => set({ email: text }),
}));
