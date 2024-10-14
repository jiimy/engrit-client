'use client';
import { useSnackbar } from '@/provider/snackbarProvider';
import React from 'react';

const SharedPage = () => {
  const { showSnackbar } = useSnackbar();

  const handleClick = () => {
    showSnackbar('This is a snackbar message!');
  };
  return (
    <div>
      공통페이지
      <button onClick={handleClick}>Show Snackbar</button>
    </div>
  );
};

export default SharedPage;