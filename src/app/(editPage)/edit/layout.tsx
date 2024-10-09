import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      a레이아웃
      {children}
    </div>
  );
}