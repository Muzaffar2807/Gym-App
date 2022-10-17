import React from 'react';
import './App.css';
import {   Route, Routes } from "react-router-dom"; 
import { Box } from '@mui/material';

import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px" >
       <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExcerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App