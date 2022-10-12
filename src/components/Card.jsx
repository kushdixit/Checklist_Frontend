import React, { useState } from "react";


import FirstImage from "assets/images/firstimage.jpg";
import SecondImage from "assets/images/secondimage.jpg";
import ThirdImage from "assets/images/thirdimage.jpg";
import FourthImage from "assets/images/firstimage.jpg";
import Colon from "assets/SVG/Colon";
import {FirstSection,
    NewSection,
    SubSection,
    SubSectionNew,
    Image,
    Wrap,
    ColonImage,
    WrapSubSection
} from "styles/components/Card";
const checklistCard = ({ data, props }) => {
  const Checklist = [
    { id: 1, time: "3:25 p.m", image: FirstImage },
    { id: 2, time: "3:25 p.m", image: SecondImage },
    { id: 3, time: "3:25 p.m", image: ThirdImage },
    { id: 4, time: "3:25 p.m", image: FourthImage },
  ];
  const ChecklistTwo = [{ id: 1, heading: "Category1" }];

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
        {Checklist.map((Checklist, index) => {
          return (
            <SubSection key={index}>
              <Image>
                <img
                  src={Checklist?.image}
                  alt="Rectangle"
                  width={"100%"}
                  height={"auto"}
                />{" "}
              </Image>
              <Wrap>
                <WrapSubSection>
                  <h2>Checklist: {index}</h2>
                  <h3> {Checklist.time}</h3>
                </WrapSubSection>
                <ColonImage>
                  <Colon />
                </ColonImage>
              </Wrap>
            </SubSection>
          );
        })}
      </FirstSection>
    </>
  );
};

export default checklistCard;
