'use client';
import React, { useRef, useState } from 'react';
import { BookmarkLine } from '../images';
import DropDown from '../dropDown/DropDown';
import ShareModal from '../portalModal/shareModal/ShareModal';
import { useOutOfClick } from '@/hooks/useOutOfClick';

const PageAction = () => {
  const targetRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  return (
    <>
      <div className='cursor-pointer w-20 h-20'>
        <BookmarkLine />
      </div>
      <DropDown />
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </>
  );
};

export default PageAction;