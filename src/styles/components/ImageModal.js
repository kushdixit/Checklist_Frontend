import styled from "styled-components";

export const Container = styled.div`
  > Modal {
    > div {
      max-height: calc(80vh - 152px);
      overflow: auto;
      color: $primary-text;
      font-size: 1.125rem;
      text-align: center;
      border: none !important;

      > div {
        padding: 10px !important;
        h3 {
          padding: 24px 24px 0 24px;
          margin: 0;
          color: #0a223a;
          font-weight: bold;
          text-align: center;
          font-size: 28px;
        }
        button {
          background: transparent;
          margin-left: auto;
        }
      }
      p {
        text-align: center !important;
        margin: 0px !important;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    Modal {
      margin: auto;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  button {
    width: 100%;
    cursor: pointer;
    justify-content: right;
    display: flex;
    border-radius: 10px;
    box-shadow: unset;
    background: unset;
    color: #000;
    border: unset;
    font-size: 36px;
    font-weight: 500;
    padding-right: 25px;
  }
  button:hover {
    opacity: 0.4;
  }
`;
