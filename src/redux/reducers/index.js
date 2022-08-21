import { combineReducers } from 'redux';
import loader from 'redux/reducers/loader'
import auth  from 'redux/reducers/auth';
export default combineReducers({
  loader,  
  auth
})
