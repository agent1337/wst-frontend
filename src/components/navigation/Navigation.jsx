import React from 'react';
import { Box, Typography } from "@mui/material";
import { Link, useLocation, useHistory } from "react-router-dom";
import { main, text } from '../../colors';
import { styles } from './navigation.styles';

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
