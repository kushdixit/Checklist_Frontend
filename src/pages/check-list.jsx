import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import Button from "components/Button";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/checklist";
import { BodyContainer, FormBody, AddBtn } from "styles/pages/CheckList";
import TaskWrapper from "../components/Task";
import Task from "../pages/task";
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
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import Colon from "assets/SVG/Colon";
import TaskIcon from "assets/SVG/TaskIcon";
import AlertModal from "components/AlertModal";
import SubTaskIcon from "assets/SVG/SubTaskIcon";

const CheckList = () => {
  const dispatch = useDispatch();
  const [addTaskState, setAddTask] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleab(data) {
    setModal(data);
  }
  const {
    handleSubmit: submitData,
    formState: { errors },
    control: formControl,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

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
        {/* <Task /> */}
        <TaskWrapper />
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
      checklistMasterId: 1,
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
    <Section>
      <BodyWrapper>
        <Navbar search={false} buttonType="Add" />
      </BodyWrapper>
      <Title>
        <TitleSection>
          <h3>Title</h3>
          <h4>Description</h4>
        </TitleSection>
      </Title>
      <TaskSection>
        <MainTaskSection>
          <TaskIconImage>
            <TaskIcon />
          </TaskIconImage>
          <form
            style={{ width: "100%", display: "flex" }}
            onSubmit={submitData(formData)}
          >
            <IconInputField>
              <TextInput
                name="title"
                type="text"
                placeholder="Enter Task Name"
                control={formControl}
              />
            </IconInputField>
            <div className="submitBtn">
              <Button>Save</Button>
            </div>
          </form>
          {/* {attachList()} */}
          {/* <Colon onClick={() => toggleab(true)} /> */}
        </MainTaskSection>
        {/* <AlertModal isOpen={modal} togglefunction={toggleab} modalType="task" /> */}
        {/* <SubTaskSection>
          <SubTaskIcon />
        </SubTaskSection> */}
      </TaskSection>
      <BodyContainer>
        {/* <AddBtn>
          <Button handleClick={addTask}>ADD</Button>
        </AddBtn> */}
        {/* {addTaskState && attachList()} */}
        {formFields()}
      </BodyContainer>
    </Section>
  );
};
export default CheckList;
