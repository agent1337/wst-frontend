import { Typography, Box } from '@mui/material'
import React from 'react'

const styles = {
    section: {
        position: 'relative',
        height: '91vh'
    },
    box: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "100%",
    },
    caption: {
        fontWeight: '700',
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'center',
        marginBottom: '12px',
    },
    text: {
        fontWeight: '400',
        fontSize: '20px',
        lineHeight: '23px',
        textAlign: 'center',
    },
    link: {
        display: 'block',
        marginTop: "40px",
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "18px",
        color: "#29CC8F",
    }
}

export default function PageNotFound() {
    return (
        <div style={styles.section}>
            <Box sx={styles.box}>
                <img src="../../auth/404.png" alt="" />
                <Typography sx={styles.caption}>Whoops, Hayamaru-kun is confused.</Typography>
                <Typography>We can’t find the page you’re looking for.</Typography>
                <a href="/resumes" style={styles.link}>Go Back</a>
            </Box>

        </div>
    )
}
