import React, { useRef, useState } from 'react';
import { More } from '../images';
import s from './dropdown.module.scss';
import ShareModal from '../portalModal/shareModal/ShareModal';
import { useOutOfClick } from '@/hooks/useOutOfClick';

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const targetRef = useRef(null);

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  return (
    <div className='relative cursor-pointer w-28 h-28' onClick={() => setDropDown(!dropDown)} ref={targetRef}>
      <More />
      {
        dropDown &&
        <ul className={s.dropdown}>
          <li>수정</li>
          <li>삭제</li>
          <li onClick={() => setShareModal(true)}>공유</li>
        </ul>
      }
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </div>
  );
};

export default DropDown;