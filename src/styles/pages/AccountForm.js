import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 465px) {
    max-width: 263px;
  }
`;
export const Heading = styled.h4`
  color: #1d2e88;
  font-weight: 700;
  font-size: 25px;
`;

export const ChecklistHeader = styled.div`
  font-size: 2.7vw;
  color: #1d2e88;
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
    width: 100%;
    max-width: 277px;
    margin: 0 auto;
    padding: 20px 0;
  }
`;

export const FormBody = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  margin-top: 3rem;
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
  width: 100%;
  a {
    color: #6f7172;
    font-family: "poppinsSemibold";
  }
  .RememberSection {
  }
`;
export const IconInputField = styled.div`
  margin-bottom: 35px;
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
      max-width: 184px;
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
  align-items: center;
  flex: 1 1 0%;
  position: relative;
`;

export const IconSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0rem 2rem;
  @media (max-width: 465px) {
    flex-direction: column;
    gap: 10px;
  }
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
  @media (max-width: 465px) {
    width: unset;
    max-width: unset;
    padding: 0;
  }
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
  @media (max-width: 465px) {
    width: unset;
    max-width: unset;
    padding: 0;
  }
`;

export const IconText = styled.div`
  width: 100%;
  align-items: center;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  @media (max-width: 465px) {
  }
`;
export const Error = styled.div`
  color: #d65e5e;
  padding: 5px 0px;
  font-size: 12px;
`;

export const UserHelper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Forgot = styled.div`
  cursor: pointer;
  font-size: 15px;
  color: #1d2e88;
  margin: 1rem;
`;
export const SignUp = styled.div`
  cursor: pointer;
  font-size: 15px;
  color: #1d2e88;
  margin: 1rem;
`;
export const ErrorWrapper = styled.div`
  margin-top: 0.3rem;
  color: ${(props) => (props.primary ? props.primary : "#3c763d")};
  background-color: ${(props) =>
    props.secondary ? props.secondary : "#dff0d8"};
  border-color: #d6e9c6;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-align: center;
`;
