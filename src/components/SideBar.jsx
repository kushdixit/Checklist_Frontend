import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  ArrowImage,
} from "styles/components/SideBar";
import Plus from "assets/SVG/Plus";
import List from "assets/images/list.png";
import Calendar from "assets/images/calendar.png";
import Bell from "assets/images/bell.png";
import Documents from "assets/images/documents-folder.png";
import Backward from "assets/images/backward-arrow.png";
import Folder from "assets/images/folder.png";
import Forward from "assets/images/abcd.png";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGood, setIsGood] = useState(true);
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer width={isGood ? "100%" : "60px"}>
      <First position={isGood}>
        <button className="button" onClick={() => setIsGood(!isGood)}>
          <ArrowImage src={!isGood ? Forward : Backward} />
        </button>
      </First>
      <LeftContainer>
        <Second padding={isGood ? "8px 20px" : "8px 0 8px 7px"}>
          <Plus
            onClick={() => navigate("/createChecklist")}
            style={{ cursor: "pointer" }}
          />
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
