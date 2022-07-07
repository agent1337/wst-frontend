import React, { useState } from 'react'
import { Box, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from './resumeCard.styles';
import Popup from '../modal/Popup';
import { danger } from '../../colors';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedResume } from '../../redux/profile/profile.service';
import { toastStyle } from '../../utils/toastStyle';

export default function OwnResumeCard({ item, }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const alert = useSelector(state => state.alert.alert)

  const removeResume = (resumeId) => {
    dispatch(removeSelectedResume(resumeId))
    setIsOpen(false);
    return toast(`${alert}`, toastStyle);
  };

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
            "{item.resumeTitle}" will be permanently deleted.
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
        <img
          src="../../action/delete.png"
          alt="remove"
          style={styles.deleteButton}
          onClick={() => setIsOpen(true)}
        />
        <Link className="link" to={`/cv/${item._id}`}>
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
        <ToastContainer />
      </Box>
    </>
  )
}
