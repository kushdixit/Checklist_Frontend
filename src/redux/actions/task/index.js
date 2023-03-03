import axioPath from "api/axioPath";
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

export const addNewTask = (data) => async (dispatch) => {
  try {
    const response = await axioPath.post("v1/Task/tasks", data, {
      hideLoader: false,
    });
    return response?.data;
  } catch (ex) {
    return ex.response;
  }
};

export const deleteTask = (id, taskListIds) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const payload = {
    id,
    taskListIds,
  };
  try {
    const response = await fetch(
      "http://112.196.2.202:8080/api/v1/Task/tasks",
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

    return response.status;
  } catch (ex) {
    if (typeof ex == "string") {
      return { ex: { message: ex } };
    }
    return { error: true, data: ex };
  }
};

export const editTask =
  (
    taskName,
    id,
    isHeading,
    ispriority,
    isSubTask,
    taskTag,
    taskBackgroundColor,
    style,
    imageUrl
  ) =>
  async (dispatch) => {
    const payload = {
      id,
      taskName,
      isHeading,
      ispriority,
      isSubTask,
      taskTag,
      taskBackgroundColor,
      style,
      imageUrl,
      // taskTag: taskTag || "",
      // taskBackgroundColor: taskBackgroundColor || "",
      // style: style || "",
      // imageUrl: imageUrl || "",
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

export const TaskDescription = (id, taskDescription) => async () => {
  const payload = {
    id,
    taskDescription,
  };
  try {
    const response = await axioPath.put("v1/Task/taskdescription", payload, {
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

export const deleteSubTask = (id, checkListId) => async (dispatch) => {
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
    dispatch(getChecklistBySubcategory(checkListId));
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

export const editTaskStatus =
  (id, checkListId, ischecked) => async (dispatch) => {
    const payload = {
      id,
      ischecked,
    };
    try {
      const response = await axioPath.put("v1/Task/taskstatus", payload, {
        hideLoader: false,
      });
      dispatch(getChecklistBySubcategory(checkListId));
      return response;
    } catch (ex) {
      return ex.response;
    }
  };

export const editSubTaskStatus =
  (id, checkListId, ischecked) => async (dispatch) => {
    const payload = {
      id,
      ischecked,
    };
    try {
      const response = await axioPath.put("v1/SubTask/subtaskstatus", payload, {
        hideLoader: false,
      });
      dispatch(getChecklistBySubcategory(checkListId));
      return response;
    } catch (ex) {
      return ex.response;
    }
  };

export const SubTaskDescription = (id, subTaskDescription) => async () => {
  const payload = {
    id,
    subTaskDescription,
  };
  try {
    const response = await axioPath.put(
      "v1/SubTask/subtaskdescription",
      payload,
      {
        hideLoader: false,
      }
    );
    return response;
  } catch (ex) {
    return ex.response;
  }
};

export const MoveTask = (taskListIds) => async () => {
  const payload = {
    taskListIds,
  };
  try {
    const response = await axioPath.put("v1/Task/tasksmove", payload, {
      hideLoader: false,
    });
    return response;
  } catch (ex) {
    return ex.response;
  }
};

export const GetImages = () => async () => {
  try {
    const response = await axioPath.put("v1/CheckList/checklistimages", {
      hideLoader: false,
    });
    console.log("response", response);
    return response;
  } catch (ex) {
    return ex.response;
  }
};
