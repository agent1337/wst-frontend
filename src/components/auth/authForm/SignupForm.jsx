import React, { useState } from 'react'
import { Grid, } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthFooter from '../authFooter/AuthFooter';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from '../../context/base';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup, gotwitter } from '../../../redux/auth/auth.service';
import { getProfile, getResumes } from '../../../redux/profile/profile.service';
import { SET_ALERT } from '../../../redux/alert/alert.constants';
import { ToastContainer, toast } from 'react-toastify';
import { toastStyle } from '../../../utils/toastStyle';
import { styles } from './authForm.styles';

const SignupForm = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const isLogined = useSelector(state => state.auth.isLogined)
    const alert = useSelector(state => state.alert.alert)

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let clonedErrors = Object.assign({}, errors);
        if (!e.target.value) {
            clonedErrors[name] = true;
        } else {
            clonedErrors[name] = false;
        }
        setErrors(clonedErrors);
        setUser({ ...user, [name]: value });
    };

    const isFormValid = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let isValid = true;
        let errorsData = {}

        if (!user.email || regex.test(user.email) === false) {
            errorsData.email = true;
            isValid = false;
            dispatch({
                type: SET_ALERT,
                payload: 'Email is not correct'
            })
        }

        if (!user.password || user.password.length < 8) {
            errorsData.password = true;
            isValid = false;
            dispatch({
                type: SET_ALERT,
                payload: 'Password is too short'
            })
        }

        setErrors(errorsData);
        return isValid;
    }

    async function onSubmitForm(e) {
        e.preventDefault();

        if (!isFormValid()) {
            return toast(alert, toastStyle);
        }

        dispatch(signup(user.email, user.password))

        if (alert !== "") {
            return toast(alert, toastStyle);
        }

        if (isLogined) {
            dispatch(getProfile())
            dispatch(getResumes())
            history.push("/resumes")
        }
    }

    const goWithTwitter = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(authentication, provider)
            .then((res) => {
                let data = {
                    name: res._tokenResponse.screenName,
                    externalId: res.user.uid
                }

                dispatch(gotwitter(data))

                if (alert !== "") {
                    return toast(alert, toastStyle);
                }

                if (isLogined) {
                    dispatch(getProfile())
                    history.push("/resumes")
                }
            })
            .catch((err) => console.log(err))
    }


    const line = () => { }

    return (
        <>
            <Grid item xs={12} sm={12} md={6} sx={{ ...styles.authform }}>
                <Grid sx={styles.fieldGrid}>
                    <FormText label={'Get yourself started'} caption={'Sign Up'} />

                    <form name="form" onSubmit={onSubmitForm}>
                        <AuthInput
                            type={"text"}
                            name={"email"}
                            onChange={handleInputChange}
                            value={user.email}
                            placeholder={"Email"}
                            errors={errors}
                        />
                        <AuthInput
                            type={"password"}
                            name={"password"}
                            onChange={handleInputChange}
                            value={user.password}
                            placeholder={"Password"}
                            errors={errors}
                            minLength={8}
                        />

                        <button style={{ ...styles.button, ...styles.login }}>Sign Up</button>
                    </form>

                    <Grid sx={styles.content}>
                        <SeparatorLine />

                        <button
                            style={{ ...styles.button, ...styles.twitButton }}
                            onClick={goWithTwitter}
                        >
                            Sign-up with Twitter
                        </button>

                        <a
                            onClick={line}
                            href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657233949&redirect_uri=http://localhost:4040/auth/line/signin&state=wst&scope=profile, openid"
                        >
                            <button style={{ ...styles.button, ...styles.lineButton, }}>
                                Login with LINE
                            </button>
                        </a>

                        <AuthFooter type={"dekstop"} />
                    </Grid>
                </Grid>
                <ToastContainer />
            </Grid>
            <AuthFooter type={"mobile"} />
        </>
    )
}

export default SignupForm