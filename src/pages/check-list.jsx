import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "components/FormElements/TextInput";
import { getChecklistBySubcategory, addNewTask } from "redux/actions/task";
import { DescriptionChecklist } from "redux/actions/checklist/index";
import { editChecklistApi } from "redux/actions/checklist";
import { BodyContainer, FormBody } from "styles/pages/CheckList";
import TaskWrapper from "components/Task";
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
} from "styles/pages/Task";
import Navbar from "components/Navbar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CardColon from "components/CardColon";
import { showAppLoader, hideAppLoader } from "redux/actions/loader";

const CheckList = () => {
  const { id: pathId } = useParams();
  const { state } = useLocation();
  const [editChecklist, setEditChecklist] = useState(false);
  const [checklistName, setChecklistName] = useState();
  const [checklistId, setChecklistId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const ChecklistDetail = useSelector((state) => state.checklist);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/sign-in");
    dispatch(getChecklistBySubcategory(pathId));
  }, []);

  useEffect(() => {
    setChecklistName(ChecklistDetail?.checklistName);
    setChecklistId(ChecklistDetail?.id);
  }, [ChecklistDetail?.checklistName]);

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
        <TaskWrapper checkListId={pathId} showEditable={state?.showEditable} />
      </div>
    </FormBody>
  );

  const formData = (data) => addTaskAPI(data);

  const editChecklistHandler = async (data) => {
    const res =
      (await data?.checklist) &&
      dispatch(editChecklistApi(data?.checklist, checklistId));
    if (!res.error) setEditChecklist(!editChecklist);
  };

  const addTaskAPI = async (val) => {
    let data = {
      taskName: val.title,
      checklistMasterId: pathId,
    };
    const response = await dispatch(addNewTask(data));

    if (response?.error) {
    } else {
      checklistValue("title", "");
      dispatch(getChecklistBySubcategory(pathId));
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
                  defaultValue={ChecklistDetail?.checklistName}
                  placeholder={ChecklistDetail?.checklistName}
                  control={checklistFormControl}
                  onChange={onChange}
                  disabled={!taskEditable}
                  handlekeyPress={(e) =>
                    e.key === "Enter" && editChecklistHandler()
                  }
                />
              </IconInputField>
            </form>
            <CardColon item={ChecklistDetail} cardType="checklist" />
          </Title>
        </TitleFormSection>
        <Description taskEditable={taskEditable} checklistId={checklistId} />
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
                    handlekeyPress={(e) => e.key === "Enter" && formData()}
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

const Description = ({ taskEditable, checklistId }) => {
  const [editChecklist, setEditChecklist] = useState(false);
  const ChecklistDetail = useSelector((state) => state.checklist);
  const dispatch = useDispatch();

  const { handleSubmit: submitChecklist, control: checklistFormControl } =
    useForm({
      mode: "onSubmit",
      reValidateMode: "onBlur",
    });

  const DescriptionHandler = async (data) => {
    const res =
      (await data?.checklist) &&
      dispatch(DescriptionChecklist(data?.checklist, checklistId));
    if (res.error) console.log("error");
    else setEditChecklist(!editChecklist);
  };
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <DescriptionWrapper>
      <DescriptionContainer>
        <form
          style={{
            width: "100%",
            display: "flex",
            padding: "0px 60px !important",
          }}
          onSubmit={submitChecklist(DescriptionHandler)}
        >
          <IconInputField style={{ paddingRight: "4.5rem" }}>
            <TextInput
              style={{
                color: taskEditable ? "black" : "grey",
              }}
              name="checklist"
              type="text"
              defaultValue={
                ChecklistDetail?.checklistDescription || "Description"
              }
              placeholder={
                ChecklistDetail?.checklistDescription || "Description"
              }
              control={checklistFormControl}
              onChange={onChange}
              disabled={!taskEditable}
              handlekeyPress={(e) => e.key === "Enter" && DescriptionHandler()}
            />
          </IconInputField>
        </form>
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};
