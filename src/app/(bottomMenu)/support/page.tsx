'use client';
import Button from "@/components/button/Button";
import SupportList from "@/components/support/SupportList";
import Link from "next/link";
import s from './support.module.scss';
import { useContext } from "react";
import { useLayoutContext } from "@/context/LayoutContext";

const SupportPage = () => {
  const { setText } = useLayoutContext();
  setText('고객센터')

  return (
    <div className={s.support_page}>
      <>
        <div className={s.buttons}>
          <Button full className="bg-black">
            <Link href="/inquiry" className="flex w-full h-full justify-center items-center">
              문의하기
            </Link>
          </Button>
          또는
          <div className={s.input}>
            <input type="text" placeholder="질문을 입력해주세요" />
            <button>아이콘</button>
          </div>
        </div>
        <SupportList />
      </>
    </div>
  );
};

export default SupportPage;
