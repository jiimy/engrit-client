'use client';
import { fetchTranscript } from '@/api/youtube';
import { videoData } from '@/data/sampleVideoData';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const params = useParams<{ id: string }>();
  const [script, setScript] = useState<any>();
  const [group, setGroup] = useState<number>(0);

  // 그룹당 데이터 갯수 (10개씩 묶기)
  const groupSize = 10;

  // group 값에 따른 데이터 범위 계산
  const startIdx = group * groupSize;   // 그룹의 시작 인덱스
  const endIdx = startIdx + groupSize;  // 그룹의 끝 인덱스

  // 현재 그룹에 해당하는 데이터 추출

  useEffect(() => {
    const videoIndex = parseInt(params.id);
    const fetchData = async () => {
      const trans = await fetchTranscript(videoData[videoIndex]?.videoId);
      const currentData = trans.slice(startIdx, endIdx);
      setScript(currentData);
    };
    fetchData();
  }, [params])

  console.log('cc1', script);

  return (
    <>
      {script?.map((item: any, index: number) => (
        <div key={index}>{item.text}</div>
      ))}
    </>
  );
};

export default DetailPage;

export const runtime = 'edge';