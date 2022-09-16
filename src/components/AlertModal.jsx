import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

import Button from "components/Button";

import {
  Container,
  ModalContent,
  AlertButton,
  ModalTitle,
  Paragraph,
} from "styles/components/AlertModal";

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
      console.log("link=======");
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
        <ModalContent>
          <ModalBody>
            <div>
              <ModalTitle>{title}</ModalTitle>
            </div>

            <div className="ModalContentMsg">
              <Paragraph>{content}</Paragraph>
            </div>
          </ModalBody>
          {!hideButton && (
            <ModalFooter>
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
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default AlertModal;
