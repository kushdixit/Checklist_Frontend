import styled from "styled-components";

export const ShortBy = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;
export const SortWrapper = styled.div`
  z-index: 1;
  position: absolute;
  background: #fff;
  box-shadow: 0px 7px 32px 11px rgb(207 207 207/ 50%);
  border-radius: 10px;

  width: 224px;
  text-align: left;
  left: -35px;
  top: 40px;
  padding: 15px 26px 15px 26px;
  @media (max-width: 372px) {
    right: 0;
    width: 195px;
  }
`;
export const ModalContainer = styled.div`
  /* position: absolute; */
  /* left: -31px; */
  /* left:0px */
  justify-content: center;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  margin-left: 5px;
  align-items: center;
`;
export const SortTextDiv = styled.div`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  color: #000;
  padding: 8px 0;
  gap: 10px;
`;
