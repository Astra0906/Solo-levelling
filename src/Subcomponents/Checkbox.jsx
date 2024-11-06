import React, { useState } from 'react';

const CoolCheckbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer select-none">
      <div
        onClick={toggleCheckbox}
        className={`w-6 h-6 mr-3 rounded-md border-2 transition duration-300 ease-in-out
          ${isChecked ? 'bg-blue-500 border-blue-500' : 'bg-gray-200 border-gray-400'}
        `}
        style={{
          position: 'relative',
          transform: isChecked ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 
            ${isChecked ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-gray-800">{label}</span>
    </label>
  );
};

export default CoolCheckbox;
