import React from "react";
import { Redirect } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const { accessToken, loading } = useSelector((state) => state.profile);

  return accessToken && !loading ? (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  ) : (
    <Redirect to="/" />
  );
};

export default MainLayout;
