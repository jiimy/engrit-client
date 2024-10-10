import Header from "@/components/header/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header title="수정" type="board" />
      <div className="content">
        {children}
      </div>
    </>
  );
}