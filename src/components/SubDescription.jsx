import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
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

  const taskDescriptionHandler = async (data) => {
    if (data?.taskDescription) {
      const response = await dispatch(
        SubTaskDescription(id, data?.taskDescription)
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
          <TextInput
            name="taskDescription"
            type="text"
            placeholder="Add Sub Description"
            control={control}
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
