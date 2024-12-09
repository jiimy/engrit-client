'use client';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';

const Bottom = () => {
  const { menuState } = useLayoutContext();

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