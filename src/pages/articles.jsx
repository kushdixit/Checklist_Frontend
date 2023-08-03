import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { store } from "redux/index";
import { authLogin } from "../redux/actions/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { colors } from "constants/color";
import {
  Container,
  FirstSection,
  MainContainer,
  ThirdSection,
  First,
  Second,
  Third,
  FourthSection,
} from "styles/pages/Articles";

const Articles = () => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^\S/, "First character cannot be Space ")
      .email("Please enter a valid Email")
      .max(255),
    password: yup.string().required("Password is required"),
  });
  const navigate = useNavigate();
  const { state } = useLocation();

  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  const formFields = () => {
    return (
      <MainContainer>
        <Container>
          <FirstSection>Creating New Article</FirstSection>
          <ThirdSection>
            <First>Completed By</First>
            <Second>Date Completed</Second>
            <Third>Additional Notes</Third>
          </ThirdSection>
          <FourthSection>
            <First>Completed By</First>
            <Second>Date Completed</Second>
            <Third>Additional Notes</Third>
          </FourthSection>
          <FourthSection>
            <First>Completed By</First>
            <Second>Date Completed</Second>
            <Third>Additional Notes</Third>
          </FourthSection>
          <FourthSection>
            <First>Completed By</First>
            <Second>Date Completed</Second>
            <Third>Additional Notes</Third>
          </FourthSection>
          <FirstSection></FirstSection>
        </Container>
      </MainContainer>
    );
  };

  return <div>{formFields()}</div>;
};
export default Articles;
