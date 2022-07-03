import { combineReducers } from 'redux';
// import { alertReducer } from './alert/alert.reducers';
import { resumeReducer } from './resume/resume.reducers';

const rootReducer = combineReducers({
	// alert: alertReducer,
	resume: resumeReducer,
})

export default rootReducer;