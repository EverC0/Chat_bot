"use client"; 

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const page = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
      console.log(`Navigating to ${path}`);
      router.push(path);
    };

    const buttonStyles = {
      color: 'white', // Set the text color
      bgcolor: 'blue', // Set the background color
      '&:hover': {
        bgcolor: 'darkblue', // Change background color on hover
      },
    };
  
    return (
      <AppBar position="static"
        >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, }}>
            Website
          </Typography>
          <Button sx={{buttonStyles}} onClick={() => handleNavigation('/')}>
            Home
          </Button>
          <Button sx={{buttonStyles}} onClick={() => handleNavigation('/pantry')}>
            ChatArea
          </Button>
          <Button sx={{buttonStyles}} onClick={() => handleNavigation('/Viewall')}>
            View
          </Button>
          <Button sx={{buttonStyles}} onClick={() => handleNavigation('/LogOff')}>
            LogOff
          </Button>
        </Toolbar>
      </AppBar>
    );
    
}

export default page
