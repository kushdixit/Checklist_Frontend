import React, { useEffect } from "react";
import LandingCheckliCard from "components/LandingCheckliCard";
import { useDispatch } from "react-redux";
import {
  FirstSection,
  NewSection,
  SubSectionNew,
  SeeMoreWrapper,
  CardMainSection,
  SeeMore,
} from "styles/components/Card";
import { getChecklist } from "redux/actions/checklist";

const ChecklistCards = ({ item, index }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChecklist());
  }, []);

  return (
    <>
      <CardMainSection>
        {index !== 0 && (
          <div style={{ marginTop: "25px", width: "100%", display: "flex" }}>
            <h2
              style={{
                paddingBottom: "10px",
                marginLeft: "20px",
                fontWeight: "600",
              }}
            >
              {item?.templateName}
            </h2>
          </div>
        )}
        <FirstSection>
          {item.checklists
            ?.filter((subItem) => subItem.isActive)
            ?.filter((item, index) => index < 9)
            .reverse()
            .map((subItem) => {
              return <LandingCheckliCard data={subItem} />;
            })}
        </FirstSection>
        <SeeMoreWrapper>
          <SeeMore href="/search">See More</SeeMore>
        </SeeMoreWrapper>
      </CardMainSection>
    </>
  );
};

export default ChecklistCards;
