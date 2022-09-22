import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  gap: 30px;
`;
export const Heading = styled.div`
  font-size: 40px;
  font-weight: 500;
`;
export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DataInput = styled.div`
  input {
    padding: 12px 0px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #fff;
    ::placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
      padding-left: 10px;
    }
  }
`;
export const ResetWrapper = styled.button`
  border: 1px solid #008cba;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #008cba;
  color: #fff;
  padding: 10px 0px;
`;
export const ResetText = styled.div`
  font-size: 15px;
  font-weight: 700;
`;
export const ErrorMessage = styled.div`
  color: red;
`;
