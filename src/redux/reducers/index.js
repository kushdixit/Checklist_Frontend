import { combineReducers } from "redux";
import loader from "redux/reducers/loader";
import auth from "redux/reducers/auth";
import checklist from "redux/reducers/checklist";
import task from "redux/reducers/task";
import Template from "redux/reducers/template";

export default combineReducers({
  loader,
  auth,
  checklist,
  task,
  Template,
});
