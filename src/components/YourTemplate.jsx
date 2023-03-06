import React from "react";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
  EmptyMessage,
} from "styles/components/Card";
import CheckliCard from "components/CheckliCard";
import { useSelector } from "react-redux";
import FirstImage from "assets/images/checklist.svg";

const YourTemplate = () => {
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: FirstImage },
    { id: 3, time: "3:25 p.m", image: FirstImage },
    { id: 4, time: "3:25 p.m", image: FirstImage },
  ];
  return (
    <>
      <NewSection>
        <SubSectionNew>
          <h2>{templateData[0].templateName}</h2>
        </SubSectionNew>
      </NewSection>
      <CardMainSection>
        <FirstSection>
          {templateData[0]?.checklists
            ?.filter((subItem) => subItem.isActive)
            .reverse()
            .map((subItem) => {
              return <CheckliCard data={subItem} />;
            })}
        </FirstSection>
      </CardMainSection>
      {templateData[0].checklists.length === 0 && (
        <EmptyMessage>Your Template is currently empty</EmptyMessage>
      )}
    </>
  );
};

export default YourTemplate;
