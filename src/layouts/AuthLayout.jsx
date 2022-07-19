import React from 'react'
import { Box } from '@mui/material';
import Toast from '../custom/toast/Toast';
import { useSelector } from 'react-redux';

const AuthLayout = props => {
    const notify = useSelector(state => state.alert.list)
    
    return(
    <Box>
        {props.children}
        <Toast toastlist={notify} />
    </Box>
)}

export default AuthLayout
