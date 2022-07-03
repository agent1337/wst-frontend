import { combineReducers } from 'redux';
import { alertReducer } from './alert/alert.reducers';

const rootReducer = combineReducers({
	alert: alertReducer,
})

export default rootReducer;