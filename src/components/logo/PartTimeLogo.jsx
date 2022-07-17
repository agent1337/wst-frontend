import React from 'react'
import { Box, Typography } from "@mui/material";
import { styles } from './logo.styles';

export default function PartTimeLogo() {
    return (
        <Box sx={styles.logo}>
            <img src="../../logo/logo.svg" alt="logo" />
            <Typography sx={styles.title}>Part-time Resume</Typography>
        </Box>
    )
}
