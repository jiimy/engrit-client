'use client';

import Button from "@/components/button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import s from './loginPage.module.scss';

const Index = () => {
  const router = useRouter();

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
