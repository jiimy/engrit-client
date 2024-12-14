import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import { Suspense } from "react";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header isBack>문의하기</Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}
