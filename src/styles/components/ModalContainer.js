import styled from "styled-components";

export const ShortBy = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  img {
    width: 15px;
  }
`;
export const SortWrapper = styled.div`
  z-index: 1;
  position: absolute;
  background: #fff;
  box-shadow: 0px 7px 32px 11px rgb(207 207 207/ 50%);
  border-radius: 4px;

  width: 237px;
  text-align: left;
  left: -35px;
  top: 40px;
  border: 1px solid #484848;
  @media (max-width: 372px) {
    right: 0;
    width: 195px;
  }
`;
export const ModalContainer = styled.div`
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  align-items: center;
  visibility: ${({ visibility }) => (visibility ? "inherit" : "hidden")};
`;
export const SortTextDiv = styled.div`
  font-weight: 400;
  font-size: 17px;
  display: flex;
  color: #000;
  gap: 10px;
  min-height: 50px;
  align-items: center;
  padding: 0px 35px 0px 20px;
  border-top: 1px solid #e0e0e0;
  :hover {
    background-color: #f8f8f8;
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;
