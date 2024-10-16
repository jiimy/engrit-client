'use client';
import React from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';
import classNames from 'classnames';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { HomeFilled, HomeOutlined } from '@ant-design/icons';

type bottommenuType = {
  type?: 'submit' | 'menu',
  text?: string,
}

const iconStyle = {
  width: '26px',
  height: '26px',
  color: '#262626'
}

const BottomMenu = ({ type = 'menu', text }: bottommenuType) => {
  const currentPath = usePathname();

  const route = currentPath.split('/')[1];

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
          <li>
            <Link href="/">
              {
                route == '' ?
                  <HomeFilled style={iconStyle} />
                  :
                  <HomeOutlined style={iconStyle} />
              }
            </Link>
          </li>
          <li>
            <HomeFilled style={{ fontSize: "300%", color: '#262626' }} />
            {/* <span>
              <Link href="/bookmark">
              </Link>
            </span> */}
          </li>
          <li><Link href="/upload">추가</Link></li>
          <li><Link href="/mypage">마이</Link></li>
          <li><button>고객센터</button></li>
        </ul>
      }
    </div >
  );
};

export default BottomMenu;