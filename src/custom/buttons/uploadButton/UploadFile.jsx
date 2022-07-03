import React, {useState} from 'react';
import { Box, Typography } from "@mui/material";
import { styles } from './uploadButton.styles';
import AddIcon from "@mui/icons-material/Add";
import UploadedFile from '../../outputs/uploadedFile/UploadedFile';

export default function UploadFile() {
    const [multipleFiles, setMultipleFiles] = useState(null);

    const upload = (e) => {
        const data = [];
        console.log(e.target.files)
        for (let i = 0; i < e.target.files.length; i++) {
            data.push(e.target.files[i]);
        }
        setMultipleFiles(data);
    };

    return (
        <Box sx={{ marginBottom: '23px', }}>
            <Typography sx={styles.title}>Files:</Typography>
            <Typography sx={styles.subtitle}>You can upload up to 3 files with .jpg , .doc or .pdf formats.</Typography>
            
            <Box sx={styles.files}>
                <label style={styles.uploadLabelFile}>
                    <input
                        type="file"
                        multiple
                        onChange={upload}
                        style={styles.uploadInput}
                    />
                    <Box>
                        <AddIcon sx={{ color: "#C4C4C4" }} />
                        <Typography sx={{ color: "#323232" }}>Upload your file</Typography>
                    </Box>
                    <img style={styles.fileIcon} src="../../book.png" alt="" />
                </label>

                {multipleFiles?.map((file, index) => {
                    return <UploadedFile key={index} file={file} />
                })}
            </Box>

        </Box>
    )
}
