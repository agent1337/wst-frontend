import { Box, Typography } from "@mui/material";
import { styles } from "./footer.styles";

const Footer = () => {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../footer/Bitmap.png" alt="" />
            <Typography sx={{ fontSize: "12px" }}>日本語</Typography>
            <img src="../../footer/Shape.png" alt="" />
          </Box>
          <Typography sx={{ fontSize: "12px" }}>
            WorkStyleTech株式会社
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>WelcomeHR</Typography>
          <Typography sx={{ fontSize: "12px" }}>利用規約</Typography>
          <Typography sx={{ fontSize: "12px" }}>
            プライバシーポリシー
          </Typography>
          <Typography sx={{ ...styles.copyright }}>
            Copyright © 2020 WorkStyleTech株式会社, All rights reserved.
            v1.5.0916.1
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ ...styles.mobileFooter }}>
        <Box sx={{ ...styles.box, marginBottom: "12px", paddingTop: "12px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="../../footer/Bitmap.png" alt="" />
            <Typography sx={{ fontSize: "12px" }}>日本語</Typography>
            <img src="../../footer/Shape.png" alt="" />
          </Box>
          <Typography sx={{ fontSize: "12px" }}>WelcomeHR</Typography>
        </Box>
        <Box sx={{ ...styles.box, margin: "20px 0" }}>
          <Typography sx={{ fontSize: "10px" }}>
            WorkStyleTech株式会社
          </Typography>
          <Typography sx={{ fontSize: "10px" }}>利用規約</Typography>
          <Typography sx={{ fontSize: "10px" }}>
            プライバシーポリシー
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "10px",
            textAlign: "center",
            paddingBottom: "12px",
          }}
        >
          Copyright © 2020 WorkStyleTech株式会社, All rights reserved.
          v1.5.0916.1
        </Typography>
      </Box>
    </>
  );
};


export default Footer;
