import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { AddBtn } from "styles/pages/CheckList";
import { useDispatch } from "react-redux";
import { addSubTask, getChecklistBySubcategory } from "redux/actions/checklist";
const SubTask = ({ id }) => {
  const [addTaskState, setAddTask] = useState(false);
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const addTask = () => {
    if (!addTaskState) setAddTask(true);
  };
  const onChange = (e) => {
    setValue("subTask", e.target.value);
  };

  const subTaskformData = async (data) => {
    const response = await dispatch(addSubTask(data?.subTask, id));
    if (response.status == 201) {
      dispatch(getChecklistBySubcategory(1));
      setValue("subTask", "");
      setAddTask(false);
    } else {
      alert(response.data.Message);
    }
  };

  return (
    <div>
      {addTaskState ? (
        <form onSubmit={handleSubmit(subTaskformData)}>
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
        </form>
      ) : (
        <AddBtn>
          <Button handleClick={addTask}>ADD</Button>
        </AddBtn>
      )}
    </div>
  );
};

export default SubTask;
