import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { styles } from './createResume.styles';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { useDispatch } from 'react-redux';
import { publishResume } from '../../api/resumes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import API from '../../utils/api';

const initialSelfValue = {
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
}

const initialExperienceValue = {
    motivation: "",
    workHistory: [],
    industries: [],
    experiences: [],
    languages: [],
    certifications: [],
    awards: [],
    schools: [],
    selfPromotion: "",
    skills: [],
    interests: [],
    files: [],
}

export default function CreateResume() {
    const history = useHistory()
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume")
    const [uploadImage, setUploadImage] = useState(null)
    const [multipleFiles, setMultipleFiles] = useState([])
    const [selfIntroState, setIntroState] = useState(initialSelfValue)
    const [experienceState, setExperienceState] = useState(initialExperienceValue)
    const [errors, setErrors] = useState({
        surname: false,
        name: false,
        kanaSurname: false,
        kanaName: false,
        nationality: false,
        gender: false,
        birthday: false,
        phone: false,
        eMail: false,
        address: false,
        busStation: false,
        transport: false,
    })
    const accessToken = localStorage.getItem("accessToken");

    const dispatch = useDispatch()

    const publish = async (stat) => {
        console.log(stat, 'sata')

        console.log(experienceState, 'experienceState')
        console.log(selfIntroState, 'selfIntroState')
        let data = {
            ...experienceState,
            ...selfIntroState,
            resumeTitle: resumeTitle,
            status: stat,
        }
        console.log(data)

        const createResume = await API.post(`resumes`, data).catch((err) =>
            console.log(err)
        );

        uploadFile(uploadImage, createResume.data._id);
        for (let i = 0; i < multipleFiles.length; i++) {
            uploadFile(multipleFiles[i], createResume.data._id);
        }

        history.push('/resumes')

        // if (!isFormValid()) {
        //     return toast("error", {
        //         position: "bottom-left",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: false,
        //         draggable: false,
        //         progress: undefined,
        //         theme: 'dark',
        //         width: '100px'
        //     });
        // }

        // dispatch(publishResume(data))

        // if(dispatch(publishResume(data))) {
        //     history.push('/resumes')
        // }

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
        <section style={styles.section}>
            <Box sx={styles.block}>
                <input
                    type="text"
                    value={resumeTitle}
                    onChange={(event) => setResumeTitle(event.target.value)}
                    placeholder="resume title"
                    style={styles.inputResumeTitle}
                />
                <ActionHeader type={'first'} publishResume={publish} />
            </Box>

            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={5} md={5} lg={4.5} sx={{ ...styles.selfIntroduction }}>
                    <SelfIntroduction
                        selfIntroState={selfIntroState}
                        setIntroState={setIntroState}
                        errors={errors}
                        setUploadImage={setUploadImage}
                        uploadImage={uploadImage}
                    />
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={7.5} sx={{ ...styles.fields }}>
                    <ExperienceIntroduction
                        experienceState={experienceState}
                        setExperienceState={setExperienceState}
                    />
                </Grid>
            </Grid>
            <ToastContainer />
        </section>

    )
}
