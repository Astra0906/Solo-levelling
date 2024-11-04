import React, { useEffect, useState } from 'react';
import { AnimatedBackground } from 'animated-backgrounds';
const BgDrop = ({children }) => {
  
  const [animationName, setAnimationName] = useState('starryNight');
useEffect(() => {
    const animations = ['starryNight','fireflies', 'matrixRain','electricStorm', 'particleNetwork', 'galaxySpiral','auroraBorealis',];
    const storedIndex = localStorage.getItem('backgroundAnimationIndex');
    const newIndex = storedIndex ? (parseInt(storedIndex) + 1) % animations.length : 0;
    setAnimationName(animations[newIndex]);
    localStorage.setItem('backgroundAnimationIndex', newIndex.toString());
  }, []);
  return (
    <div>
      <AnimatedBackground animationName={animationName} />
      {children}
    </div>
  );
};

export default BgDrop;
