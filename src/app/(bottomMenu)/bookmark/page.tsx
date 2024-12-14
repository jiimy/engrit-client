'use client';
import React from 'react';
import s from './bookmark.module.scss';
import { getBookmarkFeedApi } from '@/api/board';
import { useQuery } from '@tanstack/react-query';

const Index = () => {

  const { data: bookmark, isSuccess: bookmarkSucess } = useQuery({
    queryFn: () => getBookmarkFeedApi(),
    queryKey: ['bookmark'],
  })

  console.log('북마크 리스트: ', bookmark);

  return (
    <div>
      bookmark <br /> 한글
    </div>
  );
};

export default Index;