import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import Checklist from "assets/images/checklist.svg";
// import Facebook from "assets/images/facebook.svg";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const [showError, setShowError] = useState(true);
  const [modal, setModal] = useState(false);

  function toggleab(data) {
    setModal(data);
  }
  const notify = (res) => {
    setShowError(true);
    res == 204
      ? toast("Please check your mail for temporary password")
      : toast("Please enter correct email");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) navigate("/dashboard");
    else navigate("/sign-in");
  }, []);

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
    const res = await store.dispatch(authLogin(data.email, data.password));
    if (res.error === false) navigate("/dashboard");
  };

  const formFields = () => {
    return (
      <LoginContainer>
        <ToastContainer />
        <LeftContainer>
          <img src={Checklist} alt="Checklist" />
        </LeftContainer>
        <RightContainer>
        <ChecklistHeader>CheckList</ChecklistHeader>
          <FormBody>
           
            <form onSubmit={handleSubmit(formData)}>
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Log In</Heading>
                  <AlertModal
                    modalType="forgot"
                    isOpen={modal}
                    togglefunction={toggleab}
                    notify={notify}
                  />
                  <IconSection>
                    <LeftIconSection>
                      {/* <img src={Google} alt="Google" /> */}
                      <IconText>
                        <Facebook />
                      </IconText>
                    </LeftIconSection>
                    <RightIconSection>
                      {/* <img
                        src={Facebook}
                        alt="Facebook"
                        styles={{ width: "auto", height: "auto" }}
                      /> */}
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
