import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { getMe, saveToken, removeToken } from "./profile.actions";

export const useProfileActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      getMe,
      saveToken,
      removeToken,
    },
    dispatch
  );
};
