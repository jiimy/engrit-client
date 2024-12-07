'use client';
import BottomMenu from '@/components/bottomMenu/BottomMenu';
import Header from '@/components/header/Header';
import { useMenuContext } from '@/context/MenuContext';
import React, { Suspense, useEffect } from 'react';
import s from './inquiry.module.scss';

const InquiryPage = () => {
  const { setMenuState } = useMenuContext();

  useEffect(() => {
    // setMenuState('여기');
  }, [])


  return (
    <div className={s.inquiryPage}>
      <div className="title">문의내용</div>
      <div className='relative'>
      <textarea name="" id="" placeholder='문의 내용 입력'>
      </textarea>
      <div className='absolute bottom-0 w-full bg-[#eee]'></div>
      </div>
    </div>
  );
};

export default InquiryPage;