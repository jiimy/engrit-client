'use client';
import { fetchTranscript, fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import TranslateWord, { cleanText } from '@/util/TranslateWord';
import React, { useEffect, useState } from 'react';
import s from './youtubevideo.module.scss';
import classNames from 'classnames';

const YoutubeScript = ({ videoId, videoTime, viewLength }: { videoId: string | any; videoTime: any; viewLength?: number }) => {
  // 번역
  const [script, setScript] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(videoId);
      setScript(trans);
    };
    fetchData();
  }, [videoId])

  return (
    <div className={s.script_wrap}>
      {script?.map((item: any, index: number) => (
        <div key={index}
          className={classNames([s.script], {
            [s.is_viewing]: (item.offset <= videoTime) && (videoTime < item.offset + item.duration)
          })}>
          <p>{cleanText(item.text)}</p>
          <p>
            <TranslateWord source={item.text} id={videoId} />
          </p>
          <span>{item.offset.toFixed(2)} ~ {(item.offset + item.duration).toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
};

export default YoutubeScript;