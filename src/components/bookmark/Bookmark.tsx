'use client';
import React from 'react';
import { BookmarkLine } from '../images';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookmarkFeedIDApi } from '@/api/board';
import { useParams } from 'next/navigation';
import { useGetFeedId } from '@/hooks/query/useGetFeedId';

const Bookmark = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { data, isSuccess } = useGetFeedId();

  const bookmarkAddMutation = useMutation({
    mutationFn: (id: number) => bookmarkFeedIDApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
      alert('북마크에 저장되었습니다');
    }
  })
  const onClick = () => {
    bookmarkAddMutation.mutate(data?.id)
  }

  return (
    <div className='cursor-pointer w-28 h-28' onClick={onClick}>
      <BookmarkLine />
    </div>
  );
};

export default Bookmark;