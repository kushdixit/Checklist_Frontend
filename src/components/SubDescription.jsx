import React from "react";
import { useForm, useWatch } from "react-hook-form";
import TextArea from "components/FormElements/TextArea";
import { useDispatch } from "react-redux";
import {
  SubTaskDescription,
  getChecklistBySubcategory,
} from "redux/actions/task";
import "react-toastify/dist/ReactToastify.css";
import { IconInputField, AddSubTask } from "styles/pages/Task";
import { notification } from "antd";

const SubDescription = ({
  id,
  setAddSubTask,
  addSubTask,
  checkListId,
  setAddDescription,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const watchData = useWatch({ control });

  const taskDescriptionHandler = async () => {
    if (watchData?.taskDescription) {
      const response = await dispatch(
        SubTaskDescription(id, watchData?.taskDescription)
      );
      if (response.status === 204) {
        openNotification("Added");
        dispatch(getChecklistBySubcategory(checkListId));
        setAddDescription(false);
        setAddSubTask(!addSubTask);
      } else openNotification(response.data.Message);
    }
  };

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  return (
    <AddSubTask>
      {contextHolder}
      <form
        style={{ display: "flex", padding: "10px 40px" }}
        onSubmit={handleSubmit(taskDescriptionHandler)}
      >
        <IconInputField>
          <TextArea
            name="taskDescription"
            type="text"
            placeholder="Add Sub Description"
            control={control}
            className="checklistDescription"
            autoComplete="off"
            handlekeyPress={(e) =>
              e.key === "Enter" && taskDescriptionHandler()
            }
          />
        </IconInputField>
      </form>
    </AddSubTask>
  );
};

export default SubDescription;
