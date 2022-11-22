import React from "react";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
} from "styles/pages/ForgetPassword";

const LogoutModal = ({ notify, togglefunction }) => {
  return (
    <DataWrapper>
      <Heading>Confirm Logout</Heading>
      <ButtonWrapper>
        <ModalButton onClick={notify}>Yes</ModalButton>
        <ModalButton onClick={() => togglefunction(false)}>No</ModalButton>
      </ButtonWrapper>
    </DataWrapper>
  );
};

export default LogoutModal;
