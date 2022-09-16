import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  > img {
    width: 80px;
    z-index: "99999";
  }
`;
