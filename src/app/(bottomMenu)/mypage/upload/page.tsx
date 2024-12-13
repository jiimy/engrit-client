'use client';
import PieChart from '@/components/chart/PieChart';
import { isLogin } from '@/util/authCookie';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const MyPageUpload = () => {
  
  return (
    <>
      <ul>
        <li>
          <div>
            영상
          </div>
          <div>
            <div className="title">제목 1줄
              <span>더보기아이콘</span>
            </div>
            n일전
          </div>
        </li>
      </ul>
    </>
  );
};

export default MyPageUpload;