'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import FeedList from "@/components/feed/FeedList";
import Header from "@/components/header/Header";
import { useState } from "react";

export default function Home() {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  return (
    <div>
      <Header isScroll={isScroll}>홈피드</Header>
      <div className='content'>
        <FeedList setIsScroll={setIsScroll} />
      </div>
      <BottomMenu />
    </div>
  );
}
