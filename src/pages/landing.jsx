import React, { useState, useEffect } from "react";
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
    SecondHeading
} from "styles/pages/Landing";
import LandingCard from "../components/LandingCard";
const Landing = () => {
   
   
    return (
        <LandingContainer>
          <NavSection>
          <Navbar search={true} buttonType="Create List" />
          </NavSection>
          <Heading>Make your checklists,<br/>
            and recurring team processes.
        
          </Heading>
          <h3>Organize your mind or scale your bussiness the right way,every time.</h3>
          <ChecklistButton>
          <Button  className="button">Make your checklist</Button>
          </ChecklistButton>
          <SecondHeading>How it works
        
          </SecondHeading>
          <h4>Organize your mind or scale your bussiness the right way,every time.</h4>
          <LandingCard/>
            </LandingContainer>
    );
  };


export default Landing;
