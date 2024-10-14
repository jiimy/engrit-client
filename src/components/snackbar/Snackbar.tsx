import React, { useEffect } from 'react';
import styles from './snackbar.module.scss'; // 스타일 모듈

type SnackbarProps = {
  message: string;
  time?: number;
  onClose: () => void;
};

const Snackbar = ({ message, onClose, time = 99999 }: SnackbarProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, time);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되거나 타이머 정리
  }, [onClose]);

  return (
    <div className={styles.snackbar}>
      {message}
      <button className={styles.closeButton} onClick={onClose}>
        &times; {/* 닫기 아이콘 */}
      </button>
    </div>
  );
};

export default Snackbar;