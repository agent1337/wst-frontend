import React, { useState, useRef } from "react";
import ActionHeader from "components/actionHeader/ActionHeader";
import ExperienceIntroduction from "components/resume/ExperienceIntroduction";
import SelfIntroduction from "components/resume/SelfIntroduction";
import Schedule from "components/schedule/Schedule";
import { Formik } from "formik";
import { formValidation, initialExperienceValue } from "helpers/initialValues";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createResume } from "redux/resume/resume.actions";
import { useToastActions } from "redux/toast/useToastActions";

import { Box } from "@mui/material";
import { styles } from "./createResume.styles";

export default function CreateResume() {
  const dispatch = useDispatch();
  const { showToast } = useToastActions();
  const history = useHistory();
  const selfFormikRef = useRef();
  const accessToken = localStorage.getItem("accessToken");
  const [resumeTitle, setResumeTitle] = useState("Untitled Resume");
  const [uploadImage, setUploadImage] = useState(null);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [experienceState, setExperienceState] = useState(
    initialExperienceValue
  );
  const [workshift, setWorkshift] = useState([]);

  const publish = async (stat) => {
    console.log(selfFormikRef?.current);
    if (selfFormikRef?.current) {
      selfFormikRef.current
        .validateForm()
        .then((s) => {
          if (Object.keys(s).length === 0) {
            let data = {
              ...selfFormikRef.current.values,
              ...experienceState,
              resumeTitle: resumeTitle,
              status: stat,
              workshift: workshift,
            };

            console.log(data, "DATA");
            dispatch(
              createResume(data, accessToken, uploadImage, multipleFiles)
            );

            history.push("/resumes");
          } else {
            if (selfFormikRef?.current?.errors.uploadImage) {
              showToast(selfFormikRef?.current?.errors.uploadImage);
            }
            showToast("Please fill the highlighted fields");
          }
        })
        .catch((e) => {
          showToast(e);
        });
    }
  };

  return (
    <>
      <Box sx={styles.section}>
        <Box sx={styles.block}>
          <Box sx={styles.titleInput}>
            <input
              type="text"
              value={resumeTitle}
              onChange={(event) => setResumeTitle(event.target.value)}
              placeholder="resume title"
              style={{ ...styles.inputResumeTitle }}
            />
            <img src="../../action/edit.png" alt="" />
          </Box>
          <ActionHeader
            type={"first"}
            publishResume={publish}
            selfFormikRef={selfFormikRef}
          />
        </Box>

        <Formik
          innerRef={selfFormikRef}
          initialValues={{
            uploadImage: null,
            surname: "",
            name: "",
            kanaSurname: "",
            kanaName: "",
            position: "",
            nationality: "",
            gender: "",
            birthday: "",
            phone: "",
            eMail: "",
            address: "",
            busStation: "",
            transport: "",
          }}
          validationSchema={formValidation}
        >
          {({ values, handleChange, errors }) => (
            <Box sx={styles.container}>
              <Box sx={{ ...styles.selfIntroduction }}>
                <SelfIntroduction
                  values={values}
                  setUploadImage={setUploadImage}
                  uploadImage={values.uploadImage}
                  handleChange={handleChange}
                  errors={errors}
                />
              </Box>
              <Box sx={{ ...styles.fields }}>
                <ExperienceIntroduction
                  experienceState={experienceState}
                  setExperienceState={setExperienceState}
                  multipleFiles={multipleFiles}
                  setMultipleFiles={setMultipleFiles}
                />

                <Schedule setWorkshift={setWorkshift} />

                <Box sx={styles.mobileAction}>
                  <button style={{ ...styles.btn, ...styles.save }}>
                    Save Changes
                  </button>
                  <button style={{ ...styles.btn, ...styles.publish }}>
                    Publish
                  </button>
                  <button
                    style={styles.goTop}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    go
                  </button>
                </Box>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </>
  );
}
