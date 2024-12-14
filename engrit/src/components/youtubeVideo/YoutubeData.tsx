'use client';
import { fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import { useEffect, useState } from 'react';

const YoutubeData = ({ videoId, children }: { videoId: string | any; children?: React.ReactNode }) => {
  // 유튜브 정보
  const [videoInfo, setVideoInfo] = useState<any>();
  // 유튜브 채널 정보
  const [profileImage, setProfileImage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const info = await fetchVideoInfo(videoId);
      const profile = await getChannelProfileImage(videoId);
      setVideoInfo(info?.snippet);
      setProfileImage(profile);
    };
    fetchData();
  }, [videoId])

  return (
    <div>
      <div className='flex'>
        <div className='max-w-32 max-h-32 w-full h-full rounded-full overflow-hidden mr-12'>
          <img src={profileImage} />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-[#262626'>{videoInfo?.title}</p>
            <span className='text-[#8C8C8C]'>{videoInfo?.channelTitle}</span>
          </div>
          <div className='flex flex-col'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeData;