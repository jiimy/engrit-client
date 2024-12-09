import React from 'react';

const Upload = () => {
  return (
    <div>
      <div>
        <input type="text" /> 확인
      </div>
      또는
      <div>
        <input type="file" />
        파일 업로드
      </div>
    </div>
  );
};

export default Upload;