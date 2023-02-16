import { useDrag, useDrop } from "react-dnd";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  getChecklistBySubcategory,
  editTask,
  editTaskStatus,
} from "redux/actions/task";
import { useForm, Controller, useWatch } from "react-hook-form";
import {
  ChecklistTaskWrapper,
  TaskFormSubWrapper,
  TaskContainer,
  TaskSubContainer,
  Paragraph,
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

const ItemTypes = {
  CARD: "card",
};

export const Card = ({
  id,
  text,
  index,
  moveCard,
  data,
  taskOrder,
  pathId,
}) => {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [modal, setModal] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useDispatch();
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
  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    defaultValues: {
      rememberMe: data?.ischecked,
    },
  });

  const watchData = useWatch({ control });

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // console.log(item);
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const DeleteHandler = async () => {
    setIsHovering(false);
    const TaskOrder = taskOrder.split(",");
    console.log(data?.id);
    const reducedData = TaskOrder?.filter((item) => item != data?.id).reduce(
      (total, item, index) => (index === 0 ? item : total + "," + item),
      ""
    );
    if (reducedData) {
      const response = await dispatch(deleteTask(data?.id, reducedData));
      if (response === 204) dispatch(getChecklistBySubcategory(pathId));
    }
  };

  const SubHeadingHandler = async () => {
    setIsHovering(false);
    await dispatch(
      editTask(
        data?.taskName,
        data?.id,
        !data?.isHeading,
        data?.isPriority,
        data?.isSubtask,
        "",
        "",
        "",
        ""
      )
    );
    dispatch(getChecklistBySubcategory(pathId));
  };

  const SubTaskHandler = async () => {
    setIsHovering(false);
    await dispatch(
      editTask(
        data?.taskName,
        data?.id,
        data?.isHeading,
        data?.isPriority,
        !data?.isSubtask,
        "",
        "",
        "",
        ""
      )
    );
    dispatch(getChecklistBySubcategory(pathId));
  };

  const TaskUpdateHandler = async () => {
    if (watchData?.checklist) {
      await dispatch(
        editTask(
          watchData?.checklist,
          data?.id,
          data?.isHeading,
          data?.isPriority,
          data?.isSubtask,
          "",
          "",
          "",
          ""
        )
      );
      dispatch(getChecklistBySubcategory(pathId));
    }
  };
  const PriorityHandler = async () => {
    setIsHovering(false);
    await dispatch(
      editTask(
        data?.taskName,
        data?.id,
        data?.isHeading,
        !data?.isPriority,
        data?.isSubtask,
        "",
        "",
        "",
        ""
      )
    );
    dispatch(getChecklistBySubcategory(pathId));
  };
  return (
    <div ref={ref} style={{ opacity }} data-handler-id={handlerId}>
      <ChecklistTaskWrapper isHeading={data?.isHeading}>
        <form
          className="task-form"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          onSubmit={handleSubmit(TaskUpdateHandler)}
        >
          {isHovering && (
            <ModalContainer
              ref={wrapperRef}
              onClick={() => {
                setIsOpenSort(!isOpenSort);
              }}
            >
              <ShortBy>
                <Plus
                  onClick={() => {
                    toggleab(!modal);
                  }}
                />
                {isOpenSort && (
                  <SortWrapper>
                    <SortTextDiv onClick={SubHeadingHandler}>
                      <Delete />
                      {!data?.isHeading ? "Sub-Heading" : "Make a Task"}
                    </SortTextDiv>
                    <SortTextDiv onClick={PriorityHandler}>
                      <Delete />
                      Priority
                    </SortTextDiv>
                    <SortTextDiv onClick={SubTaskHandler}>
                      <Delete />
                      {data?.isSubtask ? "Make a Task" : "Sub-Task"}
                    </SortTextDiv>
                    <SortTextDiv onClick={DeleteHandler}>
                      <Delete /> Delete
                    </SortTextDiv>
                  </SortWrapper>
                )}
              </ShortBy>
            </ModalContainer>
          )}
          <TaskContainer>
            <TaskSubContainer
              isPriority={data?.isPriority}
              isHovering={isHovering}
              isSubtask={data?.isSubtask}
            >
              {!data?.isHeading && (
                <div style={{ paddingTop: "10px", paddingLeft: "5px" }}>
                  <Controller
                    name="rememberMe"
                    style={{ paddingTop: "10px" }}
                    control={control}
                    render={({ field }) => (
                      <CheckboxInput
                        className="checkBox"
                        style={{
                          paddingTop: "10px",
                          width: "23px",
                          height: "23px",
                          margin: "0px",
                        }}
                        {...field}
                        onChange={(e) => {
                          reset({
                            rememberMe: e,
                          });
                          dispatch(
                            editTaskStatus(
                              data?.id,
                              pathId,
                              e === true ? true : false
                            )
                          );
                        }}
                      />
                    )}
                  />
                </div>
              )}
              <TaskFormSubWrapper>
                {!showButtons && (
                  <Paragraph
                    isHeading={data?.isHeading}
                    style={{ margin: "0px" }}
                    href="#"
                    placeholder="Enter task..."
                    onClick={() => setShowButtons(true)}
                  >
                    {data?.taskName}
                  </Paragraph>
                )}
                {showButtons && (
                  <TextArea
                    type="task"
                    style={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "27px",
                      margin: "6px 0px 0px 0px",
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
                    // onFocus={() => setShowButtons(!showButtons)}
                    onBlur={() => setShowButtons(false)}
                    handleKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.target.blur();
                        TaskUpdateHandler();
                      }
                    }}
                  />
                )}
                {showButtons && (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      onClick={handleSubmit(TaskUpdateHandler)}
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
    </div>
  );
};
