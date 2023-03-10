import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  LeftSection,
  LeftContentWrapper,
  Third,
  Fourth,
  Fifth,
  LeftContainer,
  RightContainer,
  FirstSection,
  SecondSection,
  WrapperSection,
  ThirdSection,
  FourthSection,
} from "styles/components/AnalyticCreateChecklist";
import TextInput from "components/FormElements/TextInput";
import ChecklistTitle from "components/ChecklistTitle";
import DescriptionTitle from "components/DescriptionTitle";
import TaskTitle from "components/TaskTitle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SET_SEARCH } from "redux/actions/action_types";
import CheckliCardWrapper from "components/CheckliCardWrapper";
import Google from "assets/images/google.png";
import Person from "assets/images/person.png";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Plus from "assets/SVG/Plus";
import Star from "assets/SVG/Star";
import Flower from "assets/images/flower.jpg";
import Footer from "components/Footer";
const AnalyticCreateChecklist = (search) => {
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  // console.log(templateData[0]?.checklists);

  const da = templateData[0]?.checklists?.filter((item, index) => index <= 10);
  const allTemplate = useSelector((state) => state.Template?.allTemplate);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  const { handleSubmit: submitData, control: formControl } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  return (
    <LandingContainer>
      <RightContainer>
        <WrapperSection>
          <FirstSection>My Dashboard</FirstSection>
          <SecondSection>
            All of your checklists, processes and templates.Help Video
          </SecondSection>
          <LeftSection>
            <LeftContentWrapper>
              <ChecklistTitle />
              <DescriptionTitle />
              <ImageWrapper
                title={pathId ? ChecklistDetail?.checklistName : "untitled"}
              />
              <TaskTitle toggleabc={toggleabc} />
            </LeftContentWrapper>
          </LeftSection>
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
            style={{ cursor: "pointer", textDecoration: "underline" }}
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

const ImageWrapper = ({ title }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <img
        src="https://s3.amazonaws.com/checkli.com/featured/apple.png"
        alt="pic"
        style={{ width: "100%", maxWidth: "739px", height: "auto" }}
      />
      <div style={{ fontSize: "12px", color: "#aaa", fontStyle: "italic" }}>
        {title}
      </div>
      <SubModal buttonNew="Description" />
    </div>
  );
};
export default AnalyticCreateChecklist;
