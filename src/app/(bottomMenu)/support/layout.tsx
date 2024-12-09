'use client';

import Header from "@/components/header/Header";
import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

// Context 타입 정의

export default function Layout({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("고객센터");

  return (
    <>
      <Header isBack>{title}</Header>
      <div className="content">{children}</div>
    </>
  );
}
