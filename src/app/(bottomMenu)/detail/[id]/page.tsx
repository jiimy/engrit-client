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

  const videoIndex = parseInt(params.id);

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(videoData[videoIndex]?.videoId);
      setScript(trans);
    };
    fetchData();
  }, [params])

  console.log('cc1', script);

  return (
    <>
      <YoutubeVideo videoId={videoData[videoIndex]?.videoId} />
      <div>
        {script?.map((item: any, index: number) => (
          <div key={index}
            className={classNames([s.script], {
              [s.is_viewing]: isViewing
            })}>
            <p>{item.text}</p>
            <p>번역된거 들어감</p>
            <span>{item.offset} ~ {item.duration}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailPage;

export const runtime = 'edge';