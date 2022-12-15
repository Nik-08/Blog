import { FC, ReactNode } from 'react';

import { Button as ButtonComponent, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <ButtonComponent className={className} {...props}>
      {children}
    </ButtonComponent>
  );
};
