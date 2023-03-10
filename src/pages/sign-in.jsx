import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import ErrorComponent from "components/Error";
import { useNavigate, useLocation } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import Checklist from "assets/images/checklist.svg";
import AlertModal from "components/AlertModal";
import { store } from "redux/index";
import { authLogin } from "../redux/actions/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BodyContainer,
  RegistrationContainer,
  FormContainer,
  IconInputField,
  FormBody,
  ButtonWrapper,
  Heading,
  LoginContainer,
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
} from "styles/pages/AccountForm";
import Google from "components/Google";
import Facebook from "components/Facebook";

const SignIn = () => {
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

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   if (token) navigate("/dashboard");
  //   else
  //     navigate("/sign-in", {
  //       state,
  //     });
  // }, []);

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
    // if (res?.data?.accessToken) navigate(state?.redirect || "/dashboard");
    // else {
    //   setLoginError(true);
    //   setResetError(false);
    // }
  };
  const formFields = () => {
    return (
      <LoginContainer>
        <LeftContainer>
          <img src={Checklist} alt="Checklist" />
        </LeftContainer>
        <RightContainer>
          <FormBody>
            <ChecklistHeader>CheckList</ChecklistHeader>
            <AlertModal
              modalType="forgot"
              isOpen={modal}
              togglefunction={toggleab}
              notify={notify}
            />
            <form onSubmit={handleSubmit(formData)}>
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Log In</Heading>
                  <IconSection>
                    <LeftIconSection>
                      <IconText>
                        <Facebook />
                      </IconText>
                    </LeftIconSection>
                    <RightIconSection>
                      <IconText>
                        <Google />
                      </IconText>
                    </RightIconSection>
                  </IconSection>
                  <IconInputField>
                    <TextInput
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      control={control}
                      showAutoComplete={true}
                    />
                    <Error>{errors.email && errors.email.message}</Error>
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <IconInputField>
                    <TextInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      control={control}
                    />
                    {
                      <Error>
                        {showError &&
                          errors?.password &&
                          errors?.password?.message}
                      </Error>
                    }
                    <LockIcon className="startIcon" />
                  </IconInputField>
                  <ButtonWrapper>
                    <Button>Log In</Button>
                  </ButtonWrapper>
                </FormContainer>
              </RegistrationContainer>
            </form>
            {loginError && (
              <ErrorComponent
                message=" User doesn't exist or password is wrong"
                primary="#d65e5e"
                secondary="#f0d3d3"
              />
            )}
            {resetError && (
              <ErrorComponent message="Please check your mail for temporary password" />
            )}

            <UserHelper>
              <Forgot
                className="forgotPassword"
                onClick={() => {
                  setShowError(false);
                  toggleab(true);
                }}
              >
                Forgot Password?
              </Forgot>
              <SignUp onClick={() => navigate("/sign-up")}>Sign Up</SignUp>
            </UserHelper>
          </FormBody>
        </RightContainer>
      </LoginContainer>
    );
  };

  return <BodyContainer>{formFields()}</BodyContainer>;
};
export default SignIn;
