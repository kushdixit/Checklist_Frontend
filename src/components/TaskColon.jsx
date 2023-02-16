import { useDispatch } from "react-redux";
import { SortWrapper, SortTextDiv } from "styles/components/ModalContainer";
import {
  deleteTask,
  getChecklistBySubcategory,
  editTask,
} from "redux/actions/task";
import Delete from "assets/SVG/Delete";
import SubTask from "assets/SVG/SubTask";
import Heading from "assets/SVG/Heading";
import Priority from "assets/SVG/Priority";

const TaskColon = ({ data, setIsHovering, pathId, taskOrder }) => {
  const dispatch = useDispatch();

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
    console.log(data?.id);
    const reducedData = TaskOrder?.filter((item) => item !== data?.id).reduce(
      (total, item, index) => (index === 0 ? item : total + "," + item),
      ""
    );
    if (reducedData) {
      const response = await dispatch(deleteTask(data?.id, reducedData));
      if (response === 204) dispatch(getChecklistBySubcategory(pathId));
    }
  };
  return (
    <SortWrapper>
      <SortTextDiv onClick={SubHeadingHandler}>
        <Heading />
        {!data?.isHeading ? "Sub-Heading" : "Make a Task"}
      </SortTextDiv>
      <SortTextDiv onClick={PriorityHandler}>
        <Priority />
        Priority
      </SortTextDiv>
      <SortTextDiv onClick={SubTaskHandler}>
        <SubTask />
        {data?.isSubtask ? "Make a Task" : "Sub-Task"}
      </SortTextDiv>
      <SortTextDiv onClick={DeleteHandler}>
        <Delete /> Delete
      </SortTextDiv>
    </SortWrapper>
  );
};

export default TaskColon;
