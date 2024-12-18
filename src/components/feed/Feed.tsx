'use client';
import { forwardRef, Ref, useState } from 'react';
import YoutubeVideo from '../youtubeVideo/YoutubeVideo';
import YoutubeData from '../youtubeVideo/YoutubeData';
import YoutubeScript from '../youtubeVideo/YoutubeScript';
import Link from 'next/link';
import PageAction from '../pageAction/PageAction';
import { useQuery } from '@tanstack/react-query';
import { youtubeTest } from '@/api/youtube';

type feedType = {
  data?: any;
  isBookmark: boolean;
};

const Feed = forwardRef(({
  data,
  isBookmark
}: feedType, ref: Ref<HTMLDivElement>) => {

  const [videoTime, setVideoTime] = useState(0);

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  const { data: youtubeInfo, isLoading } = useQuery({
    queryFn: () => youtubeTest(data?.youtube_link),
    queryKey: ['youtubeLink', data?.youtube_link],
    // enabled: data?.youtube_link
  })

  console.log('aa1', youtubeInfo)

  return (
    <div ref={ref}>
      <YoutubeVideo videoId={data?.youtube_link} onTimeUpdate={handleTimeUpdate} playTime={youtubeInfo?.contentDetails?.duration} />
      <Link href={`/detail/${data?.id}`} className='block pt-16 pb-20 pl-20 pr-20'>
        <YoutubeData title={youtubeInfo?.snippet?.title} channelTitle={youtubeInfo?.snippet?.channelTitle} thumbnails={youtubeInfo?.snippet?.thumbnails?.default?.url}>
          <PageAction onClick={(e: any) => { e.stopPropagation(); e.preventDefault() }} data={data}
            isBookmark={isBookmark}
          />
        </YoutubeData>
        <YoutubeScript videoTime={videoTime} videoId={data.youtube_link} viewLength={1} />
        <div>{data?.tag?.replace(/(?!^)(#)/g, ' $1')}</div>
      </Link>
    </div>
  );
});

Feed.displayName = "Feed";

export default Feed;