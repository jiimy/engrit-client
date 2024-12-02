'use client';
import BottomMenu from "@/components/bottomMenu/BottomMenu";
import FeedList from "@/components/feed/FeedList";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@/util/supabase/client";

export default function Home() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const supabase = createClient(); // supabase 객체 불러오기.

  useEffect(() => {
    const user = async () => {
      const session = await supabase.auth.getSession();
      console.log('aa', session);
      console.log('dd', session.data.session?.user?.user_metadata?.name);
    }
    user();
  }, [])


  return (
    <div>
      <Header isScroll={isScroll}>홈피드</Header>
      <div className='content'>
        <FeedList setIsScroll={setIsScroll} />
      </div>
      <BottomMenu />
    </div>
  );
}
