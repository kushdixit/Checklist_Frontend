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
import TextInput from "components/FormElements/TextInput";
import SubTask from "./SubTask";
import SubListWrapper from "./SubList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MainTaskSection,
  IconInputField,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import Delete from "assets/SVG/Delete";
import Arrow from "assets/SVG/Arrow";
import CheckboxInput from "components/FormElements/CheckboxInput";

const TaskWrapper = ({ checkListId, showEditable }) => {
  const taskData = useSelector((state) => state.checklist);
  return taskData?.tasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, index) => (
      <Task
        task={task}
        index={index}
        checkListId={checkListId}
        showEditable={showEditable}
      />
    ));
};

const Task = ({ task, index, checkListId, showEditable }) => {
  const dispatch = useDispatch();
  const [taskEdit, setTaskEdit] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
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

  const {
    handleSubmit: submitData,
    control: formControl,
    register,
    reset,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });

  const deleteHandler = (id) => {
    dispatch(deleteTask(id, checkListId));
    setIsOpenSort(false);
  };

  const formData = async (data) => {
    const response = await dispatch(editTask(data?.update, task.id));
    dispatch(getChecklistBySubcategory(checkListId));
    if (response.status === 204) {
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
                setIsOpenSort(true);
              }}
            >
              <ShortBy>
                <Colon onClick={() => toggleab(!modal)} />
                {isOpenSort && (
                  <SortWrapper ref={wrapperRef}>
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
      {addSubTask && (
        <SubTask
          id={task.id}
          task={task}
          setAddSubTask={setAddSubTask}
          addSubTask={addSubTask}
          checkListId={checkListId}
        />
      )}
      <div style={{ padding: "0rem 4rem 0rem 2rem" }}>
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
