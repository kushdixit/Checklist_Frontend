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
import { forgotPassword } from "../redux/actions/auth";
import { store } from "redux/index";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const forgotPass = async (data) => {
    store.dispatch(forgotPassword(data));
  };
  return (
    <MainWrapper>
      <Container>
        <DataWrapper onSubmit={handleSubmit(forgotPass)}>
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
