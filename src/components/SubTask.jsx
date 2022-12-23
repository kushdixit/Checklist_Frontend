import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import { useDispatch } from "react-redux";
import { addSubTaskApi, getChecklistBySubcategory } from "redux/actions/task";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconInputField, AddSubTask } from "styles/pages/Task";
import { notification } from "antd";

const SubTask = ({ id, setAddSubTask, addSubTask, checkListId }) => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const subTaskformData = async (data) => {
    if (data?.subTask) {
      const response = await dispatch(addSubTaskApi(data?.subTask, id));
      if (response.status === 201) {
        dispatch(getChecklistBySubcategory(checkListId));
        setValue("subTask", "");
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
        onSubmit={handleSubmit(subTaskformData)}
      >
        <IconInputField>
          <TextInput
            name="subTask"
            type="text"
            placeholder="Add Sub Task"
            control={control}
            handlekeyPress={(e) => e.key === "Enter" && subTaskformData()}
          />
        </IconInputField>
      </form>
    </AddSubTask>
  );
};

export default SubTask;
