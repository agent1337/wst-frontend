import React from 'react'
import { Typography, Select, MenuItem, } from '@mui/material'
import { danger } from '../../colors'

export default function Selector({
    text,
    data,
    value,
    name,
    onChange
}) {
    return (
        <>
        <Typography sx={{ fontSize: '12px' }}>
            <span style={{ color: `${danger}` }}>*</span>
            {text}
        </Typography>
        <Select
            value={value}
            onChange={onChange}
            displayEmpty
            name={name}
            sx={{ width: "100%", marginBottom: '20px' }}
        >
            {data.map((item, index) => {
                return (
                    <MenuItem key={index} value={item.text}>
                        {item.text}
                    </MenuItem>
                );
            })}
        </Select>
    </>
    )
}
