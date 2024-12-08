'use client';
import { useMenuContext } from '@/context/MenuContext';
import { useEffect, useState } from 'react';
import s from './upload.module.scss';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import YoutubeData from '@/components/youtubeVideo/YoutubeData';
import YoutubeScript from '@/components/youtubeVideo/YoutubeScript';

const UploadPage = () => {
  const { setMenuState, setContent } = useMenuContext();
  const [text, setText] = useState<string>("");
  const [videoId, setViedoId] = useState<string>("");
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    if (videoId != '') {
      setMenuState(false);
      setContent(videoId);
    }
  }, [videoId])

  const onChange = (e: any) => {
    setText(e.target.value);
  }
  const preView = () => {
    const link = text.split('?v=')[1]
    setViedoId(link);
  }

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  return (
    <>
      <div className={s.input}>
        <input type="text" name="" id="" value={text} onChange={onChange} placeholder='ex) https://www.youtube.com/watch?v=xxxxx' />
        <button onClick={preView}>확인</button>
      </div>
      {
        // 확인 누르면 유튜브 정보 미리보기 해야됨.
        videoId &&
        <>
          <YoutubeVideo videoId={videoId} onTimeUpdate={handleTimeUpdate} />
          <YoutubeData videoId={videoId} />
          <YoutubeScript videoTime={videoTime} videoId={videoId} viewLength={1} />
        </>
      }
    </>
  );
};

export default UploadPage;