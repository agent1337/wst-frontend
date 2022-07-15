import React from 'react'
import { Redirect } from 'react-router-dom';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material';

const MainLayout = props => {
  return props ? (
    <Box>
      <Header />
      {props.children}
      {/* <Footer /> */}
    </Box>
  ) : <Redirect to="/" />
}

export default MainLayout