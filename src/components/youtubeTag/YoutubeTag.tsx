'use client';
import React, { useEffect, useState } from 'react';
import s from './youtubeTag.module.scss';
import { useLayoutContext } from '@/context/LayoutContext';
import classNames from 'classnames';

const YoutubeTag = ({ value, autofocus, className }: { value?: string; autofocus?: boolean; className?: any; }) => {
  const { setTag } = useLayoutContext();
  const [videoTag, setVideoTag] = useState([]);
  const [videoTagCount, setVideoTagCount] = useState(0);

  useEffect(() => {
    const textlength = value?.split('#').filter((tag: any) => tag.trim() !== '')
    if (textlength) {
      setVideoTagCount(textlength?.length);
    }
  }, [value])

  const onChageTextarea = (e: any) => {
    const targetValue = e.target.value;
    const hashtags = targetValue.split('#').filter((tag: any) => tag.trim() !== '');

    if (hashtags.length > 5) {
      alert('최대 5개의 해시태그만 입력 가능합니다.');
      return;
    }

    if (targetValue.length === 1 && targetValue !== '#') {
      alert('태그는 #으로 시작해야 합니다.');
      setVideoTag([]);
      return;
    }


    if (targetValue.endsWith('#') && hashtags.length > 0 && !targetValue.match(/#[^#]*$/)) {
      alert('해시태그를 정확히 입력해주세요.');
      return;
    }
    
    setVideoTag(targetValue);
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
    console.log('vv', videoTag);
    setTag(videoTag);
    // setTag(...videoTag);
  }

  return (
    <div className={classNames([s.textarea], className)}>
      <textarea placeholder='여기에 태그를 입력하세요' onChange={onChageTextarea} onBlur={blur}
        // value={videoTag} 
        onKeyDown={onKeyDown} autoFocus={autofocus}>
        {value || videoTag}
      </textarea>
      <span>#해시태그 {videoTagCount}/5개</span>
    </div>
  );
};

export default YoutubeTag;