import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { styles } from './uploadButton.styles';

export default function UploadImage({setUploadImage}) {
    const [img, setImg] = useState(null)

    const handleChange = (event) => {
        setUploadImage(event.target.files[0])
        setImg(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <Box sx={styles.uploadImage}>
            <label style={styles.uploadLabelImage} htmlFor="image-input">
                <input
                    type="file"
                    name="image-input"
                    id="image-input"
                    accept="image/*"
                    onChange={(event) => handleChange(event)}
                    style={styles.uploadInput}
                />
                <Typography sx={styles.text}>Image or up to 1 min Video with self introduction</Typography>
                {img && <img src={img} alt="" style={styles.image}/>}
            </label>
        </Box>
    )
}
