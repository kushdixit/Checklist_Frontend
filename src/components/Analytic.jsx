import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  RightContainer,
  FirstSection,
  SecondSection,
  WrapperSection,
  ThirdSection,
  FourthSection,
} from "styles/components/Analytic";
import { useNavigate } from "react-router-dom";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Star from "assets/SVG/Star";

const Analytic = (search) => {
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <FirstSection>My Dashboard</FirstSection>
          <SecondSection>
            All of your checklists, processes and templates.Help Video
          </SecondSection>
          <ThirdSection>
            <ul>
              <li>Name</li>
              <li>Share</li>
              <li>Insights</li>
              <li>Delete</li>
            </ul>
          </ThirdSection>
          {templateData[0]?.checklists
            ?.filter((item, index) => index <= 9)
            .map((item) => (
              <ChecklistWrapper data={item} />
            ))}
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

const ChecklistWrapper = ({ data }) => {
  const navigate = useNavigate();
  return (
    <FourthSection>
      <ul>
        <li>
          <Star />{" "}
          <div
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              textAlign: "left",
            }}
            onClick={() => {
              navigate(`/createChecklist/${data?.id}`, {
                state: { showEditable: false, cardType: "user" },
              });
            }}
          >
            {data?.checklistName}
          </div>
        </li>
        <li>
          <img src={Share} alt="Share" />
        </li>
        <li>
          <img src={ChartPie} alt="ChartPie" />
        </li>
        <li>
          <img src={Trash} alt="Trash" />
        </li>
      </ul>
    </FourthSection>
  );
};

export default Analytic;
