import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import AuthInput from "../../custom/inputs/authInput/AuthInput"
import SeparatorLine from "../../custom/separatorLine/SeparatorLine";
import { Link, } from "react-router-dom"
import { grey, main, text } from "../../colors";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/auth/auth.service";

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    content: {
        padding: "0 20px",
        width: "410px",
        margin: "0 auto",
        "@media (max-width: 600px)": {
            width: "auto",
        },
    },
    text: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "19px",
        textAlign: "center",
        letterSpacing: "0.02em",
        color: `${text}`,
    },
    imgBox: {
        width: "283px",
        height: "244px",
        margin: "0 auto",
        marginBottom: "20px",
    },
    textBox: {
        display: "block",
        textAlign: "center",
        color: `${text}`,
        marginBottom: "20px",
    },
    title: {
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "19px",
        marginBottom: "10px",
    },
    subtitle: {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "0.01em",
    },
    button: {
        width: "100%",
        marginTop: '-13px',
        borderRadius: "4px",
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "16px",
        letterSpacing: "1px",
        padding: "11px 0",
        textTransform: "inherit",
        color: "#fff",
        background: "#29CC8F",
        "&:hover": {
            background: "#29CC8F",
        },
    },
    link: {
        display: 'block',
        marginTop: '25px',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '16px',
        letterSpacing: '0.01em',
        color: '#29CC8F',
        textAlign: 'center',
    },
    logo: {
        display: 'flex'
    },
    caption: {
        color: `${main}`
    }
}

const Head = () => {
    return (
        <Box sx={styles.logo}>
            <img src="../../logo/logo.svg" alt="logo" />
            <Box>
                <Typography sx={styles.caption}>WelcomeHR</Typography>
                <Typography sx={styles.caption}>Part-time Resume</Typography>
            </Box>
        </Box>
    )
}

const ImageBox = ({ type }) => {
    return (
        <Box sx={styles.imgBox}>
            {type === "first" ? (
                <img
                    src="../../auth/forgot-password.png"
                    style={{ width: "inherit", height: "inherit" }}
                    alt=""
                />
            ) : (
                    <img
                        src="../../auth/hand-out.png"
                        style={{ width: "inherit", height: "inherit" }}
                        alt=""
                    />
                )}
        </Box>
    );
};

export default function ForgotPassword() {
    const [isSubmit, setIsSubmit] = useState(false);
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const onSubmit = async () => {
        setIsSubmit(!isSubmit);
        let data = {
            email: email
        }

        dispatch(forgotPassword(data))
    };

    return (
        <>
            <Grid container sx={styles.container}>
                <Grid sx={styles.content}>
                    {!isSubmit ? (
                        <Grid sx={{ width: "inherit" }}>
                            <ImageBox type={"first"} />
                            <Box>
                                <Box sx={styles.textBox}>
                                    <Typography sx={styles.title}>Forgot your Password? </Typography>
                                    <Typography sx={styles.subtitle}>Enter your email and we’ll send you a new password.</Typography>
                                </Box>

                                <Box sx={{ position: "relative", marginBottom: "25px" }}>
                                    <input
                                        name="email"
                                        type="email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                        placeholder={"Email"}
                                        style={{ 
                                            paddingLeft: '10px', 
                                            width: 'calc(100% - 16px)',
                                            borderRadius: "3px",
                                            padding: "10px 8px",
                                            outlineColor: `${main}`,
                                            marginBottom: '20px',
                                            border: `1px solid ${grey}`
                                         }}
                                    />
                                   
                                </Box>
                                <Button sx={styles.button} onClick={onSubmit}>
                                    Submit
                                </Button>
                            </Box>
                            <Box>
                                <SeparatorLine />
                                <Link to="/" style={styles.link}>Create New Account</Link>
                            </Box>
                        </Grid>
                    ) : (
                            <Grid sx={{ width: "inherit" }}>
                                <ImageBox type={"second"} />
                                <Typography sx={styles.text}>We have sent you a new password.</Typography>
                                <Typography sx={styles.text}>Please check your email for detail instructions.</Typography>
                                <Link to="/signin" style={styles.link}>Log In</Link>
                            </Grid>
                        )}
                </Grid>
            </Grid>
        </>
    )
}
