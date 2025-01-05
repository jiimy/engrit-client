'use client';
import { getInquiries } from '@/api/inquiries';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Index = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || ''

  // TODO: 검색
  const { isLoading, error, data } = useQuery({
    queryFn: () => getInquiries(keyword, 1, 10),
    queryKey: ['inquiries', keyword],
  });

  console.log('검색페이지: ', data);

  return (
    <div>
      {data === null ? <>검색 결과가 없습니다.</> : <>데이터</>}
    </div>
  );
};

export default Index;