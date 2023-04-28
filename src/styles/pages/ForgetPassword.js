import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const DataWrapper = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  align-items: center;
`;
export const Heading = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #1d2e8b;
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0px 0px 10px;
`;
export const DataInput = styled.div`
  input {
    max-width: 360px;
    padding: 12px 19px;
    border-radius: 5px;
    border: 1px solid #c9c9c9;
    ::placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
      padding-left: 10px;
    }
    @media (max-width: 873px) {
      width: unset !important;
    }
  }
`;

export const ResetWrapper = styled.button`
  border: 1px solid #008cba;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #1d2e88;
  color: #fff;
  padding: 10px 0px;
`;
export const ResetText = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const ModalButton = styled.div`
  border: 1px solid transparent;
  background: #1d2e88;
  border-radius: 8px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 16vw;
  margin: 10px 0px;

  @media (max-width: 1378px) {
    width: 20vw;
  }
  @media (max-width: 862px) {
    width: 20vw;
  }
  @media (max-width: 320px) {
    width: 20vw;
  }
`;
