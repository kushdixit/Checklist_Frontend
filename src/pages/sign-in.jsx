
import { useForm, Controller } from "react-hook-form";
import TextInput from "components/FormElements/TextInput";
import CheckboxInput from "components/FormElements/CheckboxInput";
import { useNavigate } from "react-router-dom";
import EmailIcon from "assets/SVG/EmailIcon";
import LockIcon from "assets/SVG/LockIcon";
import Button from "components/Button";
import React, { useState } from "react";

import Checklist from "assets/images/checklist.svg";
import Google from "assets/images/google.svg";
import Facebook from "assets/images/facebook.svg";
import AlertModal from "components/AlertModal";
import {
  BodyContainer,
  RegistrationContainer,
  FormContainer,
  IconInputField,
  FormBody,
  Footer,
  RememberSection,
  Heading,
  LoginContainer,
  LeftContainer,
  RightContainer,
  IconSection,
  LeftIconSection,
  RightIconSection,
  IconText
} from "styles/pages/AccountForm";

const SignIn = () => {
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
  });

  const formData = () => {
    navigate("/dashboard");
  };

  const formFields = () => {
    return (
    
      <LoginContainer>
        <LeftContainer>   <img src={Checklist} alt="Checklist" /></LeftContainer>
        <RightContainer>
      <FormBody>
        <form onSubmit={handleSubmit(formData)}>
          <RegistrationContainer>
            <FormContainer>
              <Heading>Log In</Heading>
              <AlertModal isOpen={modal} togglefunction={toggleab} />
              <IconSection>
                <LeftIconSection>
                <img src={Google} alt="Google" /><IconText>Login with Google</IconText>
                </LeftIconSection>
                <RightIconSection>
                <img src={Facebook} alt="Facebook" /><IconText>Login with Facebook</IconText>
                </RightIconSection>
              </IconSection>
        
              <IconInputField>
                <TextInput
                  name="Email Address"
                  type="text"
                  placeholder="Email Address"
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
                  name="Password"
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
                
                <h5 className="forgotPassword" onClick={() => toggleab(true)}>Forgot Password?</h5>
              </RememberSection>
              <Footer>
                <Button>Log In</Button>
              </Footer>
            </FormContainer>

          </RegistrationContainer>
        </form>
      </FormBody>
      </RightContainer>
    
      </LoginContainer>
           
    );
  };

  return <BodyContainer>{formFields()}</BodyContainer>;
};
export default SignIn;
