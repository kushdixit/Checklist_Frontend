import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { addSubTaskApi, getChecklistBySubcategory } from "redux/actions/task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BodyWrapper,
  Title,
  Section,
  TitleSection,
  TaskSection,
  MainTaskSection,
  IconInputField,
  TaskIconImage,
  SubTaskSection,
  SubSection,
  AddSubTask,
} from "styles/pages/Task";

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
        style={{  display: "flex" }}
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
<<<<<<< HEAD
    </div>
=======
      {/* <form onSubmit={handleSubmit(subTaskformData)}>
        <div>
          <Controller
            name="subTaskCheckBox"
            control={control}
            render={({ field }) => (
              <CheckboxInput className="checkBox" {...field} />
            )}
          />
        </div>
        <TextInput
          name="subTask"
          control={control}
          type="text"
          placeholder="Enter Sub Task name"
          onChange={onChange}
        />
        <div className="submitBtn">
          <Button>Submit</Button>
        </div>
      </form> */}
    </AddSubTask>
>>>>>>> 40c5730ce195e56d29f30ef6bd5b934f4d6b294f
  );
};

export default SubTask;
