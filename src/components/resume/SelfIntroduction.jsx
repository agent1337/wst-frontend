import React from 'react'
import { Box } from '@mui/material'
import UploadImage from '../../custom/buttons/uploadButton/UploadImage'
import TextInput from '../../custom/inputs/textInput/TextInput'

export default function SelfIntroduction({ resume, selfIntroState, setIntroState, setUploadImage, uploadImage }) {
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


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIntroState({ ...selfIntroState, [name]: value });
    }
    
    const blurHandler = () => {
        console.log("input blurred")
    }


    return (
        <div style={{ position: 'relative', padding: '0 16px' }}>
            <UploadImage setUploadImage={setUploadImage} uploadImage={uploadImage} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextInput
                    name={'surname'}
                    text={"Surname"}
                    value={selfIntroState.surname}
                    onChange={handleInputChange}
                    setIntroState={setIntroState}
                />

                <TextInput
                    name={'name'}
                    text={"Name"}
                    value={selfIntroState.name}
                    onChange={handleInputChange}
                />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextInput
                    name={'kanaSurname'}
                    text={"Kana Surname"}
                    value={selfIntroState.kanaSurname}
                    onChange={handleInputChange}
                    placeholder={"Ex : タナカ"}
                    onBlur={blurHandler}
                />

                <TextInput
                    name={'kanaName'}
                    text={"Kana Name"}
                    value={selfIntroState.kanaName}
                    onChange={handleInputChange}
                    placeholder={"Ex : タロウ"}
                    onBlur={blurHandler}
                />
            </Box>

            <TextInput
                name={'position'}
                text={"Position at Work"}
                value={selfIntroState.position}
                onChange={handleInputChange}
                placeholder={"Ex : Floor Staff"}
            />

            <TextInput
                name={"phone"}
                text={"Phone Number"}
                value={selfIntroState.phone}
                onChange={handleInputChange}
                placeholder={"Ex : 080-0000-0000"}
            />

            <TextInput
                type={"email"}
                name={'eMail'}
                text={"E-mail"}
                value={selfIntroState.eMail}
                onChange={handleInputChange}
                placeholder={"Ex : name@example.com"}
            />

            <TextInput
                name={"address"}
                text={"Address"}
                value={selfIntroState.address}
                onChange={handleInputChange}
            />

            <TextInput
                name={"busStation"}
                text={"Closest Train/Bus Station"}
                value={selfIntroState.busStation}
                onChange={handleInputChange}
            />

            <TextInput
                name={"transport"}
                text={"Transport"}
                value={selfIntroState.transport}
                onChange={handleInputChange}
            />
        </div>
    )
}
