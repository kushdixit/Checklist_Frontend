import styled from "styled-components";

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
