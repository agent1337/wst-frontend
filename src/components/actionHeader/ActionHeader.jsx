import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from "@mui/material";
import ActionButton from '../../custom/buttons/actionButton/ActionButton';
import { useDispatch, } from 'react-redux';
import { saveToMyList } from '../../redux/profile/profile.service';
import CircleIcon from '@mui/icons-material/Circle';
import { styles } from './actionHeader.styles';
import Popup from '../modal/Popup';
import Sharing from '../sharing/Sharing';

export default function ActionHeader({ type, publishResume, resumeId }) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [isShow, setIsShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const saveCVtoMyList = (resumeId) => {
        dispatch(saveToMyList(resumeId))
        history.push("/resumes")
    }

    const openEditResume = (resumeId) => {
        history.push(`/edit/${resumeId}`)
    }

    const generate = () => { }

    return (
        <section>
            <Box sx={styles.dekstop}>
                {type === 'first' && (
                    <Box>
                        <ActionButton text={"Save changes"} func={() => publishResume('save')} />
                        <ActionButton text={"Publish"} func={() => publishResume('publish')} />
                    </Box>
                )}

                {type === 'second' && (
                    <>
                        <ActionButton text={"Edit"} func={() => openEditResume(resumeId)} />
                        <ActionButton text={"Download PDF"} func={generate} />
                        <ActionButton text={"Share"} func={() => setIsOpen(true)} />
                    </>
                )}

                {type === 'third' && (
                    <>
                        <ActionButton text={"Save to list"} func={() => saveCVtoMyList(resumeId)} />
                        <ActionButton text={"Download PDF"} func={() => alert('download')} />
                        <ActionButton text={"Share"} func={() => setIsOpen(true)} />
                    </>
                )}
            </Box>

            <Popup handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                <Sharing />
            </Popup>

            <Box sx={styles.mobile}>
                <button style={styles.combineButton} onClick={() => setIsShow(!isShow)}>
                    <CircleIcon sx={styles.dotIcon} />
                    <CircleIcon sx={styles.dotIcon} />
                    <CircleIcon sx={styles.dotIcon} />
                </button>

                {isShow &&
                    <Box sx={styles.blockMenu}>
                        {type === 'first' && (
                            <Box sx={styles.menu}>
                                <button style={styles.menuButton}>Save changes</button>
                                <button style={styles.menuButton}>Publish</button>
                            </Box>
                        )}
                        {type === 'second' && (
                            <Box sx={styles.menu}>
                                <button style={styles.menuButton}>Edit</button>
                                <button style={styles.menuButton}>Download PDF</button>
                                <button style={styles.menuButton}>Share</button>
                            </Box>
                        )}
                        {type === 'third' && (
                            <Box sx={styles.menu}>
                                <button style={styles.menuButton}>Save to list</button>
                                <button style={styles.menuButton}>Download PDF</button>
                                <button style={styles.menuButton}>Share</button>
                            </Box>
                        )}
                    </Box>
                }

            </Box>
        </section>
    )
}
