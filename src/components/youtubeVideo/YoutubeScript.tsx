import React, { useEffect, useState, useRef } from 'react';
import { fetchTranscript } from '@/api/youtube';
import TranslateWord, { cleanText } from '@/util/TranslateWord';
import s from './youtubevideo.module.scss';
import classNames from 'classnames';

const YoutubeScript = ({ videoId, videoTime, viewLength = 0 }: { videoId: string | any; videoTime: any; viewLength?: number }) => {
  const [script, setScript] = useState<any>();
  const activeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(videoId);
      setScript(trans);
    };
    fetchData();
  }, [videoId]);

  useEffect(() => {
    if (activeRef.current && viewLength === 0) {
      activeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [videoTime]);

  const processScriptData = () => {
    // 종료 시간 계산
    const result = script?.map((item: any, index: any, arr: any) => {
      const start = item.offset;
      const end = index < arr.length - 1 ? arr[index + 1].offset : start + item.duration;
      return { ...item, start, end };
    });
    return result;
  };

  const processedData = processScriptData();

  return (
    <div className={s.script_wrap}>
      {processedData?.map((item: any, index: number) => {
        const isViewing = item.start <= videoTime && videoTime < item.end;
        return (
          <div
            key={index}
            ref={isViewing ? activeRef : null}
            className={classNames([s.script], {
              [s.is_viewing]: isViewing
            })}
            style={{
              display: viewLength !== 0 && isViewing ? 'block' : 'none', // 조건에 맞는 항목만 표시
            }}
          >
            <p>{cleanText(item.text)}</p>
            <p>
              <TranslateWord source={item.text} id={videoId} />
            </p>
            <span>
              {item.start.toFixed(2)} ~ {item.end.toFixed(2)}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeScript;
