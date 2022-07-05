import React, { useState } from 'react'
import { Grid, Box, Button } from "@mui/material";
import FormText from '../authText/FormText';
import AuthInput from '../../../custom/inputs/authInput/AuthInput';
import { styles } from './authForm.styles';
import SeparatorLine from '../../../custom/separatorLine/SeparatorLine';
import AuthFooter from '../authFooter/AuthFooter';
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import { authentication } from '../../context/base';
import { useHistory } from 'react-router-dom';
import { signup, gotwitter } from '../../../api/auth';
import Popup from '../../modal/Popup';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '85vh',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SignupForm = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // async function onSubmitForm(e) {
    //     e.preventDefault();
    //     login()
    // }
    const login = () => {  
        const register = signup(user.email, user.password)
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

   
    const line = () => { }

    return (
        <>
            <Grid item xs={12} sm={12} md={6} sx={{ ...styles.authform }}>
                <Grid sx={styles.fieldGrid}>
                    <FormText label={'Get yourself started'} caption={'Sign Up'} />

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

                        <button style={{ ...styles.button, ...styles.login }} onClick={() => setIsOpen(true)}>Sign Up</button>

                    <Grid sx={styles.content}>
                        <SeparatorLine />

                        <button
                            style={{ ...styles.button, ...styles.twitButton }}
                            onClick={goWithTwitter}
                        >
                            Sign-up with Twitter
                        </button>

                        <Popup handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                            <Box sx={style}>
                                <iframe src="https://mailchi.mp/welcomehr/riyoukiyaku" style={{ height: '85%', width: "100%", border: '1px solid #EAEAEA' }} title="policy" ></iframe>
                                <Box sx={{ margin: '30px 0px', display: 'flex', justifyContent: 'space-between', }}>
                                    <Button sx={styles.policyDisagree}>Disagree</Button>
                                    <Button sx={styles.policyAgree} onClick={() => login()}>Agree and Next</Button>
                                </Box>
                            </Box>
                        </Popup>

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
            </Grid>
            <AuthFooter type={"mobile"} />
        </>
    )
}

export default SignupForm


// debounce validation or onBlur
// server 
// make with redux 