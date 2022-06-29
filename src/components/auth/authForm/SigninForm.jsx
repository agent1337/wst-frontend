import React, { useState } from 'react'
import { Grid, Typography } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import { styles } from './authForm.styles';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthCheckbox from '../authCheckbox/AuthCheckbox';
import AuthFooter from '../authFooter/AuthFooter';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from '../../context/base';
import { useHistory } from 'react-router-dom';
import { signin, gotwitter } from '../../../api/auth';

const SigninForm = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    async function onSubmitForm(e) {
        e.preventDefault();
        const login = await signin(user.email, user.password)
        if (!login) return
        history.push("/resumes");
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const goWithTwitter = () => {
        const provider = new TwitterAuthProvider();
        signInWithPopup(authentication, provider)
            .then((res) => {
                let data = {
                    name: res._tokenResponse.screenName,
                    externalId: res.user.uid
                }

                const twit = gotwitter(data)
                if (!twit) return

                history.push("/resumes");
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <Grid item xs={12} sm={12} md={6} sx={{ ...styles.authform }}>
                <Grid sx={styles.fieldGrid}>
                    <FormText label={'Welcome back'} caption={'Login to your account'} />

                    <form name="form" onSubmit={onSubmitForm}>
                        <AuthInput
                            type={"text"}
                            name={"email"}
                            onChange={handleInputChange}
                            value={user.email}
                            placeholder={"Email"}
                        />
                        <AuthInput
                            type={"password"}
                            name={"password"}
                            onChange={handleInputChange}
                            value={user.password}
                            placeholder={"Password"}
                        />
                        <a href="/forgot-password">
                            <Typography sx={styles.forgotPassword}>
                                Forgot Password?
                            </Typography>
                        </a>

                        <button style={{ ...styles.button, ...styles.login }}>Login</button>

                        <AuthCheckbox
                        // isRememberMe={isRememberMe}
                        // setIsRememberMe={setIsRememberMe}
                        />
                    </form>

                    <Grid sx={styles.content}>
                        <SeparatorLine />

                        <button style={{ ...styles.button, ...styles.twitButton }}
                            onClick={goWithTwitter}
                        >
                            Sign-in with Twitter
                        </button>

                        <a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657226551&redirect_uri=http://localhost:3000/signin&state=wst&scope=profile, openid">
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

export default SigninForm
