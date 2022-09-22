import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "components/FormElements/TextInput";
import { useForm } from "react-hook-form";
import {
  MainWrapper,
  Container,
  DataWrapper,
  Heading,
  DataInput,
  EmailWrapper,
  ResetText,
  ResetWrapper,
} from "styles/pages/ForgetPassword";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({ mode: "onChange" });

  return (
    <MainWrapper>
      <Container>
        <DataWrapper onSubmit={handleSubmit}>
          <Heading>Forgot Your Password?</Heading>
          <EmailWrapper>
            <DataInput>
              <TextInput
                name="email"
                className="emailAddInput"
                type="email"
                placeholder="Email"
                control={control}
              />
            </DataInput>
   
              <ResetWrapper onClick={() => navigate("/resetPassword")}>
                <ResetText>RESET PASSWORD</ResetText>
              </ResetWrapper>
 
          </EmailWrapper>
        </DataWrapper>
      </Container>
    </MainWrapper>
  );
};

export default ForgotPassword;
