import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import API from '../../utils/api';
import { useHistory } from 'react-router-dom';

const styles = {
    title: {
        marginRight: "10px",
    },
};

export default function Avatar() {
    const history = useHistory();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        API.get(`/auth/me`)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(userData, "user data");

    let tmp = `${userData.email}`;
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
