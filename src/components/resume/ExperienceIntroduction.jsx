import React from 'react';
import { Box } from '@mui/material';
import Textarea from '../../custom/inputs/textarea/Textarea';
import AutoInput from '../../custom/inputs/autoInput/AutoInput';
import UploadFile from '../../custom/buttons/uploadButton/UploadFile';

export default function ExperienceIntroduction() {
    return (
        <Box>
            <Textarea
                name={"motivation"}
                title={"Motivation"}
                placeholder={"I applied because"}
            />

            <AutoInput
                name={"industries"}
                type={"text"}
                title={"Industries"}
           
            />

            <AutoInput
                name={"experiences"}
                type={"text"}
                title={"Experiences"}
            />

            <AutoInput
                name={"certifications"}
                type={"text"}
                title={"Certifications"}
            />

            <AutoInput
                name={"awards"}
                type={"text"}
                title={"Awards"}
            />

            <AutoInput
                name={"schools"}
                type={"text"}
                title={"School"}
            />

            <Textarea
                name={"selfPromotion"}
                title={"Self promotion"}
                placeholder={"Why I’m the best fit for this job..."}
            />

            <AutoInput
                name={"skills"}
                type={"text"}
                title={"Skills"}
            />

            <AutoInput
                name={"interests"}
                type={"text"}
                title={"Interests"}
            />

            <UploadFile />
        </Box>
    )
}
