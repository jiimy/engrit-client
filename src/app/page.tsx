'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import FeedList from "@/components/feed/FeedList";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@/util/supabase/client";
import { useStore } from "zustand";
import { UserStore } from "@/store/user";
import Loading from "@/components/loading/Loading";

export default function Home() {
  const supabase = createClient(); // supabase 객체 불러오기.
  const setUserEmail = UserStore((state) => state.setEmail);

  useEffect(() => {
    const user = async () => {
      const session = await supabase.auth.getSession();
      console.log('aa', session);
      // console.log('dd', session.data.session?.user?.user_metadata?.email);
      setUserEmail(session.data.session?.user?.user_metadata?.email);
    }
    user();
  }, [])


  return (
    <div>
      <Header >홈피드</Header>
      <div className='content'>
        <FeedList />
      </div>
      <BottomMenu />
    </div>
  );
}
