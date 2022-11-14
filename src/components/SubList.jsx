import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
  editSubTaskStatus,
} from "redux/actions/task";
import Button from "components/Button";
import TextInput from "components/FormElements/TextInput";
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
import Edit from "assets/SVG/Edit";
import Delete from "assets/SVG/Delete";
import CheckboxInput from "components/FormElements/CheckboxInput";

const SubList = ({ subIndex, task, index, checkListId, isEditable }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
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

  const dispatch = useDispatch();
  const { setValue, handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    defaultValues: {
      rememberMe: task?.ischecked,
    },
  });

  const taskdeleteHandler = (id) => {
    dispatch(deleteSubTask(id, checkListId));
  };
  const onChange = (e) => {
    setValue("updateSubTask", e.target.value);
  };
  const updateSubTaskHandler = async (data) => {
    dispatch(
      editSubTaskStatus(
        task?.id,
        checkListId,
        data.rememberMe == true ? true : false
      )
    );
    const response = await dispatch(editSubTask(data?.updateSubTask, task.id));
    if (response.status === 204) {
      dispatch(getChecklistBySubcategory(checkListId));
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
        <form
          style={{ width: "100%" }}
          onSubmit={handleSubmit(updateSubTaskHandler)}
        >
          {!subTaskEdit && (
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <CheckboxInput
                  className="checkBox"
                  {...field}
                  onChange={(e) => {
                    console.log(e);
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
                        setSubTaskEdit(!subTaskEdit);
                        setValue("updateSubTask", task?.subTaskName);
                      }}
                    >
                      <Edit />
                      Edit Sub Task
                    </SortTextDiv>
                    <SortTextDiv
                      onClick={() => {
                        console.log("dsfs");
                        taskdeleteHandler(task.id);
                      }}
                    >
                      <Delete /> Delete Sub Task
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ShortContainer>
          )}
        </form>
      </MainTaskSection>
    </div>
  );
};

const SubListWrapper = ({ index, task, checkListId, isEditable }) => {
  return task.subTasks
    ?.filter((data) => data.isActive)
    .reverse()
    .map((task, subIndex) => (
      <SubList
        task={task}
        subIndex={subIndex}
        index={index}
        checkListId={checkListId}
        isEditable={isEditable}
      />
    ));
};

export default SubListWrapper;
