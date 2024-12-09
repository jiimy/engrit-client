import Link from 'next/link';
import React from 'react';
import s from './support.module.scss';

type supportType = {
  data: {}
}

const Support = () => {
  return (
    <div className={s.support}>
      <Link href={'/support/1'}>
        <span className=''>답변완료</span>
        <p>다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 </p>
        <span>24.09.29</span>
      </Link>
    </div>
  );
};

export default Support;