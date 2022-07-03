import React, {useState} from 'react';
import { Box, Grid } from '@mui/material';
import { styles } from './createResume.styles';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { useDispatch } from 'react-redux';
import { publishResume } from '../../api/resumes';

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

export default function CreateResume() {
    const [resumeTitle, setResumeTitle] = useState("Untitled Resume");
    const [selfIntroState, setIntroState] = useState(initialSelfValue)
    const dispatch = useDispatch()

    const publish = () => {
        dispatch(publishResume(selfIntroState))
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
                <ActionHeader type={'first'} publishResume={publish}/>
            </Box>

            <Grid container sx={styles.container}>
                <Grid item xs={12} sm={5} md={5} lg={4.5} sx={{ ...styles.selfIntroduction }}>
                    <SelfIntroduction selfIntroState={selfIntroState} setIntroState={setIntroState} />
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={7.5} sx={{ ...styles.fields }}>
                    <ExperienceIntroduction />

                </Grid>
            </Grid>
        </section>

    )
}
