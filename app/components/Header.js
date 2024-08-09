"use client"; 

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page = () => {
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
          <Typography variant="h6" sx={{ flexGrow: 1, color:'#C0C0C0' }}>
            Website
          </Typography>
          <Button sx={{buttonStyles, color:'#C0C0C0'}} onClick={() => handleNavigation('/')}>
            Home
          </Button>
          {/* <Button sx={{buttonStyles}} onClick={() => handleNavigation('/pantry')}>
            ChatArea
          </Button> */}
          <Button sx={{buttonStyles, color:'#C0C0C0'}} onClick={() => handleNavigation('/chatContain')}>
            View
          </Button>
          <Button sx={{buttonStyles, color:'#C0C0C0'}} onClick={() => handleNavigation('/LogOff')}>
            LogOff
          </Button>
        </Toolbar>
      </AppBar>
    );
    
}

export default Page
