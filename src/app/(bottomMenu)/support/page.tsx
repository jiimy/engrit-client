'use client';
import Button from "@/components/button/Button";
import SupportList from "@/components/support/SupportList";
import { layoutStore } from "@/store/layoutStore";
import Link from "next/link";
import s from './support.module.scss';
import { useState } from "react";

const SupportPage = () => {
  const [text, setText] = useState('');
  // const setText = layoutStore((state) => state.setText);
  setText('고객센터');

  const onEnter = () => {
    if (text) {
      console.log('검색: ', text);
    }
  }

  const Search = (e: any) => {
    if (e.key === 'Enter') {
      onEnter();
    }
  }

  return (
    <div className={s.support_page}>
      <>
        <div className={s.buttons}>
          <Button full className="bg-black">
            <Link href="/inquiry" className="flex items-center justify-center w-full h-full">
              문의하기
            </Link>
          </Button>
          <span>
            또는
          </span>
          <div className={s.input}>
            <input type="text" placeholder="질문을 입력해주세요" onKeyDown={Search} value={text || ''}/>
            <button>아이콘</button>
          </div>
        </div>
        <SupportList />
      </>
    </div>
  );
};

export default SupportPage;
