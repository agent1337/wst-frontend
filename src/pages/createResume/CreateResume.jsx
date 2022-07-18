import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import Schedule from '../../components/schedule/Schedule';
import axios from "axios";
import { toast } from 'react-toastify';
import { setAlert } from '../../redux/alert/alert.actions';
import { toastStyle } from '../../utils/toastStyle';
import { styles } from './createResume.styles';

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
    whenStart: "",
}

export default function CreateResume() {
    const dispatch = useDispatch()
    const history = useHistory()
    const alert = useSelector(state => state.alert.alert)
    const accessToken = localStorage.getItem("accessToken")
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
    const [workshift, setWorkshift] = useState([])

    const publish = async (stat) => {
        if (!isFormValid()) {
            return toast('Please fill the highlighted fields', toastStyle);
        }

        let data = {
            ...experienceState,
            ...selfIntroState,
            resumeTitle: resumeTitle,
            status: stat,
            workshift: workshift
        }

        const createResume = await axios.post(`http://localhost:4040/resumes`, data, { headers: { Authorization: `Bearer ${accessToken}` } },)
            .catch((error) => {
                dispatch(setAlert(error))
                console.log(alert, 'alert')
                if (alert) {
                    return toast(alert, toastStyle);
                }
            });

        uploadFile(uploadImage, createResume.data._id);
        for (let i = 0; i < multipleFiles.length; i++) {
            uploadFile(multipleFiles[i], createResume.data._id);
        }

        history.push('/resumes')

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

    const isFormValid = () => {
        let isValid = true;
        let errorsData = {};

        if (!initialSelfValue.surname) {
            errorsData.name = true;
            isValid = false;
        }

        if (!initialSelfValue.name) {
            errorsData.name = true;
            isValid = false;
        }

        setErrors(errorsData);

        return isValid;
    }


    return (
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
                <ActionHeader type={'first'} publishResume={publish} />
            </Box>

            <Box sx={styles.container}>
                <Box sx={{ ...styles.selfIntroduction }}>
                    <SelfIntroduction
                        selfIntroState={selfIntroState}
                        setIntroState={setIntroState}
                        errors={errors}
                        setErrors={setErrors}
                        setUploadImage={setUploadImage}
                        uploadImage={uploadImage}
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
                        <button style={styles.goTop} onClick={() =>  window.scrollTo({top: 0, behavior: "smooth"})}>go</button>
                    </Box>
                </Box>
            </Box>

        </Box>

    )
}
