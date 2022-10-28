import axioPath from "api/axioPath";
import axios from "axios";
import { UPDATE_DATA } from "redux/actions/action_types";

export const getChecklistBySubcategory = (Checklistid) => (dispatch) =>
  axioPath
    .get("v1/Task/GetChecklistByCheckList/" + Checklistid)
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

export const deleteTask = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const payload = {
    id,
  };
  try {
    const response = await fetch(
      "http://112.196.2.202:8080/api/v1/Task/tasks",
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload),
      }
    );
    dispatch(getChecklistBySubcategory(1));

    // const response = await axios.delete("http://112.196.2.202:8080/api/v1/Task/tasks", config, payload, {
    //     hideLoader: false,
    //   });
    //   console.log("response", response);
    //   dispatch({ type: UPDATE_DATA, payload: response.data
    // });
    // return { error: false, data: response.data };
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const editTask = (taskName, id) => async (dispatch) => {
  const payload = {
    id,
    taskName,
  };
  try {
    const response = await axioPath.put("v1/Task/tasks", payload, {
      hideLoader: false,
    });
    return response;
  } catch (ex) {
    return ex.response;
  }
};

//SubTask APi's
export const addSubTaskApi = (subTaskName, taskId) => async (dispatch) => {
  const payload = {
    taskId,
    subTaskName,
  };
  try {
    const response = await axioPath.post("v1/SubTask/subtasks", payload, {
      hideLoader: false,
    });
    return response;
  } catch (ex) {
    return ex.response;
  }
};

export const deleteSubTask = (id) => async (dispatch) => {
  const payload = {
    id,
  };
  try {
    const response = await fetch(
      "http://112.196.2.202:8080/api/v1/SubTask/subtasks",
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
    dispatch(getChecklistBySubcategory(1));
  } catch (ex) {}
};

export const editSubTask = (subTaskName, id) => async (dispatch) => {
  const payload = {
    id,
    subTaskName,
  };
  try {
    const response = await axioPath.put("v1/SubTask/subtasks", payload, {
      hideLoader: false,
    });
    return response;
  } catch (ex) {
    return ex.response;
  }
};
