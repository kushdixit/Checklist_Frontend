import React from "react";
import EditImageModal from "components/EditImageModal";
import ProcessModal from "components/ProcessModal";
import ReactModal from "react-modal";
import { ButtonWrapper } from "styles/components/ImageModal";

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
    padding: "15px 0 24px 0",
    width: "100%",
    height: "100%",
  },
};

const ImageModal = ({
  isOpen,
  togglefunction,
  hideButton,
  notify,
  modalType,
  cards,
  pathId,
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
      {modalType === "editimage" && (
        <EditImageModal notify={notify} togglefunction={togglefunction} />
      )}
      {modalType === "processmodal" && (
        <ProcessModal
          notify={notify}
          togglefunction={togglefunction}
          cards={cards}
          pathId={pathId}
        />
      )}
    </ReactModal>
  );
};

export default ImageModal;