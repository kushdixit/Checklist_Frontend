import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getAllTemplate } from "redux/actions/template";
import {
  LandingContainer,
  NavSection,
  IconInputFieldNew,
  SearchSection,
  LeftSection,
  RightSection,
  Listeners,
  SubMainSection,
  ImageSection,
  Text,
  Border,
} from "styles/pages/ChecklistDashboard";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SET_SEARCH } from "redux/actions/action_types";
import CheckliCardWrapper from "components/CheckliCardWrapper";
import Google from "assets/images/google.png";
import Person from "assets/images/person.png";
import Flower from "assets/images/flower.jpg";
import Footer from "components/Footer";
import SideBar from "components/SideBar";

const ChecklistDashboard = (search) => {
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
      <NavSection>
        <Navbar search={true} navType="freeTemplate" />
      </NavSection>
      <SideBar />
      <Footer />
    </LandingContainer>
  );
};

export default ChecklistDashboard;
