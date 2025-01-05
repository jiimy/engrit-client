'use client';
import { bookmarkAddApi, bookmarkRemoveApi, getBookmarkFeedIDApi } from '@/api/board';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BookmarkFill, BookmarkLine } from '../images';
import { UserStore } from '@/store/user';
import { createClient } from '@/util/supabase/client';

const Bookmark = ({ isBookmark, sendId }: { isBookmark?: boolean; sendId?: number }) => {
  const params = useParams<{ id: string }>();
  const supabase = createClient();
  const queryClient = useQueryClient();
  const { email } = UserStore();
  const [userEmail, setUserEmail] = useState('');
  // const currentId = parseInt(params.id) || sendId;
  const currentId = sendId ? sendId : parseInt(params.id);
  // console.log('bookmark eamil', email);

  // 2. suspense user 데이터 가져와서 null이면 useq
  useEffect(() => {
    const user = async () => {
      const session = await supabase.auth.getSession();
      // console.log('session', session);
      setUserEmail(session.data.session?.user?.user_metadata?.email);
    }
    user();
  }, [])

  const { data: bookmarkData, isSuccess } = useQuery({
    queryKey: ['bookmarkId', currentId],
    queryFn: () => getBookmarkFeedIDApi(currentId),
    // 1. store에 유저 이메일 있는지 확인하고 있을때만 usequery 보내기
    enabled: Boolean(currentId) && userEmail !== '',
  });

  const [bookmarkState, setBookmarkState] = useState(isBookmark);

  useEffect(() => {
    if (isSuccess) {
      setBookmarkState(!!bookmarkData?.[0]?.id);
    }
  }, [bookmarkData, isSuccess]);

  const bookmarkAddMutation = useMutation({
    mutationFn: () => bookmarkAddApi(currentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarkId', currentId] });
      setBookmarkState(true);
      alert('북마크에 저장되었습니다.');
    },
  });

  const bookmarkRemoveMutation = useMutation({
    mutationFn: () => bookmarkRemoveApi(currentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarkId', currentId] });
      setBookmarkState(false);
      alert('북마크가 삭제되었습니다.');
    },
  });

  const handleBookmarkToggle = () => {
    if (userEmail) {
      if (bookmarkState) {
        bookmarkRemoveMutation.mutate();
      } else {
        bookmarkAddMutation.mutate();
      }
    }
    else {
      alert('로그인 후 이용해주세요.');
    }
  };

  return (
    <div className="cursor-pointer w-28 h-28" onClick={handleBookmarkToggle}>
      {bookmarkState ? <BookmarkFill /> : <BookmarkLine />}
    </div>
  );
};

export default Bookmark;
