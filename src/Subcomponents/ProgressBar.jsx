import React from 'react';

const ProgressBar = ({ progress }) => {
  // Function to return color based on progress level
  const getColor = () => {
    if (progress >= 75) return 'bg-green-500'; // High progress - green
    if (progress >= 50) return 'bg-yellow-500'; // Medium progress - yellow
    if (progress >= 25) return 'bg-orange-500'; // Low-medium progress - orange
    return 'bg-red-500'; // Very low progress - red
  };

  return (
    <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
      <div
        className={`h-full bg-grey-400 glitter-fill rounded-full transition-all duration-300`}
        style={{ width: `${progress}%`, backgroundColor:`${getColor()}` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
