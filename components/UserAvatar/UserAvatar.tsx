import React, { FC } from 'react';
import Avatar from '@mui/material/Avatar';

interface AvatarProps {
  src?: string;
  name: string;
  color?: string;
}

export const UserAvatar: FC<AvatarProps> = ({ src, name, color }) => {
  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: color,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };
  if (src) {
    console.log(src);
  }

  return (
    <>
      <Avatar alt={name} {...stringAvatar(name)} src={src} />
    </>
  );
};
