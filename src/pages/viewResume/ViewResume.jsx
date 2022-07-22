import React, { useEffect, useState } from "react";
import { main } from "colors";
import ActionHeader from "components/actionHeader/ActionHeader";
import DisplaySchedule from "components/schedule/DisplaySchedule";
import UploadedFile from "custom/outputs/uploadedFile/UploadedFile";
import { getAge, getDay } from "helpers/dateCalculation";
import moment from "moment";
import QRcode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pdf from "react-to-pdf";
import {
  getOwnResumeDetail,
  getUploadedFiles,
} from "redux/resume/resume.actions";

import Experience from "./components/Experience";
import InfoBlock from "./components/InfoBlock";
import { Box, Typography } from "@mui/material";
import { styles } from "./viewResume.styles";

const ref = React.createRef();

export default function ViewResume() {
  const dispatch = useDispatch();

  let location = useLocation();
  let arr = location.pathname.split("/");
  let id = arr[arr.length - 1];

  const [code, setCode] = useState("");
  const [files, setFiles] = useState([] || null);
  const { resume, media, loading } = useSelector((state) => state.resume);
  const { userId } = useSelector((state) => state.profile);
  const workshift = resume?.workshift;
  const [schedules, setTest] = useState([]);

  useEffect(() => {
    dispatch(getOwnResumeDetail(id));
    dispatch(getUploadedFiles(id));
  }, []);

  useEffect(() => {
    if (!loading) {
      setFiles(media.splice(1));
    }
  }, [media]);

  useEffect(() => {
    QRcode.toDataURL(document.location.href).then(setCode);
  }, []);

  useEffect(() => {
    let arr = [];
    for (const key in workshift) {
      for (let i = 0; i < workshift[key].length; i++) {
        arr.push(workshift[key][i]);
      }
    }
    setTest(arr);
  }, [workshift]);

  const type = userId !== resume.userId ? "third" : "second";

  return (
    <section style={styles.section}>
      {resume && (
        <>
          <Box sx={styles.block}>
            <Typography>{resume.resumeTitle}</Typography>
            <ActionHeader type={type} resumeId={id} />
          </Box>

          <Pdf
            targetRef={ref}
            filename="code-example.pdf"
            scale={0.78}
            x={4}
            y={5}
          >
            {({ toPdf }) => (
              <button
                style={{
                  position: "absolute",
                  right: "135px",
                  fontSize: "16px",
                  top: "0px",
                  padding: "11px 23px",
                  color: "transparent",
                }}
                onClick={toPdf}
              >
                Download Pdf
              </button>
            )}
          </Pdf>

          <Box ref={ref} sx={styles.container}>
            <Box sx={styles.selfIntroduction}>
              <Box sx={styles.imageBox}>
                {/* <img
                  src={
                    media &&
                    `https://storage.cloud.google.com/wst-files/${media[0].filePath}`
                  }
                  alt="123"
                  style={{ width: "inherit", height: "inherit" }}
                /> */}

                <InfoBlock resume={resume} />
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
              <Box sx={{ display: "flex" }}>
                <Typography sx={styles.text}>
                  {moment(resume.birthday).format("YYYY/DD/MM")}
                </Typography>
                <Typography sx={{ ...styles.text, marginLeft: "10px" }}>
                  ({getAge(resume.birthday)})
                </Typography>
              </Box>

              <Typography sx={styles.text}>{resume.phone}</Typography>
              <Typography sx={styles.text}>{resume.eMail}</Typography>
              <Typography sx={styles.text}>{resume.address}</Typography>
              <Typography sx={styles.text}>
                Close to {resume.busStation} / Bus Stop
              </Typography>
              <Typography sx={styles.text}>
                Transport by {resume.transport}
              </Typography>

              <Box sx={styles.qrBox}>
                <img src={code} alt="" style={styles.qrCode} />
              </Box>
            </Box>

            <Box sx={styles.fields}>
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

              <Experience
                data={resume.experiences}
                title={"Experience / Skills"}
              />

              <Experience data={resume.languages} title={"Language"} />

              <Experience
                data={resume.certifications}
                title={"Certifications"}
              />

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

              <Experience
                data={resume.skills}
                title={"Skills I want to Learn"}
              />

              <Experience
                data={resume.interests}
                title={"Industries I am Interested in"}
              />

              {files && files?.length > 0 && (
                <>
                  <Typography sx={styles.title}>Files</Typography>
                  {files?.map((file, index) => {
                    return <UploadedFile key={index} file={file} />;
                  })}
                </>
              )}
              <Typography sx={styles.title}>When can I start?</Typography>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontWeight: 700 }}>
                  {moment(resume.whenStart).format("YYYY/DD/MM")}
                </Typography>
                <Typography sx={{ marginLeft: "10px" }}>
                  ({getDay(resume.whenStart)})
                </Typography>
              </Box>

              <Typography sx={{ ...styles.title, marginTop: "20px" }}>
                DESIRABLE WORKSHIFT
              </Typography>

              <DisplaySchedule schedules={schedules} />
            </Box>
          </Box>
        </>
      )}
    </section>
  );
}
