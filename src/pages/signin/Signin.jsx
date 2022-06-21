import React from 'react'
import { Box, Grid } from '@mui/material';
import SigninForm from '../../components/auth/authForm/SigninForm';
import AuthSidebar from '../../components/auth/authSidebar/AuthSidebar';
import Footer from '../../components/footer/Footer';
import { styles } from '../signup/signup.styles';

const Signin = () => {
    return (
        <Box sx={styles.section}>
        <Grid container sx={styles.container}>
            <CornerImage />
            <AuthSidebar />
            <SigninForm />
        </Grid>
        <Footer />
    </Box>
    )
}

export default Signin;

const CornerImage = () => {
    return <img src="../../auth/animal.png" alt="" style={styles.image} />;
};
