import React from "react";
import { white } from "colors";

import { Box, Typography } from "@mui/material";
import { styles } from "../viewResume.styles";

export default function InfoBlock({ resume }) {
  return (
    <Box sx={{ ...styles.infoBlock, padding: "10px 40px" }}>
      <Box>
        <Typography
          sx={{
            fontSize: "28px",
            color: `${white}`,
            width: "200px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "33px",
          }}
        >
          {resume?.surname} {resume?.name}
        </Typography>
        <Typography
          sx={{
            marginTop: "5px",
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "21px",
            color: `${white}`,
          }}
        >
          {resume.position}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "11px 0",
        }}
      >
        <button style={{ width: "32px", height: "32px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="../../action/edit.png"
            alt=""
          />
        </button>
        <button style={{ width: "32px", height: "32px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="../../action/download.png"
            alt=""
          />
        </button>
        <button style={{ width: "32px", height: "32px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src="../../action/send.png"
            alt=""
          />
        </button>
      </Box>
    </Box>
  );
}
