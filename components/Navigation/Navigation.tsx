import { Box } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'components';

const pages = [
  { name: 'Home', id: 1, path: '/' },
  { name: 'Blog', id: 2, path: '/Blog' },
];

export const Navigation = () => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1, display: { sm: 'flex', xs: 'none' } }}>
      {pages.map((page) => (
        <Button
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          component={Link}
          href={page.path}
          key={page.id}
          className={classNames(router.pathname === page.path ? 'activeLink' : '')}
          color="inherit"
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};
