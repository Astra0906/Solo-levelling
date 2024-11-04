import React from 'react';

const Streak = ({children}) => {
  return (
    <div className="relative flex justify-center items-center w-20 h-20">
      {/* First Square */}
      <div className="absolute w-full h-full border-2 border-blue-500 transform rotate-12"></div>
      {/* Second Square */}
      <div className="absolute w-full h-full border-2 border-blue-500 transform -rotate-12"></div>
      {/* Centered Text */}
      <div className="text-center text-white">
        {children}
      </div>
    </div>
  );
};

export default Streak;
