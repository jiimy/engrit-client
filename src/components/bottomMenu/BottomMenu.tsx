'use client';
import React from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';
import classNames from 'classnames';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { HomeFilled, HomeOutlined, PlusCircleFilled, PlusCircleOutlined, UserOutlined, } from '@ant-design/icons';
import { BookmarkFill, BookmarkLine, User } from '../images';

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
            <Link href="/bookmark">
              {
                route == 'bookmark' ?
                  <span style={iconStyle}>
                    <BookmarkFill />
                  </span>
                  :
                  <span style={iconStyle}>
                    <BookmarkLine />
                  </span>
              }
            </Link>
          </li>
          <li>
            <Link href="/upload">
              {
                route == 'upload' ?
                  <PlusCircleFilled style={iconStyle} />
                  :
                  <PlusCircleOutlined style={iconStyle} />
              }
            </Link>
          </li>
          <li>
            <Link href="/mypage">
              {
                route == 'mypage' ?
                  <span style={iconStyle}>
                    <User fill='#262626' />
                  </span>
                  :
                  <UserOutlined style={iconStyle} />
              }
            </Link>
          </li>
          <li><button>고객센터</button></li>
        </ul>
      }
    </div >
  );
};

export default BottomMenu;