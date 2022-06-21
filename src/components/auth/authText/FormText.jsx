import React from 'react'
import { Grid, Typography } from "@mui/material";
import { styles } from './authText.styles';

const FormText = ({label, caption}) => {
    return (
        <Grid sx={styles.titleBlock}>
            <Typography sx={styles.label}>{label}</Typography>
            <Typography sx={styles.caption}>{caption}</Typography>
        </Grid>
    )
}

export default FormText