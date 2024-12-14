'use client'
import React, { useEffect, useRef, useState } from 'react';
import Feed from './Feed';
import s from './feed.module.scss';
import { useHeaderVisible } from '@/hooks/useHeaderVisible';
import Link from 'next/link';
import { videoData } from '@/data/sampleVideoData';
import Loading from '../loading/Loading';
import axios from 'axios';
import { readPeedApi } from '@/api/board';
import { useQuery } from '@tanstack/react-query';
// import { isMobile } from 'react-device-detect';

const FeedList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getFeedList"],
    queryFn: () => readPeedApi(),
  });

  console.log('피드 리스트 : ', data);

  return (
    <div className={s.feedList}>
      {isLoading && <Loading />}
      {data &&
        <div>
          {data?.map((item: any, index: any) => (
            <div key={index}>
              <Feed
                data={item} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FeedList;