import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  Seventh,
  LeftContainer,
  RightContainer,
  FirstSection,
  SecondSection,
  WrapperSection,
  ThirdSection,
  FourthSection,
} from "styles/components/SideBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Plus from "assets/SVG/Plus";
import Star from "assets/SVG/Star";
import Flower from "assets/images/flower.jpg";
import List from "assets/images/list.png";
import Calendar from "assets/images/calendar.png";
import Bell from "assets/images/bell.png";
import Documents from "assets/images/documents-folder.png";
import Backward from "assets/images/backward-arrow.png";
const SideBar = (search) => {
  const dispatch = useDispatch();
  const templateData = useSelector((state) => state.Template?.yourTemplate);
  // console.log(templateData[0]?.checklists);

  const da = templateData[0]?.checklists?.filter((item, index) => index <= 10);
  console.log("da", da);

  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  const { handleSubmit: submitData, control: formControl } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  return (
    <LandingContainer>
      <LeftContainer>
        <First>
          <img src={Backward} />
        </First>
        <Second>
          <Plus />
        </Second>
        <Third>
          <img src={List} />
          Dashboard
        </Third>
        <Fourth>
          {" "}
          <img src={Calendar} />
          Calender
        </Fourth>
        <Fifth>
          {" "}
          <img src={Bell} />
          Reminders
        </Fifth>
        <Sixth></Sixth>
        <Seventh>
          <img src={Documents} />
          New Folder
        </Seventh>
      </LeftContainer>
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

export default SideBar;
