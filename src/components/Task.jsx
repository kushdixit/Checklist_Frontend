import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  deleteTask,
  editTask,
  editTaskStatus,
  TaskDescription,
} from "redux/actions/task";
import { TaskList } from "styles/pages/CheckList";
import TextInput from "components/FormElements/TextInput";
import SubTask from "./SubTask";
import AddDescription from "./AddDescription";
import SubListWrapper from "./SubList";
import {
  MainTaskSection,
  IconInputField,
  TaskDescriptionField,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import Delete from "assets/SVG/Delete";
import Arrow from "assets/SVG/Arrow";
import Description from "assets/SVG/Description";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { notification } from "antd";

const TaskWrapper = ({ checkListId, showEditable }) => {
  const { id: pathId } = useParams();
  const taskData = useSelector((state) => (pathId ? state.checklist : null));
  return taskData?.tasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, index) => (
      <Task
        task={task}
        index={index}
        checkListId={checkListId}
        showEditable={showEditable}
        key={index}
      />
    ));
};

const Task = ({ task, index, checkListId, showEditable }) => {
  const dispatch = useDispatch();
  const [taskEdit, setTaskEdit] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);
  const [addDescription, setAddDescription] = useState(false);

  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();
  const taskEditable = useSelector((state) => state.editable?.isEditable);
  const [api, contextHolder] = notification.useNotification();

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

  const openNotification = (message) => {
    api.info({
      message,
    });
  };

  console.log(task.subTasks);

  const {
    handleSubmit: submitData,
    control: formControl,
    register,
    reset,
    setValue,
    getValues,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });
  useEffect(() => {
    setValue("rememberMe", task?.ischecked);
  }, [task?.ischecked]);

  const deleteHandler = (id) => {
    dispatch(deleteTask(id, checkListId));
    setIsOpenSort(false);
  };

  const formData = async (data) => {
    if (data?.update) {
      const response = await dispatch(editTask(data?.update, task.id));
      dispatch(getChecklistBySubcategory(checkListId));
      if (response.status === 204) {
        // setValue("update", "");
        setTaskEdit(false);
      } else openNotification(response.data.Message);
    }
  };

  const taskDescriptionHandler = async () => {
    const data = getValues("updateDescription");
    const response = await dispatch(TaskDescription(task?.id, data));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      openNotification("Updated");
    } else openNotification(response?.data?.errors?.TaskDescription[0]);
  };

  return (
    <TaskList key={index}>
      {contextHolder}
      <MainTaskSection>
        <form style={{ width: "100%" }} onSubmit={submitData(formData)}>
          <div style={{ display: "flex" }}>
            {!taskEdit && (
              <Controller
                name="rememberMe"
                control={formControl}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    {...field}
                    onChange={(e) => {
                      console.log(e);
                      showEditable &&
                        reset({
                          rememberMe: e,
                        });
                      showEditable &&
                        dispatch(
                          editTaskStatus(
                            task?.id,
                            checkListId,
                            e == true ? true : false
                          )
                        );
                    }}
                  />
                )}
              />
            )}
            <IconInputField>
              <TextInput
                defaultValue={task?.taskName}
                name="update"
                type="text"
                placeholder={task?.taskName}
                control={formControl}
                disabled={!taskEditable}
                ref={register}
                color={taskEditable ? "transparent" : "1d2e88"}
                handlekeyPress={(e) => e.key === "Enter" && formData()}
              />
            </IconInputField>
            {taskEditable && (
              <ShortContainer
                onClick={() => {
                  setIsOpenSort(!isOpenSort);
                }}
                ref={wrapperRef}
              >
                <ShortBy>
                  <Colon onClick={() => toggleab(!modal)} />
                  {isOpenSort && (
                    <SortWrapper>
                      <SortTextDiv
                        onClick={() => {
                          deleteHandler(task.id);
                        }}
                      >
                        <Delete /> Delete Task
                      </SortTextDiv>
                      <SortTextDiv onClick={() => setAddSubTask(!addSubTask)}>
                        <Arrow />{" "}
                        <div>
                          {addSubTask ? "Remove sub task" : "Add sub task"}
                        </div>
                      </SortTextDiv>
                      {!task?.taskDescription && (
                        <SortTextDiv
                          SortTextDiv
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
          {task?.taskDescription && (
            <TaskDescriptionField>
              <TextInput
                defaultValue={task?.taskDescription}
                name="updateDescription"
                type="text"
                placeholder="Task Description"
                control={formControl}
                disabled={!taskEditable}
                ref={register}
                color={taskEditable ? "transparent" : "1d2e88"}
                handlekeyPress={(e) =>
                  e.key === "Enter" && taskDescriptionHandler()
                }
              />
            </TaskDescriptionField>
          )}
        </form>
      </MainTaskSection>
      {addSubTask && (
        <SubTask
          id={task.id}
          task={task}
          setAddSubTask={setAddSubTask}
          addSubTask={addSubTask}
          checkListId={checkListId}
        />
      )}
      {addDescription && (
        <AddDescription
          id={task.id}
          task={task}
          setAddDescription={setAddDescription}
          addDescription={addDescription}
          checkListId={checkListId}
        />
      )}
      <div style={{}}>
        <SubListWrapper
          index={index}
          task={task}
          checkListId={checkListId}
          showEditable={showEditable}
        />
      </div>
    </TaskList>
  );
};

export default TaskWrapper;
