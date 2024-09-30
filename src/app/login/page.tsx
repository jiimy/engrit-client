"use client";

import Button from "@/components/button/Button";
import axios from "axios";
import classNames from "classnames";
import dayjs from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const Index = () => {
  const [tab, setTab] = useState(-1);
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<formType>({ mode: "onChange" });
  const router = useRouter();

  const click = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=8fd7a1f394d9bbd09fdfdd3827146d73&redirect_uri=http://localhost:3000/oauth/kakao`
    );
  };

  return (
    <div className="flex h-screen max-w-400 m-auto flex-col justify-center items-center">
      <div className="h-320 flex items-center flex-col relative">
        <nav className="flex gap-10 mt-10">
          <button
            onClick={click}
            className={classNames("bg-[#fae100] text-white", {})}
          >
            카카오 로그인
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Index;
