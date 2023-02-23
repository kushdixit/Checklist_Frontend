import React, { useEffect } from "react";
import FirstImage from "assets/images/checklist.svg";
import SecondImage from "assets/images/secondimage.jpg";
import ThirdImage from "assets/images/thirdimage.jpg";
import { useDispatch } from "react-redux";
import FourthImage from "assets/images/firstimage.jpg";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
} from "styles/components/Card";
import { getChecklist } from "redux/actions/checklist";
import Card from "./Card";

const ChecklistCards = ({ item }) => {
  const dispatch = useDispatch();

  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: SecondImage },
    { id: 3, time: "3:25 p.m", image: ThirdImage },
    { id: 4, time: "3:25 p.m", image: FourthImage },
  ];

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
            .map((subItem, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  item={subItem}
                  Checklist={Checklist}
                  showEditable={false}
                  cardType="default"
                  templateName={item?.templateName}
                />
              );
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default ChecklistCards;
