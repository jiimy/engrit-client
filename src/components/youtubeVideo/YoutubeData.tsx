'use client';
import { fetchTranscript, fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import TranslateWord from '@/util/TranslateWord';
import React, { useEffect, useState } from 'react';

const YoutubeData = ({ videoId }: { videoId: string | any}) => {
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
      <div>
        <div>
          <img src={profileImage} />
        </div>
        <div>
          <p>{videoInfo?.title}</p>
          <span>{videoInfo?.channelTitle}</span>
        </div>
        <div>
          북마크, 더보기
        </div>
      </div>
    </div>
  );
};

export default YoutubeData;