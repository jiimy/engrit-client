import BottomMenu from "@/components/bottomMenu/BottomMenu"
import Header from "@/components/header/Header"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header type="end" title="마이페이지" />
        <div className="content">
          {children}
        </div>
        <BottomMenu />
      </Suspense>
    </div>
  )
}
