import React from "react";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PublicprivateChecklist } from "redux/actions/checklist";
import { getAllTemplateByEmail } from "redux/actions/template";
import {
  DataWrapper,
  Heading,
  ButtonWrapper,
  ModalButton,
} from "styles/pages/ForgetPassword";

ReactModal.setAppElement("#root");

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
    width: "300px", // Add a width to control the modal's width
    height: "auto",
    overflowY: "auto", // Enable vertical scrolling if content overflows
  },
};

const modalTitleStyle = {
  fontSize: "1.5rem",
};

const ShareModal = ({
  isOpen,
  togglefunction,
  hideButton,
  linkto,
  userDataId,
  isPrivate,
  openNotification,
  userEmail,
}) => {
  const dispatch = useDispatch();
  const MoveChecklistData = async () => {
    try {
      const res = await dispatch(
        PublicprivateChecklist(userDataId, !isPrivate)
      );

      if (!res.error) {
        togglefunction(false);
        dispatch(getAllTemplateByEmail(userEmail));
        openNotification("moved successfully");
      } else {
        console.error(res?.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={hideButton}
      style={customStyles}
      contentLabel="modal"
    >
      <button
        className="button"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          togglefunction(false);
        }}
      >
        x
      </button>
      <DataWrapper>
        <Heading style={modalTitleStyle}>Privacy Transition</Heading>
        <ButtonWrapper style={{ cursor: "pointer" }}>
          <ModalButton onClick={MoveChecklistData}>Move</ModalButton>
          <Link
            to={`/guest/${linkto}`}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <ModalButton>Link</ModalButton>
          </Link>
        </ButtonWrapper>
      </DataWrapper>
    </ReactModal>
  );
};

export default ShareModal;
