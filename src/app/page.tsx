'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import PeedList from "@/components/peed/PeedList";
import { useState } from "react";

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true);

  // const handleHeaderVisibility = (isVisible: boolean) => {
  //   setHeaderVisible(isVisible);
  //   console.log('스크롤', isVisible);
  // };

  return (
    <div>
      <Header type="home" />
      <div className='content'>
        <PeedList />
      </div>
      <BottomMenu />
    </div>
  );
}
