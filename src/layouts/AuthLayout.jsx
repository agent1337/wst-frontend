import React from 'react'
import { Box } from '@mui/material';

const AuthLayout = props => (
    <div className="app-wrapper">
        <Box>
            {props.children}
        </Box>
    </div>
)

export default AuthLayout
