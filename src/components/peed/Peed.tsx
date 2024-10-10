'use client';
import React, { useState, useEffect, useRef, forwardRef, Ref } from 'react';
import YouTube from 'react-youtube';
import s from './peed.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

type peedType = {
  data?: any;
  // text?: string;
  isView: any;
};

const Peed = forwardRef(({
  data,
  // text,
  isView
}: peedType, ref: Ref<HTMLDivElement>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // 타이머 Ref 생성
  const peedRef = useRef<HTMLDivElement | null>(null); // 컴포넌트의 ref
  const playerRef = useRef<any>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${data?.videoId}/maxresdefault.jpg`;
  // playerRef.current.stopVideo(); // 영상 초기화

  // 3초간 화면에 있으면 자동재생
  useEffect(() => {
    if (isView) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
      }, 3000);

      return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    } else {
      setIsPlaying(false); // isView가 false일 때 비디오 초기화
      playerRef.current?.stopVideo(); // 비디오 중지
    }
  }, [isView, isMobile]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const videoOptions = {
    width: '100%',
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      mute: 1, // 소리를 키니까 자동재생이 안됨.
      loop: 1
    }
  };

  return (
    <div ref={ref}>
      <div className={classNames([s.youtube_wrap], {})}>
        {
          !isPlaying ?
            <div className={s.youtube_thumbnail} onClick={handlePlay}>
              <Image src={thumbnailUrl} alt="YouTube Thumbnail" fill />
            </div> :
            <YouTube videoId={data?.videoId} opts={videoOptions}
              onReady={(e: any) => {
                e.target.playVideo();
                e.target.unMute();
              }}
            />
        }
      </div>
      <div className={s.area} style={{ height: '48px' }}>
        eng
      </div>
      {/* <div className={s.area} style={{ height: '330px' }}>
        스크립트 영역
      </div> */}
      <div className={s.area} style={{ height: '102px' }}>
        태그 영역
        {isView ? '여기 보고있음.' : ''}
      </div>
    </div>
  );
});

Peed.displayName = "Peed";

export default Peed;