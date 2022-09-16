import React from "react";
import Button from "components/Button";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Container } from "styles/components/AlertModal";
import styled from "styled-components";

const AlertModal = ({
  isOpen,
  toggle,
  title,
  content,
  link,
  close,
  hideButton,
  handleClick,
}) => {
  const redirectLink = (link) => {
    if (link) {
    }
    toggle(!isOpen);
  };
  return (
    <Container>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        backdrop={"static"}
        centered={true}
        className="alertModal"
      >
        <div className="modal-content">
          <ModalBody>
            <div>
              <h3 className="modal-title">{title}</h3>
            </div>

            <div className="ModalContentMsg">
              <p>{content}</p>
            </div>
          </ModalBody>
          {!hideButton && (
            <ModalFooter className="Modal-Content-Footer">
              <AlertButton>
                <Button
                  type="app-green-button submitBtn AlertBtn"
                  handleClick={() => {
                    redirectLink(link);
                    close && close();
                    handleClick && handleClick();
                  }}
                >
                  OK
                </Button>
              </AlertButton>
            </ModalFooter>
          )}
        </div>
      </Modal>
    </Container>
  );
};

export default AlertModal;

export const Testing = styled.div`
  text-align: right;
  padding: 10px;
`;

export const AlertButton = styled.div`
  .AlertBtn {
    width: 115px;
    height: 37px;
  }
`;
