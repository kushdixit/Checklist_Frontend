import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import Navbar from "../components/Navbar";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import ChecklistCards from "../components/ChecklistCards";
import {
  LandingContainer,
  Heading,
  NavSection,
  SubHeading,
  ChecklistButton,
  SecondHeading,
  LandingCardSection,
} from "styles/pages/Landing";
import LandingCard from "../components/LandingCard";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTemplate = useSelector((state) => state.Template?.allTemplate);
  useEffect(() => {
    // const token = localStorage.getItem("access_token");
    // if (token) navigate("/dashboard");
    // else navigate("/landing");
    dispatch(getAllTemplate());
  }, []);

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} showProfile={true} />
      </NavSection>
      <Heading>
        Make your checklists,
        <br />
        and browse through them.
      </Heading>
      <h3>
        Organize your mind or scale your bussiness the right way,every time.
      </h3>
      <ChecklistButton>
        <Button
          className="button"
          handleClick={() =>
            localStorage.getItem("access_token")
              ? navigate("/createChecklist")
              : navigate("/sign-in")
          }
        >
          Make your checklist
        </Button>
      </ChecklistButton>
      <h1
        onClick={() =>
          localStorage.getItem("access_token")
            ? navigate("/dashboard")
            : navigate("/sign-in")
        }
      >
        Browse Your Checklist
      </h1>
      <SecondHeading>How it works</SecondHeading>
      <h4>
        Organize your mind or scale your bussiness the right way,every time.
      </h4>
      <LandingCardSection>
        <LandingCard />
      </LandingCardSection>
      {allTemplate?.map((item, id) => (
        <ChecklistCards key={id} item={item} />
      ))}
    </LandingContainer>
  );
};

export default Landing;
