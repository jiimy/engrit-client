import Header from '@/components/header/Header';
import React from 'react';
import s from './addPeed.module.scss';
import BottomMenu from '@/components/bottomMenu/BottomMenu';

const AddPeed = () => {
  return (
    <div>
      <Header title="콘텐츠 만들기" />

      <div className='content'>
        <div>
          <input type="text" /> 확인
        </div>
        또는
        <div className={s.fileinput}>
          <input type='file' />
        </div>
      </div>
      <BottomMenu text='업로드' type='submit' />

    </div>
  );
};

export default AddPeed;