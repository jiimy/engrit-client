'use client';
import React, { useRef } from 'react';
import className from 'classnames';
import s from './header.module.scss';
import classNames from 'classnames';
import { LeftArrow20 } from '@/images';

type headerType = {
  type?: 'home' | 'board' | 'end' // 홈일때, 그 외. 
  title?: string;
  isScroll?: boolean;
} & React.HtmlHTMLAttributes<HTMLHtmlElement>

const Header = ({ type = 'board', title, isScroll }: headerType) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  console.log('isScroll', isScroll);

  return (
    <header className={classNames([s.header], {
      [s.is_home]: type === 'home',
      [s.is_end]: type === 'end',
    })}
      style={{
        marginTop: isScroll ? `-${headerRef?.current?.offsetHeight}px` : '0px'
      }}
      ref={headerRef}
    >
      {type === 'home' &&
        <>
          홈피드
        </>
      }
      {type === 'board' &&
        <>
          <div className={s.back} onClick={() => history.go(-1)}>
            <LeftArrow20 />
          </div>
          {title}
        </>
      }
      {type === 'end' &&
        <>
          {title}
        </>
      }
    </header>
  );
};

export default Header;