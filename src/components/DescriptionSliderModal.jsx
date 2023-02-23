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
          padding: "60px",
          width: "50%",
          height: modalType === "description" ? "100%" : "auto",
          overflow: "hidden",
        },
      }}
      contentLabel="Example Modal"
    >
      <ButtonWrapper>
        <button className="button" onClick={() => togglefunction(false)}>
          x
        </button>
      </ButtonWrapper>

      {modalType === "description" && (
        <DescriptionModal notify={notify} togglefunction={togglefunction} />
      )}
    </ReactModal>
  );
};

export default DescriptionSliderModal;
