import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { Formik } from "formik";
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import Schedule from '../../components/schedule/Schedule';
import { showToast } from '../../redux/alert/alert.actions';
import { styles } from './createResume.styles';
import { initialExperienceValue, formValidation } from '../../helpers/initialValues';
import { axiosInstance } from "../../api/axios"
import { createResume } from '../../redux/profile/profile.service';

export default function CreateResume() {
    const dispatch = useDispatch()
    const history = useHistory()
    const accessToken = localStorage.getItem("accessToken")
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume")
    const [uploadImage, setUploadImage] = useState(null)
    const [multipleFiles, setMultipleFiles] = useState([])
    const [experienceState, setExperienceState] = useState(initialExperienceValue)
    const [submitted, setSubmitted] = useState(false);
    const selfFormikRef = useRef();
    const [workshift, setWorkshift] = useState([])

    const publish = async (stat) => {
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
                            workshift: workshift
                        }
                   
                        dispatch(createResume(data, accessToken, uploadImage, multipleFiles))

                        history.push('/resumes')
                    } else {
                        dispatch(showToast('Please fill the highlighted fields'))
                    }
                })
                .catch((e) => {
                    dispatch(showToast(e))
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
                            style={{ ...styles.inputResumeTitle, }}
                        />
                        <img src="../../action/edit.png" alt="" />
                    </Box>
                    <ActionHeader
                        type={'first'}
                        publishResume={publish}
                        selfFormikRef={selfFormikRef}
                        submitted={submitted}
                        setSubmitted={setSubmitted} />
                </Box>

                <Formik
                    innerRef={selfFormikRef}
                    initialValues={{
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
                                    uploadImage={uploadImage}
                                    handleChange={handleChange}
                                    errors={errors}
                                />
                            </Box>
                            <Box sx={{ ...styles.fields }}>
                                <ExperienceIntroduction
                                    experienceState={experienceState}
                                    setExperienceState={setExperienceState}
                                />

                                <Schedule setWorkshift={setWorkshift} />

                                <Box sx={styles.mobileAction}>
                                    <button style={{ ...styles.btn, ...styles.save }}>Save Changes</button>
                                    <button style={{ ...styles.btn, ...styles.publish }}>Publish</button>
                                    <button style={styles.goTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>go</button>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Box>
        </>
    )
}
