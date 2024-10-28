'use client';
import React, { useState, useEffect, useRef, forwardRef, Ref } from 'react';
import YouTube from 'react-youtube';
import s from './feed.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

type feedType = {
  data?: any;
  // text?: string;
  isView: any;
};

const Feed = forwardRef(({
  data,
  // text,
  isView
}: feedType, ref: Ref<HTMLDivElement>) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const peedRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${data?.videoId}/maxresdefault.jpg`;
  // playerRef.current.stopVideo(); // 영상 초기화

  // 3초간 화면에 있으면 자동재생
  // useEffect(() => {
  //   if (isView && isMobile) {
  //     const timer = setTimeout(() => {
  //       setIsPlaying(true);
  //       playerRef.current?.playVideo();
  //     }, 3000);
  //     return () =>
  //       clearTimeout(timer);
  //   } else {
  //     setIsPlaying(false);
  //     playerRef.current?.stopVideo();
  //   }
  // }, [isView]);

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
      mute: 1, // 소리킴 : 0, 소리를 키니까 자동재생이 안됨.
      modestbranding: 1, // 유튜브 로고 제거? 잘안됨. 
      loop: 1,
      // start: 5,
      // end: 10,
      fs: 0 // 전체화면 버튼 숨기기?
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
                // e.target.setVolume(100);
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

Feed.displayName = "Feed";

export default Feed;