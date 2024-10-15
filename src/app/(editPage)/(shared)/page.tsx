'use client';
import Test1 from '@/components/test/Test1';
import Test2 from '@/components/test/Test2';
import { useSnackbar } from '@/provider/snackbarProvider';
import React from 'react';

const SharedPage = () => {
  const { showSnackbar } = useSnackbar();

  const handleShowSnackbar = () => {
    showSnackbar('새로운 스낵바가 추가되었습니다!', 4000);
  };

  return (
    <div>
      공통페이지
      <button onClick={handleShowSnackbar}>스낵바 생성</button>
      <Test1 />
      <Test2 />
    </div>
  );
};

export default SharedPage;