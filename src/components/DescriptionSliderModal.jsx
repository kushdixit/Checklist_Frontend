import React from "react";

import DescriptionModal from "./DescriptionModal";
import ReactModal from "react-modal";
import { ButtonWrapper } from "styles/components/SliderModal";

const DescriptionSliderModal = ({
  isOpen,
  togglefunction,
  hideButton,
  notify,
  modalType,
  checklistId,
  templateName,
  checklistDiscriptionId,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={hideButton}
      style={{
        content: {
          display: "block",
          position: "fixed",
          top: "0px",
          right: "0px",
          left: "auto",
          bottom: "auto",
          border: "1px solid rgb(204, 204, 204)",
          background: "rgb(255, 255, 255)",
          padding: "0px 20px",
          width: "46.5%",
          height: modalType === "description" ? "100%" : "auto",
          overflow: "hidden",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        },
      }}
      contentLabel="Example Modal"
    >
      <ButtonWrapper>
        <button onClick={() => togglefunction(false)}>x</button>
      </ButtonWrapper>

      {modalType === "description" && (
        <DescriptionModal
          notify={notify}
          togglefunction={togglefunction}
          checklistDiscriptionId={checklistDiscriptionId}
        />
      )}
    </ReactModal>
  );
};

export default DescriptionSliderModal;
