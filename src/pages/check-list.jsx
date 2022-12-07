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
  TaskSection,
  TaskCreationSection,
  IconInputField,
  EditChecklistButtonWrapper,
  TitleFormSection,
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const CheckList = () => {
  const { state } = useLocation();
  const [editChecklist, setEditChecklist] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checklistName = useSelector((state) => state.checklist?.checklistName);
  const taskEditable = useSelector((state) => state.editable?.isEditable);
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
        <TaskWrapper
          checkListId={state?.id}
          showEditable={state?.showEditable}
        />
      </div>
    </FormBody>
  );

  const formData = async (data) => addTaskAPI(data);

  const editChecklistHandler = async (data) => {
    const res = await dispatch(editChecklistApi(data?.checklist, checklistId));
    setValue("checklist", "");
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
        <Navbar
          search={false}
          buttonType="Add"
          showEditable={state?.showEditable}
        />
      </BodyWrapper>
      <div>
        <TitleFormSection>
          <Title>
            <form
              style={{ width: "100%", display: "flex" }}
              onSubmit={submitChecklist(editChecklistHandler)}
            >
              <IconInputField>
                <TextInput
                  name="checklist"
                  type="text"
                  autoComplete="off"
                  defaultValue={
                    checklistName?.includes("Your Checkslist")
                      ? "Untitled"
                      : checklistName
                  }
                  placeholder={
                    checklistName?.includes("Your Checkslist")
                      ? "Untitled"
                      : checklistName
                  }
                  control={checklistFormControl}
                  onChange={onChange}
                  disabled={!taskEditable}
                  handlekeyPress={(e) =>
                    e.key === "Enter" && editChecklistHandler()
                  }
                />
              </IconInputField>
            </form>
          </Title>
        </TitleFormSection>
        {taskEditable && (
          <TaskSection>
            <TaskCreationSection>
              <form
                style={{ width: "100%", display: "flex" }}
                onSubmit={submitData(formData)}
              >
                <IconInputField>
                  <TextInput
                    name="title"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter Task Name"
                    control={formControl}
                    handlekeyPress={(e) => formData()}
                  />
                </IconInputField>
              </form>
            </TaskCreationSection>
          </TaskSection>
        )}
        <BodyContainer>{formFields()}</BodyContainer>
      </div>
    </Section>
  );
};
export default CheckList;
