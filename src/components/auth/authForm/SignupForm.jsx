import React, { useState } from 'react'
import { Grid } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import { styles } from './authForm.styles';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthFooter from '../authFooter/AuthFooter';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from '../../context/base';
import { useHistory } from 'react-router-dom';
import { signup, gotwitter } from '../../../api/auth';

const SignupForm = () => {
    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    async function onSubmitForm(e) {
        e.preventDefault();
        const register = await signup(user.email, user.password)
        if (!register) return
        history.push("/resumes");
    }

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
                    <FormText label={'Get yourself started'} caption={'Sign Up'} />

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

                        <a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657226551&redirect_uri=http://localhost:3000/signin&state=wst&scope=profile, openid">
                            <button style={{ ...styles.button, ...styles.lineButton, }}>
                                Sign-up with LINE
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


// debounce validation or onBlur
// server 
// make with redux 