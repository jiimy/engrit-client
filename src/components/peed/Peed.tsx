import React from 'react';
import YouTube from 'react-youtube';
import s from './peed.module.scss';

type peedType = {
  videoId?: string;
}

const Peed = ({ videoId = 'zoxmRJ0grt8' }: peedType) => {

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    // <div style={{ minHeight: '0px' }}>
    <div>
      <div className={s.youtube_wrap}>
        {
          <img src={thumbnailUrl} alt="YouTube Thumbnail" />
        }
        {/* <YouTube
          videoId={"zoxmRJ0grt8?si=uuxAGwhcluE3Ht6i"}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1, //자동재생 O
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          onReady={(e: any) => {
            e.target.mute();
          }}
          onEnd={(e: any) => {
            e.target.stopVideo(0);
          }}
        /> */}
      </div>
      <div className={s.area} style={{ height: '48px'}}>
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