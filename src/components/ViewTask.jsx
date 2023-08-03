import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { ViewCard } from "components/ViewCard";
import { RecurringCard } from "components/RecurringCard";

const ViewTask = ({ checkedState }) => {
  const { pathname } = useLocation();
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
      {pathname.includes("view/process") ? (
        <>
          {cards?.map((item) => (
            <>
              {console.log(item?.id, checkedState?.tasksChecked)}
              <RecurringCard
                data={item}
                checkedState={checkedState}
                isChecked={
                  checkedState?.tasksChecked?.includes(item?.id) ? true : false
                }
              />
            </>
          ))}
        </>
      ) : (
        <>
          {cards?.map((item) => (
            <>
              {console.log("item", item)}
              <ViewCard data={item} checkedState={checkedState} />
            </>
          ))}
        </>
      )}
    </>
  );
};

export default ViewTask;