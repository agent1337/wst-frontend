import React from 'react';
import { Box, Button } from '@mui/material';
import Navigation from '../navigation/Navigation';
import PartTimeLogo from '../logo/PartTimeLogo';
import Avatar from '../avatar/Avatar';
import { styles } from './header.styles';

export default function Header() {
    return (
        <section style={styles.header}>
            <Box sx={styles.content}>
                <Box sx={{...styles.box, justifyContent: "space-around",}}>
                    <Navigation />
                    <PartTimeLogo />
                </Box>

                <img src="../../header.png" alt="header" />

                <Box sx={{...styles.box, justifyContent: "center",}}>
                    <Avatar />
                    <Button sx={styles.createButton}>Create New Resume</Button>
                </Box>
            </Box>

        </section>
    )
}
