'use client'
import React, { useEffect, useRef, useState } from 'react';
import Feed from './Feed';
import s from './feed.module.scss';
import { useHeaderVisible } from '@/hooks/useHeaderVisible';
import Link from 'next/link';
import { videoData } from '@/data/sampleVideoData';
import Loading from '../loading/Loading';
import axios from 'axios';
// import { isMobile } from 'react-device-detect';

type FeedListType = {
  setIsScroll?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedList = ({ setIsScroll }: FeedListType) => {
  const [data, setData] = useState<[]>();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]); // 박스들의 ref 배열
  // const [boxLabels, setBoxLabels] = useState(Array(videoData?.length).fill("")); // 박스 레이블 배열

  const isHeaderVisible = useHeaderVisible(scrollRef);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/feed/getList");
        setData(response?.data.data);
        console.log('test: ', response?.data.data)
      } catch (err: any) {
        // setError(err.message);
      }
    };

    fetchData();
  }, [])

  return (
    <div ref={scrollRef} className={s.feedList}>
      {/* <Loading /> */}
      <div>
        {data?.map((item, index) => (
          <div key={index}>
            <Feed
              id={index}
              ref={(el: any) => {
                if (el) {
                  boxRefs.current[index] = el;
                }
              }}
              data={item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedList;