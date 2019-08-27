import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import registrationReducer from './registrationReducer';
import tokenReducer from './tokenReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  alert: alertReducer,
  user: userReducer,
  registrations: registrationReducer,
  token: tokenReducer,
  todolist: todoReducer,
  
});