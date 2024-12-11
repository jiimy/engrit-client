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
  const [videoTagCount, setVideoTagCount] = useState(0);

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

  const onChageTextarea = (e: any) => {
    const value = e.target.value;
    const hashtags = value.split('#').filter((tag: any) => tag.trim() !== '');

    if (hashtags.length > 5) {
      alert('최대 5개의 해시태그만 입력 가능합니다.');
      return;
    }

    if (value.endsWith('#') && hashtags.length > 0 && !value.match(/#[^#]*$/)) {
      alert('해시태그를 정확히 입력해주세요.');
      return;
    }

    setVideoTag(value);
    setVideoTagCount(hashtags.length);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 이미 해시태그 개수가 5개면 추가 입력 차단
    if (videoTagCount >= 5 && e.key === '#') {
      e.preventDefault();
      alert('최대 5개의 해시태그만 입력 가능합니다.');
    }
  };


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
          <div className={s.textarea}>
            <textarea placeholder='여기에 태그를 입력하세요' onChange={onChageTextarea} onBlur={blur} value={videoTag} onKeyDown={onKeyDown}>
            </textarea>
            <span>#해시태그 {videoTagCount}/5개</span>
          </div>
          <YoutubeScript videoTime={videoTime} videoId={videoId} viewLength={1} />
        </>
      }
    </>
  );
};

export default UploadPage;