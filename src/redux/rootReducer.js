import { combineReducers } from 'redux';
import { alertReducer } from './alert/alert.reducers';
import { authReducer } from './auth/auth.reducer';
import { profileReducer } from './profile/profile.reducer';
import { resumeReducer } from './resume/resume.reducers';

const rootReducer = combineReducers({
	alert: alertReducer,
	resume: resumeReducer,
	auth: authReducer,
	profile: profileReducer,
})

export default rootReducer;