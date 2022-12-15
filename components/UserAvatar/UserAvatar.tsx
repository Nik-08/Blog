import { FC } from 'react';

import Avatar from '@mui/material/Avatar';

interface AvatarProps {
  src?: string;
  name: string;
  color?: string;
}

const stringAvatar = (name: string, color?: string) => {
  return {
    sx: {
      bgcolor: color,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
};

export const UserAvatar: FC<AvatarProps> = ({ src, name, color }) => {
  return <Avatar {...stringAvatar(name, color)} src={src} alt={name} />;
};
