import { FC, ReactNode } from 'react';

import { IconButton as ButtonComponent, IconButtonProps } from '@mui/material';

interface Props extends IconButtonProps {
  children: ReactNode;
}

export const IconButton: FC<Props> = ({ children, ...props }) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
