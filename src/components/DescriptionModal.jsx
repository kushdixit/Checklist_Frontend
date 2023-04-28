import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  IconInputFieldTextArea,
  MainTaskSectionForm,
  EditorSection,
  EditorTask,
  DescriptionFormButton,
} from "styles/pages/Description";
import { useDispatch, useSelector } from "react-redux";
import { TaskDescription, getChecklistBySubcategory } from "redux/actions/task";
import { useParams } from "react-router-dom";

const DescriptionModal = ({ task, checklistDiscriptionId }) => {
  const { id: pathId } = useParams();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const TaskDetail = ChecklistDetail?.tasks?.filter(
    (item) => item.id === checklistDiscriptionId
  );
  const [checkListDescriptionValue, setChecklistdescriptionValue] = useState(
    TaskDetail[0]?.taskDescription ? TaskDetail[0]?.taskDescription : ""
  );

  const dispatch = useDispatch();
  const { setValue } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });

  useEffect(() => {
    setValue("rememberMe", task?.ischecked);
  }, [task?.ischecked]);

  const DescriptionHandler = async () => {
    const res = await dispatch(
      TaskDescription(checklistDiscriptionId, checkListDescriptionValue)
    );
    res.status === 204 && (await dispatch(getChecklistBySubcategory(pathId)));
  };

  const DeleteHandler = async () => {
    const res = await dispatch(TaskDescription(checklistDiscriptionId, ""));
    res.status === 204 && (await dispatch(getChecklistBySubcategory(pathId)));
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>
            <button className="button" onClick={DeleteHandler}>
              Delete
            </button>
          </Heading>
          <EmailWrapper></EmailWrapper>
        </DataWrapper>
      </Container>
      <DataInput>MANAGER TRAINING</DataInput>
      <MainTaskSectionForm>
        <EditorSection>
          <EditorTask>How to do this task:</EditorTask>
        </EditorSection>
        <div>
          <IconInputFieldTextArea>
            <ReactQuill
              theme="snow"
              value={checkListDescriptionValue}
              modules={DescriptionModal.modules}
              placeholder="Click here to start typing"
              onChange={(e) => setChecklistdescriptionValue(e)}
            />
          </IconInputFieldTextArea>
          <div style={{ padding: "0px 6px" }}>
            <DescriptionFormButton onClick={DescriptionHandler}>
              save
            </DescriptionFormButton>
          </div>
        </div>
      </MainTaskSectionForm>
    </MainWrapper>
  );
};

DescriptionModal.modules = {
  toolbar: [
    [
      { header: 1 },
      { header: 2 },
      "bold",
      "italic",
      "underline",
      "strike",
      { list: "ordered" },
      { list: "bullet" },
      { script: "sub" },
      { script: "super" },
      "font",
      "size",
      "align",
      "strike",
      "script",
      "blockquote",
      "background",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "color",
      "code-block",
    ],
  ],
};

export default DescriptionModal;
