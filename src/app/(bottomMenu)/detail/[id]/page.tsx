'use client';
import { fetchTranscript } from '@/api/youtube';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import { videoData } from '@/data/sampleVideoData';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import s from './detail.module.scss';

const DetailPage = ({ isViewing }: { isViewing: number }) => {
  const params = useParams<{ id: string }>();
  const [script, setScript] = useState<any>();
  const [group, setGroup] = useState<number>(0);
  // 유튜브 재생 시간
  const [videoTime, setVideoTime] = useState(0);

  const videoIndex = parseInt(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(videoData[videoIndex]?.videoId);
      setScript(trans);
    };
    fetchData();
  }, [params])

  // console.log('cc1', script);
  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
    console.log('Current video time:', time); // 부모에서 videoTime을 사용할 수 있음
  };

  return (
    <>
      <YoutubeVideo videoId={videoData[videoIndex]?.videoId} onTimeUpdate={handleTimeUpdate} />
      <div>
        {script?.map((item: any, index: number) => (
          <div key={index}
            className={classNames([s.script], {
              [s.is_viewing]: (item.offset <= videoTime) && (videoTime < item.offset + item.duration)
            })}>
            <p>{item.text}</p>
            <p>번역된거 들어감
              {typeof item.offset}
              {typeof videoTime}
              {typeof item.offset + item.duration}
            </p>
            <span>{item.offset} ~ {item.offset + item.duration}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailPage;

export const runtime = 'edge';