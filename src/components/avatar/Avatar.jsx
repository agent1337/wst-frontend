import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/profile/profile.service";
import { LOGOUT } from "../../redux/auth/auth.constants";

const styles = {
    title: {
        marginRight: "10px",
    },
};

export default function Avatar() {
    const history = useHistory();
    const dispatch = useDispatch()
    const user = useSelector(state => state.profile.user)

    useEffect(() => {
        dispatch(getProfile())
    }, []);

    let tmp = `${user.email}`;
    let getMail = tmp.split("@");
    let userEmail = getMail[0];

    const logout = () => {
        dispatch({ type: LOGOUT })
        window.localStorage.removeItem("accessToken");
        history.push("/signin");
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={styles.title}>
                    Welcome,
          {userEmail ? userEmail : null}
                </Typography>
                <button onClick={() => logout()}>
                    <img src="../../auth/Icon.png" alt="icon" />
                </button>

            </Box>
        </Box>
    )
}
