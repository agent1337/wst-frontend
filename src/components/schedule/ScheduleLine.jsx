import { Box } from "@mui/material";
import { forwardRef } from "react";
import React, {useState, useImperativeHandle} from 'react'

const ScheduleLine = forwardRef(({ start, end, top, left, handleMouseUp, removeLine }, ref) => {
    const [width, setWidth] = useState(13)
    const [showDeleteButton, setDeleteButton] = useState(false)
    useImperativeHandle(ref, () => ({
        changeWidth: () => {
            setWidth(width+13)
        }
      }));

    const selectLine = () => {
        console.log('remove')
        setDeleteButton(true)
    }

    return (
        <Box sx={{
            position: 'absolute',
            top: `${top}px`,
            left: `${left}px`,
            height: '25px',
            width: `${width}px`,
            background: 'pink',
            zIndex: '3'
        }}
            onMouseUp={handleMouseUp}
            // onMouseLeave={handleMouseUp}
            ref={ref}
            onClick={selectLine}
        >
            {showDeleteButton &&  <button style={{position: 'absolute', right: '-10px'}} onClick={removeLine}>X</button>}
        </Box>
    )
})
export default ScheduleLine;