"use client"
import{Box, Button, Stack, TextField, Container} from '@mui/material'
import { useState } from "react";
import HomePage from './components/HomePage/HomePage';

export default function Home() {

  return (
    <Container
      sx={{

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh",
        padding: "2rem",
      }}
      >

        <HomePage/>


    </Container>
  )
}
