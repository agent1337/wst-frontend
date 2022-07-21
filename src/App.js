import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, BrowserRouter } from "react-router-dom";
import { getMe, saveToken } from "redux/profile/profile.actions";

import Toast from "./custom/toast/Toast";

import { AppRoute } from "./routing/AppRoute";
import { routesData } from "./routing/RoutesData";

export default function App() {
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.toast.list);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    dispatch(saveToken(accessToken));
    dispatch(getMe());
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
