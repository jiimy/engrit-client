'use client';
import React from 'react';
import Support from './Support';
import { useQuery } from '@tanstack/react-query';
import { getInquiries } from '@/api/inquiries';
import s from './support.module.scss';
import { dayformat } from '@/util/day';

const SupportList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getInquiriesList"],
    queryFn: () => getInquiries(),
  });

  console.log('문의내역', data)

  return (
    <>
      {data?.map((item: any, index: any) => (
        <div key={index}>
          <span className={s.res}>{item.response ? '답변완료' : '답변준비중'}</span>
          <p className={s.content}>{item.content}</p>
          <span className={s.inquiried_at}>{dayformat(item.inquiried_at)}</span>
        </div>
      ))}
    </>
  );
};

export default SupportList;