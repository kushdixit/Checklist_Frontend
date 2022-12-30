import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import Navbar from "../components/Navbar";
import Button from "components/Button";
import {
  LandingContainer,
  Heading,
  NavSection,
  SubHeading,
  ChecklistButton,
  SecondHeading,
  LandingCardSection
} from "styles/pages/Landing";
import LandingCard from "../components/LandingCard";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <NavSection>
        <Navbar search={true} showProfile={true} />
      </NavSection>
      <Heading>
        Make your checklists,
        <br />
        and recurring team processes.
      </Heading>
      <h3>
        Organize your mind or scale your bussiness the right way,every time.
      </h3>
      <ChecklistButton>
        <Button className="button" handleClick={() => navigate("/sign-in")}>
          Make your checklist
        </Button>
      </ChecklistButton>
      <SecondHeading>How it works</SecondHeading>
      <h4>
        Organize your mind or scale your bussiness the right way,every time.
      </h4>
      <LandingCardSection>
      <LandingCard />
      </LandingCardSection>
    </LandingContainer>
  );
};

export default Landing;
