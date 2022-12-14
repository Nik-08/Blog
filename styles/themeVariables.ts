import { ruRU } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

export const themeVariables = createTheme(
  {
    palette: {
      common: {
        white: '#fff',
        black: '#000',
      },
      primary: {
        main: '#dfe8ec',
        light: '#fcfdfd',
        dark: '#460046',
        contrastText: '#002233',
      },

      secondary: {
        main: '#29b6f6',
        light: '#4fc3f7',
        dark: '#0288d1',
        contrastText: '#fff',
      },
    },
  },
  ruRU,
);
