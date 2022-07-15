import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, } from "@mui/material";
import ActionButton from '../../custom/buttons/actionButton/ActionButton';
import { useDispatch,  } from 'react-redux';
import { saveToMyList } from '../../redux/profile/profile.service';

export default function ActionHeader({ type, publishResume, resumeId }) {
    const dispatch = useDispatch()
    const history = useHistory();

    const saveCVtoMyList = (resumeId) => {
        dispatch(saveToMyList(resumeId))
        history.push("/resumes")
    }

    const openEditResume = () => {

    }

    const generate = () => { }

    return (
        <section>
            <Box sx={{ display: "flex", }}>
                {type === 'first' && (
                    <>
                        <ActionButton text={"Save changes"} func={() => publishResume('save')} />
                        <ActionButton text={"Publish"} func={() => publishResume('publish')} />
                    </>
                )}

                {type === 'second' && (
                    <>
                        <ActionButton text={"Edit"} func={openEditResume} />
                        <ActionButton text={"Download PDF"} func={generate} />
                        <ActionButton text={"Share"} func={() => alert('share')} />
                    </>
                )}

                {type === 'third' && (
                    <>
                        <ActionButton text={"Save to list"} func={() => saveCVtoMyList(resumeId)} />
                        <ActionButton text={"Download PDF"} func={() => alert('download')} />
                        <ActionButton text={"Share"} func={() => alert('share')} />
                    </>
                )}
            </Box>
        </section>
    )
}
