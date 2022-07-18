import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { Formik } from "formik";
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import Schedule from '../../components/schedule/Schedule';
import axios from "axios";
import { setAlert } from '../../redux/alert/alert.actions';
import { styles } from './createResume.styles';
import Toast from '../../custom/toast/Toast';
import { initialExperienceValue, formValidation } from '../../helpers/initialValues';

export default function CreateResume() {
    const dispatch = useDispatch()
    const history = useHistory()
    const alert = useSelector(state => state.alert.alert)
    const accessToken = localStorage.getItem("accessToken")
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume")
    const [uploadImage, setUploadImage] = useState(null)
    const [multipleFiles, setMultipleFiles] = useState([])
    const [experienceState, setExperienceState] = useState(initialExperienceValue)
    const [submitted, setSubmitted] = useState(false);
    const selfFormikRef = useRef();
    const [workshift, setWorkshift] = useState([])

    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = type => {
        toastProperties = {
            id: list.length + 1,
            description: type,
        }

        setList([...list, toastProperties]);
    };

    const publish = async (stat) => {
        if (selfFormikRef?.current) {
            selfFormikRef.current
                .validateForm()
                .then((s) => {
                    console.log(s, 's')
                    if (Object.keys(s).length === 0) {
                        let data = {
                            ...selfFormikRef.current.values,
                            ...experienceState,
                            resumeTitle: resumeTitle,
                            status: stat,
                            workshift: workshift
                        }
                        const createResume = axios.post(`http://localhost:4040/resumes`, data, { headers: { Authorization: `Bearer ${accessToken}` } },)
                            .catch((error) => {
                                console.log(error, 'error')
                            });

                        uploadFile(uploadImage, createResume.data._id);
                        for (let i = 0; i < multipleFiles.length; i++) {
                            uploadFile(multipleFiles[i], createResume.data._id);
                        }

                        history.push('/resumes')
                    } else {
                        showToast('Please fill the highlighted fields')
                    }
                })
                .catch((e) => {
                    showToast(e);
                });
        }
    };

    const uploadFile = async (uploadImage, resumeId) => {
        const formData = new FormData();
        formData.append("image", uploadImage);
        formData.append("resumeId", resumeId);

        await axios
            .post("http://localhost:4040/media", formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "multipart/form-data",
                    Accept: "application/json",
                    type: "formData",
                },
            })
            .then((res) => {
                history.push("/resumes");
            })
            .catch((err) => console.log(err));
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
            
            <Toast toastlist={list} setList={setList} />
        </>
    )
}
