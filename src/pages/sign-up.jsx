import React, { useState, lazy, Suspense } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import { store } from "redux/index";
import Checklist from "assets/images/checklist.svg";
import User from "assets/SVG/User";
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
  Error,
  SignIn,
  ChecklistHeader,
  UserLogoWrapper,
} from "styles/pages/SignUp";
import { authSignup } from "../redux/actions/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const TextInput = lazy(() => import("components/FormElements/TextInput"));
const ErrorComponent = lazy(() => import("components/Error"));

const SignUp = () => {
  const navigate = useNavigate();
  const [signinError, setSigninError] = useState(false);

  let schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name can't be empty")
      .matches(/^\S/, "First character cannot be Space "),
    lastName: yup
      .string()
      .required("Last name can't be empty")
      .matches(/^\S/, "First character cannot be Space ")
      .min(5),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^\S/, "First character cannot be Space ")
      .email("Please enter a valid Email")
      .max(255),
    password: yup
      .string()
      .required("Password is required")
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
        "Minimum five characters, at least one letter and one number and one special case Character"
      ),
    passwordConfirmation: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

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
    setSigninError(false);
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      issocial: 0,
    };
    const res = await store.dispatch(authSignup(payload));
    if (res.error === false) navigate("/dashboard");
    else setSigninError(true);
  };

  return (
    <>
      <LoginContainer>
        <LeftContainer>
          <img src={Checklist} alt="Checklist" width={"100%"} height={"100%"} />
        </LeftContainer>
        <RightContainer>
          <FormBody>
            <ChecklistHeader onClick={() => navigate("/")}>
              CheckList
            </ChecklistHeader>
            <form onSubmit={handleSubmit(formData)}>
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Sign Up</Heading>
                  <IconInputField>
                    <Suspense
                      fallback={<h1 className="fallback-css">Loading…</h1>}
                    >
                      <TextInput
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        control={control}
                      />
                    </Suspense>
                    {
                      <Error>
                        {errors.firstName && errors.firstName.message}
                      </Error>
                    }
                    <UserLogoWrapper>
                      <User />
                    </UserLogoWrapper>
                  </IconInputField>
                  <IconInputField>
                    <Suspense
                      fallback={<h1 className="fallback-css">Loading…</h1>}
                    >
                      <TextInput
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        control={control}
                      />
                    </Suspense>
                    {
                      <Error>
                        {errors.lastName && errors.lastName.message}
                      </Error>
                    }
                    <UserLogoWrapper>
                      <User />
                    </UserLogoWrapper>
                  </IconInputField>
                  <IconInputField>
                    <Suspense
                      fallback={<h1 className="fallback-css">Loading…</h1>}
                    >
                      <TextInput
                        name="email"
                        type="text"
                        placeholder="Email Address"
                        control={control}
                      />
                    </Suspense>
                    {<Error>{errors.email && errors.email.message}</Error>}
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <div>
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
                          {errors.password && errors.password.message}
                        </Error>
                      }
                      <LockIcon className="startIcon" />
                    </IconInputField>
                    <IconInputField>
                      <Suspense
                        fallback={<h1 className="fallback-css">Loading…</h1>}
                      >
                        <TextInput
                          name="passwordConfirmation"
                          type="password"
                          placeholder="Confirm Password"
                          control={control}
                        />
                      </Suspense>
                      {
                        <Error>
                          {errors.passwordConfirmation &&
                            errors.passwordConfirmation.message}
                        </Error>
                      }
                      <LockIcon className="startIcon" />
                    </IconInputField>
                  </div>
                  <ButtonWrapper>
                    <Button>Sign Up</Button>
                  </ButtonWrapper>
                </FormContainer>
              </RegistrationContainer>
            </form>
            {signinError && (
              <Suspense fallback={<h1 className="fallback-css">Loading…</h1>}>
                <ErrorComponent
                  message="Email already exist.Please try Logging in"
                  primary="#d65e5e"
                  secondary="#f0d3d3"
                />
              </Suspense>
            )}
            <SignIn onClick={() => navigate("/sign-in")}>Sign In</SignIn>
          </FormBody>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default SignUp;
