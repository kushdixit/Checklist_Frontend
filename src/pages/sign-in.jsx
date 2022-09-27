import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import {
  BodyContainer,
  RegistrationContainer,
  FormContainer,
  IconInputField,
  FormBody,
  Footer,
  RememberSection,
  Heading,
} from "styles/pages/AccountForm";
import Googlelogin from "components/GoogleAuth";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    shouldFocusError: true,
  });

  const formData = () => {
    navigate("/dashboard");
  };

  const formFields = () => {
    return (
      <FormBody>
        <form onSubmit={handleSubmit(formData)}>
          <RegistrationContainer>
            <FormContainer>
              <Heading>Log In</Heading>
              <IconInputField>
                <TextInput
                  name="email"
                  type="text"
                  placeholder="Email"
                  control={control}
                />
                {
                  <h3 className="error-message">
                    {errors.email && errors.email.message}
                  </h3>
                }
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
                  <h3 className="error-message">
                    {errors?.password && errors?.password?.message}
                  </h3>
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
                <h5 className="forgotPassword" onClick={() =>   navigate("/forgotpassword")}>Forgot Password?</h5>
              </RememberSection>
              <Footer>
                <Button>Log In</Button>
               < Googlelogin/>
              </Footer>
            </FormContainer>
          </RegistrationContainer>
        </form>
      </FormBody>
    );
  };

  return <BodyContainer>{formFields()}</BodyContainer>;
};
export default SignIn;
