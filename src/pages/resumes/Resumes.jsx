import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getOtherResumeData,
  getOwnResumeData,
} from "redux/resume/resume.actions";
import CreateResumeButton from "../../custom/buttons/createResume/CreateResumeButton";
import OwnResumeCard from "components/resumeCard/ownCardResume/OwnResumeCard";
import OtherResumeCard from "components/resumeCard/otherCardResume/OtherResumeCard";
import { main } from "colors";
import { styles } from "./resumes.styles";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ marginTop: "27px" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Resumes() {
  const [value, setValue] = useState(0);
  const resumes = useSelector((state) => state.resume.resumes);
  const othersResumes = useSelector((state) => state.resume.othersResumes);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getOwnResumeData());
    dispatch(getOtherResumeData());
  }, []);

  return (
    <Box sx={styles.container}>
      <Tabs
        textColor="primary"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { backgroundColor: `${main}` },
        }}
      >
        <Tab sx={styles.tab} label="My Resumes" {...a11yProps(0)} />
        <Tab sx={styles.tab} label="Other’s Resume" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={styles.box}>
          <CreateResumeButton />

          {resumes &&
            resumes.map((item, index) => {
              return (
                <OwnResumeCard item={item} key={index} resumesData={resumes} />
              );
            })}
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={styles.box}>
          {othersResumes !== null ? (
            othersResumes.map((item, index) => {
              return (
                <OtherResumeCard
                  item={item}
                  key={index}
                  resumesData={resumes}
                />
              );
            })
          ) : (
            <Typography>
              Other user resume that you saved can be accessed here.
            </Typography>
          )}
        </Box>
      </TabPanel>
    </Box>
  );
}
