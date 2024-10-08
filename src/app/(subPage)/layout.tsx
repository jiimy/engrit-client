import BottomMenu from "@/components/bottomMenu/BottomMenu"
import Header from "@/components/header/Header"
import { Suspense } from "react"

export default function RootLayout({
  children,
  headerTitle
}: {
  children: React.ReactNode
  headerTitle: string;
}) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header title={headerTitle} type="board" />
        <div className="content">
          {children}
        </div>
      </Suspense>
    </div>
  )
}
