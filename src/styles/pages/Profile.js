import styled from "styled-components";
import Button from "components/Button";

export const ProfileWrapper = styled.div`
  width: 100%;
  min-width: 600px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;
export const Container = styled.form`
  width: 100%;
  max-width: 400px;
  min-height: 400px;
`;
export const TextHeading = styled.h1`
  text-align: left;
  color: #3b5998;
  font-weight: 800;
  font-size: 20px;
`;

export const DataWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const ConditionWrapper = styled.div``
export const RembemberSection = styled.div``
export const TermsWrapper = styled.div``
export const SubmitButton = styled(Button)`
  .button {
    background: none;
    color: red;
  }
`;
