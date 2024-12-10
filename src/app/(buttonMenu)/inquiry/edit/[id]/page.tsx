'use client';
import React, { useEffect, useState } from 'react';
import s from '../../inquiry.module.scss';
import { useLayoutContext } from '@/context/LayoutContext';
import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getInquiriesID } from '@/api/inquiries';

const InquiryEditPage = () => {
  const [text, setInputText] = useState('');
  const { setMenuState } = useLayoutContext();
  const pathname = usePathname();

  const id = Number(pathname?.split('/')[2]);

  const { data, isLoading } = useQuery({
    queryKey: ["getInquiriesDetail", id],
    queryFn: () => getInquiriesID(id),
  });

  useEffect(() => {
    setMenuState(true);
  }, [])

  const onChange = (e: any) => {
    setInputText(e.target.value);
    setMenuState(false);
    // TODO: 텍스트 최대 1000천자까지 가능. 넘어가면 alert 띄우기
  }

  console.log('data: ', data);

  return (
    <div className={s.inquiryPage}>
      <div className="title">문의내용</div>
      <div className='relative'>
        <textarea name="" id="" placeholder='문의 내용 입력' onChange={onChange} value={text}>
        </textarea>
        <div className='absolute bottom-0 w-full bg-[#eee]'></div>
      </div>
    </div>
  );
};

export default InquiryEditPage;