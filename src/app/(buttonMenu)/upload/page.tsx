'use client';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Header from '@/components/header/Header';
import { useMenuContext } from '@/context/MenuContext';
import React, { Suspense, useEffect } from 'react';

const UploadPage = () => {
  const { setMenuState } = useMenuContext();

  useEffect(() => {
    setMenuState('여기');
  }, [])


  return (
    <>
      업로드페이지
    </>
  );
};

export default UploadPage;