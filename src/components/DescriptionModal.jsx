import React, { useEffect, useState, useRef } from "react";
import TextInput from "components/FormElements/TextInput";
import { useForm, Controller } from "react-hook-form";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  ResetText,
  ResetWrapper,
  IconInputField,
  IconInputFieldTextArea,
  MainTaskSectionForm,
  BlankText,
  EditorSection,
  ButtonSection
} from "styles/pages/Description";
import { notification } from "antd";
import { forgotPassword } from "../redux/actions/auth";
import TextArea from "components/FormElements/TextArea";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
  editSubTaskStatus,
  SubTaskDescription,
} from "redux/actions/task";
import CheckboxInput from "components/FormElements/CheckboxInput";
import RadioButton from "components/FormElements/RadioButton";
import { store } from "redux/index";
import colorwheel from "assets/images/color-wheel.png";

const DescriptionModal = ({
  notify,
  togglefunction,
  subIndex,
  task,
  checkListId,
  showEditable,
  id,
  setAddSubTask,
  addSubTask,
 

}) => {
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    notify(res);
    if (res === 204) togglefunction(false);
  };
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const [newmodal, setNewModal] = useState(false);
  const [addDescription, setAddDescription] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const wrapperRef = useRef();
  const taskEditable = useSelector((state) => state.editable?.isEditable);

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
  function toggleabc(data) {
    setNewModal(data);
  }

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control, reset, getValues } = useForm({
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

  const taskdeleteHandler = (id) => {
    dispatch(deleteSubTask(id, checkListId));
  };

  

  const updateSubTaskHandler = async (data) => {
    if (data?.updateSubTask) {
      const response = await dispatch(
        editSubTask(data?.updateSubTask, task.id)
      );
      if (response.status === 204) {
        dispatch(getChecklistBySubcategory(checkListId));
        // setValue("updateSubTask", "");
        setSubTaskEdit(false);
      } else openNotification(response.data.Message);
    }
  };

  const removeDescriptionHandler = async () => {
    const response = await dispatch(SubTaskDescription(task?.id, ""));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      openNotification("Deleted");
    } else openNotification(response?.data?.errors?.TaskDescription[0]);
  };

 
  

  



  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  return (
    <MainWrapper>
      <Container>
        <DataWrapper>
          <Heading>
           <button className="button">delete</button>
          </Heading>
          <EmailWrapper></EmailWrapper>
        </DataWrapper>
      </Container>
      <DataInput>MANAGER TRAINING</DataInput>
    
      <MainTaskSectionForm>
        <EditorSection>
          <h4>How to do this task</h4>
         
        </EditorSection>
        <ButtonSection><button className="button">H1</button><button className="button">H2</button><button className="button">H3</button>
        <button className="button">H4</button><button className="button">H5</button><button className="button">H6</button>
        <button className="button">P</button><button className="button">pre</button><button className="button">"</button>
        <button className="button">B</button><button className="button">I</button><button className="button">U</button></ButtonSection>
        <form
        style={{ paddingTop: "30px"}}
        
      >
        <IconInputFieldTextArea>
          <TextArea
            name="taskDescription"
            type="text"
            placeholder="Add Description"
            control={control}
            className="checklistDescription"
            autoComplete="off"
          
          />
        </IconInputFieldTextArea>
      </form>
      <h4>Add Subtasks</h4>
        <form
          onSubmit={handleSubmit(updateSubTaskHandler)}
          style={{ display: "flex",marginBottom:"20px" }}
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
          style={{ display: "flex",marginBottom:"20px" }}
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

export default DescriptionModal;
