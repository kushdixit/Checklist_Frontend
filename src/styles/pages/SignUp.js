import styled from "styled-components";

export const BodyContainer = styled.div``;
export const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;
export const Heading = styled.h4`
  color: #1d2e88;
  font-weight: 700;
  font-size: 25px;
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
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 465px) {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }
`;
export const RememberSection = styled.div`
  display: flex;
  position: relative;
  bottom: 40px;

  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  label {
    display: flex;
    color: #1d2e88;
    font-size: 12px;
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

    color: #1d2e88;
  }
`;
export const ButtonWrapper = styled.div`
  display: block;
  margin-top: 2rem;
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
export const UserLogoWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 8px;
`;
export const IconInputField = styled.div`
  margin-bottom: 1rem;
  position: relative;
  input {
    text-align: left;
    font-size: 14px;
    padding: 14px 41.5px;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: 1px solid #c9c9c9;
    width: 100%;
    max-width: 370px;
    background: unset;
    ::placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }

    :-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }

    ::-ms-input-placeholder {
      font-size: 16px;
      color: #9d9d9d;
    }
    :focus-visible {
      outline: unset;
    }
    @media (max-width: 465px) {
      max-width: 210px;
      width: 100%;
    }
  }

  Button {
    background: #9d9d9d;
  }
  .emailIcon {
    position: absolute;
    top: 14px;
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
    top: 13px;
    right: 13px;
    cursor: pointer;
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;
export const LeftContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  background: #1d2e88;
  text-align: center;
  align-items: center;
  > img {
    height: auto;
    margin: 0 auto;
    width: auto;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex: 1 1 0%;
  position: relative;
`;

export const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0rem 1rem;
`;
export const LeftIconSection = styled.div`
  border: 1px solid #c9c9c9;
  display: flex;
  color: #606060;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  max-width: 188px;
  border-radius: 8px;
  padding: 11px 12px;
  cursor: pointer;
`;
export const RightIconSection = styled.div`
  border: 1px solid #c9c9c9;
  display: flex;
  color: #606060;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  max-width: 188px;
  border-radius: 8px;
  padding: 11px 12px;
  cursor: pointer;
`;

export const IconText = styled.div`
  width: 100%;
  align-items: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
`;
export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  background: #1d2e88;
  border-radius: 8px;
  box-shadow: 0 3px 6px #00000029;
`;
export const Error = styled.div`
  color: #e45829;
  padding: 5px 0px;
  font-size: 12px;
`;
export const SignIn = styled.div`
  cursor: pointer;
  font-size: 17px;
  color: #1d2e88;
  text-align: center;
  padding: 10px;
  font-weight: 400;
`;

export const ChecklistHeader = styled.div`
  font-size: 2.7vw;
  color: #1d2e88;
  font-weight: 700;
  display: flex;
  width: 100%;
  max-width: 747px;
  margin: 4rem 0 0rem;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 465px) {
    margin: 2rem 0 0rem;
  }
`;
