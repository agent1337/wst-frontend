import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { showToast, hideToast } from "./alert.actions";

export const useAlertActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      showToast,
      hideToast,
    },
    dispatch
  );
};
