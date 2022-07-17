import React from 'react';
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styles } from './createResumeButton.styles';
import { Link } from 'react-router-dom';

export default function CreateResumeButton() {
    return (
        <Link to="/create">
            <Box sx={{ ...styles.cardsItem }}>
                <Box sx={{ ...styles.card, ...styles.createButton }}>
                    <Box sx={{ ...styles.content }}>
                        <AddOutlinedIcon sx={{ color: "#C4C4C4" }} />
                        <Typography sx={{ fontSize: "12px" }}>Create new Resume</Typography>
                    </Box>
                    <img src="../../book.png" alt="resume" style={styles.image} />
                </Box>
            </Box>
        </Link>
    )
}
