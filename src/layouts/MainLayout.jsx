import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import { Box } from "@mui/material";

import { routes } from "../routing/Routes";

const MainLayout = ({ children }) => {
  const { accessToken, loading } = useSelector((state) => state.profile);

  return accessToken && !loading ? (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  ) : (
    <Redirect to={routes().signup} />
  );
};

export default MainLayout;
