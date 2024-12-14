'use client';
import { postInquiry } from '@/api/inquiries';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect, useRouter } from 'next/navigation';

const Bottom = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { menuState, text } = useLayoutContext();

  const inquiryMutation = useMutation({
    mutationFn: (text: string) => postInquiry(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
      router.back();
    }
  })

  const handleClick = () => {
    inquiryMutation.mutate(text);
  };

  return (
    <>
      <BottomMenu>
        <button onClick={handleClick} disabled={menuState}>문의하기</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;