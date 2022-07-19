import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, } from '@mui/material';
import ActionHeader from '../../components/actionHeader/ActionHeader';
import SelfIntroduction from '../../components/resume/SelfIntroduction';
import ExperienceIntroduction from '../../components/resume/ExperienceIntroduction';
import { toast } from 'react-toastify';
import { getOtherResume, getOwnResume, getUploadedFiles } from "../../redux/profile/profile.service";
import { useDispatch, useSelector } from 'react-redux';
import QRcode from 'qrcode';
import { styles } from './editResume.styles';

export default function EditResume() {
    let location = useLocation();
    let id = location.pathname.split("/")[2];
    const resume = useSelector(state => state.profile.currentResume)
    const workshift = resume.workshift
    const [resumeTitle, setResumeTitle] = useState(resume.resumeTitle)
    const [code, setCode] = useState('')
    const [schedules, setTest] = useState([])
    const [selfIntroState, setIntroState] = useState({})
    const [experienceState, setExperienceState] = useState({})
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

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOwnResume(id))
        dispatch(getUploadedFiles(id))
        QRcode.toDataURL(document.location.href).then(setCode)

        let arr = []
        for (const key in workshift) {
            for (let i = 0; i < workshift[key].length; i++) {
                arr.push(workshift[key][i])
            }
        }
        setTest(arr)
    }, [])

    useEffect(() => {
        setIntroState({
            surname: resume.surname,
            name: resume.name,
            kanaSurname: resume.kanaSurname,
            kanaName: resume.kanaName,
            position: resume.position,
            nationality: resume.nationality,
            gender: resume.gender,
            birthday: resume.birthday,
            phone: resume.phone,
            eMail: resume.eMail,
            address: resume.address,
            busStation: resume.busStation,
            transport: resume.transport,
        })

        setExperienceState({
            motivation: resume.motivation,
            workHistory: resume.workHistory,
            industries: resume.industries,
            experiences: resume.experiences,
            languages: resume.languages,
            certifications: resume.certifications,
            awards: resume.awards,
            schools: resume.schools,
            selfPromotion: resume.selfPromotion,
            skills: resume.skills,
            interests: resume.interests,
            files: resume.files,
            whenStart: resume.whenStart,
        })
    }, [resume])

    const publish = () => { }

    return (
        <Box style={styles.section}>
            <Box sx={styles.block}>
                {/* <Box sx={styles.titleInput}>
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
                    <SelfIntroduction resume={resume}
                        selfIntroState={selfIntroState}
                        setIntroState={setIntroState}
                        errors={errors}
                    />
                </Box>
                <Box sx={{ ...styles.fields }}>
                    <ExperienceIntroduction
                        experienceState={experienceState}
                        setExperienceState={setExperienceState}
                        errors={errors}
                    />
                    <Schedule setWorkshift={setWorkshift} />

                    <Box sx={styles.mobileAction}>
                        <button style={{ ...styles.btn, ...styles.save }}>Save Changes</button>
                        <button style={{ ...styles.btn, ...styles.publish }}>Publish</button>
                        <button style={styles.goTop} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>go</button>
                    </Box>
                </Box> */}
            </Box>
        </Box>
    )
}
