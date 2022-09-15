import styled from "styled-components";

export const Container = styled.div`
  > Modal {
    > div {
      padding: 10px !important;
      button {
        background: transparent;
        margin-left: auto;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    Modal {
      margin: auto;
    }
  }
`;
export const ModalContent = styled.div`
  max-height: calc(80vh - 152px);
  overflow: auto;
  color: $primary-text;
  font-size: 1.125rem;
  text-align: center;
  border: none !important;
`;
export const AlertButton = styled.div`
  width: 115px;
  height: 37px;
`;
export const ModalTitile = styled.h3`
  padding: 24px 24px 0 24px;
  margin: 0;
  color: #0a223a;
  font-weight: bold;
  text-align: center;
  font-size: 28px;
`;
export const Paragraph = styled.p`
  text-align: center !important;
  margin: 0px !important;
`;
