import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import { main } from "../../colors"
import { styles } from "./resumes.styles";
import CreateResumeButton from "../../custom/buttons/createResume/CreateResumeButton";
import OwnResumeCard from "../../components/resumeCard/ownCardResume/OwnResumeCard";
import { useDispatch, useSelector } from "react-redux";
import { getOtherResumeData, getOwnResumeData } from "../../redux/profile/profile.service";
import OtherResumeCard from "../../components/resumeCard/otherCardResume/OtherResumeCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ color: 'red' }}
    >
      {value === index && <Box sx={{ marginTop: '27px' }}>{children}</Box>}
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
  const resumes = useSelector(state => state.profile.resumes)
  const othersResumes = useSelector(state => state.profile.othersResumes)
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(getOwnResumeData())
    dispatch(getOtherResumeData())
  }, [])

  console.log(othersResumes, 'othersResumes')
  return (
    <Box sx={styles.container}>
      <Box>
        <Tabs
          textColor="primary"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: `${main}`, },
          }}
        >
          <Tab sx={styles.tab} label="My Resumes" {...a11yProps(0)} />
          <Tab sx={styles.tab} label="Other’s Resume" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.box}>
          <CreateResumeButton />

          {resumes &&
            resumes.map((item, index) => {
              return (
                <OwnResumeCard
                  item={item}
                  key={index}
                  resumesData={resumes}
                />
              );
            })}
           
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={styles.box}>
        {othersResumes &&
            othersResumes.map((item, index) => {
              return (
                <OtherResumeCard
                  item={item}
                  key={index}
                  resumesData={resumes}
                />
              );
            })}
        </Box>
      </TabPanel>
    </Box>
  );
}

