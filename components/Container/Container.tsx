import { FC, ReactNode } from 'react';

import { ContainerProps, Container as ContainerComponent } from '@mui/material';

interface Props extends ContainerProps {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children, ...args }) => {
  return <ContainerComponent {...args}>{children}</ContainerComponent>;
};
