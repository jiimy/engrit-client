'use client';
import { fetchTranscript } from '@/api/youtube';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import { videoData } from '@/data/sampleVideoData';
import classNames from 'classnames';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import s from './detail.module.scss';
import YoutubeData from '@/components/youtubeVideo/YoutubeData';
import YoutubeScript from '@/components/youtubeVideo/YoutubeScript';
import PageAction from '@/components/pageAction/PageAction';

// NOTE: isViewing: number 가 필요할수도있음.
const DetailPage = () => {
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

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  return (
    <div className={s.detail_page}>
      <YoutubeVideo videoId={videoData[videoIndex]?.videoId} onTimeUpdate={handleTimeUpdate} />
      <div className='flex flex-col overflow-hidden'>
        <YoutubeData videoId={videoData[videoIndex]?.videoId} />
        <YoutubeScript videoTime={videoTime} videoId={videoData[videoIndex]?.videoId} />
      </div>
    </div>
  );
};

export default DetailPage;

export const runtime = 'edge';