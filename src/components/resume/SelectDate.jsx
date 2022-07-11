import React from 'react'
import { Box, Typography, TextField, } from '@mui/material'
import { danger } from '../../colors'

export default function SelectDate({ name, value, text, onChange }) {
    return (
        <Box sx={{ marginBottom: '20px', width: "100%" }}>
        <Typography sx={{ fontSize: '12px' }}>
            <span style={{ color: `${danger}` }}>*</span>
            {text}
        </Typography>
        <TextField
            type="date"
            name={name}
            defaultValue={value}
            sx={{ width: "100%" }}
            onChange={onChange}
        />
    </Box>
    )
}
