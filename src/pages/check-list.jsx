import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import Button from "components/Button";
import {
  getChecklistBySubcategory,
  addNewTask,
  deleteTask,
  editTask,
} from "redux/actions/checklist";
import {
  BodyContainer,
  FormBody,
  TaskList,
  AddBtn,
} from "styles/pages/CheckList";

const CheckList = () => {
  const dispatch = useDispatch();
  const [getResponse, setResponse] = useState();
  const [addTaskState, setAddTask] = useState(false);
  const [taskEdit, setTaskEdit] = useState(false);

  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await dispatch(getChecklistBySubcategory(1));
    if (response?.error) {
    } else {
      // API Success Response
      setResponse(response?.data);
    }
  };

  // Sub Task List attached
  const subList = (index) =>
    getResponse?.tasks[index]?.subTasks.map((task, subIndex) => (
      <div key={subIndex}>
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
      </div>
    ));

  const deleteHandler = () => {
    console.log("adsa", deleteTask);
    dispatch(deleteTask());
  };
  const editHandler = () => {
    setTaskEdit(true);
    const res = dispatch(editTask());
    if (res) setTaskEdit(false);
  };
  // Task List attached
  const lists = getResponse?.tasks?.map((task, index) => (
    <TaskList key={index}>
      {taskEdit ? (
        <div>dshuf</div>
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
      <button onClick={deleteHandler}>delete</button>
      <button onClick={editHandler}>edit</button>
      <div style={{ "padding-left": "90px" }}>{subList(index)}</div>
    </TaskList>
  ));

  const formFields = () => (
    <FormBody>
      <div>{lists}</div>
    </FormBody>
  );

  const addTask = () => {
    if (!addTaskState) setAddTask(true);
  };

  const formData = async (data) => addTaskAPI(data);

  const addTaskAPI = async (val) => {
    console.log(getResponse?.tasks.length);
    let data = {
      taskName: val.title,
      // subCategoryId: getResponse?.tasks.length + 1 || 1,
      subCategoryId: 2,
    };
    const response = await dispatch(addNewTask(data));

    if (response?.error) {
    } else {
      // API Success Response
      setAddTask(false);
      setValue("title", "");
      fetchData();
    }
  };
  const onChange = (e) => {
    setValue("title", e.target.value);
  };
  const attachList = () => (
    <form onSubmit={handleSubmit(formData)}>
      <div>
        <Controller
          name="newTask"
          control={control}
          render={({ field }) => (
            <CheckboxInput className="checkBox" {...field} />
          )}
        />
      </div>
      <TextInput
        name="title"
        control={control}
        type="text"
        placeholder="Enter Task name"
        onChange={onChange}
      />
      <div className="submitBtn">
        <Button>Submit</Button>
      </div>
    </form>
  );

  return (
    <BodyContainer>
      <AddBtn>
        <Button handleClick={addTask}>ADD</Button>
      </AddBtn>
      {addTaskState && attachList()}
      {formFields()}
    </BodyContainer>
  );
};
export default CheckList;
