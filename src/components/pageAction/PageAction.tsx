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

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  return (
    <div onClick={onClick}>
      <div className='cursor-pointer w-20 h-20'>
        <BookmarkLine />
      </div>
      <DropDown data={data} />
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </div>
  );
};

export default PageAction;