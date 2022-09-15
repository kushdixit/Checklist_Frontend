import styled from "styled-components";

export const BodyContainer = styled.div`
  padding-top: 29px;
  padding-bottom: 29px;
`;
export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;
export const Heading = styled.h4`
  color: #6f7172;
  font-size: 25px;
  padding-bottom: 30px;
  font-family: "poppinsBold"; ;
`;
export const ForgotEmailHeading = styled.span`
  color: #6f7172;
  font-size: 23px;
  font-family: "Poppinslight";
`;
export const ForgotEmailSection = styled.div`
  margin-top: 25px;
`;
export const BackLogo = styled.div`
  padding-bottom: 27px;
  margin: 0;
  img {
    cursor: pointer;
    position: absolute;
    top: 29%;
  }
  img:hover {
    opacity: 0.6;
  }
`;

export const FormBody = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;
export const RememberSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
  font-family: "poppinsRegular";
  justify-content: space-evenly;
  align-content: center;
  gap: 48px;
  label {
    color: #4f5270;
    font-size: 12px;
    font-family: "poppinsRegular";
    padding-left: 10px;
    padding-top: 0;
  }
  > div:nth-child(2) {
    color: #2b3ed4;
    font-size: 14px;
    letter-spacing: 0.23px;
  }
  a {
    letter-spacing: 0px;
    color: #6f7172;
  }
  .checkBox {
    margin-right: 6px;
  }
  .forgotPassword {
    cursor: pointer;
    font-size: 12px;
    font-family: "poppinsBold";
    color: #6f7172;
    margin-bottom: 0 !important;
  }
  .checkMark {
    top: -2px !important;
  }
`;
export const Footer = styled.div`
  margin-top: 30px;
  button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
  }
  button:hover {
    opacity: 0.4;
  }
`;
export const AccountContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
`;
export const RegistrationContainer = styled.div`
  display: flex;
  width: 100%;
  a {
    color: #6f7172;
    font-family: "poppinsSemibold";
  }
  .RememberSection {
  }
`;

export const IconInputField = styled.div`
  margin-bottom: 15px;
  position: relative;
  input {
    font-family: "poppinsRegular" !important;
    text-align: left;
    font-size: 14px !important;
    padding: 12px 41.5px;
    border-radius: 6px;
    border: none;
    ::placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
    }

    :-ms-input-placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
    }

    ::-ms-input-placeholder {
      font-family: "poppinsRegular" !important;
      font-size: 14px !important;
      color: #4f5270 !important;
    }
  }

  Button {
    background: #393939 !important;
  }
  .emailIcon {
    position: absolute;
    top: 18px;
    left: 12px;
    width: 15px;
    height: 15px;
  }
  .startIcon {
    position: absolute;
    top: 15px;
    left: 13px;
    width: 15px;
    height: 15px;
  }
  .passwordIcon {
    position: absolute;
    top: 17px;
    right: 13px;
    cursor: pointer;
  }
`;
