import { Box } from "@mui/material";
import React from "react";
import { styles } from "./notification.styles";

const Notification = ({ text }) => {
  return <Box sx={styles.container}>{text}</Box>;
};

export default Notification;
