import React from 'react';

const Streak = ({ children, size = 24 }) => {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* First Square */}
      <div className="absolute w-full h-full border-2 border-blue-500 transform rotate-12"></div>
      {/* Second Square */}
      <div className="absolute w-full h-full border-2 border-blue-500 transform -rotate-12"></div>
      {/* Centered Text */}
      <div className="text-center text-white text-lg font-bold p-1">
        {children}
      </div>
    </div>
  );
};

export default Streak;
