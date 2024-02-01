import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Bullet from "../../components/Bullet/Bullet.jsx";

const TitleCard = forwardRef((props, ref) => {
  const titleCardStyle = {
    textAlign: 'center',
    border: '2px solid black',
    padding: '140px 0',
    '@media (max-width: 1280px)': {
      padding: '80px 0',
    },
    '@media (max-width: 600px)': {
      padding: '20px 0',
    },
    '@media (max-width: 435px)': {
      padding: 0,
    },
  };

  return (
    <Box className='full-page-card' sx={titleCardStyle} ref={ref}>
      <Typography variant="h1" gutterBottom color='primary'>
        Elijah Ruffin
      </Typography>
      <Typography variant="h3" component="div" color='primary'>
        Full-Stack Developer
      </Typography>
      <Typography variant="h4" component="div" color='primary'>
        Django<Bullet />React<Bullet />PostgreSQL
      </Typography>
    </Box>
  );
});

export default TitleCard;
