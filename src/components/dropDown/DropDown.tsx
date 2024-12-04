import React, { useRef, useState } from 'react';
import { More } from '../images';
import s from './dropdown.module.scss';
import ShareModal from '../portalModal/shareModal/ShareModal';
import { useOutOfClick } from '@/hooks/useOutOfClick';
import { UserStore } from '@/store/user';
import { deletePeedApi } from '@/api/board';

const DropDown = ({ data }: { data?: any; }) => {
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const targetRef = useRef(null);
  const { email } = UserStore();

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  const showDropDown = (e: any) => {
    e.stopPropagation();
    setDropDown(!dropDown)
  }

  const editFeed = (id: number) => {
  }

  const deleteFeed = (id: number) => {
    // 삭제
    deletePeedApi(id);
  }

  return (
    <div className='relative cursor-pointer w-28 h-28' onClick={showDropDown} ref={targetRef}>
      <More />
      {
        dropDown &&
        <ul className={s.dropdown}>
          {
            data?.uploader === email &&
            <>
              <li onClick={() => editFeed(data?.id)}>수정</li>
              <li onClick={() => deleteFeed(data?.id)}>삭제</li>
            </>
          }
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