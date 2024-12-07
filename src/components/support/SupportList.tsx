'use client';
import React from 'react';
import Support from './Support';
import { useQuery } from '@tanstack/react-query';
import { getInquiries } from '@/api/inquiries';
import s from './support.module.scss';
import { dayformat } from '@/util/day';
import Link from 'next/link';
import Loading from '../loading/Loading';

const SupportList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getInquiriesList"],
    queryFn: () => getInquiries(),
  });

  console.log('문의내역', data)

  return (
    <>
      {isLoading && <Loading />}
      {data?.map((item: any, index: any) => (
        <Link key={index} href={`/support/${item.id}`}>
          <span className={s.res}>{item.response_text ? '답변완료' : '답변준비중'}</span>
          <p className={s.content}>{item.content_text}</p>
          <span className={s.inquiried_at}>{dayformat(item.inquiried_at)}</span>
        </Link>
      ))}
    </>
  );
};

export default SupportList;