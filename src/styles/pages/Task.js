import styled from "styled-components";

export const BodyWrapper = styled.div`
  padding: 30px 0;
  background: #fff;
`;
export const TitleFormSection = styled.div`
  background: #fff;
  form {
    padding: 0rem 2rem 0rem 1.6rem;
    width: auto !important;
    flex: 1;
  }
`;

export const Title = styled.div`
  background: #fff;
  margin: 0 auto;
  width: 100%;
  max-width: 1778px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 45px;
  color: #000;
  input {
    border-bottom: hidden;
    font-weight: 600;
    font-size: 36px !important;
    color: #000;
  }
`;

export const Section = styled.div`
  background: #f5f5f5;
`;

export const TitleSection = styled.div`
  color: #1d2e88;

  padding: 18px 0;
  h3 {
    font-size: 24px;
    font-weight: 600;
  }
  h4 {
    padding: 0 0;
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
`;
export const TaskSection = styled.div`
  background: #fff;
`;

export const TaskCreationSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1735px;
  padding: 10px 0;
  display: flex;
  svg {
    cursor: pointer;
    padding-right: 10px;
  }
  img {
    width: 27px;
    padding: 17px 18px 17px 0;
  }
  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }
  form {
    padding: 1rem 5rem 0rem 3rem;
    width: auto;
  }
`;

export const MainTaskSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1735px;
  padding: 10px 0;
  display: flex;
  svg {
    cursor: pointer;
    padding-right: 10px;
  }
  img {
    width: 27px;
    padding: 17px 18px 17px 0;
  }
  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }

  @media (max-width: 1722px) {
    form {
      padding: 0 30px !important;
    }
  }
`;

export const TaskIconImage = styled.div`
  width: 30px;
`;
export const IconInputField = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 24px;

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: ${(props) => props.color};
    width: 100%;

    background: unset;
  }
  input:focus-visible {
    outline: unset;
  }
`;

export const IconInputFieldNew = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 24px;

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: ${(props) => props.color};
    width: 100%;
    max-width: 1500px;
    background: unset;
  }
  input:focus-visible {
    outline: unset;
  }
  @media (max-width: 1722px) {
    input {
      width: 100%;
      max-width: 1000px;
      background: unset;
    }
  }
  @media (max-width: 1102px) {
    input {
      width: 100%;
      max-width: 400px;
      background: unset;
    }
  }
`;
export const DescriptionIconInputField = styled.div`
  width: 100%;
  input {
    text-align: left;
    font-size: 24px;

    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-color: ${(props) => props.color};
    width: 100%;

    background: unset;
  }
  input:focus-visible {
    outline: unset;
  }
  @media (max-width: 1722px) {
    padding-left: 1.7rem;
  }
`;
export const SubTaskSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1644px;

  .div {
    margin: 0 auto;
    width: 100%;
    max-width: 1644px;
  }
`;

export const AddSubTask = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1644px;

  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }
`;
export const ShortContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80px;
  /* background: #ffffff; */
  /* border: 1px solid #e9e9e9; */
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  /* dont apply padding here */
`;
export const ShortBy = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const Complete = styled.div`
  width: 50px;
  height: 50px;
`;
export const SortWrapper = styled.div`
  z-index: 1;
  position: absolute;
  background: #fff;
  box-shadow: 0px 7px 32px 11px rgb(207 207 207/ 50%);
  border-radius: 10px;

  width: 235px;
  text-align: left;
  right: 10px;
  top: 40px;
  padding: 20px 26px 10px 26px;
`;
export const SortText = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.09);
`;
export const SortTextDiv = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  color: #000;
  gap: 10px;
`;

export const ButtonSection = styled.div`
  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }
`;
export const ChecklistWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1735px;
  margin: 8px auto;
`;
export const EditChecklistButtonWrapper = styled.div`
  display: flex;
  margin: 0.5rem;
  .button {
    font-size: 1rem;
    padding: 9px 20px;
  }
`;

export const DescriptionContainer = styled.div`
  margin: 0rem auto;
  background: #fff;
  width: 100%;
  max-width: 1720px;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #000;
  padding: 0.5rem 0rem;
  input {
    border-bottom: hidden;
    font-weight: 600;
    font-size: 24px !important;
    color: #000;
  }
`;
export const DescriptionWrapper = styled.div`
  width: 100%;
  background: #fff;

  margin: 0 auto;
`;
