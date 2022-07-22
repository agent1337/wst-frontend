import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { routes } from "routing/Routes";

import { Box, Typography } from "@mui/material";
import { styles } from "./navigation.styles";
import { main, text } from "colors";

const dekstop = [
  {
    link: "Resume List",
    path: routes().resumes,
  },
  {
    link: "Settings",
    path: "/settings",
  },
  {
    link: "Help",
    path: "/help",
  },
];

const mobile = [
  {
    link: "Create New Resume",
    path: routes().createResume,
  },
  {
    link: "Resume List",
    path: routes().resumes,
  },
  {
    link: "Settings",
    path: "/settings",
  },
  {
    link: "Help",
    path: "/help",
  },
  {
    link: "Log out",
    path: routes().signin,
  },
];

export default function Navigation({ setIsShow, isShow }) {
  let location = useLocation();
  let history = useHistory();
  return (
    <Box sx={styles.navigation}>
      <Box sx={styles.mobile}>
        {mobile.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.path}
              className="link"
              style={{ marginRight: "10px" }}
            >
              <Typography
                sx={
                  link.link === "Create New Resume"
                    ? { fontSize: "14px", color: `${main}`, fontWeight: "700" }
                    : { fontSize: "14px", color: `${text}` }
                }
                onClick={() => {
                  history.push(link.path);
                  setIsShow(!isShow);
                }}
              >
                {link.link}
              </Typography>
            </Link>
          );
        })}
      </Box>
      <Box sx={styles.dekstop}>
        {dekstop.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.path}
              className="link"
              style={{ marginRight: "10px" }}
            >
              <Typography
                style={
                  location.pathname === `${link.path}`
                    ? {
                        paddingBottom: "8px",
                        borderBottom: `1px solid ${main}`,
                        color: `${main}`,
                        fontSize: "14px",
                      }
                    : {
                        borderBottom: "8px solid transparent",
                        fontSize: "14px",
                      }
                }
              >
                {link.link}
              </Typography>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}
