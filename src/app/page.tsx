'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import PeedList from "@/components/peed/PeedList";

export default function Home() {
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
