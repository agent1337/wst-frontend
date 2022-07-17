import { Box, Typography } from "@mui/material";
import { text } from "../../colors";

const Footer = () => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.dekstop}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src="../../Bitmap.png" alt="" />
                    <Typography sx={{ fontSize: "12px" }}>日本語</Typography>
                    <img src="../../Shape.png" alt="" />
                </Box>
                <Typography sx={{ fontSize: "12px" }}>WorkStyleTech株式会社</Typography>
                <Typography sx={{ fontSize: "12px" }}>WelcomeHR</Typography>
                <Typography sx={{ fontSize: "12px" }}>利用規約</Typography>
                <Typography sx={{ fontSize: "12px" }}>プライバシーポリシー</Typography>
                <Typography sx={{ ...styles.copyright }}>
                    Copyright © 2020 WorkStyleTech株式会社, All rights reserved.
                    v1.5.0916.1</Typography>
            </Box>

            <Box sx={styles.mobile}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <Typography sx={{ fontSize: "12px" }}>WorkStyleTech株式会社</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src="../../Bitmap.png" alt="" />
                        <Typography sx={{ fontSize: "12px" }}>日本語</Typography>
                        <img src="../../Shape.png" alt="" />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <Typography sx={{ fontSize: "12px" }}>WelcomeHR</Typography>
                    <Typography sx={{ fontSize: "12px" }}>利用規約</Typography>
                    <Typography sx={{ fontSize: "12px" }}>プライバシーポリシー</Typography>
                </Box>

                <Typography sx={{ ...styles.copyright }}>
                    Copyright © 2020 WorkStyleTech株式会社, All rights reserved.
                    v1.5.0916.1
            </Typography>
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        background: "pink",
        color: `${text}`,
        padding: "2px 0",
        "@media (max-width: 1120px)": {
            paddingBottom: '22px'
        },
    },
    dekstop: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 auto",
        width: "90%",
        height: '64px',
        position: "relative",
        "@media (max-width: 600px)": {
            display: 'none',
        },
    },
    copyright: {
        fontFamily: 'Arial',
        fontSize: '10px',
        "@media (max-width: 1120px)": {
            position: "absolute",
            top: "60px",
            width: "100%",
            textAlign: "center",
            fontSize: "10px",
        },
        "@media (max-width: 601px)": {
            top: "80px",
        },
    },
    mobile: {
        paddingTop: '12px',
        paddingBottom: '5px',
        margin: "0 auto",
        width: "90%",
        position: "relative",
        "@media (min-width: 601px)": {
            display: 'none',
        },
        "@media (max-width: 600px)": {
            width: "95%",
        },
    },
}

export default Footer;
