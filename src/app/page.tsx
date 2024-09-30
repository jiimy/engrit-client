'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div>
      <Header type="home"/>
      <div className='content'>
        메인페이지
      </div>
      <BottomMenu />
    </div>
  );
}
