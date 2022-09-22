import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ResetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PasswordInput = styled.div`
  input {
    border: 1px solid #fff;
    padding: 10px 0px;
    border-radius: 5px;
    width: 100%;
    ::placeholder {
      padding-left: 10px;
    }
  }
  .error-message {
    color: red;
  }
`;
export const ConfirmWrapper = styled.input`
  padding: 10px 0px;
  border-radius: 5px;
  border: 1px solid #fff;
  ::placeholder {
    padding-left: 10px;
  }
`;
export const ResetButton = styled.button`
  background-color: #008cba;
  padding: 13px 0px;
  border-radius: 5px;
  border: 1px solid #008cba;
  color: #fff;
`;
export const ResetText = styled.div`
  font-size: 14px;
  font-weight: 800;
`;
export const ResetHeading = styled.div`
  font-size: 35px;
  font-weight: 700;
`;
