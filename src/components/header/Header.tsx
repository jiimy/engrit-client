'use client';
import React, { useRef, useState } from 'react';
import className from 'classnames';
import s from './header.module.scss';
import classNames from 'classnames';
import { BookmarkLine, Close, Delete, LeftArrow20, More } from '@/components/images';
import { usePathname } from 'next/navigation';
import { useOutOfClick } from '@/hooks/useOutOfClick';
import ShareModal from '../portalModal/shareModal/ShareModal';

type headerType = {
  isScroll?: boolean;
  children?: string;
  isBack?: boolean;
} & React.HtmlHTMLAttributes<HTMLHtmlElement>

// 메인(피드)-스크롤, 북마크, 마이페이지
const Header = ({ children, isScroll = false, isBack }: headerType) => {
  const currentPath = usePathname();
  const targetRef = useRef(null);
  const route = currentPath.split('/')[1];
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const subPage = ['upload', 'edit'];

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  return (
    <>
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
              subPage.includes(route) ?
                <Close /> :
                <LeftArrow20 />
            }
          </div>
        }
        {children}
        {
          currentPath.includes('detail') &&
          <>
            <span className='absolute flex gap-12 right-16'>
              <span className='cursor-pointer w-28 h-28'>
                <BookmarkLine />
              </span>
              <span className='relative cursor-pointer w-28 h-28' onClick={() => setDropDown(!dropDown)} ref={targetRef}>
                <More />
                {
                  dropDown &&
                  <ul className={s.dropdown}>
                    <li>수정</li>
                    <li>삭제</li>
                    <li onClick={() => setShareModal(true)}>공유</li>
                  </ul>
                }
              </span>
            </span>
          </>
        }
        {
          currentPath.includes('edit') &&
          <>
            <span className='absolute right-16'>
              <span className='cursor-pointer w-28 h-28'>
                <Delete />
              </span>
            </span>
          </>
        }
      </header>
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </>
  );
};

export default Header