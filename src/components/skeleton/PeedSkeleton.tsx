import React from 'react';
import Lottie from "react-lottie-player";
import data from "./engrit-skeleton.json";

const PeedSkeleton = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={data}
        play
      // style={{ width: 1000, height: 1000 }}
      />
    </div>
  );
};

export default PeedSkeleton;