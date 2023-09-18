import React from "react";
import { useDispatch } from "react-redux";
import { resetStore } from "redux/actions/resetAction";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
} from "styles/pages/ForgetPassword";
import { useNavigate } from "react-router-dom";
import { colors } from "constants/color";

const LogoutModal = ({ notify, togglefunction, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const style = {
    backgroundColor: colors.backgroundColor,
    color: colors.primaryColor,
  };
  return (
    <DataWrapper>
      <Heading>Confirm {title}</Heading>
      <ButtonWrapper>
        <ModalButton
          onClick={() => {
            notify();
            console.log("Dispatching resetStore action");
            dispatch(resetStore());
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
