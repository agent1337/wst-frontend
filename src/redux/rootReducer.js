import { combineReducers } from 'redux';
import { alertReducer } from './alert/alert.reducers';
import { authReducer } from './auth/auth.reducer';
import { profileReducer } from './profile/profile.reducer';
import { resumeReducer } from './resume/resume.reducer'

const rootReducer = combineReducers({
	alert: alertReducer,
	auth: authReducer,
	profile: profileReducer,
	resume: resumeReducer,
})

export default rootReducer;