import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import AutoOtput from '../../outputs/autoOutput/AutoOtput';
import { styles } from './autoInput.styles';

export default function AutoInput({type, value, name, title }) {
    const [data, setData] = useState(value || [])
    const [text, setText] = useState('')

    const handleKeyPress = (event) => {
        if(text === "") return
        if (event.key === "Enter") {
            let obj = {
                title: text
            }
            data.push(obj)
            setText('')
        }
    }

    const handleRemoveItem = (index, item) => {
        setData(data.filter((el, id) => id !== index));
    };

    return (
        <Box sx={{ marginBottom: '13px' }}>
            <Typography sx={styles.title}>{title}</Typography>
            <input
                type={type}
                name={name}
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(event) => handleKeyPress(event)}
                maxLength="35"
                placeholder="+ Write here"
                style={{
                    ...styles.textField,
                    width: `${(text.length + 1) * 7}` + "px",
                }}
            />
            {data?.map((item, index) => {
                console.log(item)
                return (
                    <AutoOtput
                        key={index}
                        item={item}  
                        handleRemoveItem={handleRemoveItem} 
                        index={index}
                    />
                )
            })}
        </Box>
    )
}
