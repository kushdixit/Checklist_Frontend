import { combineReducers } from "redux";
import loader from "redux/reducers/loader";
import auth from "redux/reducers/auth";
import checklist from "redux/reducers/checklist";
import task from "redux/reducers/task";
import Template from "redux/reducers/template";
import editable from "redux/reducers/editable";
import search from "redux/reducers/searched";

export default combineReducers({
  loader,
  auth,
  checklist,
  task,
  Template,
  editable,
  search,
});
