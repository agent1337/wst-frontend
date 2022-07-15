import React from 'react'
import { Redirect } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify';

const MainLayout = props => {
  return props ? (
    <Box>
      <Header />
      {props.children}
      {/* <Footer /> */}
      <ToastContainer/>
    </Box>
  ) : <Redirect to="/" />
}

export default MainLayout