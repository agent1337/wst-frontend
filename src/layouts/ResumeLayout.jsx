import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box } from '@mui/material';

const ResumeLayout = props => (
    <Box>
        <Header />
        {props.children}
        <Footer />
    </Box>)

export default ResumeLayout
