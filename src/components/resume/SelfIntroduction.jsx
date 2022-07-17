import React, { useState } from 'react'
import { Box, Typography, Select, MenuItem, } from '@mui/material'
import UploadImage from '../../custom/buttons/uploadButton/UploadImage'
import TextInput from '../../custom/inputs/textInput/TextInput'
import { danger } from '../../colors'
import SelectDate from './SelectDate'
import { toast } from 'react-toastify';
import { toastStyle } from '../../utils/toastStyle'
import { useDispatch, useSelector } from 'react-redux'
import { setInputError } from '../../redux/alert/alert.actions'

const gender = [{ text: 'male' }, { text: 'female' }]

const Selector = ({
    text,
    data,
    value,
    name,
    onChange
}) => {
    return (
        <>
            <Typography sx={{ fontSize: '12px' }}>
                <span style={{ color: `${danger}` }}>*</span>
                {text}
            </Typography>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                name={name}
                sx={{ width: "100%", marginBottom: '20px' }}
            >
                {data.map((item, index) => {
                    return (
                        <MenuItem key={index} value={item.text}>
                            {item.text}
                        </MenuItem>
                    );
                })}
            </Select>
        </>
    );
};

export default function SelfIntroduction({ selfIntroState, setIntroState, setUploadImage, uploadImage, errors }) {
    const dispatch = useDispatch()
    const isError = useSelector(state => state.alert.error)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setIntroState({ ...selfIntroState, [name]: value });
    }

    const blurHandler = () => {
        console.log(selfIntroState, selfIntroState.kanaName, selfIntroState.kanaSurname)
        let a = /([\u3040-\u30ff]*)/g

        if (!a.test(selfIntroState.kanaSurname)) {
            alert('error use kana')
            dispatch(setInputError(true))
        }
        if (!a.test(selfIntroState.kanaName)) {
            alert('error use kana')
            dispatch(setInputError(true))
        }
    }

    const [nationality, setNationality] = useState([
        { text: "日本" },
        { text: "アイスランド" },
        { text: "アイルランド" },
        { text: "アゼルバイジャン" },
        { text: "アフガニスタン" },
        { text: "アラブ首長国連邦" },
        { text: "アルジェリア" },
        { text: "アルゼンチン" },
        { text: "アルバニア" },
        { text: "アルメニア" },
    ]);

    return (
        <div style={{ position: 'relative', padding: '0 16px' }}>
            <UploadImage setUploadImage={setUploadImage} uploadImage={uploadImage} />

            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <TextInput
                        name={'surname'}
                        text={"Surname"}
                        value={selfIntroState.surname}
                        onChange={handleInputChange}
                        setIntroState={setIntroState}
                        errors={errors.name}
                        half={"48%"}
                    />

                    <TextInput
                        name={'name'}
                        text={"Name"}
                        value={selfIntroState.name}
                        onChange={handleInputChange}
                        errors={errors.name}
                        half={"48%"}
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
                        errors={errors.name}
                        half={"48%"}
                    />

                    <TextInput
                        name={'kanaName'}
                        text={"Kana Name"}
                        value={selfIntroState.kanaName}
                        onChange={handleInputChange}
                        placeholder={"Ex : タロウ"}
                        onBlur={blurHandler}
                        errors={errors.name}
                        half={"48%"}
                    />
                    {isError && <p style={{ border: '1px solid red' }}>error</p>}
                </Box>

                <TextInput
                    name={'position'}
                    text={"Position at Work"}
                    value={selfIntroState.position}
                    onChange={handleInputChange}
                    placeholder={"Ex : Floor Staff"}
                    errors={errors.name}
                />

                <Selector
                    name={'nationality'}
                    text={"Nationality"}
                    value={selfIntroState.nationality}
                    onChange={handleInputChange}
                    data={nationality}
                    errors={errors.name}
                />

                <Selector
                    name={'gender'}
                    text={"Gender"}
                    value={selfIntroState.gender}
                    onChange={handleInputChange}
                    data={gender}
                    errors={errors.name}
                />

                <SelectDate
                    name={"birthday"}
                    value={selfIntroState.birthday}
                    text={"Birthday"}
                    onChange={handleInputChange}
                    errors={errors.name}
                />

                <TextInput
                    name={"phone"}
                    text={"Phone Number"}
                    value={selfIntroState.phone}
                    onChange={handleInputChange}
                    placeholder={"Ex : 080-0000-0000"}
                    errors={errors.name}
                />

                <TextInput
                    type={"email"}
                    name={'eMail'}
                    text={"E-mail"}
                    value={selfIntroState.eMail}
                    onChange={handleInputChange}
                    placeholder={"Ex : name@example.com"}
                    errors={errors.name}
                />

                <TextInput
                    name={"address"}
                    text={"Address"}
                    value={selfIntroState.address}
                    onChange={handleInputChange}
                    errors={errors.name}
                />

                <TextInput
                    name={"busStation"}
                    text={"Closest Train/Bus Station"}
                    value={selfIntroState.busStation}
                    onChange={handleInputChange}
                    errors={errors.name}
                />

                <TextInput
                    name={"transport"}
                    text={"Transport"}
                    value={selfIntroState.transport}
                    onChange={handleInputChange}
                    errors={errors.name}
                />
            </Box>

        </div>
    )
}
