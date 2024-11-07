'use client'
import React, { useEffect, useRef, useState } from 'react';
import Feed from './Feed';
import s from './feed.module.scss';
import { useHeaderVisible } from '@/hooks/useHeaderVisible';
import Link from 'next/link';
import { videoData } from '@/data/sampleVideoData';
// import { isMobile } from 'react-device-detect';

type FeedListType = {
  setIsScroll?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedList = ({ setIsScroll }: FeedListType) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]); // 박스들의 ref 배열
  const [boxLabels, setBoxLabels] = useState(Array(videoData?.length).fill("")); // 박스 레이블 배열

  const isHeaderVisible = useHeaderVisible(scrollRef);

  useEffect(() => {
    if (setIsScroll !== undefined) {
      setIsScroll(isHeaderVisible);
    }
  }, [isHeaderVisible, setIsScroll]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current?.scrollTop; // 현재 스크롤 위치
      const clientHeight = scrollRef.current.clientHeight; // 보이는 영역의 높이
      const scrollHeight = scrollRef.current.scrollHeight;
      const newLabels = Array(videoData?.length).fill(""); // 새로운 레이블 배열 초기화
      let firstBoxIndex = -1;

      // 각 박스의 위치 확인
      videoData?.forEach((_, index) => {
        const box = boxRefs?.current[index];
        if (box) {
          const boxTop = box?.offsetTop;
          const boxHeight = box.clientHeight;
          const boxBottom = boxTop + boxHeight;

          // 스크롤이 0일 때
          if (scrollTop <= 130) {
            firstBoxIndex = 0;
          }

          // if (scrollTop > 130 && boxBottom > scrollTop && boxTop < scrollTop + clientHeight) {
          if (scrollTop > 130 && boxBottom) {
            if (firstBoxIndex === -1) {
              firstBoxIndex = index + 1;
            }
          }
        }
      });

      // 첫 번째 보이는 박스가 있는 경우 레이블 설정
      if (firstBoxIndex !== -1) {
        newLabels[firstBoxIndex] = "-1";
      }

      if (scrollTop + clientHeight >= scrollHeight - 10) { // 끝에서 10px 이내에 도달하면 끝으로 간주
        firstBoxIndex = 0;
      }
      setBoxLabels(newLabels);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const totalHeight =
    videoData?.reduce((total, _, index) => {
      const box = boxRefs.current[index];
      return total + (box ? box.clientHeight : 0);
    }, 0) || 0;

  return (
    <div ref={scrollRef} className={s.feedList}>
      <div style={{ height: `${totalHeight}px` }}>

        {videoData.map((item, index) => (
          <Link href={`/detail/${index}`} key={index}>
            <Feed
              ref={(el: any) => {
                if (el) {
                  boxRefs.current[index] = el;
                }
              }}
              data={item} isView={boxLabels[index]} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedList;