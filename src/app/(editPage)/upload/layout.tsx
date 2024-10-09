import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      b레이아웃
      {children}
    </div>
  );
}