import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
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
import Folder from "assets/images/folder.png";
const SideBar = (search) => {
  const dispatch = useDispatch();
  const [updateSearch, SetUpdateSearch] = useState("");
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isGood, setIsGood] = useState(true);
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  const { handleSubmit: submitData, control: formControl } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  return (
    <LandingContainer width={isGood ? "100%" : "60px"}>
      <First padding={isGood ? "40px 20px" : "40px 7px 40px 6px;"}>
        <button className="button" onClick={() => setIsGood(!isGood)}>
          <img src={Backward} />
        </button>
      </First>

      <LeftContainer>
        <Second padding={isGood ? "8px 20px" : "8px 0 8px 7px;"}>
          <Plus />
        </Second>
        <Third padding={isGood ? "8px 20px" : "8px 0 8px 17px;"}>
          <img src={List} />
          <h2 style={{ display: isGood ? "block" : "none" }}>Dashboard</h2>
        </Third>
        <Fourth padding={isGood ? "8px 20px" : "8px 0 8px 17px;"}>
          {" "}
          <img src={Calendar} />
          <h2 style={{ display: isGood ? "block" : "none" }}>Calender</h2>
        </Fourth>
        <Fifth padding={isGood ? "8px 20px" : "8px 0 8px 17px;"}>
          {" "}
          <img src={Bell} />
          <h2 style={{ display: isGood ? "block" : "none" }}>Reminders</h2>
        </Fifth>
        <Sixth style={{ display: isGood ? "block" : "none" }}></Sixth>
        <Seventh padding={isGood ? "11px 20px" : "11px 17px;"}>
          {" "}
          <img src={Folder} />
          <h2 style={{ display: isGood ? "block" : "none" }}> Folder 1</h2>
        </Seventh>
        <Seventh padding={isGood ? "11px 20px" : "11px 17px;"}>
          {" "}
          <img src={Documents} />
          <h2 style={{ display: isGood ? "block" : "none" }}> New Folder</h2>
        </Seventh>
      </LeftContainer>
    </LandingContainer>
  );
};

export default SideBar;
