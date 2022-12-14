import { FC, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, ButtonProps } from '@mui/material';
import { Button } from 'components';
import classNames from 'classnames';

interface Props extends ButtonProps {}

const pages = [
  { name: 'Home', id: 1, path: '/' },
  { name: 'Blog', id: 2, path: '/Blog' },
];

export const Navigation: FC<Props> = ({ ...args }) => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, display: { sm: 'flex', xs: 'none' } }}>
      {pages.map((page) => (
        <Button
          // @ts-ignore
          component={Link}
          href={page.path}
          key={page.id}
          className={classNames(router.pathname == page.path ? 'activeLink' : '')}
          color="inherit"
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};
