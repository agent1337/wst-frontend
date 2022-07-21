import { combineReducers } from "redux";

import { authReducer } from "./auth/auth.reducer";
import { profileReducer } from "./profile/profile.reducer";
import { resumeReducer } from "./resume/resume.reducer";
import { toastReducer } from "./toast/toast.reducers";

const rootReducer = combineReducers({
  toast: toastReducer,
  auth: authReducer,
  profile: profileReducer,
  resume: resumeReducer,
});

export default rootReducer;
