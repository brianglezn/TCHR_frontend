import { createTheme } from '@mui/material/styles';

const TCHR_COLORS = {
  50: '#f9f7fd',
  100: '#f1eef9',
  200: '#e5dff5',
  300: '#d1c6ec',
  400: '#b4a1df',
  500: '#977cd0',
  600: '#8060bd',
  700: '#684aa0',
  800: '#5b4287',
  900: '#4b366d',
  950: '#2f1e4d',
};

const TCHR_VARS = {
  backgroundColor: '#f7f7f7',
  backgroundColorWhite: '#ffffff',
  backgroundColorDark: '#333333',
  textColorBlack: '#000000',
  textColorDark: '#333333',
  textColorLight: '#666666',
  textColorWhite: '#ffffff',
  borderRadius: 8,
  spacing: 8,
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: TCHR_COLORS[500],
      light: TCHR_COLORS[400],
      dark: TCHR_COLORS[800],
      contrastText: TCHR_VARS.textColorWhite,
    },
    secondary: {
      main: TCHR_COLORS[700],
      light: TCHR_COLORS[600],
      dark: TCHR_COLORS[900],
    },
    background: {
      paper: TCHR_VARS.textColorWhite,
    },
    text: {
      primary: TCHR_COLORS[950],
      secondary: TCHR_COLORS[700],
    },
  },
  typography: {
    fontFamily: `'Rubik', 'Arial', sans-serif`,
    h1: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: TCHR_VARS.borderRadius,
  },
  spacing: TCHR_VARS.spacing,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: TCHR_VARS.borderRadius,
          padding: `${TCHR_VARS.spacing}px ${TCHR_VARS.spacing * 2}px`,
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: TCHR_COLORS[600],
          '&:hover': {
            backgroundColor: TCHR_COLORS[700],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: TCHR_VARS.borderRadius,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;