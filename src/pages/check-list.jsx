import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "components/FormElements/TextInput";
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
  TitleFormSection,
  DescriptionWrapper,
  DescriptionContainer,
  DescriptionIconInputField,
} from "styles/pages/Task";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const CheckList = () => {
  const { state } = useLocation();
  const [editChecklist, setEditChecklist] = useState(false);
  const [checklistName, setChecklistName] = useState();
  const [checklistId, setChecklistId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxChecklistName = useSelector(
    (state) => state.checklist?.checklistName
  );
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const reduxchecklistId = useSelector((state) => state.checklist?.id);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
    dispatch(getChecklistBySubcategory(state?.id));
  }, []);

  useEffect(() => {
    setChecklistName(reduxChecklistName);
    setChecklistId(reduxchecklistId);
  }, [reduxChecklistName]);

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
        <Description taskEditable={taskEditable} />
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
                    placeholder="Enter New Task"
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

const Description = ({ taskEditable }) => {
  const {
    handleSubmit: submitChecklist,
    control: checklistFormControl,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const DescriptionHandler = (data) => console.log(data);
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        <form
          style={{ width: "100%", display: "flex" }}
          onSubmit={submitChecklist(DescriptionHandler)}
        >
          <DescriptionIconInputField>
            <TextInput
              name="checklist"
              type="text"
              defaultValue="Description"
              placeholder="Description"
              control={checklistFormControl}
              onChange={onChange}
              disabled={!taskEditable}
              handlekeyPress={(e) => e.key === "Enter" && DescriptionHandler()}
            />
          </DescriptionIconInputField>
        </form>
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};
