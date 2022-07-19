import React from 'react'
import { Redirect } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Toast from '../custom/toast/Toast';
import { useSelector } from 'react-redux';

const MainLayout = ({ children }) => {
  const notify = useSelector(state => state.alert.list)
  const {token, loading} = useSelector(state => state.auth)

  return token && !loading ? (
    <Box>
      <Header />
      {children}
      <Footer />
      <Toast toastlist={notify} />
    </Box>
  ) : <Redirect to="/" />
}

export default MainLayout