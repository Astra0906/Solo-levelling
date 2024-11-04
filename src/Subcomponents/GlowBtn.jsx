import React, { useState } from 'react';

const GlowBtn = ({name}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className="relative px-6 py-2 border-2 text-lg uppercase tracking-widest transition duration-300 ease-in-out
       border-white/30"
       style={{
        boxShadow: `
            inset 0 0 10px rgba(0, 0, 0, 0.6),
            inset 0 0 20px rgba(0, 0, 0, 0.4)
        `
    }}
        >
            <span className="mr-2 text-white">
                <i className="fas fa-info-circle"></i>
            </span>
            <span
                className="relative 
          transition-all dropShadow-glow text-white duration-300 ease-in-out 
         "
                style={{
                    textShadow: `
                        0 0 7px #fff,
                        0 0 10px #fff,
                        0 0 21px #fff
                    `,
                }}
            >
                {name}
            </span>
        </button>
    );
};

export default GlowBtn;
