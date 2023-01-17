import React from "react";
import { useForm, useWatch } from "react-hook-form";
import TextArea from "components/FormElements/TextArea";
import { useDispatch } from "react-redux";
import { TaskDescription, getChecklistBySubcategory } from "redux/actions/task";
import "react-toastify/dist/ReactToastify.css";
import { IconInputField, AddSubTask } from "styles/pages/Task";
import { notification } from "antd";

const AddDescription = ({
  id,
  setAddSubTask,
  addSubTask,
  checkListId,
  setAddDescription,
}) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const watchData = useWatch({ control });

  const taskDescriptionHandler = async () => {
    console.log(watchData);
    if (watchData?.taskDescription) {
      const response = await dispatch(
        TaskDescription(id, watchData?.taskDescription)
      );
      if (response.status === 204) {
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
            placeholder="Add Description"
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

export default AddDescription;
