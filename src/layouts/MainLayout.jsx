import React from 'react'
import { Redirect } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Toast from '../custom/toast/Toast';
import { useSelector } from 'react-redux';

const MainLayout = props => {
  const notify = useSelector(state => state.alert.list)

  return props ? (
    <Box>
      <Header />
      {props.children}
      <Footer />
      <Toast toastlist={notify} />
    </Box>
  ) : <Redirect to="/" />
}

export default MainLayout