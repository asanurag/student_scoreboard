import React from 'react';
import ProfileImage from './ProfileImage';
import NavigationLinks from './NavigationLinks';
import './Sidebar.css';

const Sidebar = () => {
  
  const imageUrl = 'scoreboard/src/image/IMG.jpg';
  const name = 'John Doe';
  const email = 'john.doe@example.com';

  return (
    <div className="sidebar">
      <div className="top-sidebar">
        <h1>School Space</h1>
      </div>

      <div className="bottom-sidebar">
      <NavigationLinks />
        <ProfileImage imageUrl={imageUrl} name={name} email={email} />
        
      </div>
    </div>
  );
};

export default Sidebar;

