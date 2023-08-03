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

const TextInput = lazy(() => import("components/FormElements/TextInput"));
const ErrorComponent = lazy(() => import("components/Error"));
const AlertModal = lazy(() => import("components/AlertModal"));
const Google = lazy(() => import("components/Google"));
const Facebook = lazy(() => import("components/Facebook"));

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
      <LoginContainer>
        <LeftContainer>
          <img src={Checklist} alt="Checklist" width={"100%"} height={"100%"} />
        </LeftContainer>
        <RightContainer>
          <FormBody>
            <ChecklistHeader onClick={() => navigate("/")}>
              CheckList
            </ChecklistHeader>
            <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
              <AlertModal
                modalType="forgot"
                isOpen={modal}
                togglefunction={toggleab}
                notify={notify}
              />
            </Suspense>
            <form onSubmit={handleSubmit(formData)}>
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Log In</Heading>
                  <IconSection>
                    <LeftIconSection>
                      <IconText>
                        <Suspense
                          fallback={<h1 className="fallback-css">Loading…</h1>}
                        >
                          <Facebook />
                        </Suspense>
                      </IconText>
                    </LeftIconSection>
                    <RightIconSection>
                      <IconText>
                        <Suspense
                          fallback={<h1 className="fallback-css">Loading…</h1>}
                        >
                          <Google />
                        </Suspense>
                      </IconText>
                    </RightIconSection>
                  </IconSection>
                  <IconInputField>
                    <Suspense
                      fallback={<h1 className="fallback-css">Loading…</h1>}
                    >
                      <TextInput
                        name="email"
                        type="text"
                        placeholder="Email Address"
                        control={control}
                        showAutoComplete={true}
                      />
                    </Suspense>
                    <Error>{errors.email && errors.email.message}</Error>
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <IconInputField>
                    <Suspense
                      fallback={<h1 className="fallback-css">Loading…</h1>}
                    >
                      <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        control={control}
                      />
                    </Suspense>
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
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ErrorComponent
                  message=" User doesn't exist or password is wrong"
                  primary="#d65e5e"
                  secondary="#f0d3d3"
                />
              </Suspense>
            )}
            {resetError && (
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ErrorComponent message="Please check your mail for temporary password" />
              </Suspense>
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

  return <div>{formFields()}</div>;
};
export default SignIn;
