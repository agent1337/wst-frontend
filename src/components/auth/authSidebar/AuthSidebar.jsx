import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { styles } from './authSidebar.styles'

const AuthSidebar = () => {
    return (
        <Grid item xs={12} sm={12} md={6} sx={styles.section}>
            <Box sx={styles.box}>

                <Box sx={styles.desktop}>
                    <img
                        src="../../logo/whitelogo.png"
                        alt="logo"
                        style={styles.logo}
                    />
                </Box>

                <Box sx={styles.mobile}>
                    <img src="../../logos/logo.png" alt="logo" />
                </Box>

                <Box sx={styles.text}>
                    <Typography>WelcomeHR</Typography>
                    <Typography>Part-time Resume</Typography>
                </Box>
            </Box>

            <Box sx={styles.block}>
                <Typography sx={styles.title}>Resume in Minutes</Typography>
                <Typography sx={styles.subtitle}>
                    Create your own resume, download the PDF or send link to your employer.
                </Typography>
            </Box>
            <Box sx={styles.image}>
                <img src="../../auth/image.png" alt="" style={{ width: "95%" }} />
            </Box>
            
        </Grid>
    )
}

export default AuthSidebar