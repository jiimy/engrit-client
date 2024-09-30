'use client';
import React from 'react';
import className from 'classnames';
import s from './header.module.scss';
import classNames from 'classnames';

type headerType = {
  type?: 'home' | 'board' // 홈일때, 그 외. 
  title?: string
}

const Header = ({ type, title }: headerType) => {

  return (
    <header className={classNames([s.header], {
      [s.is_home]: type === 'home'
    })}>
      {type === 'home' &&
        <>
          홈피드
          <div>알림, 종</div>
        </>
      }
      {type !== 'home' &&
        <>
          <div className={s.back} onClick={() => history.go(-1)}>뒤로</div>
          {title}
        </>
      }
    </header>
  );
};

export default Header;