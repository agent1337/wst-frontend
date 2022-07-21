import React, { useEffect } from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routing/AppRoute";
import { useDispatch, useSelector } from "react-redux";
import { routesData } from "./routing/RoutesData";
import Toast from "./custom/toast/Toast";
import { getMe, saveToken } from "./redux/profile/profile.actions";

export default function App() {
  const dispatch = useDispatch();
  const notify = useSelector((state) => state.alert.list);

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
