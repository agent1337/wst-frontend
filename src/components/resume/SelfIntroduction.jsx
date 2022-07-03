import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TextInput from '../../custom/inputs/textInput/TextInput'

export default function SelfIntroduction() {
    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <TextInput type={"text"} name={'surname'}  />
                <TextInput type={"text"} name={'name'} />
            </Box>
            <Box sx={{display: 'flex'}}>
                <TextInput type={"text"} name={'kanaSurname'} />
                <TextInput type={"text"} name={'kanaName'} />
            </Box>
            <TextInput type={"text"} name={'position'} />

            <TextInput name={"phone"} />
            <TextInput type={"email"} name={'eMail'} />
            <TextInput name={"address"} />
            <TextInput name={"busStation"} />
            <TextInput name={"transport"} />
        </div>
    )
}
