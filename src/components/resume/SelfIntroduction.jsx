import React, { useEffect } from "react";
import { Box } from "@mui/material";
import UploadImage from "../../custom/buttons/uploadButton/UploadImage";
import TextInput from "../../custom/inputs/textInput/TextInput";
import SelectDate from "./SelectDate";
import { useDispatch, useSelector } from "react-redux";
import Selector from "./Selector";
import { getNationality } from "redux/resume/resume.actions";
import { styles } from "./index.styles";

const gender = [{ text: "male" }, { text: "female" }];

export default function SelfIntroduction({
  setUploadImage,
  uploadImage,
  values,
  handleChange,
  errors,
}) {
  const dispatch = useDispatch();
  const nationality = useSelector((state) => state.resume.nationality);

  useEffect(() => {
    dispatch(getNationality());
  }, [dispatch]);

  return (
    <div style={styles.block}>
      <UploadImage setUploadImage={setUploadImage} uploadImage={uploadImage} />

      <Box sx={styles.innerBlock}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextInput
            name={"surname"}
            text={"Surname"}
            value={values.surname}
            onChange={handleChange}
            errors={errors.surname}
            half={"49%"}
          />

          <TextInput
            name={"name"}
            text={"Name"}
            value={values.name}
            errors={errors.name}
            onChange={handleChange}
            half={"49%"}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextInput
            name={"kanaSurname"}
            text={"Kana Surname"}
            value={values.kanaSurname}
            errors={errors.kanaSurname}
            onChange={handleChange}
            placeholder={"Ex : タナカ"}
            half={"49%"}
          />

          <TextInput
            name={"kanaName"}
            text={"Kana Name"}
            value={values.kanaName}
            errors={errors.kanaName}
            onChange={handleChange}
            placeholder={"Ex : タロウ"}
            half={"49%"}
          />
        </Box>

        <TextInput
          name={"position"}
          text={"Position at Work"}
          value={values.position}
          onChange={handleChange}
          placeholder={"Ex : Floor Staff"}
        />

        <Selector
          name={"nationality"}
          text={"Nationality"}
          value={values.nationality}
          onChange={handleChange}
          data={nationality}
          errors={errors.nationality}
        />

        <Selector
          name={"gender"}
          text={"Gender"}
          value={values.gender}
          onChange={handleChange}
          data={gender}
          errors={errors.gender}
        />

        <SelectDate
          name={"birthday"}
          value={values.birthday}
          text={"Birthday"}
          onChange={handleChange}
          errors={errors.birthday}
        />

        <TextInput
          name={"phone"}
          text={"Phone Number"}
          value={values.phone}
          onChange={handleChange}
          placeholder={"Ex : 080-0000-0000"}
          errors={errors.phone}
        />

        <TextInput
          type={"email"}
          name={"eMail"}
          text={"E-mail"}
          value={values.eMail}
          onChange={handleChange}
          placeholder={"Ex : name@example.com"}
          errors={errors.eMail}
        />

        <TextInput
          name={"address"}
          text={"Address"}
          value={values.address}
          onChange={handleChange}
          errors={errors.address}
        />

        <TextInput
          name={"busStation"}
          text={"Closest Train/Bus Station"}
          value={values.busStation}
          onChange={handleChange}
          errors={errors.busStation}
        />

        <TextInput
          name={"transport"}
          text={"Transport"}
          value={values.transport}
          onChange={handleChange}
          errors={errors.transport}
        />
      </Box>
    </div>
  );
}
