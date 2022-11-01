import React, { useEffect } from "react";
import FirstImage from "assets/images/firstimage.jpg";
import SecondImage from "assets/images/secondimage.jpg";
import ThirdImage from "assets/images/thirdimage.jpg";
import { useDispatch } from "react-redux";
import FourthImage from "assets/images/firstimage.jpg";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
} from "styles/components/Card";
import { getChecklist } from "redux/actions/checklist";
import { useSelector } from "react-redux";
import Card from "./Card";

const ChecklistCards = ({ data, props }) => {
  const dispatch = useDispatch();
  const allChecklist = useSelector((state) => state.task.allChecklist);

  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: SecondImage },
    { id: 3, time: "3:25 p.m", image: ThirdImage },
    { id: 4, time: "3:25 p.m", image: FourthImage },
  ];
  const ChecklistTwo = [{ id: 1, heading: "Category1" }];

  useEffect(() => {
    dispatch(getChecklist());
  }, []);
  return (
    <>
      <NewSection>
        {ChecklistTwo.map((ChecklistTwo, index) => {
          return (
            <SubSectionNew key={index}>
              <h2> {ChecklistTwo.heading}</h2>
            </SubSectionNew>
          );
        })}
      </NewSection>
      <FirstSection>
        {allChecklist
          .filter((item) => item.isActive)
          .map((item, index) => {
            return <Card index={index} item={item} Checklist={Checklist} />;
          })}
      </FirstSection>
    </>
  );
};

export default ChecklistCards;
