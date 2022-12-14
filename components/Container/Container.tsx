import { ContainerProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { Container as ContainerComponent } from '@mui/material';

interface Props extends ContainerProps {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children, ...args }) => {
  return <ContainerComponent {...args}>{children}</ContainerComponent>;
};
