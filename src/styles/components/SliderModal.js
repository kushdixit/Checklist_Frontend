import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 6;
  padding-right: 30px;
  button {
    cursor: pointer;
    justify-content: right;
    display: flex;
    border-radius: 10px;
    box-shadow: unset;
    background: unset;
    color: #000;
    border: unset;
    font-size: 40px;
    font-weight: 200;
  }
  button:hover {
    opacity: 0.4;
  }
`;
