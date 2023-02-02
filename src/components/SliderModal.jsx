import React from "react";

import FontColorsModal from "./FontColorsModal";
import ReactModal from "react-modal";
import { ButtonWrapper } from "styles/components/SliderModal";


const customStyles = {
  content: {
    // top: "17%",
    // left: "74%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // borderRadius: "19px 11px 9px 19px;",
    // transform: "translate(-50%, -50%)",
    // padding: "15px 35px",
    // width: "100%",
    // maxWidth: "934px",
    // height: "auto",
    // overflowY: "hidden",
    display: "block",
    position: "fixed",
    top: "0px",
    right:"0px",
 left: "auto",
 bottom: "auto",
    border: "1px solid rgb(204, 204, 204)",
    background:"rgb(255, 255, 255)",
    //  overflow: "auto hidden", 
    /* outline: none; */
    padding: "15px 35px 89px 35px",
    /* margin-right: -50%; */
    /* transform: translate(-53%, -50%); */
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
  checklistId,
  templateName,
}) => {
  console.log('here');
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
