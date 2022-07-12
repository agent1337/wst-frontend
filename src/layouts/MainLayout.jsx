import React from 'react'
import { Redirect } from 'react-router-dom';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material';

const MainLayout = props => {
    return props ? (
      <div className="container">
        <Header />
        {props.children}
        <Footer />
      </div>
    ) : <Redirect to="/" />
  }

export default MainLayout