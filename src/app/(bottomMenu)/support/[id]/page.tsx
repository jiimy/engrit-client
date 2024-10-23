'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';

const SupportDetail = () => {
  const params = useParams<{ id: string }>();

  useEffect(() => {
    // getBoardId(params?.id as string).then((res) => {
    //   console.log('res', res, res[0]);
    //   setData(res[0]);
    // });
    // console.log('data', data);
  }, []);

  return (
    <div>
      답변완료 상세페이지
      <br />
      게시글 {params?.id}번
    </div>
  );
};

export default SupportDetail;