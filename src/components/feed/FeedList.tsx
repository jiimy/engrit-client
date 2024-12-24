'use client'
import { getBookmarkFeedApi, readPeedApi } from '@/api/board';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';
import Feed from './Feed';
import s from './feed.module.scss';
import { useMyBookMarked } from '@/hooks/useMyBookMarked';
import FeedSkeleton from '../loading/skeleton/FeedSkeleton';
import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import React from 'react';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const [ref, isView] = useInView();
  const size = 5; // 한 페이지당 아이템 수
  const [searchValue, setSearchValue] = useState("");
  // const { data, isLoading } = useQuery({
  //   queryKey: ["getFeedList"],
  //   queryFn: () => readPeedApi('', ),
  // });

  const { bookmarkedArray } = useMyBookMarked();

  const {
    data: FeedList,
    fetchNextPage: FeedListFetchNextPage,
    hasNextPage: FeedListHasNextPage,
    status: FeedListStatus,
    error: FeedListError,
    refetch,
    isLoading
  } = useInfiniteQuery({
    queryKey: ["getFeedList"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await readPeedApi(searchValue, pageParam, size);
      return response;
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === size ? allPages.length : undefined;
    },
    initialPageParam: 0,
  });

  useEffect(() => {
    if (isView && FeedListHasNextPage) {
      FeedListFetchNextPage();
    }
  }, [isView, FeedListHasNextPage, FeedListFetchNextPage, FeedList]);

  console.log('data', FeedList?.pages);

  return (
    <div className={s.feedList}>
      {isLoading && <FeedSkeleton />}
      {FeedList &&
        <div>
          {FeedList?.pages?.map((item: any, index: any) => (
            <React.Fragment key={index}>
              {item.map((feed: any, idx: any) => (
                <Feed key={idx} data={feed} isBookmark={bookmarkedArray?.includes(feed.id)} />
              ))}
            </React.Fragment>
          ))}
        </div>
      }
      <div ref={ref} style={{ height: '20px' }}></div>
    </div>
  );
};

export default FeedList;