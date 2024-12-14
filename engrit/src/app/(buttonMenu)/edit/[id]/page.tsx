'use client';
import { useParams } from 'next/navigation';
import s from './edit.module.scss';
import { useEffect, useState } from 'react';
import { fetchTranscript } from '@/api/youtube';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import YoutubeData from '@/components/youtubeVideo/YoutubeData';
import YoutubeScript from '@/components/youtubeVideo/YoutubeScript';
import { useQuery } from '@tanstack/react-query';
import { getFeedIDApi } from '@/api/board';
import YoutubeTag from '@/components/youtubeTag/YoutubeTag';
import Loading from '@/components/loading/Loading';
import { useLayoutContext } from '@/context/LayoutContext';

const Edit = () => {
  const params = useParams<{ id: string }>();
  const { setTag } = useLayoutContext();
  const [script, setScript] = useState<any>();
  const [group, setGroup] = useState<number>(0);
  // 유튜브 재생 시간
  const [videoTime, setVideoTime] = useState(0);

  const videoIndex = parseInt(params.id);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['feedId', videoIndex],
    queryFn: () => getFeedIDApi(videoIndex),
  })

  console.log('data', data);

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(data[0]?.youtube_link);
      setScript(trans);
    };
    fetchData();

  }, [params])

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  isSuccess && setTag(data[0]?.tag);

  return (
    <div className={s.edit_page}>
      {isSuccess &&
        <>
          <YoutubeVideo videoId={data[0]?.youtube_link} onTimeUpdate={handleTimeUpdate} />
          <div className='flex flex-col overflow-hidden'>
            <YoutubeData videoId={data[0]?.youtube_link} />
            <YoutubeTag value={data[0]?.tag} autoFocus className={s.edit_textarea} />
            <YoutubeScript videoTime={videoTime} videoId={data[0]?.youtube_link} />
          </div>
        </>
      }
      {isLoading && <Loading />}
    </div>
  );
};

export default Edit;
export const runtime = 'edge';