import React from "react";
import ForgotPassword from "./forgetPassword";
import LogoutModal from "./LogoutModal";
import BurgerModal from "./burgerModal";
import MoveModal from "./MoveModal";
import FontColorsModal from "./FontColorsModal";
import ReactModal from "react-modal";
import { ButtonWrapper } from "styles/components/AlertModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "19px",
    transform: "translate(-50%, -50%)",
    padding: "15px 35px",

    height: "auto",
    overflowY: "hidden",
  },
};

const AlertModal = ({
  isOpen,
  togglefunction,
  hideButton,
  notify,
  modalType,
  checklistId,
  templateName,
}) => {
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
      {modalType === "logout" && (
        <LogoutModal
          togglefunction={togglefunction}
          notify={notify}
          title="Logout"
        />
      )}
      {modalType === "forgot" && (
        <ForgotPassword notify={notify} togglefunction={togglefunction} />
      )}
      {modalType === "burger" && (
        <BurgerModal notify={notify} togglefunction={togglefunction} />
      )}
      {modalType === "delete" && (
        <LogoutModal
          togglefunction={togglefunction}
          notify={notify}
          title="Delete"
        />
      )}
      {modalType === "move" && (
        <MoveModal
          notify={notify}
          togglefunction={togglefunction}
          checklistId={checklistId}
          templateName={templateName}
        />
      )}
      {modalType === "fontcolors" && (
        <FontColorsModal notify={notify} togglefunction={togglefunction} />
      )}
      {/* {modalType === "forgot" && (
        <EditTask
          notifynew={notify}
          togglefunctionnew={togglefunction}
          style={{ inset: "50% auto auto 78%" }}
        />
      )} */}
    </ReactModal>
  );
};

export default AlertModal;
