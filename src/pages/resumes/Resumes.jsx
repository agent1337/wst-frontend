import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box } from "@mui/material";
import API from "../../utils/api";
import { main } from "../../colors"
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
  const [resumesData, setResumesData] = useState([]);

  useEffect(() => {
    API.get(`resumes`)
      .then((res) => {
        let data = res.data;
        setResumesData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab sx={styles.tab} label="Saved Resumes" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.box}>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={styles.box}></Box>
      </TabPanel>
    </Box>
  );
}

