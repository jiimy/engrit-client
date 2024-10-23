import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Header from '@/components/header/Header';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header type="board">버튼 </Header>
      <div className="content">
        상세페이지
      </div>
      <BottomMenu />
    </Suspense>
  );
};

export default page;