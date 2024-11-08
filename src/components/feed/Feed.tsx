'use client';
import { fetchTranscript, fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import TranslateWord from '../../util/TranslateWord';
import s from './feed.module.scss';
import YoutubeVideo from '../youtubeVideo/YoutubeVideo';

type feedType = {
  data?: any;
  // text?: string;
  isView: any;
};

const Feed = forwardRef(({
  data,
  // text,
  isView
}: feedType, ref: Ref<HTMLDivElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const peedRef = useRef<HTMLDivElement | null>(null);
  // 번역
  const [transcript, setTranscript] = useState<any>();
  // 유튜브 정보
  const [videoInfo, setVideoInfo] = useState<any>();
  // 유튜브 채널 정보
  const [profileImage, setProfileImage] = useState<string>('');
  // 번역된거
  const [textTrans, setTextTrans] = useState<any>('');

  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(data?.videoId);
      const info = await fetchVideoInfo(data?.videoId);
      const profile = await getChannelProfileImage(data?.videoId);
      setTranscript(trans);
      setVideoInfo(info?.snippet);
      setProfileImage(profile);
    };
    fetchData();
  }, [data?.videoId])


  console.log('cc', transcript);

  return (
    <div ref={ref}>
      <YoutubeVideo videoId={data?.videoId} />
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
        <div>
          <div>텍스트: {transcript && transcript[0]?.text}
            <br />
            번역: {transcript && transcript[0]?.text && <TranslateWord source={transcript[0]?.text} />}
          </div>
          <span>{transcript?.offset} - {transcript?.duration}</span>
        </div>
      </div>
    </div>
  );
});

Feed.displayName = "Feed";

export default Feed;