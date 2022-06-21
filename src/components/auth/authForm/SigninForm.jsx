import React, { useState } from 'react'
import { Grid, Typography } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import { styles } from './authForm.styles';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthCheckbox from '../authCheckbox/AuthCheckbox';
import AuthFooter from '../authFooter/AuthFooter';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/auth.actions';

const SigninForm = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    async function onSubmitForm(e) {
        e.preventDefault();
        dispatch(login(user.email, user.password))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

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
                        // onClick={loginTwitter}
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
