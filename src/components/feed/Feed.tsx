'use client';
import { forwardRef, Ref, useState } from 'react';
import YoutubeVideo from '../youtubeVideo/YoutubeVideo';
import YoutubeData from '../youtubeVideo/YoutubeData';
import YoutubeScript from '../youtubeVideo/YoutubeScript';
import Link from 'next/link';

type feedType = {
  data?: any;
  // text?: string;
  isView: any;
  index:number;
};

const Feed = forwardRef(({
  data,
  index
}: feedType, ref: Ref<HTMLDivElement>) => {

  const [videoTime, setVideoTime] = useState(0);

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  return (
    <div ref={ref}>
      <YoutubeVideo videoId={data?.videoId} onTimeUpdate={handleTimeUpdate} />
      <Link href={`/detail/${index}`}>
        <YoutubeData videoId={data?.videoId} />
        {/* <YoutubeScript videoTime={videoTime} videoId={data.videoId} viewLength={1}/> */}
      </Link>
    </div>
  );
});

Feed.displayName = "Feed";

export default Feed;