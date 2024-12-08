'use client';
import { postInquiry } from '@/api/inquiries';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useMenuContext } from '@/context/MenuContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { redirect } from 'next/navigation';
import React from 'react';

const Bottom = () => {
  const queryClient = useQueryClient();
  const { menuState, content } = useMenuContext();

  const inquiryMutation = useMutation({
    mutationFn: (text: string) => postInquiry(text),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
    }
  })

  const handleClick = () => {
    inquiryMutation.mutate(content);
    redirect('/support');
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