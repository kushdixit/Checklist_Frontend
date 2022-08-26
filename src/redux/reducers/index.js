import { combineReducers } from 'redux';
import loader from 'redux/reducers/loader'
import auth  from 'redux/reducers/auth';
import checklist from 'redux/reducers/checklist';
export default combineReducers({
  loader,  
  auth,
  checklist
})
