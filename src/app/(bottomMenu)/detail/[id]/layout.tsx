import Bookmark from "@/components/bookmark/Bookmark";
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import DropDown from "@/components/dropDown/DropDown";
import Header from "@/components/header/Header";
import { BookmarkLine } from "@/components/images";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header isBack>
        <span className='absolute flex items-center gap-12 right-16'>
          <Bookmark />
          <DropDown className="mt-0"/>
        </span>
      </Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}
