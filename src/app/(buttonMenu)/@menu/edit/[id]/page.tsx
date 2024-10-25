'use client';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useMenuContext } from '@/context/MenuContext';
import React from 'react';

const Bottom = () => {
  const { menuState } = useMenuContext();

  const handleClick = () => {
    console.log('cc', menuState)
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
  };

  return (
    <>
      <BottomMenu>
        <button onClick={handleClick}>삭제</button>
        <button onClick={handleClick}>완료</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;