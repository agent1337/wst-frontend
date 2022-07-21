import React, { useState } from 'react'
import { Box, Typography, Button, } from "@mui/material";
import Popup from '../../modal/Popup';
import { Link } from "react-router-dom";
import { danger } from '../../../colors';
import { useDispatch } from 'react-redux';
import { cloneResume, removeSelectedResume } from '../../../redux/resume/resume.service';
import { styles } from './resumeCard.styles';

export default function OwnResumeCard({ item, }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const removeResume = (resumeId) => {
    dispatch(removeSelectedResume(resumeId))
    setIsOpen(false);
  };

  const copy = (resumeId) => {
    dispatch(cloneResume(resumeId))
  }

  return (
    <>
      <Popup handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Box>
          <Typography
            sx={{ fontSize: "18px", fontWeight: 400, marginBottom: "30px" }}
          >
            Delete Resume
          </Typography>
          <Typography
            sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: 400 }}
          >
            `&quot;`{item.resumeTitle}`&quot;` will be permanently deleted.
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "30px" }}
          >
            <Button
              sx={{
                border: `1px solid ${danger}`,
                color: `${danger}`,
                marginRight: "16px",
                "&:hover": { background: "none" },
              }}
              onClick={() => setIsOpen(false)}
            >
              No
            </Button>
            <Button
              sx={{
                background: `${danger}`,
                color: "#fff",
                "&:hover": { background: `${danger}` },
              }}
              onClick={() => removeResume(item._id)}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Popup>


      <Box sx={styles.cardsItem}>
        <button onClick={() => setIsOpen(true)} style={styles.deleteButton}>
          <img
            src="../../action/delete.png"
            alt="remove"
          />
        </button>
        <Box
          sx={{
            ...styles.card,

          }}
        >
          {item.status && (
            <Box
              sx={
                item.status === "save" ? { display: "none" } : styles.status
              }
            >
              {item.status}
            </Box>
          )}
          <Link to={`/resumes/${item._id}`}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100px' }}>
              <Typography
                sx={styles.resumeTitle}>
                {item.resumeTitle}
              </Typography>
              <Box sx={{ ...styles.detail }}>
                <Typography sx={styles.text}>
                  <b>Last edit:</b> YYYY/MM/DD {item.lastEdit}
                </Typography>
                <Typography sx={styles.text}>
                  <b>Created:</b> YYYY/MM/DD {item.created}
                </Typography>
              </Box>

            </Box>

          </Link>
          <Box sx={styles.actionBox}>
            <img
              src="../../action/edit.png"
              alt="edit"
              style={{ cursor: "pointer", marginRight: "10px" }}
            />
            <button
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => copy(item._id)}>
              <img
                src="../../action/copy.png"
                alt="copy"
              />
            </button>

            <img
              src="../../../action/download.png"
              alt="download"
              style={{ cursor: "pointer" }}
            />
          </Box>

        </Box>
      </Box>
    </>
  )
}
