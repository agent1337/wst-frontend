import React from 'react';
import { Box, Typography } from "@mui/material";
import { styles } from './textarea.styles';

export default function Textarea({name, value, placeholder, title, onChange}) {
    return (
        <Box sx={{ marginBottom: '23px' }}>
            <Typography sx={styles.title}>{title}</Typography>
            <textarea
                style={styles.textarea}
                name={name}
                maxLength="100"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </Box>
    )
}
