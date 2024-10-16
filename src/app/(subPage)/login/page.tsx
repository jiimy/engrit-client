'use client';

import Button from "@/components/button/Button";
import axios from "axios";
import classNames from "classnames";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import s from './loginPage.module.scss';
import { Logo34 } from "@/components/images";
import Image from "next/image";

// export const generateMetadata = () => {
//   return {
//     title: "Subpage Title", // 페이지마다 다른 타이틀 설정
//   };
// };

const Index = () => {
  const router = useRouter();
  const [headerTitle, setHeaderTitle] = useState("Default Title");
  useEffect(() => {
    // 페이지가 로드될 때 헤더 타이틀을 변경
    setHeaderTitle("Subpage Title");
  }, []);

  const click = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=90dfb6439cebafe3e61ec13e051adbe6&redirect_uri=http://localhost:3000/oauth/kakao`
    );
  };

  return (
    <>
      <div className={s.login_page}>
        <div className={s.logo}>
          <Image src="/image/logo.svg" alt="logo" width={500} height={500} />
        </div>
        <Button
          onClick={click}
          className={`${s.login_btn} h-38`}
          full
        >
          카카오 로그인
        </Button>
      </div>
    </>
  );
};

export default Index;
