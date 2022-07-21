import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  signin,
  signup,
  signInWithTwitter,
  forgotPassword,
  logout,
} from "./auth.actions";

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      signin,
      signup,
      signInWithTwitter,
      forgotPassword,
      logout,
    },
    dispatch
  );
};
