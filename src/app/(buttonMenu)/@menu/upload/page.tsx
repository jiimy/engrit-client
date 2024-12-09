'use client';
import { postPeed } from '@/api/board';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Bottom = () => {
  const queryClient = useQueryClient();
  const { menuState, text } = useLayoutContext();

  const deleteFeedMutation = useMutation({
    mutationFn: (id: string) => postPeed(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getPeedList'] })
    }
  })

  const handleClick = () => {
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
    deleteFeedMutation.mutate(text);
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