'use client';
import { fetchTranscript, fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import TranslateWord from '@/util/TranslateWord';
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

  console.log('cc', script, videoId);


  const a = "&amp;quot;Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo&amp;quot;."
  return (
    <div className={s.script_wrap}>
      11
      {script?.map((item: any, index: number) => (
        <div key={index}
          className={classNames([s.script], {
            [s.is_viewing]: (item.offset <= videoTime) && (videoTime < item.offset + item.duration)
          })}>
          <p>{item.text}</p>
          <p>{TranslateWord(a as any)}</p>
          <span>{item.offset} ~ {item.offset + item.duration}</span>
        </div>
      ))}
    </div>
  );
};

export default YoutubeScript;