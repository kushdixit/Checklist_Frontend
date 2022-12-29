import axioPath from "api/axioPath";
import { SET_CHECKLIST } from "redux/actions/action_types";
import { getChecklistBySubcategory } from "redux/actions/task/index";

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
    dispatch(getChecklistBySubcategory(id));

    return { error: false, message: response?.status };
    // dispatch({ type: SET_CHECKLIST, payload: response.data });
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};

export const addTempChecklist =
  (checklistName, checklistDescription, email) => async (dispatch) => {
    const payload = {
      checklistName,
      checklistDescription,
      templateId: -99,
      email,
    };
    try {
      const response = await axioPath.post("v1/CheckList/checklists", payload, {
        hideLoader: false,
      });
      response?.data && dispatch(getChecklistBySubcategory(response?.data));
      return {
        error: false,
        message: response?.statusText,
        id: response?.data,
      };
    } catch (ex) {
      return {
        error: true,
        message: ex?.response?.data?.errors?.ChecklistDescription[0],
      };
    }
  };

export const ChecklistCompleted = (id, ischecked) => async (dispatch) => {
  const payload = {
    id,
    ischecked,
  };
  try {
    await axioPath.put("v1/CheckList/checklistsStatusReset", payload, {
      hideLoader: false,
    });
    return { error: false };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};

export const CopyChecklist = (id, email) => async (dispatch) => {
  const payload = {
    id,
    email,
  };
  try {
    await axioPath.post("v1/CheckList/checklistscopy", payload, {
      hideLoader: false,
    });
    return { error: false };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};

export const DescriptionChecklist =
  (checklistdescription, id) => async (dispatch) => {
    console.log(id, checklistdescription);
    const payload = {
      id,
      checklistdescription,
    };
    try {
      const response = await axioPath.put(
        "v1/Checklist/checklistdescription",
        payload,
        {
          hideLoader: false,
        }
      );
      dispatch(getChecklistBySubcategory(id));
      return { error: false, message: response?.status };
    } catch (ex) {
      return { error: true, message: ex?.response?.data?.Message };
    }
  };
