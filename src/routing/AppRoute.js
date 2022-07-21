import React from "react";
import { Route } from "react-router-dom";

export const AppRoute = ({ Component, Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...rest} {...props}>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />
  );
};
