"use client";
import React from 'react';
import Lottie from 'lottie-react';
import animationData from './LoadingAnimation.json';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-40 z-50">
      <div className="flex flex-col items-center justify-center">
        <Lottie animationData={animationData} loop={true} className='w-60 h-60'/>
      </div>
    </div>
  );
};

export default Loading;