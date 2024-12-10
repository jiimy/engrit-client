'use client';
import { postInquiry } from '@/api/inquiries';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';

const Bottom = () => {
  const queryClient = useQueryClient();
  const { menuState, text } = useLayoutContext();

  const inquiryEditMutation = useMutation({
    mutationFn: (text: string) => postInquiry(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
    }
  })

  const handleClick = () => {
    inquiryEditMutation.mutate(text);
    redirect('/support');
  };

  return (
    <>
      <BottomMenu>
        <button onClick={handleClick} disabled={menuState}>수정완료</button>
      </BottomMenu>
    </>
  );
};

export default Bottom;