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
    color: #1d2e8b;
    border: unset;
    font-size: 22px;
    font-weight: 700;
  }
  button:hover {
    opacity: 0.4;
  }
`;
