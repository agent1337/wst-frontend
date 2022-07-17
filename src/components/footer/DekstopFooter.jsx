import { Box, Typography } from "@mui/material";
import { styles } from "./footer.styles";

const DekstopFooter = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.content}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="../../Bitmap.png" alt="" />
          <Typography sx={{ fontSize: "12px" }}>日本語</Typography>
          <img src="../../Shape.png" alt="" />
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
  );
};


export default DekstopFooter;
