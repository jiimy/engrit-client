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
      let firstBoxIndex = -1; // 첫 번째 보이는 박스 인덱스 초기화

      // 각 박스의 위치 확인
      videoData?.forEach((_, index) => {
        const box = boxRefs?.current[index]; // 현재 박스의 ref
        if (box) {
          const boxTop = box?.offsetTop; // 각 박스의 상단 위치
          const boxHeight = box.clientHeight; // 각 박스의 높이
          const boxBottom = boxTop + boxHeight; // 각 박스의 하단 위치

          // 스크롤이 0일 때
          if (scrollTop === 0) {
            firstBoxIndex = 0;
          }

          // 박스가 보이는 영역에 있는지 체크
          if (boxBottom > scrollTop && boxTop < scrollTop + clientHeight) {
            if (firstBoxIndex === -1) {
              firstBoxIndex = index + 1; // 가장 첫 번째 보이는 박스 인덱스 저장
            }
          }
        }
      });

      // 첫 번째 보이는 박스가 있는 경우 레이블 설정
      // if (firstBoxIndex !== -1) {
      //   newLabels[firstBoxIndex] = "first"; // 첫 번째 보이는 박스에 'first' 레이블 추가
      // }

      setBoxLabels(newLabels);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll(); // 초기 상태에서 레이블 설정
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
                boxRefs.current[index] = el; // 각 박스에 ref 설정
              }
            }}
            data={item} isView={boxLabels[index]} />
        ))}
      </div>
    </div>
  );
};

export default PeedList;