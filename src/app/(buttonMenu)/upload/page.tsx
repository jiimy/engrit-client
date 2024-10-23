import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Header from '@/components/header/Header';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <>
      <Header isBack>업로드</Header>
      <div className='content'>
        업로드
      </div>
      <BottomMenu />
    </>
  );
};

export default page;