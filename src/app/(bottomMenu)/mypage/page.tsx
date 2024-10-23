import PieChart from '@/components/chart/PieChart';
import React from 'react';

const page = () => {
  return (
    <>
      마이페이지
      <div>
        <p>잘 안들리는 이유</p>
        <div>리프레쉬버튼</div>
        <PieChart />
      </div>
    </>
  );
};

export default page;