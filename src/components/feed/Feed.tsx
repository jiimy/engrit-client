'use client';
import { fetchTranscript, fetchVideoInfo, getChannelProfileImage } from '@/api/youtube';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import s from './feed.module.scss';
import { translateText } from '@/util/translate';
import Test3 from '../test/Test3';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const peedRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  // 번역
  const [transcript, setTranscript] = useState<any>();
  // 유튜브 정보
  const [videoInfo, setVideoInfo] = useState<any>();
  // 유튜브 채널 정보
  const [profileImage, setProfileImage] = useState<string>('');
  // 번역된거
  const [textTrans, setTextTrans] = useState<any>('');

  const [translatedText, setTranslatedText] = useState('');

  const thumbnailUrl = `https://img.youtube.com/vi/${data?.videoId}/maxresdefault.jpg`;
  // playerRef.current.stopVideo(); // 영상 초기화

  // 3초간 화면에 있으면 자동재생
  // useEffect(() => {
  //   if (isView && isMobile) {
  //     const timer = setTimeout(() => {
  //       setIsPlaying(true);
  //       playerRef.current?.playVideo();
  //     }, 3000);
  //     return () =>
  //       clearTimeout(timer);
  //   } else {
  //     setIsPlaying(false);
  //     playerRef.current?.stopVideo();
  //   }
  // }, [isView]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const trans = await fetchTranscript(data?.videoId, 0);
      const info = await fetchVideoInfo(data?.videoId);
      const profile = await getChannelProfileImage(data?.videoId);
      setTranscript(trans);
      setVideoInfo(info?.snippet);
      setProfileImage(profile);
    };
    fetchData();
  }, [data?.videoId])


  const videoOptions = {
    width: '100%',
    height: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      mute: 1, // 소리킴 : 0, 소리를 키니까 자동재생이 안됨.
      modestbranding: 1, // 유튜브 로고 제거? 잘안됨. 
      loop: 1,
      // start: 5,
      // end: 10,
      fs: 0 // 전체화면 버튼 숨기기?
    }
  };

  return (
    <div ref={ref}>
      <div className={classNames([s.youtube_wrap], {})}>
        {
          !isPlaying ?
            <div className={s.youtube_thumbnail} onClick={handlePlay}>
              <Image src={thumbnailUrl} alt="YouTube Thumbnail" fill />
            </div> :
            <YouTube videoId={data?.videoId} opts={videoOptions}
              onReady={(e: any) => {
                e.target.playVideo();
                e.target.unMute();
                // e.target.setVolume(100);
              }}
            />
        }
      </div>
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
          <div>텍스트: {transcript?.text}
            <br />
            번역: {transcript?.text && <Test3 source={transcript?.text} />}
          </div>
          <span>{transcript?.offset} - {transcript?.duration}</span>
        </div>
      </div>
    </div>
  );
});

Feed.displayName = "Feed";

export default Feed;