import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
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
  MainTaskSection,
  IconInputField,
  TaskIconImage,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import TaskIcon from "assets/SVG/TaskIcon";

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

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const taskdeleteHandler = (id) => {
    dispatch(deleteSubTask(id));
  };
  const onChange = (e) => {
    setValue("updateSubTask", e.target.value);
  };
  const updateSubTaskHandler = async (data) => {
    const response = await dispatch(editSubTask(data?.updateSubTask, task.id));
    if (response.status === 204) {
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
              <Colon onClick={() => toggleab(!modal)} />
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
