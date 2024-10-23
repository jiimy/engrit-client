'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import PeedList from "@/components/peed/PeedList";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export default function Home() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  return (
    <div>
      <Header isScroll={isScroll}>홈피드</Header>
      <div className='content'>
        <PeedList setIsScroll={setIsScroll} />
      </div>
      <BottomMenu />
    </div>
  );
}
