import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, BrowserRouter } from "react-router-dom";
import { useProfileActions } from "redux/profile/useProfileActions";

import Toast from "./custom/toast/Toast";

import { AppRoute } from "./routing/AppRoute";
import { routesData } from "./routing/RoutesData";

export default function App() {
  const { getMe, saveToken } = useProfileActions();
  const notify = useSelector((state) => state.toast.list);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    saveToken(accessToken);
    getMe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {routesData.map((route) => (
            <AppRoute {...route} key={route.path} />
          ))}
        </Switch>
      </BrowserRouter>
      <Toast toastlist={notify} />
    </>
  );
}
