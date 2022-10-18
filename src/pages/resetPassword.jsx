import TextInput from "components/FormElements/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  MainWrapper,
  Container,
  ResetWrapper,
  PasswordInput,
  ResetButton,
  ResetText,
  ResetHeading,
} from "styles/pages/ResetPassword";
import { resetPassword } from "../redux/actions/auth";
import { store } from "redux/index";

const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const Resethandler = (data) => {
    store.dispatch(resetPassword(data.password));
  };

  const passwordReset = useSelector((state) => state.auth.userData.id);

  return (
    <form onSubmit={handleSubmit(Resethandler)}>
      <MainWrapper>
        <Container>
          <ResetHeading>Reset Account Password</ResetHeading>
          <ResetWrapper>
            <PasswordInput>
              <TextInput
                name="password"
                className="password"
                type="text"
                placeholder="Password"
                control={control}
              />

              {errors?.password && errors?.password?.message}
            </PasswordInput>
            <PasswordInput>
              <TextInput
                name="confirmPassword "
                className="password"
                type="text"
                placeholder="Confirm Password"
                control={control}
              />
            </PasswordInput>
          </ResetWrapper>
          <ResetButton>
            <ResetText>Reset Password</ResetText>
          </ResetButton>
        </Container>
      </MainWrapper>
    </form>
  );
};

export default ResetPassword;
