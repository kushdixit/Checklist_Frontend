import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useDispatch } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
} from "redux/actions/checklist";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";

const SubList = ({ subIndex, task, index }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const taskdeleteHandler = async (id) => {
    const res = await dispatch(deleteSubTask(id));
  };
  const onChange = (e) => {
    setValue("updateSubTask", e.target.value);
  };
  const updateSubTaskHandler = async (data) => {
    const response = await dispatch(editSubTask(data?.updateSubTask, task.id));
    if (response.status == 204) {
      dispatch(getChecklistBySubcategory(1));
      setValue("updateSubTask", "");
      setSubTaskEdit(false);
    } else {
      alert(response.data.Message);
    }
  };
  return (
    <div key={subIndex}>
      {subTaskEdit ? (
        <div>
          <form onSubmit={handleSubmit(updateSubTaskHandler)}>
            <TextInput
              name="updateSubTask"
              control={control}
              type="text"
              placeholder="Update Task"
              onChange={onChange}
            />
            <div className="submitBtn">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Controller
            name={"subTask" + index + "" + subIndex}
            control={control}
            render={({ field }) => (
              <CheckboxInput
                className="checkBox"
                label={task?.subTaskName}
                {...field}
              />
            )}
          />
          <button onClick={() => setSubTaskEdit(true)}>edit</button>
          <button
            onClick={() => {
              taskdeleteHandler(task.id);
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};

const SubListWrapper = ({ index, task }) => {
  return task.subTasks
    .reverse()
    .map((task, subIndex) => (
      <SubList task={task} subIndex={subIndex} index={index} />
    ));
};

export default SubListWrapper;
