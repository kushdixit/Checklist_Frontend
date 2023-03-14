import styled from "styled-components";

export const LandingContainer = styled.div`
  width: ${({ width }) => (width ? "100%" : "60px")};
  max-width: 249px;
  border-right: 1px solid #eee;
  background: #fff;
`;
export const LeftContainer = styled.div`
  width: 100%;
  max-width: 249px;
  background-color: #fff;
  border-right: 1px solid #eee;
  height: 100vh;
`;
export const First = styled.div`
  display: flex;
  justify-content: ${({ position }) => (!position ? "center" : "end")};
  padding: 20px 0 50px 0;
  width: 100%;
  max-width: 233px;
  img {
    width: 15px;
    height: 15px;
  }
  .button {
    background: #f1f3f5;
    padding: 17px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
    justify-content: center;
    border: none;
  }
`;
export const Second = styled.div`
  border-radius: 64px;
  display: flex;
  padding: ${({ padding }) => (padding ? "8px 20px" : "8px 0 8px 7px")};
`;
export const DisabledText = styled.div`
  display: flex;
  color: #000;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  padding: 8px 0 8px 17px;
  font-size: 15px;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
  h2 {
    display: block;
    font-size: 15px;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
`;

export const Sixth = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  h2 {
    display: block;
    font-size: 15px;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }
`;
export const Seventh = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  padding: ${({ padding }) => padding || "11px 0 11px 17px;"};
  font-size: 0;
  gap: 13px;
  h2 {
    display: block;
    font-size: 15px;
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

export const ArrowImage = styled.img``;
