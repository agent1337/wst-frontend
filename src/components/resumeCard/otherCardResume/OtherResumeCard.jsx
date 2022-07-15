import React, { useState } from 'react'
import { Box, Typography, Button, } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from './resumeCard.styles';
import Popup from '../../modal/Popup';
import { danger } from '../../../colors';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedResume } from '../../../redux/profile/profile.service';
import { toastStyle } from '../../../utils/toastStyle';
import { main } from '../../../colors'

export default function OtherResumeCard({ item, }) {
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
        <Link className="link" to={`/resumes/others/${item._id}`}>
          <Box
            sx={{
              ...styles.card,
              justifyContent: "space-between",
              border: "2px solid #29CC8F",
            }}
          >
            <Box sx={{ height: '91px' }}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{ width: '100%', height: '100%' }} alt="" />
            </Box>

            <Box sx={{padding: '0 8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '73px'}}>
              <Box sx={{marginTop: '5px', color: `${main}`, fontSize: '14px', fontWeight: 300}}>
                <span style={{ paddingRight: '3px' }}>
                  {item.surname}
                </span>
                <span>
                  {item.name}
                </span>
              </Box>


              <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '15px' }}>
                <Typography sx={styles.text}>
                  <b>Saved:</b> 2022/11/11 {item.lastEdit}
                </Typography>

                <Box sx={styles.actionBox}>
                  ...
              </Box>
              </Box>
            </Box>

          </Box>
        </Link>
        <ToastContainer />
      </Box>
    </>
  )
}
