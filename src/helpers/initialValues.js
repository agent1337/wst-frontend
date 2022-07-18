import * as Yup from "yup";

export const initialExperienceValue = {
    motivation: "",
    workHistory: [],
    industries: [],
    experiences: [],
    languages: [],
    certifications: [],
    awards: [],
    schools: [],
    selfPromotion: "",
    skills: [],
    interests: [],
    files: [],
    whenStart: "",
}

const emailRegExp =
    "^[A-Za-z0-9][A-Za-z0-9.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*.)+[A-Za-z]*$";

const telRegExp = /^([+]?[0-9\s-\\]{8,25})*$/i;
let regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;

export const formValidation = Yup.object({
    surname: Yup.string().required("Please fill the highlighted fields"),
    name: Yup.string().required("Please fill the highlighted fields"),
    kanaSurname: Yup.string()
        .matches(regex, "Please use Kana typeface")
        .required("Required"),
    kanaName: Yup.string()
        .matches(regex, "Please use Kana typeface")
        .required("Required"),
    nationality: Yup.string().required("Please fill the highlighted fields"),
    gender: Yup.string().required("Please fill the highlighted fields"),
    birthday: Yup.string().required("Please fill the highlighted fields"),
    phone: Yup.string()
        .matches(telRegExp, "Phone number is not valid")
        .required("Please fill the highlighted fields"),
    eMail: Yup.string("Enter your email")
        .matches(emailRegExp, "email must be a valid email")
        .required("Please fill the highlighted fields"),
    address: Yup.string().required("Please fill the highlighted fields"),
    busStation: Yup.string().required("Please fill the highlighted fields"),
    transport: Yup.string().required("Please fill the highlighted fields"),
});