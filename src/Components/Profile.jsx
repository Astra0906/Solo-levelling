import React from 'react';
import StatusCard from './StatCard';
import './profile.css';

const Profile = () => {
  return (
    <>
      <div className="banner">
        <div className="slider" style={{ '--quantity': 4 }}>
          {[...Array(4)].map((_, index) => (
            <div className="item" style={{ '--position': index + 1 }} key={index}>
              <StatusCard />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="">JINWOO</h1>
          <div className="author">
            <h2>LUN DEV</h2>
            <p><b>Web Design</b></p>
            <p>Subscribe to the channel to watch many interesting videos</p>
          </div>
          <div className="model" >
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
