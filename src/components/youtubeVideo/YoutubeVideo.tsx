'use client';
import classNames from 'classnames';
import React, { useState, useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import Image from 'next/image';
import s from './youtubevideo.module.scss';

const YoutubeVideo = ({ videoId, onTimeUpdate }: { videoId: string; onTimeUpdate?: (time: number) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const playerRef = useRef<any>(null);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      mute: 1,
      modestbranding: 1,
      loop: 1,
      fs: 0,
    },
  };

  const onReady = (event: any) => {
    const player = event.target;
    playerRef.current = player;

    const startInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        const playerState = player.getPlayerState();
        const currentTime = player.getCurrentTime();

        if (playerState === 1 || playerState === 3) { // 영상이 재생중이거나 seek 상태일 때
          setCurrentTime(currentTime);
          if (onTimeUpdate) {
            onTimeUpdate(currentTime);
          }
        }
      }, 1000);
    };

    startInterval();

    player.addEventListener('onStateChange', (event: any) => {
      if (event.data === 0 || event.data === 2) { // 영상이 종료되거나 일시 정지된 경우
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }

      // 사용자가 스크러버로 시간을 변경했을 때, 그 시간을 부모에게 전달
      if (event.data === 3) { // 영상이 'seek' 상태로 변경되었을 때 (시간 이동)
        const currentTime = player.getCurrentTime();
        setCurrentTime(currentTime);
        if (onTimeUpdate) {
          onTimeUpdate(currentTime);
        }
      }
    });
  };

  const handlePlay = () => {
    setIsPlaying(true);

    // 사용자가 스크러버로 시간을 이동했을 때, 그 시간에 맞춰서 영상 재생을 시작하도록 설정
    if (playerRef.current) {
      const player = playerRef.current;
      const time = player.getCurrentTime();
      player.seekTo(time, true); // 그 시간으로 영상 이동
      if (onTimeUpdate) {
        onTimeUpdate(time);
      }
    }
  };

  useEffect(() => {
    // 부모로 전달된 시간 업데이트가 있을 때마다, 시간 상태를 갱신
    if (onTimeUpdate) {
      onTimeUpdate(currentTime);
    }
  }, [currentTime, onTimeUpdate]);

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
