import React, { useEffect } from "react";
import CheckliCard from "components/CheckliCard";
import { useDispatch } from "react-redux";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
} from "styles/components/Card";
import { getChecklist } from "redux/actions/checklist";

const ChecklistCards = ({ item }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChecklist());
  }, []);

  return (
    <>
      <NewSection>
        <SubSectionNew>
          <h2> {item.templateName}</h2>
        </SubSectionNew>
      </NewSection>
      <CardMainSection>
        <FirstSection>
          {item.checklists
            ?.filter((subItem) => subItem.isActive)
            .reverse()
            .map((subItem) => {
              return <CheckliCard data={subItem} />;
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default ChecklistCards;
