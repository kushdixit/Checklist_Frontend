import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
  editSubTaskStatus,
  SubTaskDescription,
} from "redux/actions/task";
import TextInput from "components/FormElements/TextInput";
import {
  MainTaskSection,
  IconInputField,
  TaskDescriptionField,
  DescriptionCrossWrapper,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
  MainTaskSectionForm,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import Delete from "assets/SVG/Delete";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { notification } from "antd";
import Description from "assets/SVG/Description";
import SubDescription from "./SubDescription";

const SubList = ({ subIndex, task, checkListId, showEditable }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
  const [modal, setModal] = useState(false);
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
  function toggleab(data) {
    setModal(data);
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

  const openNotification = (message) => {
    api.info({
      message,
    });
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

  const subTaskDescriptionHandler = async () => {
    const data = getValues("updateDescription");
    const response = await dispatch(SubTaskDescription(task?.id, data));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      openNotification("Updated");
    } else openNotification(response?.data?.errors?.TaskDescription[0]);
  };

  const removeDescriptionHandler = async () => {
    const response = await dispatch(SubTaskDescription(task?.id, ""));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      openNotification("Deleted");
    } else openNotification(response?.data?.errors?.TaskDescription[0]);
  };

  return (
    <div key={subIndex}>
      {contextHolder}
      <MainTaskSection>
        <MainTaskSectionForm>
          <form
            onSubmit={handleSubmit(updateSubTaskHandler)}
            style={{ display: "flex" }}
          >
            <div style={{ display: "flex" }}>
              {!subTaskEdit && (
                <Controller
                  name="rememberMe"
                  control={control}
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
              {taskEditable && (
                <ShortContainer
                  ref={wrapperRef}
                  onClick={() => {
                    setIsOpenSort(!isOpenSort);
                  }}
                >
                  <ShortBy>
                    <Colon onClick={() => toggleab(!modal)} />
                    {isOpenSort && (
                      <SortWrapper>
                        <SortTextDiv
                          onClick={() => {
                            taskdeleteHandler(task.id);
                          }}
                        >
                          <Delete /> Delete Sub Task
                        </SortTextDiv>
                        {!task?.subTaskDescription && (
                          <SortTextDiv
                            onClick={() => {
                              setAddDescription(!addDescription);
                              setIsOpenSort(!isOpenSort);
                            }}
                          >
                            <Description />
                            {addDescription
                              ? "Remove Description"
                              : "Add Description"}
                          </SortTextDiv>
                        )}
                      </SortWrapper>
                    )}
                  </ShortBy>
                </ShortContainer>
              )}
            </div>
            {task?.subTaskDescription && (
              <TaskDescriptionField>
                <TextInput
                  defaultValue={task?.subTaskDescription.replace(
                    /^./,
                    task?.subTaskDescription[0].toUpperCase()
                  )}
                  name="updateDescription"
                  type="text"
                  placeholder="Sub task Description"
                  control={control}
                  disabled={!taskEditable}
                  color={taskEditable ? "transparent" : "1d2e88"}
                  handlekeyPress={(e) =>
                    e.key === "Enter" && subTaskDescriptionHandler()
                  }
                />
                <DescriptionCrossWrapper onClick={removeDescriptionHandler}>
                  X
                </DescriptionCrossWrapper>
              </TaskDescriptionField>
            )}
          </form>
        </MainTaskSectionForm>
      </MainTaskSection>
      {addDescription && (
        <SubDescription
          id={task.id}
          task={task}
          setAddDescription={setAddDescription}
          addDescription={addDescription}
          checkListId={checkListId}
        />
      )}
    </div>
  );
};

const SubListWrapper = ({ index, task, checkListId, showEditable }) => {
  return task.subTasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, subIndex) => (
      <SubList
        task={task}
        subIndex={subIndex}
        index={index}
        checkListId={checkListId}
        showEditable={showEditable}
        key={subIndex}
      />
    ));
};

export default SubListWrapper;
