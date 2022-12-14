import '@styles/globals.scss';

import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;