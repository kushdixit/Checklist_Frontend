import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getChecklistBySubcategory,
  deleteTask,
  editTask,
} from "redux/actions/checklist";
import { TaskList } from "styles/pages/CheckList";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
import SubTask from "./SubTask";
import SubListWrapper from "./SubList";

const TaskWrapper = () => {
  const taskData = useSelector((state) => state.checklist);
  return taskData?.tasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, index) => <Task task={task} index={index} />);
};

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const [taskEdit, setTaskEdit] = useState(false);

  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
  };

  const onChange = (e) => {
    setValue("update", e.target.value);
  };

  const updateTask = async (data) => {
    const response = await dispatch(editTask(data?.update, task.id));
    if (response.status == 204) {
      dispatch(getChecklistBySubcategory(1));
      setValue("update", "");
      setTaskEdit(false);
    } else {
      alert(response.data.Message);
    }
  };
  return (
    <TaskList key={index}>
      {taskEdit ? (
        <div>
          <form onSubmit={handleSubmit(updateTask)}>
            <TextInput
              name="update"
              control={control}
              type="text"
              placeholder="Update Task"
              onChange={onChange}
            />
            <div className="submitBtn">
              <Button>Submit</Button>
            </div>
          </form>
          <SubTask id={task.id} />
        </div>
      ) : (
        <Controller
          name={"task" + index}
          control={control}
          render={({ field }) => (
            <CheckboxInput
              className="checkBox"
              label={task?.taskName}
              {...field}
            />
          )}
        />
      )}
      <button
        onClick={() => {
          deleteHandler(task.id);
        }}
      >
        delete
      </button>
      <button onClick={() => setTaskEdit(true)}>edit</button>
      <div style={{ "padding-left": "90px" }}>
        <SubListWrapper index={index} task={task} />
      </div>
    </TaskList>
  );
};

export default TaskWrapper;
