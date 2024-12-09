'use client';
import { useLayoutContext } from '@/context/LayoutContext';
import { useEffect, useState } from 'react';
import s from './inquiry.module.scss';

const InquiryPage = () => {
  const [text, setText] = useState('');
  const { setMenuState } = useLayoutContext();

  useEffect(() => {
    setMenuState(false);
  }, [])

  const onChange = (e: any) => {
    setText(e.target.value);
    setMenuState(true);
    // TODO: 텍스트 최대 1000천자까지 가능. 넘어가면 alert 띄우기
  }



  return (
    <div className={s.inquiryPage}>
      <div className="title">문의내용</div>
      <div className='relative'>
        <textarea name="" id="" placeholder='문의 내용 입력' onChange={onChange}>
        </textarea>
        <div className='absolute bottom-0 w-full bg-[#eee]'></div>
      </div>
    </div>
  );
};

export default InquiryPage;