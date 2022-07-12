import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material';

const ResumeLayout = props => (
    <div className="app-wrapper">
        <Header />
        {props.children}
        <Footer />
    </div>)

export default ResumeLayout
