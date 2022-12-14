import { Typography } from '@mui/material';
import { Container, Header } from 'components';
import React from 'react';
import development from '@assets/development.gif';

export default function Blog() {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          sx={{ fontSize: { xs: '30px', lg: '50px' }, textAlign: 'center' }}
          fontWeight={500}
          variant="h1"
        >
          This page in progress
        </Typography>
        <img
          src={development.src}
          style={{ maxWidth: '600px', width: '100%', display: 'block', margin: '20px auto 0' }}
          alt=""
        />
      </Container>
    </div>
  );
}
