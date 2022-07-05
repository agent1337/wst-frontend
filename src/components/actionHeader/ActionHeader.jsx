import React from 'react';
import { Box, } from "@mui/material";
import ActionButton from '../../custom/buttons/actionButton/ActionButton';

export default function ActionHeader({ type, publishResume }) {

    const openEditResume = () => {

    }

    const generate = () => {
        
    }

    const editResume = () => {
        
    }

    const publishEditResume = () => {
        
    }

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
                        <ActionButton text={"EDIT"} func={openEditResume} />
                        <ActionButton text={"GENERATE"} func={generate} />
                    </>
                )}

                {type === 'third' && (
                    <>
                        <ActionButton text={"Save changes"} func={editResume} />
                        <ActionButton text={"Publish"} func={publishEditResume} />
                    </>
                )}
            </Box>
        </section>
    )
}
