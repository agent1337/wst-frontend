import React from 'react'
import { Box, Typography } from "@mui/material"
import { styles } from './textInput.styles'

export default function TextInput({ name, type, value, placeholder, onChange, onBlur, helperText, error, width, text }) {
    return (
        <Box>
            <Typography sx={{ fontSize: '12px' }}>{text}</Typography>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder || null}
                onBlur={onBlur}
                helperText={helperText}
                error={error}
                style={{
                    ...styles.input,
                    width: `${width}`,
                }}
            />
        </Box>
    )
}
