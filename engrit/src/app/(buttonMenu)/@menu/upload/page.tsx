'use client';
import { postPeed } from '@/api/board';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect, useRouter } from 'next/navigation';

const Bottom = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { menuState, text, tag } = useLayoutContext();

  const uploadeFeedMutation = useMutation({
    mutationFn: ({ text, tag }: { text: string; tag: any }) => postPeed(text, tag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFeedList'] })
      // redirect('/');
      router.back();
    }
  })

  const handleClick = () => {
    uploadeFeedMutation.mutate({ text, tag });
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