'use client';
import { editFeedIDApi } from '@/api/board';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import { useLayoutContext } from '@/context/LayoutContext';
import { layoutStore } from '@/store/layoutStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Bottom = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { menuState } = useLayoutContext();
  const tag = layoutStore((state) => state.tag);
  const id = Number(params?.id);

  const inquiryEditMutation = useMutation({
    mutationFn: (tag: object) => editFeedIDApi(tag, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
      router.back();
    }
  })

  const comClick = () => {
    console.log('tag: ', tag)
    // menuState 라는 데이터 가져와서 업로드 하는 api hook 넣기
    inquiryEditMutation.mutate(tag)
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