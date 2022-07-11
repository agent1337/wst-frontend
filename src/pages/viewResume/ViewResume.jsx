import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ActionHeader from "../../components/actionHeader/ActionHeader";
import { getResume, getUploadedFiles } from "../../redux/profile/profile.service";
import { useDispatch, useSelector } from 'react-redux';
import QRcode from 'qrcode';
import Pdf from "react-to-pdf";
import moment from "moment";
import { styles } from "./viewResume.styles";
import { grey, main } from "../../colors";
import '../../components/schedule/schedule.styles.css'
import Experience from "./components/Experience";
import DisplaySchedule from "../../components/schedule/DisplaySchedule";

const ref = React.createRef();

export default function ViewResume() {
  const dispatch = useDispatch()

  let location = useLocation();
  let id = location.pathname.split("/")[2];

  const [code, setCode] = useState('')
  const [image, setImage] = useState(null)
  const [files, setFiles] = useState(null)

  const resume = useSelector(state => state.profile.resumeData)
  const workshift = resume.workshift
  const [schedules, setTest] = useState([])

  useEffect(() => {
    dispatch(getResume(id))
    dispatch(getUploadedFiles(id))
  }, [])

  useEffect(() => {
    QRcode.toDataURL(document.location.href).then(setCode)
  }, [])

  useEffect(() => {
    let arr = []
    for (const key in workshift) {
      for (let i = 0; i < workshift[key].length; i++) {
        arr.push(workshift[key][i])
      }
    }
    setTest(arr)
  }, [])


  // useEffect(() => {
  //   axios.get(`/media/${id}`)
  //     .then((response) => {
  //       setImage(response.data[0].filePath);
  //       setFiles(response.data.splice(1));
  //     })
  //     .catch((error) => console.log(error));
  // }, [setImage]);

  return (
    <section style={styles.section}>
      {resume &&
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              marginBottom: "15px",
            }}
          >
            <Typography>
              {resume.resumeTitle}
            </Typography>
            <ActionHeader type={"second"} resumeId={id} />
          </Box>
          <Pdf targetRef={ref} filename="code-example.pdf" scale={0.78} x={4} y={5}>
            {({ toPdf }) => <button style={{ position: 'absolute', right: '0', top: '0px', padding: '11px 23px', color: 'transparent' }} onClick={toPdf}>Generate Pdf</button>}
          </Pdf>

          <Grid container ref={ref}>
            <Grid item xs={12} sm={5} md={5} lg={4.5}
              sx={{ ...styles.introduction, }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  background: `${grey}`,
                  marginBottom: "30px",
                }}
              >
                {/* <img
                  src={
                    image !== undefined &&
                    `https://storage.cloud.google.com/wst-files/${image}`
                  }
                  alt={`${image}`}
                  style={{ width: "inherit", height: "inherit" }}
                /> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  marginBottom: "28px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "28px",
                    color: `${main}`,
                    width: "200px",
                  }}
                >
                  {resume.surname} {resume.name}
                </Typography>
                <Typography>{resume.position}</Typography>
              </Box>
              <Typography sx={styles.text}>
                {resume.kanaSurname} {resume.kanaName}
              </Typography>
              <Typography sx={styles.text}>{resume.nationality}</Typography>
              <Typography sx={styles.text}>{resume.gender}</Typography>
              <Typography sx={styles.text}>
                {moment(resume.birthday).format("YYYY/DD/MM")}
              </Typography>
              <Typography sx={styles.text}>{resume.phone}</Typography>
              <Typography sx={styles.text}>{resume.eMail}</Typography>
              <Typography sx={styles.text}>{resume.address}</Typography>
              <Typography sx={styles.text}>
                Close to {resume.busStation} / Bus Stop
                </Typography>
              <Typography sx={styles.text}>
                Transport by {resume.transport}
              </Typography>

              <img src={code} alt="" style={{ width: '150px', height: '150px', display: 'block', margin: '62px auto' }} />
            </Grid>

            <Grid item xs={12} sm={7} md={7} lg={7.5} sx={{ ...styles.fields }}>
              {resume?.motivation?.length > 0 && (
                <>
                  <Typography sx={styles.title}>
                    Motivation for this Job
                    </Typography>
                  <textarea
                    value={resume.motivation}
                    disabled
                    style={styles.textarea}
                  />
                </>
              )}

              <Experience data={resume.workHistory} title={"Work History"} />

              <Experience data={resume.industries} title={"Industry"} />

              <Experience data={resume.experiences} title={"Experience / Skills"} />

              <Experience data={resume.languages} title={"Language"} />

              <Experience data={resume.certifications} title={"Certifications"} />

              <Experience data={resume.awards} title={"Awards"} />

              <Experience data={resume.schools} title={"Schools"} />

              <Typography sx={styles.title}>
                Self-Promotion / Extra Info
                </Typography>
              <textarea
                value={resume?.selfPromotion}
                disabled
                style={styles.textarea}
              />

              <Experience data={resume.skills} title={"Skills I want to Learn"} />

              <Experience data={resume.interests} title={"Industries I am Interested in"} />

              {/* {files?.length > 0 && (
                <>
                  <Typography sx={styles.title}>Files</Typography>
                  {files?.map((file, index) => {
                    return (
                      <p key={index}>{file.originalname}</p>
                    )
                    //  <UploadedFile key={index} file={file} />
                  })}
                </>
              )} */}
              <Typography sx={styles.title}>When can I start?</Typography>
              <Typography>
                {moment(resume.whenStart).format("YYYY/DD/MM")}
              </Typography>
              <Typography sx={{ ...styles.title, marginTop: "20px" }}>
                DESIRABLE WORKSHIFT
                </Typography>

                <DisplaySchedule schedules={schedules}  />
            </Grid>
          </Grid>
        </>
      }
    </section>
  )
}
