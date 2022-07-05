import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProfile, getResumes } from "../../redux/profile/profile.service";

const styles = {
    title: {
        marginRight: "10px",
    },
};

export default function Avatar() {
    const history = useHistory();
    const dispatch = useDispatch()
    const email = useSelector(state => state.profile.email)

    useEffect(() => {
        dispatch(getProfile())
    }, []);

    let tmp = `${email}`;
    let getMail = tmp.split("@");
    let userEmail = getMail[0];

    const logout = () => {
        window.localStorage.removeItem("accessToken");
        window.localStorage.removeItem("user");
        history.push("/signin");
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={styles.title}>
                    Welcome,
          {userEmail ? userEmail : null}
                </Typography>
                <img src="../../auth/Icon.png" alt="" onClick={logout} />
            </Box>
        </Box>
    )
}
