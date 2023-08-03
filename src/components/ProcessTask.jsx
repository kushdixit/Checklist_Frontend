import React from "react";
import { ProcessCard } from "components/ProcessCard";

const ProcessTask = ({ setCards, cards, processData }) => {
  const updateBool = (index, newValue) => {
    setCards((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = { ...cards[index], ischecked: newValue };
      return updatedData;
    });
  };

  return (
    <>
      {cards?.map((item, index) => (
        <ProcessCard
          data={item}
          cards={cards}
          setCards={setCards}
          updateBool={updateBool}
          index={index}
          processData={processData}
        />
      ))}
    </>
  );
};

export default ProcessTask;