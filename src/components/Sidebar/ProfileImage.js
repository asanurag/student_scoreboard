import React from 'react';

const ProfileImage = ({ imageUrl, name, email }) => {
  return (
    <div className="profile-section">
      <img src={imageUrl} alt="Profile" />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default ProfileImage;
