import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ViewCard } from "components/ViewCard";

const ViewTask = () => {
  const { id: pathId } = useParams();
  const ChecklistDetail = useSelector((state) =>
    pathId ? state.checklist : null
  );
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(ChecklistDetail?.tasks);
  }, []);

  useEffect(() => {
    setCards(ChecklistDetail?.tasks);
  }, [ChecklistDetail]);

  return (
    <>
      {cards?.map((item) => (
        <ViewCard data={item} />
      ))}
    </>
  );
};

export default ViewTask;
