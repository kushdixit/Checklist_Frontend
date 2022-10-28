import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useDispatch } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
} from "redux/actions/checklist";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
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

const SubList = ({ subIndex, task, index }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
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

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const taskdeleteHandler = async (id) => {
    const res = await dispatch(deleteSubTask(id));
  };
  const onChange = (e) => {
    setValue("updateSubTask", e.target.value);
  };
  const updateSubTaskHandler = async (data) => {
    const response = await dispatch(editSubTask(data?.updateSubTask, task.id));
    if (response.status == 204) {
      dispatch(getChecklistBySubcategory(1));
      setValue("updateSubTask", "");
      setSubTaskEdit(false);
    } else {
      toast(response.data.Message);
    }
  };

  return (
    <div key={subIndex}>
      <ToastContainer />
      <MainTaskSection>
        <TaskIconImage>
          <TaskIcon />
        </TaskIconImage>
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(updateSubTaskHandler)}
        >
          <IconInputField>
            <TextInput
              name="updateSubTask"
              type="text"
              placeholder={task?.subTaskName}
              control={control}
              disabled={!subTaskEdit}
              onChange={onChange}
            />
          </IconInputField>
          {subTaskEdit && (
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
              {isOpenSort && (
                <SortWrapper ref={wrapperRef}>
                  <SortTextDiv
                    onClick={() => {
                      setSubTaskEdit(!subTaskEdit);
                      setValue("updateSubTask", task?.subTaskName);
                    }}
                  >
                    Edit Sub Task
                  </SortTextDiv>
                  <SortTextDiv
                    onClick={() => {
                      console.log("dsfs");
                      taskdeleteHandler(task.id);
                    }}
                  >
                    Delete Sub Task
                  </SortTextDiv>
                </SortWrapper>
              )}
            </ShortBy>
          </ShortContainer>
        </form>
      </MainTaskSection>
      {/* {subTaskEdit ? (
        <div>
          <form onSubmit={handleSubmit(updateSubTaskHandler)}>
            <TextInput
              name="updateSubTask"
              control={control}
              type="text"
              placeholder="Update Task"
              onChange={onChange}
            />
            <div className="submitBtn">
              <Button>Submit</Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Controller
            name={"subTask" + index + "" + subIndex}
            control={control}
            render={({ field }) => (
              <CheckboxInput
                className="checkBox"
                label={task?.subTaskName}
                {...field}
              />
            )}
          />
          <button onClick={() => setSubTaskEdit(true)}>edit</button>
          <button
            onClick={() => {
              taskdeleteHandler(task.id);
            }}
          >
            delete
          </button>
        </div>
      )} */}
    </div>
  );
};

const SubListWrapper = ({ index, task }) => {
  return task.subTasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, subIndex) => (
      <SubList task={task} subIndex={subIndex} index={index} />
    ));
};

export default SubListWrapper;
