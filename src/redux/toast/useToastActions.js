import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { showToast, hideToast } from "./toast.actions";

export const useToastActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      showToast,
      hideToast,
    },
    dispatch
  );
};
