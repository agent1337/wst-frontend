import React from "react";
import { Box, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/auth.actions";

const styles = {
  title: {
    marginRight: "10px",
  },
};

export default function Avatar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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
