'use client';
import React, { useRef } from 'react';
import className from 'classnames';
import s from './header.module.scss';
import classNames from 'classnames';
import { Close, LeftArrow20 } from '@/components/images';
import { usePathname } from 'next/navigation';

type headerType = {
  isScroll?: boolean;
  children?: string;
  isBack?: boolean;
} & React.HtmlHTMLAttributes<HTMLHtmlElement>

// 메인(피드)-스크롤, 북마크, 마이페이지
const Header = ({ children, isScroll = false, isBack }: headerType) => {
  const currentPath = usePathname();
  const route = currentPath.split('/')[1];
  const headerRef = useRef<HTMLDivElement | null>(null);

  return (
    <header className={s.header}
      style={{
        // marginTop: isScroll && type === 'home' ? `-${headerRef?.current?.offsetHeight}px` : '0px'
        marginTop: isScroll ? `-${headerRef?.current?.offsetHeight}px` : '0px',
        justifyContent: isBack ? `center` : 'start'
      }}
      ref={headerRef}
    >
      {isBack &&
        // 라우터에 따라 아이콘을 다르게 하자
        <div className={s.back} onClick={() => history.go(-1)}>
          {
            route === 'upload' || route === 'edit' ?
              <Close /> :
              <LeftArrow20 />
          }
        </div>
      }
      {children}
    </header>
  );
};

export default Header