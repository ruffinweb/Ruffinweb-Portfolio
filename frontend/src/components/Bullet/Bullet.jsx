// Bullet.jsx
import React from 'react';
import Box from '@mui/material/Box';

const Bullet = () => (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default Bullet;
