import React, { useState } from "react";
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
  const [statusCode, setStatusCode] = useState();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({ mode: "onChange" });
  const forgotPass = async (data) => {
    const res = await store.dispatch(forgotPassword(data));
    setStatusCode(res);
  };
  // useEffect(() => {
  //   if(statusCode===204){
  //     setTimeout(() => {
  //     }, 2000);
  //   }
  // }, [statusCode])

  return (
    <MainWrapper>
      <Container>
        {statusCode === 204 ? (
          <div>Password has been sent to you on mail</div>
        ) : (
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

              <ResetWrapper>
                <ResetText>RESET PASSWORD</ResetText>
              </ResetWrapper>
            </EmailWrapper>
          </DataWrapper>
        )}
      </Container>
    </MainWrapper>
  );
};

export default ForgotPassword;
