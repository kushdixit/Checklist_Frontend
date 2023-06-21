import React, { useState, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import Checklist from "assets/images/checklist.svg";
import { store } from "redux/index";
import { authLogin } from "../redux/actions/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { colors } from "constants/color";
import {
  RegistrationContainer,
  FormContainer,
  IconInputField,
  FormBody,
  ButtonWrapper,
  Heading,
  Container,
  LeftContainer,
  RightContainer,
  IconSection,
  LeftIconSection,
  RightIconSection,
  IconText,
  Error,
  SignUp,
  UserHelper,
  Forgot,
  ChecklistHeader,
  Label,
  FirstSection,
  SecondSection,
} from "styles/pages/CompleteForm";
import { Input } from "antd";

const { TextArea } = Input;
const TextInput = lazy(() => import("components/FormElements/TextInput"));
const ErrorComponent = lazy(() => import("components/Error"));
const AlertModal = lazy(() => import("components/AlertModal"));
const Google = lazy(() => import("components/Google"));
const Facebook = lazy(() => import("components/Facebook"));

const CompleteForm = () => {
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

  const [showError, setShowError] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [resetError, setResetError] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleab(data) {
    setModal(data);
  }
  const notify = (res) => {
    setShowError(true);
    setResetError(true);
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  const formData = async (data) => {
    setLoginError(false);
    const payload = {
      email: data.email,
      password: data.password,
      issocial: 0,
    };
    const res = await store.dispatch(authLogin(payload));
    if (res?.data?.accessToken)
      navigate(state?.redirect || "/process", {
        state: {
          userApi: state?.userApi || false,
          id: state?.id,
        },
      });
    else {
      setLoginError(true);
      setResetError(false);
    }
  };
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  const formFields = () => {
    return (
      <Container>
        <FirstSection>Submit your complete work</FirstSection>
        <SecondSection>http;//www.checkli.com/process</SecondSection>

        <FormBody>
          <form onSubmit={handleSubmit(formData)}>
            <RegistrationContainer>
              <FormContainer>
                <IconInputField>
                  <Label>Name</Label>
                  <TextInput
                    name=""
                    type=""
                    placeholder=""
                    control={control}
                    showAutoComplete={true}
                  />
                </IconInputField>
                <IconInputField>
                  <Label>Submit to:</Label>
                  <TextInput name="" type="" placeholder="" control={control} />
                </IconInputField>
                <IconInputField>
                  <Label>Notes</Label>
                  <TextArea />
                </IconInputField>
                <ButtonWrapper>
                  <Button>Submit Now</Button>
                </ButtonWrapper>
              </FormContainer>
            </RegistrationContainer>
          </form>
        </FormBody>
        <FirstSection>Your submission wil be email your marsell</FirstSection>
        <SecondSection>http;//www.checkli.com/process</SecondSection>
      </Container>
    );
  };

  return <div>{formFields()}</div>;
};
export default CompleteForm;
