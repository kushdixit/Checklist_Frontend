import React from "react";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
} from "styles/pages/ForgetPassword";
import { useNavigate } from "react-router-dom";

const LogoutModal = ({ notify, togglefunction, title }) => {
  const navigate = useNavigate();

  return (
    <DataWrapper>
      <Heading>Confirm {title}</Heading>
      <ButtonWrapper>
        <ModalButton
          onClick={() => {
            notify();
            navigate("/");
            togglefunction(false);
          }}
        >
          Yes
        </ModalButton>
        <ModalButton onClick={() => togglefunction(false)}>No</ModalButton>
      </ButtonWrapper>
    </DataWrapper>
  );
};

export default LogoutModal;
