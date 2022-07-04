import React from 'react'
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from './resumeCard.styles';

export default function OwnResumeCard({ item }) {
  return (
    <Box sx={styles.cardsItem}>
      <img
        src="../../action/delete.png"
        alt="remove"
        style={styles.deleteButton}
        // onClick={() => setIsOpen(true)}
      />
      <Link className="link" to={`/resume/${item._id}`}>
        <Box
          sx={{
            ...styles.card,
            justifyContent: "space-between",
            paddingTop: "28px",
            border: "1px solid #29CC8F",
          }}
        >
          {item.status && (
            <Box
              sx={
                item.status === "saved" ? { display: "none" } : styles.status
              }
            >
              {item.status}
            </Box>
          )}

          <Typography
            sx={{
              fontSize: "14px",
              padding: "0 15px",
              fontWeight: "400",
            }}
          >
            {item.resumeTitle}
          </Typography>
          <Box sx={{ ...styles.detail }}>
            <Typography sx={styles.text}>
              <b>Last edit:</b> YYYY/MM/DD {item.lastEdit}
            </Typography>
            <Typography sx={styles.text}>
              <b>Created:</b> YYYY/MM/DD {item.created}
            </Typography>

            <Box sx={styles.actionBox}>
              <img
                src="../../action/edit.png"
                alt="edit"
                style={{ cursor: "pointer", marginRight: "10px" }}
              />
              <img
                src="../../action/copy.png"
                alt="copy"
                style={{ cursor: "pointer", marginRight: "10px" }}
              />
              <img
                src="../../../action/download.png"
                alt="download"
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}
