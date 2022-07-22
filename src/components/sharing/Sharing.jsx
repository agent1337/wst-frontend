import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  LineShareButton,
  LineIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { useToastActions } from "redux/toast/useToastActions";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography } from "@mui/material";
import { styles } from "./sharing.styles";
import { main } from "colors";

export default function Sharing({ setIsOpen }) {
  const shareUrl = window.location.href;
  const { showToast } = useToastActions();

  const copy = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Link Copied");
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={{ fontSize: "18px", fontWeight: "400" }}>
        Share
      </Typography>
      <Box sx={styles.inner}>
        <Box sx={styles.social} onClick={copy}>
          <Box sx={styles.copyContainer}>
            <Box sx={styles.copyInner}>
              <ContentCopyIcon sx={{ fill: "#ffffff" }} />
            </Box>
          </Box>
          <Typography sx={{ ...styles.caption, marginTop: "4px" }}>
            Copy Link
          </Typography>
        </Box>

        <Box sx={styles.social}>
          <EmailShareButton url={shareUrl}>
            {(shareCount) => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
            <EmailIcon round={true} bgStyle={{ fill: `${main}` }} />
          </EmailShareButton>
          <Typography sx={styles.caption}>E-mail</Typography>
        </Box>

        <Box sx={styles.social}>
          <LineShareButton url={shareUrl}>
            {(shareCount) => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
            <LineIcon round={true} />
          </LineShareButton>
          <Typography sx={styles.caption}>Line</Typography>
        </Box>

        <Box sx={styles.social}>
          <TwitterShareButton url={shareUrl}>
            {(shareCount) => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
            <TwitterIcon round={true} style={{ fill: "pink" }} />
          </TwitterShareButton>

          <Typography sx={styles.caption}>Twitter</Typography>
        </Box>
      </Box>

      <Box sx={styles.buttonBlock}>
        <button style={styles.btn} onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </Box>
    </Box>
  );
}
