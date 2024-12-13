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
        <span className='absolute flex gap-12 right-16'>
          <span className='cursor-pointer w-28 h-28'>
            <BookmarkLine />
          </span>
          <DropDown />
        </span>
      </Header>
      <div className="content">
        {children}
      </div>
    </>
  )
}
