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
                name={"workHistory"}
                type={"text"}
                title={"Work history"}

            />

            <AutoInput
                name={"industries"}
                type={"text"}
                title={"Industry"}

            />

            <AutoInput
                name={"experiences"}
                type={"text"}
                title={"Experience / Skills"}
            />

            <AutoInput
                name={"languages"}
                type={"text"}
                title={"Languages"}
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
                title={"Skills I want to Learn"}
            />

            <AutoInput
                name={"interests"}
                type={"text"}
                title={"Industries I am Interested in"}
            />

            <UploadFile />
        </Box>
    )
}
