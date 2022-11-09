import axioPath from "api/axioPath";
import { SET_CHECKLIST } from "redux/actions/action_types";

export const getChecklist = () => async (dispatch) => {
  try {
    const response = await axioPath.get("v1/CheckList/checklists", {
      hideLoader: false,
    });
    dispatch({ type: SET_CHECKLIST, payload: response.data });
  } catch (ex) {
    console.log(ex);
  }
};

export const deleteChecklist = (id) => async (dispatch) => {
  const payload = {
    id,
  };
  try {
    const response = await fetch(
      "http://112.196.2.202:8080/api/v1/CheckList/checklists",
      {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(payload),
      }
    );
    dispatch(getChecklist());
  } catch (ex) {}
};

export const addNewChecklist =
  (checklistName, templateId, email) => async (dispatch) => {
    console.log(email);
    const payload = {
      checklistName,
      templateId,
      email,
    };
    try {
      const response = await axioPath.post("v1/CheckList/checklists", payload, {
        hideLoader: false,
      });
      dispatch(getChecklist());
      return { error: false, message: response?.statusText };
    } catch (ex) {
      return { error: true, message: ex?.response?.data?.Message };
    }
  };

export const editChecklistApi = (checklistName, id) => async (dispatch) => {
  const payload = {
    id,
    checklistName,
  };
  try {
    const response = await axioPath.put("v1/CheckList/checklists", payload, {
      hideLoader: false,
    });
    console.log(response);
    // dispatch({ type: SET_CHECKLIST, payload: response.data });
  } catch (ex) {
    console.log(ex);
  }
};

export const addTempChecklist = (checklistName, email) => async (dispatch) => {
  console.log(email);
  const payload = {
    checklistName,
    email,
  };
  try {
    const response = await axioPath.post("v1/CheckList/checklists", payload, {
      hideLoader: false,
    });
    dispatch(getChecklist());
    return { error: false, message: response?.statusText };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};
