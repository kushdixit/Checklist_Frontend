import axioPath from "api/axioPath";
import { UPDATE_DATA } from "redux/actions/action_types";

export const getChecklistBySubcategory = (subcategoryId) => (dispatch) =>
  axioPath
    .get("v1/Task/GetChecklistBySubcategory/" + subcategoryId)
    .then((response) => {
      dispatch({ type: UPDATE_DATA, payload: response.data });
      return { error: false, data: response.data };
    })
    .catch((ex) => {
      if (typeof ex == "string") {
        return { ex: { message: ex } };
      }
      return { error: true, data: ex };
    });

export const addNewTask = (data) => (dispatch) =>
  axioPath
    .post("v1/Task/tasks", data, {
      hideLoader: false,
    })
    .then((response) => {
      dispatch({ type: UPDATE_DATA, payload: response.data });
      return { error: false, data: response.data };
    })
    .catch((ex) => {
      if (typeof ex == "string") {
        return { ex: { message: ex } };
      }
      return { error: true, data: ex };
    });
