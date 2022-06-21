import React, { useState } from 'react'
import { Grid } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import { styles } from './authForm.styles';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthFooter from '../authFooter/AuthFooter';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    async function onSubmitForm(e) {
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

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

                        <button style={{ ...styles.button, ...styles.twitButton }}
                        // onClick={loginTwitter}
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