import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import AutoOtput from '../../outputs/autoOutput/AutoOtput';


const styles = {
    title: {
        marginTop: "12px",
        marginBottom: "7px",
        fontSize: '12px',
        textTransform: 'uppercase'
    },
    textField: {
        border: "1px solid #9C9C9C",
        borderRadius: "31px",
        minWidth: "92px",
        maxWidth: "100%",
        height: "40px",
        paddingLeft: "10px",
        outlineColor: "#29CC8F",
        marginRight: "10px",
        marginBottom: "24px",
    },

    block: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyItems: "start",
        border: "1px solid #29CC8F",
        borderRadius: "31px",
        height: "27px",
        marginRight: "10px",
        padding: "12px 28px 13px 8px",
      },
      removeButton: {
        fontSize: "18px",
        position: "absolute",
        right: "6px",
        top: "8px",
        border: "none",
        borderLeft: "1px solid #29CC8F",
        height: "25px",
      },
      removeIcon: {
        transform: "rotate(45deg)",
        color: "#9C9C9C",
      },
}

export default function AutoInput({type, value, name, title, setFieldValue }) {
    const [data, setData] = useState([])
    const [text, setText] = useState('')

    const handleKeyPress = (event) => {
        if(text === "") return
        if (event.key === "Enter") {
            setFieldValue(name, [...value[name], text])
            setText('')
            setData([...value[name], text])
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
