import React from "react";
import ForgotPassword from "./forgetPassword";
import EditTask from "./editTask";
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
    width: "25vw",
    height: "65vh",
    overflowY: "hidden",
  },
};

// const taskStyles={
//   content:{
//     position: absolute;
//     inset: 32% 50% auto auto;
//     border: 1px
// px
//  solid rgb(204, 204, 204);
//     background: rgb(255, 255, 255);
//     overflow: auto hidden;
//     border-radius: 4px;
//     outline: none;
//     padding: 15px 20px;
//     margin-right: -50%;
//     /* transform: translate(-50%, -50%); */
//     width: 12vw;
//     height: 27vh;
//   }
// }

const AlertModal = ({
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
      {modalType == "forgot" ? (
        <ForgotPassword notify={notify} togglefunction={togglefunction} />
      ) : (
        <EditTask notifynew={notify} togglefunctionnew={togglefunction} />
      )}
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
    font-size: 22px;
    font-weight: 700;
  }
  button:hover {
    opacity: 0.4;
  }
`;
