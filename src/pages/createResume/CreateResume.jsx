import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { styles } from './createResume.styles';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { toastStyle } from '../../utils/toastStyle';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Schedule from '../../components/schedule/Schedule';
import { setAlert } from '../../redux/alert/alert.actions';

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
    const history = useHistory()
    const dispatch = useDispatch()
    const alert = useSelector(state => state.alert.alert)
    const accessToken = localStorage.getItem("accessToken")
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume")
    const [uploadImage, setUploadImage] = useState(null)
    const [multipleFiles, setMultipleFiles] = useState([])
    const [selfIntroState, setIntroState] = useState(initialSelfValue)
    const [experienceState, setExperienceState] = useState(initialExperienceValue)
    const [formErrors, setFormErrors] = useState({ surname: '', name: '' })
    const [errors, setErrors] = useState({
        surname: false,
        name: false,
        kanaSurname: true,
        kanaName: true,
        nationality: true,
        gender: true,
        birthday: true,
        phone: true,
        eMail: true,
        address: true,
        busStation: true,
        transport: true,
    })
    const [workshift, setWorkshift] = useState([])


    const validate = (values) => {
        if (values.name === "" || values.surname === "") {
            dispatch(setAlert('Please fill the highlighted fields'))
        }

        if (alert) {
            return toast(alert, toastStyle);
        }
    }

    const publish = async (stat) => {
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

            <Box sx={styles.container}>
                <Box sx={{ ...styles.selfIntroduction }}>
                    <SelfIntroduction
                        selfIntroState={selfIntroState}
                        setIntroState={setIntroState}
                        errors={errors}
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
                </Box>
            </Box>

            {/* <div className='formErrors'>
                {Object.keys(formErrors).map((fieldName, i) => {
                    if (formErrors[fieldName].length > 0) {
                        return (
                            <p key={i}>{fieldName} {formErrors[fieldName]}</p>
                        )
                    } else {
                        return '';
                    }
                })}
            </div> */}
            <ToastContainer />
        </section>

    )
}
