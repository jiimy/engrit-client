'use client';
import React, { useRef, useState } from 'react';
import { More } from '../images';
import s from './dropdown.module.scss';
import ShareModal from '../portalModal/shareModal/ShareModal';
import { useOutOfClick } from '@/hooks/useOutOfClick';
import { UserStore } from '@/store/user';
import { deletePeedApi, getFeedIDApi } from '@/api/board';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

const DropDown = ({ sendUploader }: { sendUploader?: string; }) => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const [dropDown, setDropDown] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const targetRef = useRef(null);
  const { email } = UserStore();

  const videoIndex = parseInt(params.id);

  useOutOfClick(targetRef, () => {
    setDropDown(false);
  });

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['feedId', videoIndex],
    queryFn: () => getFeedIDApi(videoIndex),
  })

  // console.log('upload:', uploader, videoIndex, 'uploa: ', data && data[0]?.uploader, 'email:', email)

  console.log('상세페이지조건 : ', data && data[0].uploader === email);
  console.log('메인페이지 조건 : ', sendUploader === email)

  const showDropDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault()
    setDropDown(!dropDown)
  }

  const deleteFeedMutation = useMutation({
    mutationFn: (id: number) => deletePeedApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFeedList'] })
    }
  })

  const deleteFeed = (id: number) => {
    // 삭제
    deleteFeedMutation.mutate(id);
  }

  return (
    <div className='relative cursor-pointer w-28 h-28' onClick={showDropDown} ref={targetRef}>
      <More />
      {
        dropDown &&
        <ul className={s.dropdown}>
          {
            ((data && data[0]?.uploader) === email)
            || (sendUploader === email) &&
            <>
              <li onClick={() =>
                router.push(`/edit/${data?.id}`)
              }> 수정</li>
              <li onClick={() => deleteFeed(data?.id)}>삭제</li>
            </>
          }
          <li onClick={() => setShareModal(true)}>공유</li>
        </ul>
      }
      {
        shareModal && <ShareModal setOnModal={() => setShareModal(false)} />
      }
    </div >
  );
};

export default DropDown;