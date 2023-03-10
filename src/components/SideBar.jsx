import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate, getAllTemplateByEmail } from "redux/actions/template";
import { deleteChecklist } from "redux/actions/checklist/index";
import {
  LandingContainer,
  First,
  Second,
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
} from "styles/components/SideBar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Share from "assets/images/share.png";
import ChartPie from "assets/images/chart-pie.png";
import Trash from "assets/images/trash.png";
import Plus from "assets/SVG/Plus";
import Star from "assets/SVG/Star";

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
        <First></First>
        <Second>
          <Plus />
        </Second>
        <Third>Dashboard</Third>
        <Fourth>Calender</Fourth>
        <Fifth>Reminders</Fifth>
      </LeftContainer>
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth?.userData?.email);
  const DeleteHandler = async () => {
    const response = await dispatch(deleteChecklist(data?.id));
    if (response.status === 204) dispatch(getAllTemplateByEmail(userEmail));
  };
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
        <li onClick={DeleteHandler}>
          <img src={Trash} alt="Trash" />
        </li>
      </ul>
    </FourthSection>
  );
};

export default SideBar;
