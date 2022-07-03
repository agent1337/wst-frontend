import React from 'react'
import { Box, } from "@mui/material";
import './uploadedFile.styles.css'

export default function UploadedFile({ file }) {
    const preview = () => {

    } 

    return (
        <Box className="fileBox">
            <p className="fileName">
                {file.name.length > 25 ? file.name.substr(0, 25) + "..." : file.name}
            </p>
            <img className="image" src="../../book.png" alt="" />
            <div className="action">
                <div className="inner">
                    <button className="button" onClick={preview}>View</button>
                    <button className="button">Delete</button>
                </div>
            </div>

            <iframe src="" frameborder="0"></iframe>
        </Box>
    )
}
