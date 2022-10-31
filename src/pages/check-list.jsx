import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/checklist";
import { BodyContainer, FormBody } from "styles/pages/CheckList";
import TaskWrapper from "../components/Task";
import {
  BodyWrapper,
  Title,
  Section,
  TitleSection,
  TaskSection,
  MainTaskSection,
  IconInputField,
  TaskIconImage,
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import TaskIcon from "assets/SVG/TaskIcon";

const CheckList = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit: submitData,
    control: formControl,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    dispatch(getChecklistBySubcategory(1));
  }, []);

  const formFields = () => (
    <FormBody>
      <div>
        <TaskWrapper />
      </div>
    </FormBody>
  );

  const formData = async (data) => addTaskAPI(data);

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.title,
      checklistMasterId: 1,
    };
    const response = await dispatch(addNewTask(data));

    if (response?.error) {
    } else {
      setValue("title", "");
      dispatch(getChecklistBySubcategory(1));
    }
  };

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
        </MainTaskSection>
      </TaskSection>
      <BodyContainer>{formFields()}</BodyContainer>
    </Section>
  );
};
export default CheckList;
