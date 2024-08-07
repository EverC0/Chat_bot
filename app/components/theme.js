// theme.js
"use client"; 

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#bb86fc', // Customize primary color if needed
    },
    secondary: {
      main: '#03dac6', // Customize secondary color if needed
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
