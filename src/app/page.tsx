'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import Header from "@/components/header/Header";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className='content'>
        메인페이지

      </div>
      <BottomMenu />
    </div>
  );
}
