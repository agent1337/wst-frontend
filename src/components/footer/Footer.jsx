import { Box, Typography } from "@mui/material";

const Bitmap = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../footer/Bitmap.png" alt="" />
            <Typography>日本語</Typography>
            <img src="../../footer/Shape.png" alt="" />
        </Box>
    )

}

const Footer = () => {
    return (
        <section style={styles.section}>
            <Box sx={{ ...styles.main }}>
                <Box sx={{background: 'pink', display: 'flex', justifyContent: "space-between",}}>
                    <Bitmap />
                    <Typography>WelcomeHR</Typography>
                </Box>
                <Box sx={{background: 'yellow', display: 'flex', justifyContent: "space-between",}}>
                    <Typography>WorkStyleTech株式会社</Typography>
                    <Typography>利用規約</Typography>
                    <Typography>プライバシーポリシー</Typography>
                </Box>
                <Typography>
                    Copyright © 2020
                </Typography>
            </Box>
        </section>

    );
};

const styles = {
    section: {
        background: "#FCFCFC",
    },
    main: {
        margin: "0 auto",
        width: "90%",
        position: "relative",
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
    }
}

export default Footer;
