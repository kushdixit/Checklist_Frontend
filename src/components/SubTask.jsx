import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { addSubTaskApi, getChecklistBySubcategory } from "redux/actions/task";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconInputField, AddSubTask } from "styles/pages/Task";

const SubTask = ({ id, setAddSubTask, addSubTask, checkListId }) => {
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const subTaskformData = async (data) => {
    const response = await dispatch(addSubTaskApi(data?.subTask, id));
    if (response.status === 201) {
      dispatch(getChecklistBySubcategory(checkListId));
      setValue("subTask", "");
      setAddSubTask(!addSubTask);
    } else {
      toast(response.data.Message);
    }
  };

  return (
    <AddSubTask>
      <form
        style={{ display: "flex" }}
        onSubmit={handleSubmit(subTaskformData)}
      >
        <IconInputField>
          <TextInput
            name="subTask"
            type="text"
            placeholder="Add Sub Task"
            control={control}
          />
        </IconInputField>
        <div className="submitBtn">
          <Button>Save</Button>
        </div>
      </form>
    </AddSubTask>
  );
};

export default SubTask;
