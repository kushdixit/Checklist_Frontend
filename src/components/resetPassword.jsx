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
} from "styles/pages/ResetPassword";
import { resetPassword } from "../redux/actions/auth";
import { store } from "redux/index";
import styled from "styled-components";
import ReactModal from "react-modal";

const ResetPassword = ({ isOpen, togglefunction, hideButton }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Resethandler = (data) => {
    console.log(data);
    console.log("data", data);
    console.log("inside");
    store.dispatch(resetPassword(data.example, passwordReset));
  };
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  // const { register, handleSubmit, reset, formState } = useForm(formOptions)
  // const { errors } = formState
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
  const passwordReset = useSelector((state) => state.auth?.userData.id);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "15px 20px",
      width: "50vw",
      height: "75vh",
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
      <ButtonWrapper>
        <button className="button" onClick={() => togglefunction(false)}>
          x
        </button>
      </ButtonWrapper>
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
                <div className="invalid-feedback">
                  {errors.confirmPwd?.message}
                </div>
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
                <div className="invalid-feedback">
                  {errors.confirmPwd?.message}
                </div>
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
