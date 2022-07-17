import React, {useState} from 'react';
import { Box, Button } from '@mui/material';
import Navigation from '../navigation/Navigation';
import PartTimeLogo from '../logo/PartTimeLogo';
import Avatar from '../avatar/Avatar';
import { styles } from './header.styles';
import MenuIcon from '@mui/icons-material/Menu';
import { main } from '../../colors';

export default function Header() {
    const [isShow, setIsShow] = useState(false)

    return (
        <section style={styles.header}>
            <Box sx={styles.mobile}>
                <Box>
                    <img src="../../logo/logo.svg" alt="logo" />
                </Box>
                <Box>
                    <MenuIcon sx={styles.burgerMenu} onClick={() => setIsShow(!isShow)} />
                </Box>
            </Box>
            {isShow && <Navigation setIsShow={setIsShow} isShow={isShow}/> }

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
