import React, { useEffect, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getChecklistBySubcategory,
  editSubTask,
  deleteSubTask,
  editSubTaskStatus,
} from "redux/actions/task";
import TextInput from "components/FormElements/TextInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  IconInputFieldNew,
  ShortBy,
  SortWrapper,
  ShortContainer,
  SortTextDiv,
  MainTaskSection
} from "styles/pages/Task";
import Colon from "assets/SVG/Colon";
import Delete from "assets/SVG/Delete";
import CheckboxInput from "components/FormElements/CheckboxInput";

const SubList = ({ subIndex, task, checkListId, showEditable }) => {
  const [subTaskEdit, setSubTaskEdit] = useState(false);
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

  const updateSubTaskHandler = async (data) => {
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
          <IconInputFieldNew>
            <TextInput
              defaultValue={task?.subTaskName}
              name="updateSubTask"
              type="text"
              placeholder={task?.subTaskName}
              control={control}
              disabled={!taskEditable}
              handlekeyPress={(e) =>
                e.key === "Enter" && updateSubTaskHandler()
              }
            />
          </IconInputFieldNew>
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
      />
    ));
};

export default SubListWrapper;
