import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
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
import TextInput from "components/FormElements/TextInput";
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

const SideBar = (search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const navigate = useNavigate();
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
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
          <FourthSection>
            <ul>
              {" "}
              <li>
                <Star /> Minecraft survival to do list
              </li>
              <li>
                {" "}
                <img src={Share} alt="Share" />
              </li>
              <li>
                {" "}
                <img src={ChartPie} alt="ChartPie" />
              </li>
              <li>
                {" "}
                <img src={Trash} alt="Trash" />
              </li>
            </ul>
          </FourthSection>
        </WrapperSection>
      </RightContainer>
    </LandingContainer>
  );
};

export default SideBar;
