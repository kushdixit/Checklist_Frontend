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
    watch,
    formState: { errors },
  } = useForm();
  const Resethandler = (data) => {
    console.log(data);
    console.log("data", data);
    console.log("inside");
    store.dispatch(resetPassword(data.example, passwordReset));
  };

  const passwordReset = useSelector((state) => state.auth.userData.id);

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
                  {...register("example", { required: true })}
                  placeholder="Enter Password"
                />
                {errors.example && <p>This field is required</p>}
              </PasswordInput>
              <PasswordInput>
                <input
                  {...register("exampleRequired", { required: true })}
                  placeholder="Confirm Password"
                />
                {errors.exampleRequired && <p>This field is required</p>}
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
