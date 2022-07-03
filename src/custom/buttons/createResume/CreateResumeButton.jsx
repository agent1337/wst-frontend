import React from 'react';
import { Box, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { styles } from './createResumeButton.styles';

export default function CreateResumeButton() {
    return (
        <Box sx={{ ...styles.cardsItem }}>
            <a href="/resume/create">
                <Box sx={{ ...styles.card, ...styles.createButton }}>
                    <Box sx={{ ...styles.content }}>
                        <AddOutlinedIcon sx={{ color: "#C4C4C4" }} />
                        <Typography sx={{ fontSize: "12px" }}>Create new Resume</Typography>
                    </Box>
                </Box>
            </a>
        </Box>
    )
}
