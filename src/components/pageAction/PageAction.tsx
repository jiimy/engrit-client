'use client';
import React, { useRef, useState } from 'react';
import { BookmarkLine } from '../images';
import DropDown from '../dropDown/DropDown';
import ShareModal from '../portalModal/shareModal/ShareModal';
import { useOutOfClick } from '@/hooks/useOutOfClick';

const PageAction = ({ onClick, data }: {
  onClick: (e: React.MouseEvent) => void;
  data: any;
}) => {
  const targetRef = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClick(e);
  };

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  return (
    <div onClick={handleClick}>
      <div className='cursor-pointer w-20 h-20'>
        <BookmarkLine />
      </div>
      <DropDown sendUploader={data?.uploader} />
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </div>
  );
};

export default PageAction;