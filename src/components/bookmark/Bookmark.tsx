'use client';
import { bookmarkAddApi, bookmarkRemoveApi, getBookmarkFeedIDApi } from '@/api/board';
import { useGetFeedId } from '@/hooks/query/useGetFeedId';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookmarkFill, BookmarkLine } from '../images';

const Bookmark = ({ isBookmark, sendId }: { isBookmark: boolean; sendId: number }) => {
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const [bookmarkState, setBookmarkState] = useState(isBookmark);

  // console.log('isBookmark: ', isBookmark, bookmarkState);

  useEffect(() => {
    setBookmarkState(isBookmark);
  }, [isBookmark])

  const id = parseInt(params.id);

  const { data, isSuccess } = useGetFeedId();
  const { data: isBookmarkQuery } = useQuery({
    queryFn: () => getBookmarkFeedIDApi(id),
    queryKey: ['bookmarkId', id]
  })

  const bookmarkAddMutation = useMutation({
    mutationFn: (id: number) => bookmarkAddApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark'] })
      alert('북마크에 저장되었습니다');
    }
  })

  const bookmarkRemoveMutation = useMutation({
    mutationFn: (id: number) => bookmarkRemoveApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmark'] })
      alert('북마크에 삭제되었습니다');
    }
  })
  const onClick = () => {
    // console.log('data id : ', id, sendId);
    // console.log('cc',
    //   id ? id : sendId
    // )
    setBookmarkState(!bookmarkState);
    if (isBookmark) {
      // 북마크가 되어있다면 삭제
      console.log('삭제');
      bookmarkRemoveMutation.mutate(id ? id : sendId);
    } else {
      // 북마크 안되어있다면 추가
      console.log('추가');
      bookmarkAddMutation.mutate(id ? id : sendId)
    }
  }

  return (
    <>
      <div className='cursor-pointer w-28 h-28' onClick={onClick}>
        {
          bookmarkState ?
            <BookmarkFill /> :
            <BookmarkLine />
        }
      </div>
    </>
  );
};

export default Bookmark;