'use client';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import s from './peed.module.scss';
import Image from 'next/image';

type peedType = {
  videoId?: string;
}

const Peed = ({ videoId = 'zoxmRJ0grt8' }: peedType) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handlePlay = () => {
    setIsPlaying(true);
  };

  console.log('ss', isPlaying);

  return (
    // <div style={{ minHeight: '0px' }}>
    <div>
      <div className={s.youtube_wrap}>
        {
          !isPlaying ?
            <div className={s.youtube_thumbnail} onClick={handlePlay}>
              <Image src={thumbnailUrl} alt="YouTube Thumbnail" fill />
            </div> :
            <YouTube
              videoId={"zoxmRJ0grt8?si=uuxAGwhcluE3Ht6i"}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                },
              }}
              onReady={(e: any) => {
                e.target.mute();
              }}
              onEnd={(e: any) => {
                e.target.stopVideo(0);
              }}
            />
        }
      </div>
      <div className={s.area} style={{ height: '48px' }}>
        eng
      </div>
      <div className={s.area} style={{ height: '330px' }}>
        스크립트 영역
      </div>
      <div className={s.area} style={{ height: '102px' }}>
        태그 영역
      </div>
    </div>
  );
};

export default Peed;