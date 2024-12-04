'use client';
import { postPeed } from '@/api/board';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useMenuContext } from '@/context/MenuContext';
import React, { useEffect, useState } from 'react';

const Bottom = () => {
  const { menuState, youtubeId } = useMenuContext();

  const handleClick = () => {
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
    postPeed(youtubeId)
  };

  return (
    <>
      <BottomMenu>
        <button onClick={handleClick} disabled={menuState}>업로드</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;