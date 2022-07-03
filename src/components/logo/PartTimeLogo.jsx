import React from 'react'
import { Box, Typography } from "@mui/material";
import { main } from '../../colors';

const styles = {
    logo: {
        display: "flex",
        // marginLeft: "-52px",
        alignItems: "center",
      },
    title: {
        marginLeft: "12px",
        paddingLeft: "12px",
        borderLeft: `2px solid ${main}`,
        color: `${main}`,
        fontSize: "28px",
        lineHeight: "33px",
        fontWeight: "500",
    }
}

export default function PartTimeLogo() {
    return (
        <Box sx={styles.logo}>
            <img src="../../logo/logo.svg" alt="logo" />
            <Typography sx={styles.title}>Part-time Resume</Typography>
        </Box>
    )
}
