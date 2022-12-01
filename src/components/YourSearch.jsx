import React from "react";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  CardMainSection,
} from "styles/components/Card";
import Card from "./Card";
import FirstImage from "assets/images/checklist.svg";

const YourSearch = ({ searchedData }) => {
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
          <h2>Searched List</h2>
        </SubSectionNew>
      </NewSection>

      <CardMainSection>
        <FirstSection>
          {searchedData
            ?.filter((subItem) => subItem.isActive)
            .map((subItem, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  item={subItem}
                  Checklist={Checklist}
                  showEditable={true}
                />
              );
            })}
        </FirstSection>
      </CardMainSection>
    </>
  );
};

export default YourSearch;
