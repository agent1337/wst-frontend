import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import { styles } from './editResume.styles';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { ToastContainer, toast } from 'react-toastify';
import API from '../../utils/api';


export default function EditResume() {
    let location = useLocation();
    let id = location.pathname.split("/")[2];
    useEffect(() => {
        API.get(`/resumes/${id}`)
            .then((response) => {
                setResume(response.data)
            })
            .catch((error) => console.log(error));
    }, [])

    const [resume, setResume] = useState([])

    // const [resumeTitle, setResumeTitle] = useState('resume.resumeTitle');

    // const [selfIntroState, setIntroState] = useState({
    //     surname: resume && resume.surname,
    //     name: resume.name,
    //     kanaSurname: resume.kanaSurname,
    //     kanaName: resume.kanaName,
    //     position: resume.position,
    //     nationality: resume.nationality,
    //     gender: resume.gender,
    //     birthday: resume.birthday,
    //     phone: resume.phone,
    //     eMail: resume.eMail,
    //     address: resume.address,
    //     busStation: resume.busStation,
    //     transport: resume.transport,
    // })
    // const [experienceState, setExperienceState] = useState(initialExperienceValue)

    const publish = () => {}

    return (
        <section style={styles.section}>
            <Box sx={styles.block}>
                <input
                    type="text"
                    // value={resumeTitle}
                    // onChange={(event) => setResumeTitle(event.target.value)}
                    placeholder="resume title"
                    // style={styles.inputResumeTitle}
                />
                <ActionHeader type={'first'} publishResume={publish} />
            </Box>

            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={5} md={5} lg={4.5} sx={{ ...styles.selfIntroduction }}>
                    {/* <SelfIntroduction resume={resume}
                        selfIntroState={selfIntroState}
                        setIntroState={setIntroState}
                    /> */}
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={7.5} sx={{ ...styles.fields }}>
                    {/* <ExperienceIntroduction
                        experienceState={experienceState}
                        setExperienceState={setExperienceState}
                    /> */}
                </Grid>
            </Grid>
            <ToastContainer />
        </section>
    )
}
