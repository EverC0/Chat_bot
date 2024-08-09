// theme.js
"use client"; 

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#000', // Customize primary color if needed next: #7b49b8 or b86fc
    },
    secondary: {
      main: '#C0C0C0', // Customize secondary color if needed or #C0C0C0 or #03dac6
    },
    background: {
      default: '#121212', // Default background for dark mode
      paper: '#1e1e1e',   // Background for Paper components
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#b0bec5', // Secondary text color
    },
  },
});

export default theme;
