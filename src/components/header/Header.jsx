import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "routing/Routes";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import { styles } from "./header.styles";
import Avatar from "../avatar/Avatar";
import PartTimeLogo from "../logo/PartTimeLogo";
import Navigation from "../navigation/Navigation";

export default function Header() {
  const [isShow, setIsShow] = useState(false);
  const history = useHistory();
  return (
    <Box sx={styles.header}>
      <Box sx={styles.mobile}>
        <Box>
          <img src="../../logo/logo.svg" alt="logo" />
        </Box>
        <Box>
          <MenuIcon sx={styles.burgerMenu} onClick={() => setIsShow(!isShow)} />
        </Box>
      </Box>
      {isShow && <Navigation setIsShow={setIsShow} isShow={isShow} />}

      <Box sx={styles.content}>
        <Box sx={{ ...styles.box, justifyContent: "space-around" }}>
          <Navigation />
          <PartTimeLogo />
        </Box>

        <img src="../../header.png" alt="header" />

        <Box sx={{ ...styles.box, justifyContent: "center" }}>
          <Avatar />
          <Button
            sx={styles.createButton}
            onClick={() => history.push(routes().createResume)}
          >
            Create New Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
