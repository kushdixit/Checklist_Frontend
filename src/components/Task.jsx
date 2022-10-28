import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getChecklistBySubcategory,
  deleteTask,
  editTask,
} from "redux/actions/checklist";
import { TaskList } from "styles/pages/CheckList";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
import SubTask from "./SubTask";
import SubListWrapper from "./SubList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BodyWrapper,
  Title,
  Section,
  TitleSection,
  TaskSection,
  MainTaskSection,
  IconInputField,
  TaskIconImage,
  SubTaskSection,
  SubSection,
  ShortBy,
  SortWrapper,
  ShortContainer,
  ShortImage,
  SortText,
  SortTextDiv,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import TaskIcon from "assets/SVG/TaskIcon";
import AlertModal from "components/AlertModal";
import SubTaskIcon from "assets/SVG/SubTaskIcon";

const TaskWrapper = () => {
  const taskData = useSelector((state) => state.checklist);
  return taskData?.tasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, index) => <Task task={task} index={index} />);
};

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const [taskEdit, setTaskEdit] = useState(false);
  const [addSubTask, setAddSubTask] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const wrapperRef = useRef();

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
    formState: { errors },
    control: formControl,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const onTaskChange = (e) => {
    setValue("update", e.target.value);
  };

  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });
  const deleteHandler = (id) => {
    dispatch(deleteTask(id));
    setIsOpenSort(false);
  };

  const onChange = (e) => {
    setValue("update", e.target.value);
  };

  const updateTask = async (data) => {
    const response = await dispatch(editTask(data?.update, task.id));
    if (response.status == 204) {
      dispatch(getChecklistBySubcategory(1));
      setValue("update", "");
      setTaskEdit(false);
    } else {
      toast(response.data.Message);
    }
  };

  const formData = async (data) => {
    const response = await dispatch(editTask(data?.update, task.id));
    if (response.status == 204) {
      dispatch(getChecklistBySubcategory(1));
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
        <TaskIconImage>
          <TaskIcon />
        </TaskIconImage>
        <form style={{ width: "100%" }} onSubmit={submitData(formData)}>
          <IconInputField>
            <TextInput
              name="update"
              type="text"
              placeholder={task?.taskName}
              control={formControl}
              disabled={!taskEdit}
              onChange={onTaskChange}
            />
          </IconInputField>
          {taskEdit && (
            <div className="submitBtn">
              <Button>Save</Button>
            </div>
          )}
          <ShortContainer
            onClick={() => {
              setIsOpenSort(true);
            }}
          >
            <ShortBy>
              <Colon onClick={() => toggleab(true)} />

              {/* <ShortImage src={Short} /> */}
              {isOpenSort && (
                <SortWrapper ref={wrapperRef}>
                  <SortTextDiv
                    onClick={() => {
                      setTaskEdit(!taskEdit);
                      setValue("update", task?.taskName);
                    }}
                  >
                    Edit Task
                  </SortTextDiv>
                  <SortTextDiv
                    onClick={() => {
                      deleteHandler(task.id);
                    }}
                  >
                    Delete Task
                  </SortTextDiv>
                  <SortTextDiv onClick={() => setAddSubTask(!addSubTask)}>
                    Add Sub Task
                  </SortTextDiv>
                </SortWrapper>
              )}
            </ShortBy>
          </ShortContainer>
        </form>
      </MainTaskSection>
      <SubTaskSection>
        <SubTaskIcon onClick={() => setAddSubTask(!addSubTask)} />
      </SubTaskSection>

      {addSubTask && (
        <SubTask
          id={task.id}
          task={task}
          setAddSubTask={setAddSubTask}
          addSubTask={addSubTask}
        />
      )}
      <div style={{ "padding-left": "90px" }}>
        <SubListWrapper index={index} task={task} />
      </div>
    </TaskList>
  );
};

export default TaskWrapper;
