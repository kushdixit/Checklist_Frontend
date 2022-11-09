import React from "react";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
  Footer,
  Morecontent,
  IconInputField,
  SelectFieldSection,
  ButtonSection,
} from "styles/components/Card";
import Card from "./Card";
import { useSelector } from "react-redux";
import FirstImage from "assets/images/firstimage.jpg";

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
            .map((subItem, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  item={subItem}
                  Checklist={Checklist}
                  isEditable={true}
                />
              );
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default YourTemplate;
