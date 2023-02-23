import { useDispatch, useSelector } from "react-redux";
import { SortWrapper, SortTextDiv } from "styles/components/ModalContainer";
import {
  deleteTask,
  getChecklistBySubcategory,
  editTask,
  addNewTask,
  MoveTask,
} from "redux/actions/task";
import Delete from "assets/SVG/Delete";
import SubTask from "assets/SVG/SubTask";
import Heading from "assets/SVG/Heading";
import Priority from "assets/SVG/Priority";
import DownArrow from "assets/SVG/DownArrow";
import QuestionMark from "assets/SVG/QuestionMark";
import Indent from "assets/SVG/Indent";
import Header from "assets/SVG/Header";
import Description from "assets/SVG/Description";
import { SET_TASK } from "redux/actions/action_types";

const TaskColon = ({ data, setIsHovering, pathId, taskOrder }) => {
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );

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
  const DeleteHandler = async () => {
    setIsHovering(false);
    const TaskOrder = taskOrder.split(",");
    const reducedData = TaskOrder?.filter((item) => item !== data?.id).reduce(
      (total, item, index) => (index === 0 ? item : total + "," + item),
      ""
    );
    if (reducedData) {
      const response = await dispatch(deleteTask(data?.id, reducedData));
      if (response === 204) dispatch(getChecklistBySubcategory(pathId));
    }
  };

  const AddTaskHandler = async (id) => {
    dispatch({ type: SET_TASK, payload: id });
    let data = {
      taskName: "",
      checklistMasterId: pathId,
    };
    const response = await dispatch(addNewTask(data, pathId));
    if (response) {
      const getOrder = ChecklistDetail?.tasks?.reduce(
        (total, item, index) =>
          index === 0
            ? item?.id === id
              ? item?.id + "," + response
              : item?.id
            : item?.id === id
            ? total + "," + item?.id + "," + response
            : total + "," + item?.id,
        ""
      );
      const res = await dispatch(MoveTask(getOrder));
      res.status === 204 && dispatch(getChecklistBySubcategory(pathId));
      dispatch({ type: SET_TASK, payload: 0 });
    }
  };

  return (
    <SortWrapper>
      <SortTextDiv onClick={() => AddTaskHandler(data?.id)}>
        <DownArrow />
        Add Task below
      </SortTextDiv>
      <SortTextDiv onClick={SubHeadingHandler}>
        <QuestionMark />
        {!data?.isHeading ? "Sub-Heading" : "Make a Task"}
      </SortTextDiv>
      <SortTextDiv onClick={PriorityHandler}>
        <Indent />
        Priority
      </SortTextDiv>
      <SortTextDiv onClick={PriorityHandler}>
        <Header />
        Describe the task
      </SortTextDiv>
      <SortTextDiv onClick={SubTaskHandler}>
        <Priority />
        {data?.isSubtask ? "Make a Task" : "Sub-Task"}
      </SortTextDiv>
      <SortTextDiv onClick={DeleteHandler}>
        <Delete    style={{    width:"10px"             
                    }} /> Delete
      </SortTextDiv>
    </SortWrapper>
  );
};

export default TaskColon;
