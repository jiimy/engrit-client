'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import s from './youtubevideo.module.scss';

const YoutubeVideo = ({ videoId,  }: { videoId: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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

  const onReady = (event: any) => {
    const player = event.target; // YouTube player 객체
    // 예시로 1초마다 재생 시간을 확인하도록 설정
    setInterval(() => {
      const time = player.getCurrentTime(); // getCurrentTime()을 호출하여 현재 재생 시간 얻기
      console.log('time', time);
      setCurrentTime(time); // 재생 시간을 상태로 업데이트
    }, 1000); // 1초마다 실행
  };

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

  return (
    <div className={classNames([s.youtube_wrap], {})}>
      {
        !isPlaying ?
          <div className={s.youtube_thumbnail} onClick={handlePlay}>
            <Image src={thumbnailUrl} alt="YouTube Thumbnail" fill />
          </div> :
          <YouTube videoId={videoId} opts={videoOptions}
            onReady={(e: any) => {
              e.target.playVideo();
              e.target.unMute();
              onReady(e);
              // e.target.setVolume(100);
            }}
          />
      }
    </div>
  );
};

export default YoutubeVideo;