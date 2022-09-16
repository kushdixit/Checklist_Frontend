import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

import { getChecklistBySubcategory, addNewTask } from "redux/actions/checklist";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import Button from "components/Button";

import {
  BodyContainer,
  FormBody,
  BodyWrapper,
  TaskList,
  AddBtn,
  Form,
  SubmitBtn,
} from "styles/pages/CheckList";

const CheckList = () => {
  const dispatch = useDispatch();
  let [getResponse, setResponse] = useState();
  let [addTaskState, setAddTask] = useState(false);

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
    console.log("response==", response);
    if (response?.error) {
      console.log("response==", response?.data?.message);
    } else {
      setResponse(response?.data);
    }
  };

  const subList = (index) =>
    getResponse?.tasks[index]?.subTasks.map((task, subIndex) => {
      return (
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
      );
    });

  const lists = getResponse?.tasks?.map((task, index) => {
    return (
      <TaskList key={index}>
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
        <div style={{ "padding-left": "90px" }}>{subList(index)}</div>
      </TaskList>
    );
  });
  const formFields = () => {
    return (
      <FormBody>
        <BodyWrapper>{lists}</BodyWrapper>
      </FormBody>
    );
  };

  const addTask = () => {
    if (!addTaskState) setAddTask(true);
  };

  const formData = async (data) => {
    addTaskAPI(data);
  };

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.taskName,
      subCategoryId: 1,
    };
    const response = await dispatch(addNewTask(data));
    if (response?.error) {
      console.log("response==", response?.data?.message);
    } else {
      setAddTask(false);
      setValue("taskName", "");
      fetchData();
    }
  };
  const onChange = (e) => {
    setValue("taskName", e.target.value);
  };
  const attachList = () => {
    return (
      <Form onSubmit={handleSubmit(formData)}>
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
          name="taskName"
          control={control}
          type="text"
          placeholder="Enter Task name"
          onChange={onChange}
        />
        <SubmitBtn className="submitBtn">
          <Button>Submit</Button>
        </SubmitBtn>
      </Form>
    );
  };
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
