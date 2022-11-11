import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import Button from "components/Button";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/task";
import { editChecklistApi } from "redux/actions/checklist";
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
  ButtonSection,
  ChecklistWrapper,
  EditChecklistButtonWrapper,
  TitleFormSection
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import TaskIcon from "assets/SVG/TaskIcon";
import { useLocation, useNavigate } from "react-router-dom";

const CheckList = () => {
  const [editChecklist, setEditChecklist] = useState(false);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const checklistName = useSelector((state) => state.checklist?.checklistName);
  const checklistId = useSelector((state) => state.checklist?.id);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
  }, []);

  const {
    handleSubmit: submitData,
    control: formControl,
    setValue: checklistValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const {
    handleSubmit: submitChecklist,
    control: checklistFormControl,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    dispatch(getChecklistBySubcategory(state?.id));
  }, []);

  const formFields = () => (
    <FormBody>
      <div>
        <TaskWrapper checkListId={state?.id} />
      </div>
    </FormBody>
  );

  const formData = async (data) => addTaskAPI(data);

  const editChecklistHandler = async (data) => {
    const res = await dispatch(editChecklistApi(data?.checklist, checklistId));
    if (res.error) console.log("error");
    else setEditChecklist(!editChecklist);
  };

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.title,
      checklistMasterId: state?.id,
    };
    const response = await dispatch(addNewTask(data));

    if (response?.error) {
    } else {
      console.log("here");
      checklistValue("title", "");
      dispatch(getChecklistBySubcategory(state?.id));
    }
  };

  const onChange = (e) => {
    setValue("checklist", e.target.value);
  };

  return (
    <Section>
      <BodyWrapper>
        <Navbar search={false} buttonType="Add" />
      </BodyWrapper>
      <TitleFormSection>
      <Title>
        {!editChecklist ? (
          <ChecklistWrapper>
            <TitleSection>
              <h3>{checklistName}</h3>
            </TitleSection>
            <ButtonSection>
              <Button
                handleClick={() => {
                  setEditChecklist(!editChecklist);
                }}
              >
                Edit
              </Button>
            </ButtonSection>
          </ChecklistWrapper>
        ) : (
          <form
            style={{ width: "100%", display: "flex" }}
            onSubmit={submitChecklist(editChecklistHandler)}
          >
            <IconInputField>
              <TextInput
                name="checklist"
                type="text"
                placeholder={checklistName}
                control={checklistFormControl}
                onChange={onChange}
              />
            </IconInputField>
            <EditChecklistButtonWrapper className="submitBtn">
              <Button>Save</Button>
              <Button
                style={{ marginLeft: "0.25rem" }}
                handleClick={(e) => {
                  e.preventDefault();
                  setEditChecklist(!editChecklist);
                }}
              >
                Cancel
              </Button>
            </EditChecklistButtonWrapper>
          </form>
        )}
      </Title>
      </TitleFormSection>
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
