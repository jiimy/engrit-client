'use client';

import Header from "@/components/header/Header";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

// Context 타입 정의
interface HeaderTitleContextType {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
};

// Context 생성
export const TitleContext = createContext<HeaderTitleContextType>({
  title: "",
  setTitle: () => { },
});

export function Layout({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("고객센터");

  return (
    <TitleContext.Provider value={{ setTitle, title }}>
      <Header isBack>{title}</Header>
      <div className="content">{children}</div>
    </TitleContext.Provider>
  );
}
