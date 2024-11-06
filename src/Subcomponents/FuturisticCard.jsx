import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 400px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.6); /* Dark transparent background */
  border: 2px solid rgba(99, 102, 241, 0.8); /* Neon border color */
  padding: 20px;
  color: white;
  font-family: 'Arial', sans-serif;
  backdrop-filter: blur(8px); /* Frosted glass effect */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  /* Custom shape for cuts on top-left and bottom-right corners */
  clip-path: polygon(
    10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%
  );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid rgba(99, 102, 241, 0.5); /* Lighter border for glowing effect */
    clip-path: polygon(
      10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%
    );
    pointer-events: none;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff;
`;

const MessageBox = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ccc;
`;

const FuturisticCard = () => {
  return (
    <CardContainer>
      <Header>Vegas Down Town</Header>
      <MessageBox>Type your message here</MessageBox>
    </CardContainer>
  );
};

export default FuturisticCard;
