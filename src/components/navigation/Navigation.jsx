import React from 'react';
import { Box, Typography } from "@mui/material";
import { Link, useLocation, useHistory } from "react-router-dom";
import { main, white, text } from '../../colors';

const dekstop = [
    {
        link: "Resume List",
        src: "/resumes",
    },
    {
        link: "Settings",
        src: "/settings",
    },
    {
        link: "Help",
        src: "/help",
    },
];

const mobile = [
    {
        link: "Create New Resume",
        src: "/create",
    },
    {
        link: "Resume List",
        src: "/resumes",
    },
    {
        link: "Settings",
        src: "/settings",
    },
    {
        link: "Help",
        src: "/help",
    },
    {
        link: "Log out",
        src: "/",
    },
]

const styles = {
    navigation: {
        display: "flex",
    },
    mobile: {
        display: 'none',
        "@media (max-width: 949px)": {
            display: 'block',
            position: 'absolute',
            background: `${white}`,
            width: 'calc(100% - 100px)',
            zIndex: 4,
            boxShadow: '0px 0px 8px  rgba(0, 0, 0, 0.16)',
            borderRadius: '2px',
            padding: '20px 50px',
        },
    },
    dekstop: {
        display: "flex",
        "@media (max-width: 949px)": {
            display: 'none',
        }
    }
};

export default function Navigation({ setIsShow, isShow }) {
    let location = useLocation();
    let history = useHistory()
    return (
        <Box sx={styles.navigation}>
            <Box sx={styles.mobile}>
                {mobile.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            to={link.src}
                            className="link"
                            style={{ marginRight: "10px", }}
                        >
                            <Typography
                                sx={link.link === 'Create New Resume' ? { fontSize: '14px', color: `${main}`, fontWeight: '700' } : { fontSize: '14px', color: `${text}` }}
                                onClick={() => {
                                    history.push(link.src)
                                    setIsShow(!isShow)
                                }}
                            >

                                {link.link}
                            </Typography>
                        </Link>
                    )
                })}
            </Box>
            <Box sx={styles.dekstop}>
                {dekstop.map((link, index) => {
                    return (
                        <Link
                            key={index}
                            to={link.src}
                            className="link"
                            style={{ marginRight: "10px", }}
                        >
                            <Typography
                                style={
                                    location.pathname === `${link.src}`
                                        ? {
                                            paddingBottom: '8px',
                                            borderBottom: `1px solid ${main}`,
                                            color: `${main}`, fontSize: '14px',
                                        }
                                        : { borderBottom: "8px solid transparent", fontSize: '14px' }
                                }
                            >
                                {link.link}
                            </Typography>
                        </Link>
                    );
                })}
            </Box>
        </Box>
    )
}
