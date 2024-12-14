'use client';
import { bookmarkFeedIDApi, getBookmarkFeedIDApi } from '@/api/board';
import { useGetFeedId } from '@/hooks/query/useGetFeedId';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BookmarkLine } from '../images';
import { useParams } from 'next/navigation';

const Bookmark = () => {
  const params = useParams<{ id: string }>();
  const queryClient = useQueryClient();

  const id = parseInt(params.id);

  const { data, isSuccess } = useGetFeedId();
  const { data: isBookmark } = useQuery({
    queryFn: () => getBookmarkFeedIDApi(id),
    queryKey: ['bookmarkId', id]
  })

  const bookmarkAddMutation = useMutation({
    mutationFn: (id: number) => bookmarkFeedIDApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getInquiriesList'] })
      alert('북마크에 저장되었습니다');
    }
  })
  const onClick = () => {
    bookmarkAddMutation.mutate(data?.id)
  }

  console.log('isBook? : ', isBookmark);

  return (
    <>
      <div className='cursor-pointer w-28 h-28' onClick={onClick}>
        <BookmarkLine />
      </div>
    </>
  );
};

export default Bookmark;