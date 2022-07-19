import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Box } from '@mui/material';
import Toast from '../custom/toast/Toast';
import { useSelector } from 'react-redux';

const ResumeLayout = props => {
    const notify = useSelector(state => state.alert.list)
    
    return (
        <Box>
            <Header />
            {props.children}
            <Footer />
            <Toast toastlist={notify} />
        </Box>
    )
}

export default ResumeLayout
