import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import Checklist from "assets/images/checklist.svg";
import Google from "assets/images/google.svg";
import Facebook from "assets/images/facebook.svg";
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
  SignUp,
} from "styles/pages/AccountForm";

const SignIn = () => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^\S/, "First character cannot be Space ")
      .email("Please enter a valid Email")
      .max(255),
    password: yup.string().required("Password is required"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
    //   "Minimum five characters, at least one letter and one number and one special case Character"
    // ),
  });
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  function toggleab(data) {
    setModal(data);
  }

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
    const res = await store.dispatch(authLogin(data));
    if (res.error === false) navigate("/dashboard");
  };

  const formFields = () => {
    return (
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
                  <Heading>Log In</Heading>
                  <AlertModal isOpen={modal} togglefunction={toggleab} />
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
                      name="email"
                      type="text"
                      placeholder="Email Address"
                      control={control}
                    />
                    {<Error>{errors.email && errors.email.message}</Error>}
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
                        {errors?.password && errors?.password?.message}
                      </Error>
                    }
                    <LockIcon className="startIcon" />
                  </IconInputField>

                  <RememberSection>
                    <Controller
                      name="rememberMe"
                      control={control}
                      render={({ field }) => (
                        <CheckboxInput
                          className="checkBox"
                          label="Remember Me"
                          {...field}
                        />
                      )}
                    />

                    <h5
                      className="forgotPassword"
                      onClick={() => toggleab(true)}
                    >
                      Forgot Password?
                    </h5>
                  </RememberSection>
                  <ButtonWrapper>
                    <Button>Log In</Button>
                  </ButtonWrapper>
                </FormContainer>
              </RegistrationContainer>
            </form>
          </FormBody>
          <SignUp onClick={() => navigate("/sign-up")}>Sign Up?</SignUp>
        </RightContainer>
      </LoginContainer>
    );
  };

  return <BodyContainer>{formFields()}</BodyContainer>;
};
export default SignIn;
