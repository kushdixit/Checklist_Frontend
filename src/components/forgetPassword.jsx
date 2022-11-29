import React from "react";
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

const ForgotPassword = ({ notify, togglefunction }) => {
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    notify(res);
    if (res === 204) togglefunction(false);
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
                style={{ width: "16vw" }}
              />
            </DataInput>
            <ResetWrapper>
              <ResetText handleSubmit={(e) => e.preventDefault()}>
                Reset Password
              </ResetText>
            </ResetWrapper>
          </EmailWrapper>
        </DataWrapper>
      </Container>
    </MainWrapper>
  );
};

export default ForgotPassword;
