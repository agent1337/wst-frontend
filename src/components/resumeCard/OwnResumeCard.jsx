import React, { useState } from 'react'
import { Box, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from './resumeCard.styles';
import Popup from '../modal/Popup';
import { danger } from '../../colors';
import API from '../../utils/api';
import { ToastContainer, toast } from 'react-toastify';

export default function OwnResumeCard({ item, resumesData, setResumesData }) {
  const [isOpen, setIsOpen] = useState(false);

  const removeResume = (resumeId) => {
    API.delete(`resumes/` + resumeId)
      .then((res) => {
        console.log(res)
        setIsOpen(false);
        setResumesData(resumesData.filter((item) => item._id !== resumeId));
        console.log(res.data.resumeTitle)
        return toast(`${res.data.resumeTitle} deleted`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'dark',
          width: '100px'
        });
      })
      .catch((error) => console.log(error));
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
