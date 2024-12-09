import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import { LayoutProvider } from "@/context/LayoutContext";
import { Suspense } from "react";

export default function RootLayout({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu: React.ReactNode;
}) {

  return (
    <LayoutProvider>
      <div>
        {children}
        {menu}
      </div>
    </LayoutProvider>
  )
}
