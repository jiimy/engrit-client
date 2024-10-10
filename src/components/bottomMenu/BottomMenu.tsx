import React from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';
import classNames from 'classnames';

type bottommenuType = {
  type?: 'submit' | 'menu',
  text?: string
}

const BottomMenu = ({ type = 'menu', text }: bottommenuType) => {
  return (
    <div className={classNames([s.bottom_menu], {
      [s.is_submit]: type === 'submit'
    })}>
      {
        type !== 'menu' &&
        <div>{text}</div>
      }
      {
        type === 'menu' &&
        <ul>
          <li><Link href="/">홈</Link></li>
          <li><Link href="/bookmark">저장</Link></li>
          <li><Link href="/upload">추가</Link></li>
          <li><Link href="/mypage">마이</Link></li>
          <li><div>고객센터</div></li>
        </ul>
      }
    </div>
  );
};

export default BottomMenu;