import React, { useEffect, useState, useRef } from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  IconInputField,
  IconInputFieldTextArea,
  MainTaskSectionForm,
  EditorSection,
  EditorTask,
  DescriptionFormButton,
} from "styles/pages/Description";
import { useDispatch, useSelector } from "react-redux";
import {
  editSubTaskStatus,
  TaskDescription,
  getChecklistBySubcategory,
} from "redux/actions/task";
import { useParams } from "react-router-dom";
import CheckboxInput from "components/FormElements/CheckboxInput";

const DescriptionModal = ({
  notify,
  togglefunction,
  task,
  checkListId,
  showEditable,
  checklistDiscriptionId,
}) => {
  const { id: pathId } = useParams();
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const TaskDetail = ChecklistDetail?.tasks?.filter(
    (item) => item.id === checklistDiscriptionId
  );
  const [checkListDescriptionValue, setChecklistdescriptionValue] = useState(
    TaskDetail[0]?.taskDescription ? TaskDetail[0]?.taskDescription : ""
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current?.contains(event?.target)) {
        setIsOpenSort(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control, reset } = useForm({
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

  const updateSubTaskHandler = async (data) => {
    console.log("data", data);
  };

  const DescriptionHandler = async () => {
    const res = await dispatch(
      TaskDescription(checklistDiscriptionId, checkListDescriptionValue)
    );
    res.status === 204 && (await dispatch(getChecklistBySubcategory(pathId)));
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>
            <button className="button">Delete</button>
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
        <h4>Add Subtasks</h4>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                disabled={!taskEditable}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
      </MainTaskSectionForm>
      <MainTaskSectionForm>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex", marginBottom: "20px" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                disabled={!taskEditable}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
      </MainTaskSectionForm>
      <MainTaskSectionForm>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex" }}
        >
          <div style={{ display: "flex", width: "100%" }}>
            {!subTaskEdit && (
              <Controller
                name="rememberMe"
                control={control}
                style={{ padding: "5px 5px 0 0" }}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editSubTaskStatus(
                            task?.id,
                            checkListId,
                            e === true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.subTaskName.replace(
                  /^./,
                  task?.subTaskName[0].toUpperCase()
                )}
                name="updateSubTask"
                type="text"
                placeholder={task?.subTaskName}
                control={control}
                disabled={!taskEditable}
                handlekeyPress={(e) =>
                  e.key === "Enter" && updateSubTaskHandler()
                }
              />
            </IconInputField>
          </div>
        </form>
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
