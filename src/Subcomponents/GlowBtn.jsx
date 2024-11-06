import React, { useState } from 'react';
import Streak from './IconContsiner';

const GlowBtn = ({ name, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="relative flex px-6 py-4  text-lg uppercase tracking-widest transition duration-300 ease-in-out border-white/30"
      style={{
        boxShadow: isActive
          ? `
            inset 0 0 15px rgba(255, 255, 255, 0.5),
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 20px rgba(255, 255, 255, 0.4)
          `
          : `
            inset 0 0 10px rgba(0, 0, 0, 0.6),
            inset 0 0 20px rgba(0, 0, 0, 0.4)
          `,
      }}
    >
      {/* Icon */}
      <span className="mr-2 text-white">
        {icon && (
          <Streak size={30}>
            <img src={`./icons/${icon}`} alt="" className="w-6 h-6" />
          </Streak>
        )}
      </span>
      {/* Button Text */}
      <span
        className="relative transition-all dropShadow-glow text-white duration-300 ease-in-out"
        style={{
          textShadow: `
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff
          `,
        }}
      >
        <div>{name}</div>
      </span>
    </button>
  );
};

export default GlowBtn;
