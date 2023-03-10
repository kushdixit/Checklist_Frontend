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
import List from "assets/images/list.png";
import Calendar from "assets/images/calendar.png";
import Bell from "assets/images/bell.png";
import Documents from "assets/images/documents-folder.png";
import Backward from "assets/images/backward-arrow.png";
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

export default SideBar;
