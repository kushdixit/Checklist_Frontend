import styled from "styled-components";
import { colors } from "constants/color";

export const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;
export const Heading = styled.h4`
  color: ${colors.primaryColor};
  font-weight: 700;
  font-size: 25px;
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
  background: ${colors.backgroundColor};
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

export const Error = styled.div`
  color: #e45829;
  padding: 5px 0px;
  font-size: 12px;
`;
export const SignIn = styled.div`
  cursor: pointer;
  font-size: 17px;
  color: ${colors.primaryColor};
  text-align: center;
  padding: 10px;
  font-weight: 400;
`;

export const ChecklistHeader = styled.div`
  font-size: 2.7vw;
  color: ${colors.primaryColor};
  font-weight: 700;
  display: flex;
  width: 100%;
  max-width: 747px;
  margin: 4rem 0 0rem;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 465px) {
    margin: 2rem 0 0rem;
  }
`;
