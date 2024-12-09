'use client';
import PieChart from '@/components/chart/PieChart';
import { isLogin } from '@/util/authCookie';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const MyPage = () => {
  
  return (
    <>
      마이페이지
      <div>
        <p>잘 안들리는 이유</p>
        <div>리프레쉬버튼</div>
        <PieChart />
      </div>
    </>
  );
};

export default MyPage;