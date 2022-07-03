import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import API from '../../utils/api';

const styles = {
    title: {
        marginRight: "10px",
    },
};

export default function Avatar() {
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

    return (
        <Box sx={{ position: 'relative' }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={styles.title}>
                    Welcome,
          {userEmail ? userEmail : null}
                </Typography>
                <img src="../../auth/Icon.png" alt="" />
            </Box>
        </Box>
    )
}
