import React from 'react';
import { Box, Typography } from "@mui/material";
import { styles } from './textInput.styles';
import { danger, grey } from '../../../colors';

export default function TextInput({ name, type, value, placeholder, onChange, onBlur, helperText, errors, text, half }) {
    let isNotRequired = name === "position";
    let isError = errors.name ? `1px solid ${danger}` : `1px solid ${grey}`
   
    return (
        <Box sx={half ? { width: half } : { width: '100%' }}>
            <Typography sx={{ fontSize: '12px' }}>
                {!isNotRequired && <span style={styles.require}>*</span>}{text}
            </Typography>
            <input
                name={name}
                type={"text" || type}
                value={value}
                onChange={onChange}
                placeholder={placeholder || null}
                onBlur={onBlur}
                helperText={helperText}
                style={{
                    ...styles.input,
                    width: 'calc(100% - 15px)',
                    border: isError,
                }}
            />
        </Box>
    )
}
