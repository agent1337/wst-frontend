import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { styles } from './createResume.styles';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { useDispatch } from 'react-redux';
import { publishResume } from '../../api/resumes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume")
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

    const dispatch = useDispatch()

    const publish = () => {
        console.log(experienceState, 'experienceState')
        console.log(selfIntroState, 'selfIntroState')
        if (!isFormValid()) {
            return toast("error", {
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
        }
       
        dispatch(publishResume(selfIntroState))
    };

    const isFormValid = (e) => {
        let isValid = true;
        let errorsData = {};

        if (!experienceState.surname) {
            errorsData.surname = true;
            isValid = false;
        }

        setErrors(errorsData);

        return isValid;
    }
    

    console.log(experienceState)

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
