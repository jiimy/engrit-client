'use client';
import Button from "@/components/button/Button";
import SupportList from "@/components/support/SupportList";
import { layoutStore } from "@/store/layoutStore";
import Link from "next/link";
import s from './support.module.scss';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@/components/images";

const SupportPage = () => {
  const router = useRouter();
  const [text, setText] = useState('');
  // const setText = layoutStore((state) => state.setText);

  const onEnter = () => {
    if (text) {
      console.log('검색: ', text);
      router.push(`/support/search?keyword=${text}`)
    }
  }

  const handleSearchKeyDown = (e: any) => {
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
          <span className="flex conten-center my-10">
            또는
          </span>
          <div className={s.input}>
            <input type="text" placeholder="질문을 입력해주세요"
              onKeyDown={handleSearchKeyDown} value={text || ''} onChange={(e: any) => setText(e.target.value)}
            />
            <button><Search /></button>
          </div>
        </div>
        <SupportList />
      </>
    </div>
  );
};

export default SupportPage;
