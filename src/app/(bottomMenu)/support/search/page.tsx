'use client';
import { getInquiries } from '@/api/inquiries';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Index = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('content')

  // TODO: 검색
  const { isLoading, error, data } = useQuery({
    // variables: { keyword: keyword || '' },
    queryKey: ['inquiries', keyword],
  });

  console.log('검색페이지: ', data);

  return (
    <div>
      검색페이지
    </div>
  );
};

export default Index;