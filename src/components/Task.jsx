import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  deleteTask,
  editTask,
  editTaskStatus,
} from "redux/actions/task";
import { TaskList } from "styles/pages/CheckList";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
import SubTask from "./SubTask";
import SubListWrapper from "./SubList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MainTaskSection,
  IconInputField,
  SubTaskSection,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import SubTaskIcon from "assets/SVG/SubTaskIcon";
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";
import Arrow from "assets/SVG/Arrow";
import CheckboxInput from "components/FormElements/CheckboxInput";

const TaskWrapper = ({ checkListId, isEditable }) => {
  const taskData = useSelector((state) => state.checklist);
  return taskData?.tasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, index) => (
      <Task
        task={task}
        index={index}
        checkListId={checkListId}
        isEditable={isEditable}
      />
    ));
};

const Task = ({ task, index, checkListId, isEditable }) => {
  const dispatch = useDispatch();
  const [taskEdit, setTaskEdit] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();
  const taskEditable = useSelector((state) => state.editable?.isEditable);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
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

  const {
    handleSubmit: submitData,
    control: formControl,
    register,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });

  const onTaskChange = (e) => {
    console.log(e);
    setValue("update", e.target.value);
  };

  const { setValue } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const deleteHandler = (id) => {
    dispatch(deleteTask(id, checkListId));
    setIsOpenSort(false);
  };

  const formData = async (data) => {
    const response = await dispatch(editTask(data?.update, task.id));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
      setValue("update", "");
      setTaskEdit(false);
    } else {
      toast(response.data.Message);
    }
  };

  return (
    <TaskList key={index}>
      <ToastContainer />
      <MainTaskSection>
        <form style={{ width: "100%" }} onSubmit={submitData(formData)}>
          {!taskEdit && (
            <Controller
              name="rememberMe"
              control={formControl}
              render={({ field }) => (
                <CheckboxInput
                  className="checkBox"
                  {...field}
                  onChange={(e) => {
                    taskEditable &&
                      isEditable &&
                      reset({
                        rememberMe: e,
                      });
                  }}
                />
              )}
            />
          )}
          <IconInputField>
            <TextInput
              name="update"
              type="text"
              placeholder={task?.taskName}
              control={formControl}
              disabled={!taskEdit}
              onChange={onTaskChange}
              ref={register}
            />
          </IconInputField>
          {taskEdit && (
            <div className="submitBtn">
              <Button>Save</Button>
            </div>
          )}
          {isEditable && taskEditable && (
            <ShortContainer
              onClick={() => {
                setIsOpenSort(true);
              }}
            >
              <ShortBy>
                <Colon onClick={() => toggleab(!modal)} />
                {isOpenSort && (
                  <SortWrapper ref={wrapperRef}>
                    <SortTextDiv
                      onClick={() => {
                        setTaskEdit(!taskEdit);
                        setValue("update", task?.taskName);
                      }}
                    >
                      <Edit /> Edit Task
                    </SortTextDiv>
                    <SortTextDiv
                      onClick={() => {
                        deleteHandler(task.id);
                      }}
                    >
                      <Delete /> Delete Task
                    </SortTextDiv>
                    <SortTextDiv onClick={() => setAddSubTask(!addSubTask)}>
                      <Arrow /> Add Sub Task
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ShortContainer>
          )}
        </form>
      </MainTaskSection>
      {isEditable && taskEditable && (
        <SubTaskSection>
          <SubTaskIcon onClick={() => setAddSubTask(!addSubTask)} />
        </SubTaskSection>
      )}
      {taskEditable && addSubTask && (
        <SubTask
          id={task.id}
          task={task}
          setAddSubTask={setAddSubTask}
          addSubTask={addSubTask}
          checkListId={checkListId}
        />
      )}
      <div style={{ "padding-left": "90px" }}>
        <SubListWrapper
          index={index}
          task={task}
          checkListId={checkListId}
          isEditable={isEditable}
        />
      </div>
    </TaskList>
  );
};

export default TaskWrapper;
