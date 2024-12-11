'use client';
import YoutubeData from '@/components/youtubeVideo/YoutubeData';
import YoutubeScript from '@/components/youtubeVideo/YoutubeScript';
import YoutubeVideo from '@/components/youtubeVideo/YoutubeVideo';
import { useLayoutContext } from '@/context/LayoutContext';
import { useEffect, useState } from 'react';
import s from './upload.module.scss';

const UploadPage = () => {
  const { setMenuState, setText, setTag } = useLayoutContext();
  const [inputText, setInputText] = useState<string>("");
  const [videoId, setViedoId] = useState<string>("");
  const [videoTime, setVideoTime] = useState(0);
  const [videoTag, setVideoTag] = useState([]);

  useEffect(() => {
    if (videoId != '') {
      setMenuState(false);
      setText(videoId);
    }
  }, [videoId])

  const onChange = (e: any) => {
    setInputText(e.target.value);
  }
  const preView = () => {
    const link = inputText.split('?v=')[1]
    setViedoId(link);
  }

  const handleTimeUpdate = (time: number) => {
    setVideoTime(time);
  };

  const onChageTextarea = () => {
    
  }

  const blur = () => {
    setTag(videoTag);
  }

  return (
    <>
      <div className={s.input}>
        <input type="text" name="" id="" value={inputText} onChange={onChange} placeholder='ex) https://www.youtube.com/watch?v=xxxxx' />
        <button onClick={preView}>확인</button>
      </div>
      {
        // 확인 누르면 유튜브 정보 미리보기 해야됨.
        videoId &&
        <>
          <YoutubeVideo videoId={videoId} onTimeUpdate={handleTimeUpdate} />
          <YoutubeData videoId={videoId} />
          <div >
            <textarea placeholder='여기에 태그를 입력하세요' onChange={onChageTextarea}>

            </textarea>
          </div>
          <YoutubeScript videoTime={videoTime} videoId={videoId} viewLength={1} />
        </>
      }
    </>
  );
};

export default UploadPage;