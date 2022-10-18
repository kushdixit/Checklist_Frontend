import React from "react";
import ForgotPassword from "./forgetPassword";
import Button from "components/Button";
import { ModalBody, ModalFooter } from "reactstrap";
import { Container } from "styles/components/AlertModal";
import styled from "styled-components";
import ReactModal from "react-modal";

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

const AlertModal = ({
  isOpen,
  togglefunction,
  toggle,
  title,
  content,
  link,
  close,
  hideButton,
  handleClick,
}) => {
  const redirectLink = (link) => {
    if (link) toggle(!isOpen);
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

      <ForgotPassword />
    </ReactModal>
  );
};

export default AlertModal;

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
