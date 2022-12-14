import { createTheme } from '@mui/material/styles';
import { themeVariables } from './themeVariables';

const theme = createTheme(themeVariables, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: `${themeVariables.palette.primary.main}`,
          color: `${themeVariables.palette.primary.contrastText}`,
          fontSize: 16,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          'fontSize': 16,
          'textTransform': 'capitalize',
          '&.MuiButton-containedPrimary': {
            'border': `1px solid ${themeVariables.palette.primary.main}`,

            '&:hover': {
              border: `1px solid ${themeVariables.palette.primary.dark}`,
            },
            '&.Mui-disabled': {
              border: `1px solid rgba(0, 0, 0, 0.12)`,
            },
          },

          '&.MuiDisabled': {
            fontSize: 16,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          fontSize: 20,
          padding: 10,
          borderRadius: 15,
          border: `1px solid ${themeVariables.palette.primary.main}`,
        },
      },
    },
  },
});

export default theme;
