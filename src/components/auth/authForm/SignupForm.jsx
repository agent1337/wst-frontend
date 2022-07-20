import React, { useState, useEffect } from 'react'
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
import { showToast } from '../../../redux/alert/alert.actions';
import { styles } from './authForm.styles';

const SignupForm = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: false,
        password: false
    })

    useEffect(() => {
        if (token) {
            history.push("/resumes")
        }
    }, [token])

    async function onSubmitForm(e) {
        e.preventDefault();

        if (!isFormValid(user.email, user.password)) return

        await dispatch(signup(user.email, user.password))
    }

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
        let isValid = true;
        let errorsData = {}

        if (!user.email) {
            errorsData.email = true;
            isValid = false;
            dispatch(showToast('Email is not correct'))
        }

        if (!user.password || user.password.length < 8) {
            errorsData.password = true;
            isValid = false;
            dispatch(showToast('Password is too short'))
        }

        setErrors(errorsData);
        return isValid;
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
            })
            .catch((error) => dispatch(showToast(error.data.message)))
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
                            href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657233949&redirect_uri=https://1721-93-76-142-93.eu.ngrok.io/https://1721-93-76-142-93.eu.ngrok.io/auth/line/signin&state=wst&scope=profile, openid"
                        >
                            <button style={{ ...styles.button, ...styles.lineButton, }}>
                                Login with LINE
                            </button>
                        </a>

                        <AuthFooter type={"dekstop"} />
                    </Grid>
                </Grid>
            </Grid>
            <AuthFooter type={"mobile"} />
        </>
    )
}

export default SignupForm