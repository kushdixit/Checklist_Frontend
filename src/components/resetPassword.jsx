import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  MainWrapper,
  Container,
  ResetWrapper,
  PasswordInput,
  ResetButton,
  ResetText,
  ResetHeading,
  Form,
  Error,
} from "styles/pages/ResetPassword";
import { resetPassword } from "../redux/actions/auth";
import { store } from "redux/index";
import styled from "styled-components";
import ReactModal from "react-modal";
import { SIGN_IN } from "redux/actions/action_types";

const ResetPassword = ({ isOpen, togglefunction, hideButton }) => {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/,
        "Minimum five characters, at least one letter and one number and one special case Character"
      ),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: yupResolver(formSchema),
  });

  const resetId = useSelector((state) => state.auth?.userData.id);
  const userData = useSelector((state) => state.auth?.userData);
  const Resethandler = async (data) => {
    if (data.password === data.confirmPwd) {
      const res = await store.dispatch(resetPassword(data.password, resetId));
      if (res === 204) {
        store.dispatch({
          type: SIGN_IN,
          payload: { ...userData, isForgotPassword: false },
        });
        togglefunction(false);
      }
    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "15px 20px",
      overflowY: "hidden",
    },
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={hideButton}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Form onSubmit={handleSubmit(Resethandler)}>
        <MainWrapper>
          <Container>
            <ResetHeading>Reset Account Password</ResetHeading>
            <ResetWrapper>
              <PasswordInput>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                <Error className="invalid-feedback">
                  {errors.password?.message}
                </Error>
              </PasswordInput>
              <PasswordInput>
                <input
                  name="confirmPwd"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPwd")}
                  className={`form-control ${
                    errors.confirmPwd ? "is-invalid" : ""
                  }`}
                />
                <Error className="invalid-feedback">
                  {errors.confirmPwd?.message}
                </Error>
              </PasswordInput>
            </ResetWrapper>
            <ResetButton>
              <ResetText type="submit" />
            </ResetButton>
          </Container>
        </MainWrapper>
      </Form>
    </ReactModal>
  );
};

export default ResetPassword;

export const Testing = styled.div`
  text-align: right;
  padding: 10px;
`;

export const AlertButton = styled.div`
  justify-content: center;
  display: flex;
  .AlertBtn {
    width: 115px;
    height: 37px;
  }
`;

export const MainSection = styled.div`
  text-align: right;
  width: 200px;
  background: #000;
`;
export const Sub = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  button {
    width: 100%;
    justify-content: right;
    display: flex;
    border-radius: 10px;
    box-shadow: unset;
    background: unset;
    color: #1d2e8b;
    border: unset;
  }
  button:hover {
    opacity: 0.4;
  }
`;
