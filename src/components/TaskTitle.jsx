import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddTask from "components/AddTask";
import { useForm, Controller } from "react-hook-form";
import {
  ChecklistTaskWrapper,
  TaskFormSubWrapper,
  TaskContainer,
  TaskSubContainer,
} from "styles/pages/EditChecklist";
import CheckboxInput from "components/FormElements/CheckboxInput";
import TextArea from "components/FormElements/TextArea";
import {
  ShortBy,
  SortWrapper,
  ModalContainer,
  SortTextDiv,
} from "styles/components/ModalContainer";
import Plus from "assets/SVG/Plus";
import Delete from "assets/SVG/Delete";

const ChecklistTask = ({ data }) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [modal, setModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const wrapperRef = useRef();

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
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });
  const DescriptionHandler = async (data) => {
    console.log("data", data);
  };
  return (
    <ChecklistTaskWrapper>
      <form
        className="task-form"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        onSubmit={handleSubmit(DescriptionHandler)}
      >
        {true && (
          // isHovering
          <ModalContainer
            ref={wrapperRef}
            onClick={() => {
              setIsOpenSort(!isOpenSort);
            }}
          >
            <ShortBy>
              <Plus onClick={() => toggleab(!modal)} />
              {isOpenSort && (
                <SortWrapper>
                  <SortTextDiv>
                    <Delete /> Delete
                  </SortTextDiv>
                </SortWrapper>
              )}
            </ShortBy>
          </ModalContainer>
        )}
        <TaskContainer>
          <TaskSubContainer isHovering={isHovering}>
            <div style={{ paddingTop: "10px" }}>
              <Controller
                name="rememberMe"
                style={{ paddingTop: "10px" }}
                control={control}
                render={({ field }) => (
                  <CheckboxInput
                    className="checkBox"
                    style={{ paddingTop: "10px" }}
                    {...field}
                    onChange={(e) => {
                      console.log(e);
                      // reset({
                      //   rememberMe: e,
                      // });
                      // dispatch(
                      //   editTaskStatus(
                      //     task?.id,
                      //     checkListId,
                      //     e == true ? true : false
                      //   )
                      // );
                    }}
                  />
                )}
              />
            </div>
            <TaskFormSubWrapper>
              <TextArea
                type="task"
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "27px",
                  margin: "5px 0px 0px 0px",
                  width: "90%",
                  border: "none",
                  fontFamily: "inherit",
                  resize: "none",
                  background: "inherit",
                }}
                name="checklist"
                placeholder={``}
                defaultValue={data?.taskName}
                control={control}
                onFocus={() => setShowButtons(!showButtons)}
                onBlur={() => setShowButtons(!showButtons)}
                handleKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.target.blur();
                    DescriptionHandler();
                  }
                }}
              />
              {showButtons && (
                <div
                  style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
                >
                  <button
                    onClick={handleSubmit(DescriptionHandler)}
                    style={{
                      backgroundColor: "#007ccb",
                      color: "white",
                      padding: "4px 12px",
                      marginTop: "3px",
                      borderRadius: "3px",
                      border: "none",
                      fontSize: "14px",
                    }}
                  >
                    <div>Save</div>
                  </button>
                  <button
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#000",
                      padding: "4px 12px",
                      marginTop: "3px",
                      borderRadius: "3px",
                      border: " 1px solid #ddd",
                      fontSize: "14px",
                    }}
                  >
                    <div>Cancel</div>
                  </button>
                </div>
              )}
            </TaskFormSubWrapper>
          </TaskSubContainer>
        </TaskContainer>
      </form>
      {/* {isHovering && <AddTask />} */}
    </ChecklistTaskWrapper>
  );
};

const TaskTitle = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );

  return (
    <>
      {ChecklistDetail?.tasks.map((item) => (
        <ChecklistTask data={item} />
      ))}
    </>
  );
};

export default TaskTitle;
