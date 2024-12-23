'use client'
import { getBookmarkFeedApi, readPeedApi } from '@/api/board';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';
import Feed from './Feed';
import s from './feed.module.scss';
import { useMyBookMarked } from '@/hooks/useMyBookMarked';
import FeedSkeleton from '../loading/skeleton/FeedSkeleton';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getFeedList"],
    queryFn: () => readPeedApi(),
  });

  const { bookmarkedArray } = useMyBookMarked();

  // const {
  //   data: jupjupList,
  //   fetchNextPage: jupjupListFetchNextPage,
  //   hasNextPage: jupjupListHasNextPage,
  //   status: jupjupListStatus,
  //   error: jupjupListError,
  //   refetch,
  // } = useInfiniteQuery({
  //   queryKey: ["jupjupList"],
  //   queryFn: async ({ pageParam = 0 }) => {
  //     const response = await readPeedApi(searchValue, pageParam, size);
  //     return response;
  //   },
  //   getNextPageParam: (lastPage, allPages) => {
  //     return lastPage.length === size ? allPages.length : undefined;
  //   },
  //   initialPageParam: 0,
  // });

  // useEffect(() => {
  //   if (isView && jupjupListHasNextPage) {
  //     jupjupListFetchNextPage();
  //   }
  // }, [isView, jupjupListHasNextPage, jupjupListFetchNextPage, jupjupList]);

  return (
    <div className={s.feedList}>
      {isLoading && <FeedSkeleton />}
      {data &&
        <div>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <Feed
                data={item}
                isBookmark={bookmarkedArray?.includes(item.id)}
                className={'isMain'}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FeedList;