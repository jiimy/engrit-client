'use client'
import { readPeedApi } from '@/api/board';
import { useMyBookMarked } from '@/hooks/useMyBookMarked';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import FeedSkeleton from '../loading/skeleton/FeedSkeleton';
import Feed from './Feed';
import s from './feed.module.scss';
import { UserStore } from '@/store/user';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const { email } = UserStore();
  const [ref, isView] = useInView();
  const size = 2; // 한 페이지당 아이템 수
  const [searchValue, setSearchValue] = useState("");

  // const { data: FeedList, isLoading } = useQuery({
  //   queryKey: ["getFeedList"],
  //   queryFn: () => readPeedApi('', 0, size),
  // });

  const { bookmarkedArray } = useMyBookMarked(email);

  const {
    data: FeedList,
    fetchNextPage: FeedListFetchNextPage,
    hasNextPage: FeedListHasNextPage,
    status: FeedListStatus,
    error: FeedListError,
    refetch,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["getFeedList"],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await readPeedApi("", pageParam, size);
      return response.map((item: any) => ({
        tag: item.tag,
        youtube_link: item.youtube_link,
        id: item.id
      }));
    },
    staleTime: 1000 * 60 * 1,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // console.log('aa', allPages);
      return lastPage?.length === size ? allPages.length : undefined;
    },
  });

  useEffect(() => {
    if (isView && FeedListHasNextPage && !isFetchingNextPage) {
      FeedListFetchNextPage();
    }
  }, [isView, FeedListHasNextPage, FeedListFetchNextPage, isFetchingNextPage]);

  const flattenedData = FeedList?.pages.flat() || [];
  
  return (
    <div className={s.feedList}>
      {(isLoading || isFetchingNextPage) && <FeedSkeleton />}
      {flattenedData.length > 0 && (
        <div>
          {flattenedData.map((feed: any, idx: any) => (
            <Feed
              key={idx}
              data={feed}
              isBookmark={bookmarkedArray?.includes(feed.id)}
            />
          ))}
        </div>
      )}
      <div ref={ref} style={{ height: '20px' }}></div>
    </div>
  );
};

export default FeedList;