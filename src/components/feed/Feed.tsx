'use client';
import { forwardRef, Ref, useState } from 'react';
import YoutubeVideo from '../youtubeVideo/YoutubeVideo';
import YoutubeData from '../youtubeVideo/YoutubeData';
import YoutubeScript from '../youtubeVideo/YoutubeScript';
import Link from 'next/link';
import PageAction from '../pageAction/PageAction';

type feedType = {
  data?: any;
  id: number;
};

const Feed = forwardRef(({
  data,
  id
}: feedType, ref: Ref<HTMLDivElement>) => {

  const [videoTime, setVideoTime] = useState(0);

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  return (
    <div ref={ref}>
      <YoutubeVideo videoId={data?.youtube_link} onTimeUpdate={handleTimeUpdate} />
      <Link href={`/detail/${id}`} className='block pt-16 pr-20 pb-20 pl-20'>
        <YoutubeData videoId={data?.youtube_link}>
          <PageAction />
        </YoutubeData>
        <YoutubeScript videoTime={videoTime} videoId={data.youtube_link} viewLength={1} />
      </Link>
    </div>
  );
});

Feed.displayName = "Feed";

export default Feed;