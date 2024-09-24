import React from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';

const BottomMenu = () => {
  return (
    <div className={s.bottom_menu}>
      <ul>
        <li><Link href="/">홈</Link></li>
        <li><Link href="/bookmark">게시글</Link></li>
        <li>추가</li>
        <li><Link href="/mypage">마이</Link></li>
      </ul>
    </div>
  );
};

export default BottomMenu;