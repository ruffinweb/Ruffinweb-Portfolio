import React from 'react';
import { Outlet } from "react-router-dom";
import Container from '@mui/material/Container';

const AppContainer = () => {
  return (
    <Container maxWidth="xl" className='app-container'>
      <Outlet />
    </Container>
  );
};

export default AppContainer;
