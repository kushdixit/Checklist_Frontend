import React, { useEffect } from "react";
import LandingCheckliCard from "components/LandingCheckliCard";
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
      <CardMainSection>
        <FirstSection>
          {item.checklists
            ?.filter((subItem) => subItem.isActive)
            .reverse()
            .map((subItem) => {
              return <LandingCheckliCard data={subItem} />;
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default ChecklistCards;
