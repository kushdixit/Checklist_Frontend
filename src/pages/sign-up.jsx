import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import { store } from "redux/index";
import Checklist from "assets/images/checklist.svg";
import Google from "assets/images/google.svg";
import Facebook from "assets/images/facebook.svg";
import {
  BodyContainer,
  RegistrationContainer,
  FormContainer,
  LoginButton,
  IconInputField,
  FormBody,
  ButtonWrapper,
  RememberSection,
  Heading,
  LoginContainer,
  LeftContainer,
  RightContainer,
  IconSection,
  LeftIconSection,
  RightIconSection,
  IconText,
  Error,
} from "styles/pages/SignUp";
import { authSignup } from "../redux/actions/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name can't be empty")
      .matches(/^\S/, "First character cannot be Space ")
      .min(5),
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
    password: yup.string().required("Password is required").min(5),
    passwordConfirmation: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  const formData = async (data) => {
    await store.dispatch(authSignup(data));
    // if (res.error === false) navigate("/dashboard");
  };

  return (
    <>
      <LoginContainer>
        <LeftContainer>
          {" "}
          <img src={Checklist} alt="Checklist" />
        </LeftContainer>
        <RightContainer>
          <FormBody>
            <form onSubmit={handleSubmit(formData)}>
              <RegistrationContainer>
                <FormContainer>
                  <Heading>Sign Up</Heading>
                  <IconSection>
                    <LeftIconSection>
                      <img src={Google} alt="Google" />
                      <IconText>Login with Google</IconText>
                    </LeftIconSection>
                    <RightIconSection>
                      <img src={Facebook} alt="Facebook" />
                      <IconText>Login with Facebook</IconText>
                    </RightIconSection>
                  </IconSection>
                  <IconInputField>
                    <TextInput
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      control={control}
                    />
                    {
                      <Error>
                        {errors.firstName && errors.firstName.message}
                      </Error>
                    }
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <IconInputField>
                    <TextInput
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      control={control}
                    />
                    {
                      <Error>
                        {errors.lastName && errors.lastName.message}
                      </Error>
                    }
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <IconInputField>
                    <TextInput
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      control={control}
                    />
                    {<Error>{errors.email && errors.email.message}</Error>}
                    <EmailIcon className="emailIcon" />
                  </IconInputField>
                  <div>
                    <IconInputField>
                      <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        control={control}
                      />
                      {
                        <Error>
                          {errors.password && errors.password.message}
                        </Error>
                      }
                      <LockIcon className="startIcon" />
                    </IconInputField>
                    <IconInputField>
                      <TextInput
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Confirm Password"
                        control={control}
                      />
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
          </FormBody>
          <LoginButton
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Log In
          </LoginButton>
        </RightContainer>
      </LoginContainer>
    </>
  );
};

export default SignUp;
