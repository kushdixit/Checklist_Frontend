import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import Button from "components/Button";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/checklist";
import { BodyContainer, FormBody, AddBtn } from "styles/pages/CheckList";
import TaskWrapper from "../components/Task";

const CheckList = () => {
  const dispatch = useDispatch();
  const [addTaskState, setAddTask] = useState(false);
  const taskData = useSelector((state) => state.checklist);

  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getChecklistBySubcategory(1));
  };

  const formFields = () => (
    <FormBody>
      <div>
        <TaskWrapper taskData={taskData} />
      </div>
    </FormBody>
  );

  const addTask = () => {
    if (!addTaskState) setAddTask(true);
  };

  const formData = async (data) => addTaskAPI(data);

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.title,
      subCategoryId: 1,
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
