import React, { useEffect } from 'react'
import{Box, Button, Stack, TextField, Container, Typography} from '@mui/material'
import AOS from 'aos'
import 'aos/dist/aos.css';


const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});

  }, []);

  return (
    <>

    {/* Parallax section */}
    <Box
      sx ={{
        height: '100vh',
        //backgroundImage: 'url(https://via.placeholder.com/1200x800)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


      }}
      data-aos="zoom-in" // AOS animation
      >
      <Typography variant="h2" sx ={{color: '#FFFFFF'}}>
        Welcome to Chat Box AI
      </Typography>
    </Box>
    {/* Content Section*/}
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '2rem',
        textAlign: 'center',
      }}
      data-aos="fade-right" // AOS animation
    >
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        This is an AI customer support to help with your issues.
      </Typography>
      <Typography variant="h5" sx={{ maxWidth: '800px', marginBottom: '2rem' }}>
        Our AI-driven chatbot is designed to provide instant assistance, answer your queries, and guide you through any challenges you may encounter. Whether it's troubleshooting, product recommendations, or just a quick question, our chatbot is here to help you 24/7.
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: '800px' }}>
        Key Features:
      </Typography>
      <ul style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '0', listStyle: 'none' }}>
        <li style={{ marginBottom: '1rem' }}>
          <Typography variant="body1">
            <strong>Instant Support:</strong> Get immediate answers to your questions, without waiting in line.
          </Typography>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Typography variant="body1">
            <strong>Smart Recommendations:</strong> Receive personalized product suggestions based on your needs.
          </Typography>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Typography variant="body1">
            <strong>24/7 Availability:</strong> Our AI is always online, ready to assist you at any time.
          </Typography>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Typography variant="body1">
            <strong>Human-Like Interaction:</strong> Enjoy conversations that feel natural and helpful.
          </Typography>
        </li>
      </ul>
    </Box>

    {/* Another Parallax section*/}
    <Box
      sx={{
        height: '100vh',
        //backgroundImage: 'url(https://via.placeholder.com/1200x800)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}
      data-aos="zoom-in" //AOS animation
    >
      <Typography variant='h2' sx={{color: '#ffffff'}}>
        Coming soon a personalized sleep AI coach
      </Typography>
    </Box>


      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: 'url(/sleep-background.jpg) center/cover no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
        data-aos="zoom-in"
      >
        <Typography variant="h2" sx={{ color: '#FFFFFF' }}>
          Transform Your Sleep with AI
        </Typography>
        <Typography variant="h5" sx={{ color: '#FFFFFF', marginTop: '1rem' }}>
          Your Personalized Sleep Coach, Coming Soon!
        </Typography>
      </Box>

      {/* Newsletter Signup */}
      <Box
        sx={{
          padding: '4rem 2rem',
          textAlign: 'center',
          backgroundColor: '#000000',
          color: '#ffffff'
        }}
        data-aos="fade-up"
      >
        <Typography variant="h4" gutterBottom>
          Be the First to Know
        </Typography>
        <Container maxWidth="sm">
          <Stack spacing={2} direction="row">
            <TextField label="Enter your email" fullWidth />
            <Button variant="contained" color="primary">
              Subscribe
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Feature Teasers */}
      <Box
        sx={{
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
        data-aos="fade-up"
      >
        <Typography variant="h3" gutterBottom>
          What You'll Get
        </Typography>
        <Stack spacing={4} direction="row" justifyContent="center">
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="h5">AI-Powered Predictions</Typography>
            <Typography variant="body1">Understand your sleep patterns and predict your sleep quality.</Typography>
          </Box>
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="h5">Personalized Recommendations</Typography>
            <Typography variant="body1">Receive tailored advice to improve your sleep.</Typography>
          </Box>
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="h5">Interactive Chatbot</Typography>
            <Typography variant="body1">Chat with our bot to get tips and insights on better sleep.</Typography>
          </Box>
        </Stack>
      </Box>
      


    </>


  );
}

export default HomePage
