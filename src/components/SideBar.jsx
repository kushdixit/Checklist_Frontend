import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  First,
  Second,
  DisabledText,
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
import Forward from "assets/images/forward.png";

const Pages = [
  {
    image: List,
    name: "Dashboard",
    disabled: false,
  },
  {
    image: Calendar,
    name: "Calender",
    disabled: true,
  },
  {
    image: Bell,
    name: "Reminders",
    disabled: true,
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer width={open} animate={{ x: 8 }}>
      <First position={open}>
        <button className="button" onClick={() => setOpen(!open)}>
          <ArrowImage src={!open ? Forward : Backward} />
        </button>
      </First>
      <LeftContainer>
        <Second padding={open}>
          <Plus
            onClick={() => navigate("/temp")}
            style={{ cursor: "pointer" }}
          />
        </Second>
        {Pages?.map((item) => (
          <DisabledText
            onClick={() => item?.name === "Dashboard" && navigate("/process")}
            disabled={item?.disabled}
          >
            <img src={item?.image} alt={item?.name} />
            {open && <h2>{item?.name}</h2>}
          </DisabledText>
        ))}
        <Sixth></Sixth>
        <DisabledText disabled={true}>
          <img src={Folder} alt=" Folder 1" />
          {open && <h2> Folder 1</h2>}
        </DisabledText>
        <DisabledText disabled={true}>
          <img src={Documents} alt=" New Folder" />
          {open && <h2> New Folder</h2>}
        </DisabledText>
      </LeftContainer>
    </LandingContainer>
  );
};

export default SideBar;
