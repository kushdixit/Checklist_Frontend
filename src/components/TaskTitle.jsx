import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChecklistBySubcategory } from "redux/actions/task";
import { MoveTask } from "redux/actions/task";
import update from "immutability-helper";
import { Card } from "./Card2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const TaskTitle = () => {
  const { id: pathId } = useParams();
  const dispatch = useDispatch();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [cards, setCards] = useState([]);
  const [taskOrder, setTaskOrder] = useState([]);

  useEffect(() => {
    setCards(ChecklistDetail?.tasks);
  }, []);

  useEffect(() => {
    setCards(ChecklistDetail?.tasks);
  }, [ChecklistDetail]);

  const getTaskOrder = () => {
    const data = cards?.reduce(
      (total, item, index) => (index === 0 ? item?.id : total + "," + item?.id),
      ""
    );
    setTaskOrder(data);
  };

  useEffect(() => {
    let timer1 = setTimeout(async () => {
      getTaskOrder();
    }, 500);

    return () => {
      clearTimeout(timer1);
    };
  }, [cards]);

  const UpdateTaskOrder = async () => {
    const res = await dispatch(MoveTask(taskOrder));
    res.status === 204 && dispatch(getChecklistBySubcategory(pathId));
  };

  useEffect(() => {
    if (taskOrder.length) UpdateTaskOrder();
  }, [taskOrder]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {cards.map((item, index) => (
          <Card
            key={index}
            index={index}
            id={index}
            text={item?.taskName}
            moveCard={moveCard}
            data={item}
            taskOrder={taskOrder}
            pathId={pathId}
          />
        ))}
      </DndProvider>
    </>
  );
};

export default TaskTitle;
