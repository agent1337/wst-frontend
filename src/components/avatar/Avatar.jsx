import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAuthActions } from "redux/auth/useAuthActions";

import { Box, Typography } from "@mui/material";

const styles = {
  title: {
    marginRight: "10px",
  },
};

export default function Avatar() {
  const history = useHistory();
  const { logout } = useAuthActions();
  const { email } = useSelector((state) => state.profile);
  const getNameFromEmail = email.split("@")[0];

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={styles.title}>
          Welcome, {getNameFromEmail && getNameFromEmail}
        </Typography>
        <button onClick={() => handleLogout()}>
          <img src="../../auth/Icon.png" alt="icon" />
        </button>
      </Box>
    </Box>
  );
}
