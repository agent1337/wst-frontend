import { Box, Grid } from '@mui/material';
import React from 'react'
import AuthSidebar from '../../components/auth/authSidebar/AuthSidebar';
import SignupForm from '../../components/auth/authForm/SignupForm';
// import DekstopFooter from '../../components/footer/DekstopFooter';
import { styles } from './index.styles';
import Footer from '../../components/footer/Footer';
// import MobileFooter from '../../components/footer/MobileFooter';

const Signup = () => {
    return (
        <Box sx={styles.section}>
            <Grid container sx={styles.container}>
                <CornerImage />
                <AuthSidebar />
                <SignupForm />
            </Grid>
            {/* <DekstopFooter/> */}
            <Footer />
        </Box>
    )
}

export default Signup;

const CornerImage = () => {
    return <img src="../../auth/animal.png" alt="" style={styles.image} />;
};
