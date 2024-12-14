'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import s from './bottomMenu.module.scss';
import classNames from 'classnames';
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { HomeFilled, HomeOutlined, PlusCircleFilled, PlusCircleOutlined, UserOutlined, } from '@ant-design/icons';
import { BookmarkFill, BookmarkLine, User } from '../images';
import UploadModal from '../portalModal/uploadModal/UploadModal';

type bottommenuType = {
  type?: 'menu' | 'edit' | 'upload',
  children?: React.ReactNode;
}

const iconStyle = {
  width: '26px',
  height: '26px',
  color: '#8C8C8C'
}
const selectIconStyle = {
  width: '26px',
  height: '26px',
  color: '#262626'
}

const BottomMenu = ({ type = 'menu', children }: bottommenuType) => {
  const [uploadModal, setUploadModal] = useState(false);
  const currentPath = usePathname();
  const route = currentPath.split('/')[1];

  return (
    <>
      <div className={classNames([s.bottom_menu], {
        [s.is_submit]: type !== 'menu'
      })}>
        {
          !children ?
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
                      <span style={selectIconStyle}>
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
                {/* <span onClick={() => setUploadModal(true)}>
                <PlusCircleOutlined style={iconStyle} />
              </span> */}
                <Link href="/upload">
                  {
                    route == 'upload' ?
                      <PlusCircleFilled style={selectIconStyle} />
                      :
                      <PlusCircleOutlined style={iconStyle} />
                  }
                </Link>
              </li>
              <li>
                <Link href="/mypage">
                  {
                    route == 'mypage' ?
                      <span style={selectIconStyle}>
                        <User fill='#8C8C8C' />
                      </span>
                      :
                      <UserOutlined style={iconStyle} />
                  }
                </Link>
              </li>
              <li>
                <button>
                  <Link href="/support">고객센터</Link>
                </button>
              </li>
            </ul> :
            children
        }
      </div>
      {
        uploadModal &&
        <UploadModal setOnModal={() => setUploadModal(false)} />
      }
    </>
  );
};

export default BottomMenu;