'use client';
import { postPeed } from '@/api/board';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect, useRouter } from 'next/navigation';

const Bottom = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { menuState, text } = useLayoutContext();

  const uploadeFeedMutation = useMutation({
    mutationFn: (id: string) => postPeed(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFeedList'] })
      // redirect('/');
      router.push('/');
    }
  })

  const handleClick = () => {
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
    uploadeFeedMutation.mutate(text);
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