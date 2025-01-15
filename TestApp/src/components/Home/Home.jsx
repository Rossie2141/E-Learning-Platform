import React from 'react';
import { Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ padding: '50px', textAlign: 'center' }}>
      <Typography variant="h3">Welcome to the E-Learn Platform!</Typography>
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        Explore a wide variety of courses to enhance your skills.
      </Typography>
    </Box>
  );
};

export default Home;
