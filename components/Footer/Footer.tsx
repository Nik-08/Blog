import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Typography, Toolbar, Box } from '@mui/material';
import Link from 'next/link';

import { Container } from '../Container';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box sx={{ flexGrow: 1, mt: 3 }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: 'space-between', flexDirection: { sm: 'row', xs: 'column' } }}
        >
          <Typography fontSize="18px">© {year}. All rights reserved.</Typography>
          <Box sx={{ padding: { xs: '20px 0', sm: '0' } }}>
            <Link href="https://github.com/Nik-08" target="_blank">
              <GitHubIcon sx={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/nikita-galchenko-26446b247/" target="_blank">
              <LinkedInIcon sx={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://t.me/Nik_9908" target="_blank">
              <TelegramIcon />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};
