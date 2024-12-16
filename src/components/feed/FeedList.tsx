'use client'
import React, { useEffect, useRef, useState } from 'react';
import Feed from './Feed';
import s from './feed.module.scss';
import { useHeaderVisible } from '@/hooks/useHeaderVisible';
import Link from 'next/link';
import { videoData } from '@/data/sampleVideoData';
import Loading from '../loading/Loading';
import axios from 'axios';
import { getBookmarkFeedApi, readPeedApi } from '@/api/board';
import { useQueries, useQuery } from '@tanstack/react-query';
import { myYoutubeUplaodApi } from '@/api/youtube';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getFeedList"],
    queryFn: () => readPeedApi(),
  });

  const { data: bookmarkData, isSuccess: bookmarkSucess } = useQuery({
    queryFn: () => getBookmarkFeedApi(),
    queryKey: ['bookmark'],
  })

  console.log('피드 리스트 : ', data);
  console.log('북마크', bookmarkData);

  function filterMatchingIds(feed: [], bookmark: []) {
    const bIds = bookmark?.map((item: any) => item.t_youtube_id);

    const result = feed?.filter((item: any) => bIds?.includes(item.id))
    const resultArray = result?.map((item: any) => item.id)
    return resultArray;
  }

  const result = filterMatchingIds(data, bookmarkData);

  console.log(result);


  return (
    <div className={s.feedList}>
      {isLoading && <Loading />}
      {data &&
        <div>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <Feed
                data={item}
                // a.includes(b.id)
                isBookmark={result.includes(item.id)}
              />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FeedList;