import React from "react";
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
} from "styles/pages/SignUp";

const SignUp = () => {
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
  
   
 
    return (
        <>
        <LoginContainer>
        <LeftContainer>   <img src={Checklist} alt="Checklist" /></LeftContainer>
        <RightContainer>
      <FormBody>
      
          <RegistrationContainer>
            <FormContainer>
              <Heading>Sign Up</Heading>
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
              
                <EmailIcon className="emailIcon" />
              </IconInputField>

              <IconInputField>
                <TextInput
                name="Password"
                type="password"
                placeholder="Password"
                control={control}
                />
             
                <LockIcon className="startIcon" />
              </IconInputField>

              
              <Footer>
                <Button>Sign  Up</Button>
              </Footer>
            </FormContainer>

          </RegistrationContainer>
        
      </FormBody>
      </RightContainer>
    
      </LoginContainer>
        </>   

         );
  };

  

export default SignUp;
