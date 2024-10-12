'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import PeedList from "@/components/peed/PeedList";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  return (
    <div>
      <Header type="home" isScroll={isScroll} />
      <div className='content'>
        <PeedList setIsScroll={setIsScroll} />
      </div>
      <BottomMenu />
    </div>
  );
}
