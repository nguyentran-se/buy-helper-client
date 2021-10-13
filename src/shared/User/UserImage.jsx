import React from 'react';

const UserImage = ({ src, width, height }) => {
  return (
    <div>
      <img
        src={src}
        alt="user"
        style={{
          width,
          height,
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: 16,
        }}
      />
    </div>
  );
};

export default UserImage;
