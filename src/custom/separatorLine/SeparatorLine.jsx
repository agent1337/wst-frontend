import React from "react";
import { Typography } from "@mui/material";
import { styles } from "./separatorLine.styles";

const SeparatorLine = () => {
  return <Typography sx={styles.line}>or</Typography>;
};

export default SeparatorLine;
