'use client';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useEffect } from 'react';

const Bottom = () => {
  const { menuState, tag } = useLayoutContext();

  useEffect(() => {
    console.log('Tag updated:', tag);
  }, [tag]);

  const comClick = () => {
    console.log('tag: ', tag)
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
  };

  const delClick = () => {

  }

  return (
    <>
      <BottomMenu>
        <button onClick={delClick}>삭제</button>
        <button onClick={comClick}>완료</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;