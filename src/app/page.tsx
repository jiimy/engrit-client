'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <div className='content'>
        메인페이지
        <br />배포 테스트
      </div>
      <BottomMenu />
    </div>
  );
}
