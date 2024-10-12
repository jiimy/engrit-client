'use client'
import React, { useEffect, useRef, useState } from 'react';
import Peed from './Peed';
import s from './peed.module.scss';
// import { isMobile } from 'react-device-detect';

const videoData = [
  {
    videoId: 'zoxmRJ0grt8',
    script: '스크립트0'
  },
  {
    videoId: 'dQw4w9WgXcQ',
    script: '스크립트1'
  },
  {
    videoId: '2vjPBrBU-TM',
    script: '스크립트2'
  },
  {
    videoId: 'M7lc1UVf-VE',
    script: '스크립트3'
  },
  {
    videoId: '3JZ_D3ELwOQ',
    script: '스크립트4'
  },
  {
    videoId: 'wZZ7oFKsKzY',
    script: '스크립트5'
  },
  {
    videoId: '0zM3nApSvMg',
    script: '스크립트6'
  },
  {
    videoId: 'sxHj2IlnVVE',
    script: '스크립트7'
  },
  {
    videoId: 'J---aiyznGQ',
    script: '스크립트8'
  },
  {
    videoId: 'eVTXPUF4Oz4',
    script: '스크립트9'
  }
];

const PeedList = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRefs = useRef<HTMLDivElement[]>([]); // 박스들의 ref 배열
  const [boxLabels, setBoxLabels] = useState(Array(videoData?.length).fill("")); // 박스 레이블 배열

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollTop = scrollRef.current?.scrollTop; // 현재 스크롤 위치
      const clientHeight = scrollRef.current.clientHeight; // 보이는 영역의 높이
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

          if (scrollTop > 130 && boxBottom > scrollTop && boxTop < scrollTop + clientHeight) {
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
    <div ref={scrollRef} className={s.peedList}>
      <div style={{ height: `${totalHeight}px` }}>

        {videoData.map((item, index) => (
          <Peed key={index}
            ref={(el: any) => {
              if (el) {
                boxRefs.current[index] = el;
              }
            }}
            data={item} isView={boxLabels[index]} />
        ))}
      </div>
    </div>
  );
};

export default PeedList;