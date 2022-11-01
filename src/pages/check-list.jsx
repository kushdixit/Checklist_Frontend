import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/task";
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
import { useLocation } from "react-router-dom";

const CheckList = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const checklistName = useSelector((state) => state.checklist.checklistName);

  const {
    handleSubmit: submitData,
    control: formControl,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    dispatch(getChecklistBySubcategory(state.id));
  }, []);

  const formFields = () => (
    <FormBody>
      <div>
        <TaskWrapper checkListId={state.id} />
      </div>
    </FormBody>
  );

  const formData = async (data) => addTaskAPI(data);

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.title,
      checklistMasterId: state.id,
    };
    const response = await dispatch(addNewTask(data));

    if (response?.error) {
    } else {
      setValue("title", "");
      dispatch(getChecklistBySubcategory(state.id));
    }
  };

  return (
    <Section>
      <BodyWrapper>
        <Navbar search={false} buttonType="Add" />
      </BodyWrapper>
      <Title>
        <TitleSection>
          <h3>{checklistName}</h3>
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
