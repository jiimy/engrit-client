'use client'
import { getBookmarkFeedApi, readPeedApi } from '@/api/board';
import { useQuery } from '@tanstack/react-query';
import Loading from '../loading/Loading';
import Feed from './Feed';
import s from './feed.module.scss';
import { useMyBookMarked } from '@/hooks/useMyBookMarked';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getFeedList"],
    queryFn: () => readPeedApi(),
  });

  const { bookmarkedArray } = useMyBookMarked();

  // console.log('bookmarked', bookmarkedArray);

  console.log('data: ', data, 'bookmarked', bookmarkedArray)
  return (
    <div className={s.feedList}>
      {isLoading && <Loading />}
      {data &&
        <div>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <Feed
                data={item}
                isBookmark={bookmarkedArray?.includes(item.id)}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FeedList;