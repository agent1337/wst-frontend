import React from 'react';
import Textarea from '../../custom/inputs/textarea/Textarea';
import AutoInput from '../../custom/inputs/autoInput/AutoInput';
import UploadFile from '../../custom/buttons/uploadButton/UploadFile';
import SelectDate from './SelectDate';

export default function ExperienceIntroduction({ experienceState, setExperienceState }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperienceState({ ...experienceState, [name]: value });
    }

    return (
        <div style={{ position: 'relative', padding: '0 16px' }}>
            <Textarea
                name={"motivation"}
                title={"Motivation"}
                placeholder={"I applied because"}
                value={experienceState.motivation}
                onChange={handleInputChange}
            />

            <AutoInput
                name={"workHistory"}
                type={"text"}
                title={"Work history"}
                value={experienceState.workHistory}
                setExperienceState={setExperienceState}
            />

            <AutoInput
                name={"industries"}
                type={"text"}
                title={"Industry"}
                value={experienceState.industries}
            />

            <AutoInput
                name={"experiences"}
                type={"text"}
                title={"Experience / Skills"}
                value={experienceState.experiences}
            />

            <AutoInput
                name={"languages"}
                type={"text"}
                title={"Languages"}
                value={experienceState.languages}
            />

            <AutoInput
                name={"certifications"}
                type={"text"}
                title={"Certifications"}
                value={experienceState.certifications}
            />

            <AutoInput
                name={"awards"}
                type={"text"}
                title={"Awards"}
                value={experienceState.awards}
            />

            <AutoInput
                name={"schools"}
                type={"text"}
                title={"School"}
                value={experienceState.schools}
            />

            <Textarea
                name={"selfPromotion"}
                title={"Self promotion"}
                placeholder={"Why I’m the best fit for this job..."}
                value={experienceState.motivation}
                onChange={handleInputChange}
            />

            <AutoInput
                name={"skills"}
                type={"text"}
                title={"Skills I want to Learn"}
                value={experienceState.motivation}
            />

            <AutoInput
                name={"interests"}
                type={"text"}
                title={"Industries I am Interested in"}
                value={experienceState.motivation}
            />

            <UploadFile />

            <SelectDate
                name={"whenStart"}
                value={experienceState.whenStart}
                text={"When can I start?"}
                onChange={handleInputChange}
            />
        </div>
    )
}
