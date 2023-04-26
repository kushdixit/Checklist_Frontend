import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  First,
  Second,
  DisabledText,
  LeftContainer,
  ArrowImage,
} from "styles/components/SideBar";
import Plus from "assets/SVG/Plus";
import List from "assets/images/list.png";
import Calendar from "assets/images/calendar.png";
import Bell from "assets/images/bell.png";
import Backward from "assets/images/backward-arrow.png";
import Forward from "assets/images/forward.png";

const Pages = [
  {
    image: List,
    name: "Dashboard",
    disabled: false,
  },
  // {
  //   image: Calendar,
  //   name: "Calender",
  //   disabled: true,
  // },
  // {
  //   image: Bell,
  //   name: "Reminders",
  //   disabled: true,
  // },
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
            onClick={() => navigate("/create-list")}
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
      </LeftContainer>
    </LandingContainer>
  );
};

export default SideBar;
