import React from "react";
import FontColorsModal from "./FontColorsModal";
import ReactModal from "react-modal";
import { ButtonWrapper } from "styles/components/SliderModal";

const customStyles = {
  content: {
    display: "block",
    position: "fixed",
    top: "0px",
    right: "0px",
    left: "auto",
    bottom: "auto",
    border: "1px solid rgb(204, 204, 204)",
    background: "rgb(255, 255, 255)",
    padding: "15px 35px 24px 35px",
    width: "50%",
    height: "auto",
  },
};

const SliderModal = ({
  isOpen,
  togglefunction,
  hideButton,
  notify,
  modalType,
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

      {modalType === "fontcolors" && (
        <FontColorsModal notify={notify} togglefunction={togglefunction} />
      )}
    </ReactModal>
  );
};

export default SliderModal;
