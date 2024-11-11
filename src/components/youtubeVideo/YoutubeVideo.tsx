'use client';
import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import s from './youtubevideo.module.scss';

const YoutubeVideo = ({ videoId, onTimeUpdate }: { videoId: string; onTimeUpdate?: (time: number) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // interval을 추적할 ref
  const [lastTime, setLastTime] = useState(0); // 마지막 시간 상태

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      mute: 1,
      modestbranding: 1, // 유튜브 로고 제거? 잘안됨.
      loop: 1,
      fs: 0, // 전체화면 버튼 숨기기?
    },
  };

  const onReady = (event: any) => {
    const player = event.target;

    const startInterval = () => {
      // 이미 interval이 존재하면 클리어하고 새로 시작
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        const playerState = player.getPlayerState();
        const currentTime = player.getCurrentTime();

        if (playerState === 1) {
          setLastTime(currentTime);
          if (onTimeUpdate) {
            onTimeUpdate(currentTime);
          }
        }
      }, 1000);
    };

    startInterval();

    player.addEventListener('onStateChange', (event: any) => {
      if (event.data === 0 || event.data === 2) { // 영상이 종료되거나 일시 정지되었을 때
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    });
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className={classNames([s.youtube_wrap], {})}>
      {!isPlaying ? (
        <div className={s.youtube_thumbnail} onClick={handlePlay}>
          <Image src={thumbnailUrl} alt="YouTube Thumbnail" fill />
        </div>
      ) : (
        <YouTube
          videoId={videoId}
          opts={videoOptions}
          onReady={onReady}
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
