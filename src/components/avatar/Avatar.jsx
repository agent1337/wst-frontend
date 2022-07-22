import React from "react";
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

  const handleLogout = () => {
    logout();
    history.push("/signin");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={styles.title}>Welcome,</Typography>
        <button onClick={() => handleLogout()}>
          <img src="../../auth/Icon.png" alt="icon" />
        </button>
      </Box>
    </Box>
  );
}
