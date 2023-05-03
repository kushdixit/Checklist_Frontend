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
    const res = await fetch(
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
    return res;
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
    return { error: false, message: response?.status };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};

export const addTempChecklist =
  (checklistName, checklistDescription, email) => async (dispatch) => {
    const payload = {
      checklistName,
      checklistDescription,
      email,
      taskName: "",
    };
    try {
      const response = await axioPath.post("v1/CheckList/checklists", payload, {
        hideLoader: false,
      });
      return {
        error: false,
        message: response?.statusText,
        id: response?.data,
      };
    } catch (ex) {
      return {
        error: true,
        message: ex?.response?.data?.errors?.TaskName[0] || "Error",
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
    return { error: true, message: ex?.response?.data?.Errors[0] };
  }
};

export const CopyChecklist = (id, email) => async (dispatch) => {
  const payload = {
    id,
    email,
  };
  try {
    const res = await axioPath.post("v1/CheckList/checklistscopy", payload, {
      hideLoader: false,
    });
    return { error: false, data: res };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Message };
  }
};

export const DescriptionChecklist =
  (checklistdescription, id) => async (dispatch) => {
    const payload = {
      id,
      checklistdescription: checklistdescription || "",
    };
    try {
      const response = await axioPath.put(
        "v1/Checklist/checklistdescription",
        payload,
        {
          hideLoader: false,
        }
      );
      return { error: false, message: response?.status };
    } catch (ex) {
      return { error: true, message: ex?.response?.data?.Message };
    }
  };

export const MoveChecklist = (id, templateId) => async (dispatch) => {
  const payload = {
    id,
    templateId,
  };
  try {
    const res = await axioPath.put("v1/CheckList/checklistmove", payload, {
      hideLoader: false,
    });
    return { error: false };
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Errors[0] };
  }
};

export const PinChecklist = (id, pinned) => async (dispatch) => {
  const payload = {
    id,
    pinned,
  };
  try {
    const res = await axioPath.put(
      "v1/CheckList/checklistPinnedUpdate",
      payload,
      {
        hideLoader: false,
      }
    );
    return res;
  } catch (ex) {
    return { error: true, message: ex?.response?.data?.Errors[0] };
  }
};

export const SearchList = (filterType) => async (dispatch) => {
  try {
    const res = await axioPath.get(
      `v1/CheckList/checklistsearch${filterType}`,
      {
        hideLoader: false,
      }
    );
    return res;
  } catch (ex) {
    return { error: true, message: ex };
  }
};

export const saveListByUser = (id, email) => async (dispatch) => {
  const payload = {
    id,
    email,
  };
  try {
    const res = await axioPath.put(
      "v1/CheckList/checklistCopyUpdateEmail",
      payload,
      {
        hideLoader: false,
      }
    );
    return res;
  } catch (ex) {
    return { error: true, message: ex };
  }
};
